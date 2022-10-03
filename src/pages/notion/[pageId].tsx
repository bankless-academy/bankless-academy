/* eslint-disable no-console */
import React, { useEffect } from 'react'
import { GetServerSideProps } from 'next'
// TODO: replace with https://github.com/NotionX/react-notion-x
import { NotionRenderer } from 'react-notion-x'
import { NotionAPI } from 'notion-client'
import { ExtendedRecordMap } from 'notion-types'
import { getPageTitle } from 'notion-utils'
import { useRouter } from 'next/router'
import Head from 'next/head'

const notion = new NotionAPI()

export const PAGE_IDS = {
  '/faq': '97b88d72335a41a1911c12d4e2f99db6',
}

export const ALLOWED_PAGES = Object.keys(PAGE_IDS)

export const ALLOWED_IDS = Object.values(PAGE_IDS)

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageId =
    typeof context.params?.pageId === 'string'
      ? context.params?.pageId.replace(/-/g, '')
      : null
  console.log('pageId', pageId)

  if (!pageId || !ALLOWED_IDS.includes(pageId)) {
    return {
      props: {
        recordMap: false,
        isNotion: true,
      },
    }
  }

  try {
    const data: ExtendedRecordMap = await notion.getPage(pageId)
    return {
      props: {
        recordMap: data,
        isNotion: true,
      },
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        recordMap: false,
        isNotion: true,
      },
    }
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const NotionPage = ({
  recordMap,
}: {
  recordMap: ExtendedRecordMap
}): JSX.Element => {
  if (!recordMap || Object.keys(recordMap).length === 0) {
    return (
      <div>
        <h3>No data found.</h3>
        <div> Make sure the pageId is valid.</div>
        <div>Only public pages are supported in this example.</div>
      </div>
    )
  }
  const { asPath } = useRouter()

  const [, elementID] = asPath.split('#')

  useEffect(() => {
    if (elementID && typeof window !== 'undefined') {
      document.getElementById(elementID).scrollIntoView()
    }
  }, [elementID])

  const title = getPageTitle(recordMap)

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={true} />
      <style>{`
        div :global(.notion-code) {
          box-sizing: border-box;
        }
        body {
          padding: 0;
          margin: 0;
        }
        .notion-header {
          display: none;
        }
        .notion-frame {
          padding: 0;
        }
      `}</style>
    </>
  )
}

export default NotionPage
