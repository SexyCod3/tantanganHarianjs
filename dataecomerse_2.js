const transaksi = [
  { id: 1, user: "Andi", produk: "Laptop", kategori: "Elektronik", harga: 12000000, qty: 1, tanggal: "2026-01-10", status: "success" },
  { id: 2, user: "Budi", produk: "Mouse", kategori: "Elektronik", harga: 150000, qty: 2, tanggal: "2026-01-10", status: "success" },
  { id: 3, user: "Citra", produk: "Buku", kategori: "Edukasi", harga: 80000, qty: 3, tanggal: "2026-01-11", status: "cancel" },
  { id: 4, user: "Andi", produk: "Keyboard", kategori: "Elektronik", harga: 350000, qty: 1, tanggal: "2026-01-12", status: "success" },
  { id: 5, user: "Dina", produk: "Pulpen", kategori: "ATK", harga: 10000, qty: 10, tanggal: "2026-01-12", status: "success" }
];

//rekap omzet per kategori.
     //kita filter terlebih dahulu transaksi yang sukses
const rekapOmsetperKategori = () => {
  return transaksi
    .filter(t => t.status === "success")
    //kita reduce dengan cara berikut ini
    .reduce((acc, curr) => {
    if (!acc[curr.kategori]) {
      acc[curr.kategori] = {
        kategori: curr.kategori,
        totalOmzet: 0
      };
    }

   acc[curr.kategori].totalOmzet += curr.harga * curr.qty;

    return acc ;
    },{});
};

//Cari user paling boros (total belanja terbesar).
const belanjaTerbesar = () => {
  return transaksi
  .filter(n => n.status === "success")
  .reduce((acc, curr) => {
    if (!acc[curr.user]) {
      acc[curr.user] = {
        user: curr.user,
        totalTransaksi: 0
      };
    }

    acc[curr.user].totalTransaksi += curr.harga * curr.qty;

    return acc;
  }, {});
  const userPalingBoros = () => {
  const data = Object.values(belanjaTerbesar());

  return data.reduce((max, curr) =>
    curr.totalTransaksi > max.totalTransaksi ? curr : max
  );
};
};

//Urutkan produk berdasarkan total pendapatan tertinggi.
 const produkLaris = () => {
  return Object.values(
    transaksi
      .filter(t => t.status === "success")
      .reduce((acc, curr) => {
        if (!acc[curr.produk]) {
          acc[curr.produk] = {
            produk: curr.produk,
            totalPendapatan: 0
          };
        }

        acc[curr.produk].totalPendapatan += curr.harga * curr.qty;
        return acc;
      }, {})
  ).sort((a, b) => b.totalPendapatan - a.totalPendapatan);
 };

console.log(rekapOmsetperKategori())
console.log(belanjaTerbesar())
console.log(produkLaris())