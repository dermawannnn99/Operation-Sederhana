// let SaldoSaya = 20000
// let SaldoBuatJajan = 5000
// const SaldoSekarang = SaldoSaya - SaldoBuatJajan //operator kurang

// console.log (
//     `Saldo awal saya sebesar Rp.${SaldoSaya}, lalu dikurangi untuk membeli jajan sebesar Rp.${SaldoBuatJajan},
//      dan saldo saya sekarang menyisakan Rp.${SaldoSekarang}.`
// )

let nama = 'Menrey'
const Harga = 20000
let InputanSaldo = 50000 //input saldo disini

let Kembalian = InputanSaldo - Harga

let Status
if (InputanSaldo <= Harga) {
    Status = ' yang di input kurang'
}
else {
    Status = 'berhasil di input'
}

console.log(
    `Hallo ${nama} ! \nsaldo anda ${Status}, dan kembalian anda ${Kembalian}`
)