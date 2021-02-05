import {datas} from './data.js';

let buah = document.querySelector(".buah")

// var myImage = new Image(200, 200);
let displayBuah = () => {
  datas.map((data) => {
    console.log(data)
    let card = document.createElement("div")
  
    card.innerHTML = `
      <div class="card">
        <img src=${data.image} />
        <h1>${data.nama}</h1>
        <h2>${data.namaLatin}</h2>
        <h3>${data.warna}</h3>
        <span>${data.tipeBiji}</span>
      </div>
    `

    buah.appendChild(card)
  })
}

displayBuah();



