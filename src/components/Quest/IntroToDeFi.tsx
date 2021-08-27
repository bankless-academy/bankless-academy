// for example: this component could call APIs to validate the quest
const IntroToDeFi = (): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => ({
  isQuestCompleted: true,
  questComponent: (
    <>
      TODO: DeFi quest action to be confirmed...
      <br />
      Most probable case: get Matic from a faucet in order to be ready for the
      first DeFi protocol quest (Lend on Aave layer 2 Polygon?)
    </>
  ),
})

export default IntroToDeFi
