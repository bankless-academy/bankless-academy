import React from 'react'
import { Image } from '@chakra-ui/react'
import styled from '@emotion/styled'

interface EthereumShowcaseItem {
  name: string
  url: string
  iconUrl: string
}

interface EthereumShowcaseListProps {
  onSelectItem: (item: EthereumShowcaseItem) => void
}

const ethereumShowcaseItems: EthereumShowcaseItem[] = [
  {
    name: 'Collect memories',
    url: 'https://poap.gallery/drops/178416',
    iconUrl: '/images/mini-apps/icon_1.png',
  },
  {
    name: 'Pay w/ stablecoins',
    url: 'https://shop.slice.so/store/2305',
    iconUrl: '/images/mini-apps/icon_2.png',
  },
  {
    name: 'DeFi',
    url: 'https://app.uniswap.org/swap?inputCurrency=0x833589fcd6edb6e08f4c7c32d4f71b54bda02913&outputCurrency=ETH&chain=base',
    iconUrl: '/images/mini-apps/icon_3.png',
  },
  {
    name: 'Make predictions',
    url: 'https://www.weponder.io/',
    iconUrl: '/images/mini-apps/icon_4.png',
  },
  {
    name: 'Create an ENS',
    url: 'https://basename-mini.vercel.app/',
    iconUrl: '/images/mini-apps/icon_5.png',
  },
  {
    name: 'Attest w/ EAS',
    url: 'https://base.easscan.org/attestation/attestWithSchema/0xf58b8b212ef75ee8cd7e8d803c37c03e0519890502d5e99ee2412aae1456cafe',
    iconUrl: '/images/mini-apps/icon_6.png',
  },
  {
    name: 'Support public goods',
    url: 'https://explorer.gitcoin.co/#/round/42161/867/59',
    iconUrl: '/images/mini-apps/icon_7.png',
  },
  {
    name: 'Vote onchain',
    url: 'https://jokerace.io/',
    iconUrl: '/images/mini-apps/icon_8.png',
  },
  {
    name: 'Prove privately via ZK tech',
    url: 'https://playground.self.xyz/',
    iconUrl: '/images/mini-apps/icon_9.png',
  },
]

const EthereumShowcaseList: React.FC<EthereumShowcaseListProps> = ({
  onSelectItem,
}) => {
  return (
    <ShowcaseGrid>
      {ethereumShowcaseItems.map((item, index) => (
        <ShowcaseCard
          key={`${item.name}-${index}`}
          onClick={() => onSelectItem(item)}
        >
          <ShowcaseIcon>
            {item.iconUrl && (
              <Image
                src={item.iconUrl}
                alt={item.name}
                width="48px"
                height="48px"
                style={{ borderRadius: '8px', objectFit: 'cover' }}
              />
            )}
          </ShowcaseIcon>
          <ShowcaseInfo>
            <ShowcaseName>{item.name}</ShowcaseName>
          </ShowcaseInfo>
        </ShowcaseCard>
      ))}
    </ShowcaseGrid>
  )
}

const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  background-color: #1a202c;
  border-radius: 12px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const ShowcaseCard = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr auto;
  align-items: center;
  padding: 16px;
  border-radius: 12px;
  background-color: #2d3748;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`

const ShowcaseIcon = styled.div`
  width: 48px;
  height: 48px;
  /* overflow: hidden; */
  border-radius: 8px;
  /* background-color: #1a202c; */
`

const ShowcaseInfo = styled.div`
  margin-left: 16px;
  flex: 1;
`

const ShowcaseName = styled.div`
  font-weight: 700;
  margin-bottom: 4px;
  color: #e2e8f0;
`

export default EthereumShowcaseList
