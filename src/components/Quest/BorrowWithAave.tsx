// for example: this component could call APIs to validate the quest
const BorrowWithAave = (): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => ({
  isQuestCompleted: true,
  questComponent: <>Custom quest component for BorrowWithAave</>,
})

export default BorrowWithAave
