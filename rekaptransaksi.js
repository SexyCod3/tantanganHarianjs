//import transaksi from "./data.js";

//console.log(transaksi);

const transaksi = [
  { id: 1, user: "Andi", total: 150000, status: "success" },
  { id: 2, user: "Budi", total: 0, status: "failed" },
  { id: 3, user: "Andi", total: 200000, status: "success" },
  { id: 4, user: "Citra", total: 275000, status: "success" },
  { id: 5, user: "Dina", total: -5000, status: "success" },
  { id: 6, user: "Citra", total: 125000, status: "success" }
];

//fungsi rekap transaksi
const rekapTransaksiUser = () =>{
  const transaksiValid = transaksi.filter(
    t => t.status === "success" && t.total > 0
  );
  
  const rekapTransaksi = transaksiValid.reduce((acc, curr) => {
    acc[curr.user] = (acc[curr.user] || 0) + curr.total;
    return acc;
  }, {});
  
  return Object.entries(rekapTransaksi)
    .map(([user, total]) => ({ user, total }))
    .sort((a, b) => b.total - a.total);
    
    
    
  //const rataRataTransaksi = math.round(rekapTransaksi);
 // console.log(rataRataTransaksi)
  
  //return rekapTransaksi

}
console.log(rekapTransaksiUser())
//console.log(rataRataTransaksi)




















//VERSI PERBAIKAN
const rekapTransaksiUser = () => {
  const transaksiValid = transaksi.filter(
    t => t.status === "success" && t.total > 0
  );

  const rekap = transaksiValid.reduce((acc, curr) => {
    if (!acc[curr.user]) {
      acc[curr.user] = {
        user: curr.user,
        totalTransaksi: 0,
        totalPendapatan: 0
      };
    }

    acc[curr.user].totalTransaksi += 1;
    acc[curr.user].totalPendapatan += curr.total;

    return acc;
  }, {});

  return Object.values(rekap)
    .map(item => ({
      ...item,
      rataRataTransaksi: Math.round(
        item.totalPendapatan / item.totalTransaksi
      )
    }))
    .sort((a, b) => b.totalPendapatan - a.totalPendapatan);
};

console.log(rekapTransaksiUser());