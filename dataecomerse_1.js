const transaksi = [
  { id: 1, user: "Andi", produk: "Laptop", kategori: "Elektronik", harga: 12000000, qty: 1, tanggal: "2026-01-10", status: "success" },
  { id: 2, user: "Budi", produk: "Mouse", kategori: "Elektronik", harga: 150000, qty: 2, tanggal: "2026-01-10", status: "success" },
  { id: 3, user: "Citra", produk: "Buku", kategori: "Edukasi", harga: 80000, qty: 3, tanggal: "2026-01-11", status: "cancel" },
  { id: 4, user: "Andi", produk: "Keyboard", kategori: "Elektronik", harga: 350000, qty: 1, tanggal: "2026-01-12", status: "success" },
  { id: 5, user: "Dina", produk: "Pulpen", kategori: "ATK", harga: 10000, qty: 10, tanggal: "2026-01-12", status: "success" }
];

const level1 = () => {
  const transaksiValid = transaksi
  .filter( n => n.status === "success"
    );
    return transaksiValid
  .reduce((acc, curr) => {
    return acc + (curr.harga*curr.qty);
  },0);
 
}

const totalBarangTerjual = transaksi
.filter (item => item.status === "success")
.reduce((acc, curr) => {
    return acc + curr.qty;
  },0); 
  
console.log(`total transaksi adalah = Rp.${level1()}`)
console.log(`total barang yang terjual adalah = ${totalBarangTerjual} unit`)













//perbaikan

const level1 = () => {
  return transaksi
    .filter(t => t.status === "success")
    .reduce((acc, curr) => {
      return acc + (curr.harga * curr.qty);
    }, 0);
};

const jumlahTransaksiSukses = transaksi
  .filter(t => t.status === "success")
  .length;

const totalBarangTerjual = transaksi
  .filter(t => t.status === "success")
  .reduce((acc, curr) => acc + curr.qty, 0);

console.log(`Total omzet = Rp.${level1()}`);
console.log(`Jumlah transaksi sukses = ${jumlahTransaksiSukses}`);
console.log(`Total barang terjual = ${totalBarangTerjual} unit`);