const messages = {
  flipLikelihood: {
    low: {
      headline: [
        "Don't bother voting.",
        "You won't make a difference.",
        'Meh. Who cares?'
      ],
      flavorText: [
        'You might as well skip out and go to trivia instead.',
        'Just stay home and play video games.',
        "Lucky you! You won't have to wait in line for hours.",
        "You're probably fine protest-voting for a third party here."
      ]
    },
    moderate: {
      headline: [
        'Your vote counts. Kinda.',
        'Go vote, I guess.',
        'Your vote might make a difference.',
        'Yeah, sure, go vote.'
      ],
      flavorText: [
        "It's worth a shot, especially if it's a close year.",
        'If you really cared, you could mail in a ballot.',
        "If you've got nothing better to do, go be patriotic and vote.",
        'Who knows? Maybe the candidates will actually visit your state.'
      ]
    },
    high: {
      headline: [
        'Your vote actually counts.',
        'Your vote makes a difference.',
        'Get out and vote.',
        'You should actually vote.'
      ],
      flavorText: [
        "If you don't vote, your friends will be mad at you.",
        'You live in one of the only states that actually matters in our democracy. Go vote!',
        'This is not the right place for a protest vote.',
        'Go exercise your civic rights for a real, significant reason.'
      ]
    }
  }
}

export default messages
