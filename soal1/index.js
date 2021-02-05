const doggy = {
  name: 'Ravel',
  kaki: 4,
  warna: ['putih', 'abu-abu', 'coklat'],
  spesies: 'Mamalia',

  skillsDoggy:() => {
    return 'tidur';
  }
}

console.log(doggy.name);
console.log(doggy.kaki);

for(let i = 0; i < doggy.warna.length; i++) {
  console.log(doggy.warna[i]);
}

console.log(doggy.spesies);
console.log(doggy.skillsDoggy())
