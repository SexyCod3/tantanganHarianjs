const users = [
  { id: 1, nama: "Budi", umur: 21, kota: "Jakarta", aktif: true },
  { id: 2, nama: "Sari", umur: 23, kota: "Bandung", aktif: false },
  { id: 3, nama: "Andi", umur: 25, kota: "Surabaya", aktif: true },
  { id: 4, nama: "Rina", umur: 20, kota: "Jakarta", aktif: true },
  { id: 5, nama: "Dewi", umur: 22, kota: "Bandung", aktif: false }
];


const result = users
  .filter(user => user.aktif)
  .map(user => ({
    id: user.id,
    nama: user.nama,
    kota: user.kota,
    status: "AKTIF",
    kategoriUmur: user.umur < 22 ? "Muda" : "Dewasa"
  }))
  .reduce((acc, user) => {
    if (!acc[user.kota]) {
      acc[user.kota] = [];
    }
    acc[user.kota].push(user);
    return acc;
  }, {});

console.log(result);
