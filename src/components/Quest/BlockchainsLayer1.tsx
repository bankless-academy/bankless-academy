import React, { useState } from 'react'
import { Box, Image, useMediaQuery } from '@chakra-ui/react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import { theme } from 'theme/index'

const ITEMS = ['Bitcoin', 'Ethereum', 'Solana', 'Binance Smart Chain']
const ICONS = [
  '/images/btc.svg',
  '/images/eth.svg',
  '/images/sol.svg',
  '/images/bnb.svg',
]

const CORRECT_ANSWERS = [1, 1, 2, 2]

const isQuestCompleted = (state) => {
  return (
    state[1].map((v) => v.value).includes(ITEMS[0]) &&
    state[1].map((v) => v.value).includes(ITEMS[1]) &&
    state[2].map((v) => v.value).includes(ITEMS[2]) &&
    state[2].map((v) => v.value).includes(ITEMS[3])
  )
}

const getItems = () =>
  ITEMS.map((v, index) => ({
    id: `item-${index}`,
    content: `${v}`,
    value: v,
    index: index,
  }))

const dropList = (state, ind) => {
  const el = state[ind]

  const areAllAnswersSelected = state[0].length === 0

  return (
    <Droppable key={ind} droppableId={`${ind}`} style={{ flexGrow: 1 }}>
      {(provided, snapshot) => (
        <Box
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver, ind)}
          {...provided.droppableProps}
        >
          {el.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided, snapshot) => (
                <Box
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={getItemStyle(
                    snapshot.isDragging,
                    provided.draggableProps.style,
                    !areAllAnswersSelected
                      ? null
                      : CORRECT_ANSWERS[item.index] === ind
                  )}
                  display="flex"
                  borderRadius="8px"
                  alignItems="center"
                  justifyContent="center"
                  padding="6px"
                  mb="1"
                >
                  <Image
                    src={ICONS[item.index]}
                    width="30px"
                    height="30px"
                    mr="2"
                  />
                  {item.content}
                </Box>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
  )
}

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  destClone.splice(droppableDestination.index, 0, removed)

  const result = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}
const grid = 8

const getItemStyle = (isDragging, draggableStyle, correct: boolean | null) => ({
  userSelect: 'none',
  background:
    correct === true
      ? theme.colors.correctGradient
      : correct === false
      ? theme.colors.incorrectGradient
      : isDragging
      ? '#916AB8'
      : 'grey',
  ...draggableStyle,
})
const getListStyle = (isDraggingOver, index) => ({
  background: isDraggingOver
    ? 'lightblue'
    : index === 0
    ? 'lightgrey'
    : 'antiquewhite',
  borderRadius: '8px',
  padding: grid,
  width: 250,
  minHeight: 200,
})

const BlockchainsLayer1 = (): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const [state, setState] = useState(
    localStorage.getItem('quest-blockchain-layer-1')
      ? JSON.parse(localStorage.getItem('quest-blockchain-layer-1'))
      : [getItems(), [], []]
  )
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')

  function onDragEnd(result) {
    const { source, destination } = result

    if (!destination) {
      return
    }
    const sInd = +source.droppableId
    const dInd = +destination.droppableId

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index)
      const newState = [...state]
      newState[sInd.toString()] = items
      setState(newState)
    } else {
      const result = move(state[sInd], state[dInd], source, destination)
      const newState = [...state]
      newState[sInd] = result[sInd]
      newState[dInd] = result[dInd]

      localStorage.setItem('quest-blockchain-layer-1', JSON.stringify(newState))
      setState(newState)
    }
  }

  return {
    isQuestCompleted: isQuestCompleted(state),
    questComponent: (
      <>
        <h2>
          What qualities do these blockchains mainly optimize for? Drag them
          into the correct bucket.
        </h2>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <DragDropContext onDragEnd={onDragEnd}>
            {dropList(state, 0)}
            <Box flexBasis="100%" height="30px" />
            <Box display={isSmallScreen ? 'block' : 'flex'}>
              <Box mr="4">
                <Box textAlign="center" m="2">
                  Decentralisation and Security
                </Box>
                {dropList(state, 1)}
              </Box>
              <Box>
                <Box textAlign="center" m="2">
                  Scalability
                </Box>
                {dropList(state, 2)}
              </Box>
            </Box>
          </DragDropContext>
        </Box>
      </>
    ),
  }
}

export default BlockchainsLayer1
