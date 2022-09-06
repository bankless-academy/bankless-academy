/* eslint-disable no-console */
import React from 'react'
import { GetServerSideProps } from 'next'
// TODO: replace with https://github.com/NotionX/react-notion-x
import { NotionRenderer, BlockMapType } from 'react-notion'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'node-fetch'

const ALLOWED_IDS = [
  // whitelabel
  '8198f1db3f1c490cb2aedf361fc3e416',
  // Content Creation Process
  '2504d274430b4b4aa28d6171c9b06335',
  // documentation
  '73cae3c0d9124d38babe1f1f9ec5c65f',
  'ea6c9d2b537b46d2aa57b7d4df3d93ca',
  // sponsors
  '208c77594ddc47ef9ea628c029d29ab0',
  // jobs/talent
  '56d3b0a011fe443aa2a9682f0ca443bb',
  '65dfe884acb749ef90dd5250f585314d',
  'fa0aa8ba0a034c4cbcc7407b650207e1',
  'e6ffab31d7604580b0879ad296bfe6fc',
  '9738fb45eed245cab1f134481afc36fd',
  'f6c390f5b0754c85acec7b9bcafa00cb',
]

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageId =
    typeof context.params?.pageId === 'string'
      ? context.params?.pageId.replace(/-/g, '')
      : null
  console.log('pageId', pageId)

  if (!pageId || !ALLOWED_IDS.includes(pageId)) {
    return {
      props: {
        blockMap: false,
        isNotion: true,
      },
    }
  }

  try {
    const data: BlockMapType = await fetch(
      `https://notion-api.splitbee.io/v1/page/${pageId}`
    ).then((res) => res.json())
    return {
      props: {
        blockMap: data,
        isNotion: true,
      },
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        blockMap: false,
        isNotion: true,
      },
    }
  }
}

const NotionPage = ({ blockMap }): JSX.Element => {
  if (!blockMap || Object.keys(blockMap).length === 0) {
    return (
      <div>
        <h3>No data found.</h3>
        <div> Make sure the pageId is valid.</div>
        <div>Only public pages are supported in this example.</div>
      </div>
    )
  }

  const title = blockMap[Object.keys(blockMap)[0]]?.value.properties.title[0][0]

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NotionRenderer
        blockMap={blockMap}
        fullPage
        customBlockComponents={{
          page: ({ blockValue, renderComponent }) => (
            <Link href={`/${blockValue.id}`}>{renderComponent()}</Link>
          ),
        }}
      />
      <style jsx global>{`
        div :global(.notion-code) {
          box-sizing: border-box;
        }
        body {
          padding: 0;
          margin: 0;
        }
      `}</style>
    </>
  )
}

export default NotionPage
