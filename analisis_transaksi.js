const transaksi = [
  { id: 1, user: "Andi", total: 150000, status: "success" },
  { id: 2, user: "Budi", total: 0, status: "failed" },
  { id: 3, user: "Citra", total: 275000, status: "success" },
  { id: 4, user: "Dina", total: -5000, status: "success" },
  { id: 5, user: "Eka", total: 120000, status: "success" }
];

const transaksiValid = transaksi
  .filter(transaksi => transaksi.status === 'success' && transaksi.total > 0);

const totalPendapatan = transaksiValid
  .reduce((total, item) => total + item.total, 0); 
  
const transaksiterbesar = transaksi.reduce((prev, curr) => {
  return (prev.total > curr.total) ? prev : curr;
});

const usertransaksiterbesar = transaksiterbesar.user;



const analisistransaksi = () => {
  return{
console.log("totalTransaksiValid =" + transaksiValid);
console.log("totalPendapatan ="+totalPendapatan);
console.log("transaksiTerbesar ="+transaksiterbesar);
console.log("userTransaksiTerbesar =" +usertransaksiterbesar);
  }
}

console.log(analisistransaksi);

  

//console.log(transaksiValid);
//console.log(totalPendapatan);
//console.log(transaksiterbesar);
//console.log(usertransaksiterbesar);





//versiperbaikan 
const analisisTransaksi = () => {
  const transaksiValid = transaksi.filter(
    t => t.status === "success" && t.total > 0
  );

  if (transaksiValid.length === 0) {
    return {
      totalTransaksiValid: 0,
      totalPendapatan: 0,
      transaksiTerbesar: null,
      userTransaksiTerbesar: null
    };
  }

  const totalPendapatan = transaksiValid.reduce(
    (sum, t) => sum + t.total, 0
  );

  const transaksiTerbesar = transaksiValid.reduce(
    (max, t) => (t.total > max.total ? t : max)
  );

  return {
    totalTransaksiValid: transaksiValid.length,
    totalPendapatan,
    transaksiTerbesar,
    userTransaksiTerbesar: transaksiTerbesar.user
  };
};

console.log(analisisTransaksi());





