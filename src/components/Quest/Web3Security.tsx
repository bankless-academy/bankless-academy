import React, { useState } from 'react'
import { Box, Image } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { useSmallScreen } from 'hooks/index'

const StyledDiv = styled(Box)`
  img {
    display: flex;
    border-radius: 5px;
    width: 420px;
    max-width: 100%;
    cursor: pointer;
    margin-bottom: 8px;
  }
  h2 {
    text-align: center;
  }
`

const CORRECT_ANSWERS = [true, true, false, true]

const Web3Security = (): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const [isSmallScreen] = useSmallScreen()

  const [selected, setSelected] = useState(
    localStorage.getItem('quest-web3-security-101') !== null
      ? JSON.parse(localStorage.getItem('quest-web3-security-101'))
      : [false, false, false, false]
  )

  const areAnswersCorrect =
    JSON.stringify(selected) === JSON.stringify(CORRECT_ANSWERS)
  localStorage.setItem('quest-web3-security-101', JSON.stringify(selected))

  return {
    isQuestCompleted: areAnswersCorrect,
    questComponent: (
      <StyledDiv>
        <>
          <Box display={isSmallScreen ? 'block' : 'flex'}>
            <Image
              border={selected[0] ? '3px solid rgb(145, 106, 184)' : ''}
              mr="2"
              onClick={() =>
                setSelected(selected.map((v, i) => (i === 0 ? !v : v)))
              }
              src="/lesson/web3-security/elon-musk-scam.jpg"
            />
            <Image
              border={selected[1] ? '3px solid rgb(145, 106, 184)' : ''}
              onClick={() =>
                setSelected(selected.map((v, i) => (i === 1 ? !v : v)))
              }
              src="/lesson/web3-security/nitro-discord-scam.png"
            />
          </Box>
          <Box display={isSmallScreen ? 'block' : 'flex'} mt="0 !important">
            <Image
              border={selected[2] ? '3px solid rgb(145, 106, 184)' : ''}
              mr="2"
              onClick={() =>
                setSelected(selected.map((v, i) => (i === 2 ? !v : v)))
              }
              src="/lesson/web3-security/collabland-join.jpg"
            />
            <Image
              border={selected[3] ? '3px solid rgb(145, 106, 184)' : ''}
              onClick={() =>
                setSelected(selected.map((v, i) => (i === 3 ? !v : v)))
              }
              src="/lesson/web3-security/metamask-wallets-scam.jpg"
            />
          </Box>
          <h2>Select all screenshots containing scams 👆</h2>
        </>
      </StyledDiv>
    ),
  }
}

export default Web3Security
