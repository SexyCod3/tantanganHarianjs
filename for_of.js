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
