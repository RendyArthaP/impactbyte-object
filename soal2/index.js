const data = [
  {name: 'Alpha',
   class: 'Dragon',
   club: ['Bola', 'Bulutangkis']
  },
  {name: 'Beta',
   class: 'Lizard',
   club: ['Membaca', 'Bulutangkis']
  },
]

for(let i = 0; i < data.length; i++) {
  console.log(data[i].club[0])
}

document.write(`${data[0].name} ada di kelas ${data[0].class}, dia mengikuti club ${data[0].club[0]}, ${data[0].club[1]}  <br />`)
document.write(`${data[1].name} ada di kelas ${data[1].class}, dia mengikuti club ${data[1].club[1]}, ${data[1].club[1]}`)