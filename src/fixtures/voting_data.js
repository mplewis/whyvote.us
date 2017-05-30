import votingData from './voting_data.json'

function coerceToTwoParty (party) {
  return { Republican: 'r', Democratic: 'd' }[party]
}

export const states = Object.keys(votingData)

export function twoPartyVotesForState (state) {
  const stateData = votingData[state]
  const dataByElection = {}
  Object.entries(stateData).forEach(([year, yearData]) => {
    const twoPartyData = {}
    yearData
      .forEach(candData => {
        const partyKey = coerceToTwoParty(candData.party)
        if (partyKey) twoPartyData[partyKey] = candData.votes
      })
    dataByElection[year] = twoPartyData
  })
  return dataByElection
}
