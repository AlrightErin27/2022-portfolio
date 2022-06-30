pp '☀️ 🌾 🌱 It is time to plant...'

pp 'Planting user seeds...'
josie =
  User.create!(
    name: 'Josie McCoy',
    email: '3smallwords@megarecords.com',
    password: 'secret1',
  )
val =
  User.create!(
    name: 'Valerie Brown',
    email: 'spinaround@megarecords.com',
    password: 'secret2',
  )
mel =
  User.create!(
    name: 'Melody Valentine',
    email: 'youreastar@megarecords.com',
    password: 'secret3',
  )

pp 'Planting game seeds...'
jp =
  Game.create!(
    title: 'Josie & the Pussycats',
    desc:
      'MegaRecords CEO Fiona, in a meeting with world government reps, details how the US government has conspired with the music industry to hide subliminal messages in pop music to brainwash teenagers into buying consumer products. Musicians who discover the hidden messages in their music are made to disappear via staged plane crashes, drug overdoses and similar disasters.',
  )
bw =
  Game.create!(
    title: 'Bird Watcher',
    desc:
      'Try your hand at spotting and documenting as many species of birds as possible before the timer runs out.',
  )

pp 'Planting score seeds...'
Score.create!(user_id: mel.id, game_id: jp.id, result: 100)
Score.create!(user_id: josie.id, game_id: jp.id, result: 0)
Score.create!(user_id: val.id, game_id: bw.id, result: 7)
Score.create!(user_id: mel.id, game_id: bw.id, result: 4)

pp 'All done!'
