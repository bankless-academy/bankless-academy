import React, { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { NotionRenderer } from 'react-notion-x'
import { NotionAPI } from 'notion-client'
import { ExtendedRecordMap } from 'notion-types'
import { getPageTitle } from 'notion-utils'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { NOTION_PAGES } from 'constants/index'

const notion = new NotionAPI()

export const ALLOWED_SLUGS = Object.keys(NOTION_PAGES)

export const ALLOWED_IDS = Object.values(NOTION_PAGES)

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug =
    typeof context.params?.slug === 'string' ? context.params?.slug : null

  if (
    !slug ||
    (slug.length !== 32 && !ALLOWED_SLUGS.includes(slug)) ||
    (slug.length === 32 && !ALLOWED_IDS.includes(slug))
  ) {
    return {
      props: {
        recordMap: false,
        isNotion: true,
      },
    }
  }

  try {
    const data: ExtendedRecordMap = await notion.getPage(
      slug.length === 32 ? slug : NOTION_PAGES[slug]
    )
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
      document.getElementById(elementID)?.scrollIntoView()
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
