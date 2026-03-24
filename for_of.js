const users = [
  { nama: "Budi", umur: 21 },
  { nama: "Sari", umur: 23 },
  { nama: "Andi", umur: 25 }
];

//Tampilkan semua nama user pakai for...of
for (const a of users){
  console.log(a.nama);
}

//Tampilkan semua key dari object user pertama pakai for...in
const firstUser = users[0];

for (const key in firstUser){
  console.log(key, firstUser[key]);
}






//tantangan dua for of/in
const buah = ["apel", "jeruk", "mangga", "pisang"];

//Tampilkan semua nama buah pakai for...of
for (const a of buah){
  console.log(`${a}`);
}

//Tampilkan panjang tiap nama buah
const firstBuah = buah;
for (const a of firstBuah){
 console.log(`${a} memiliki ${a.length} huruf`);
}

//versi lebih efisien
for (const a of buah) {
  console.log(a);
  console.log(`${a} memiliki ${a.length} huruf`);
}
