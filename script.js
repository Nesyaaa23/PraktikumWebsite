function tampilkanPesanan() {
  // Mengambil semua checkbox yang dipilih
  const checkboxes = document.querySelectorAll('input[name="menu"]:checked');
  
  let pesanan = [];
  let totalHarga = 0;

  // Looping setiap checkbox yang dipilih
  checkboxes.forEach((checkbox) => {
    const menu = checkbox.value;
    const harga = parseInt(checkbox.getAttribute('data-price'));
      
    pesanan.push(menu);
    totalHarga += harga;
  });

  if (pesanan.length > 0) {
    console.log("Anda memesan:", pesanan.join(", "));
    console.log("Total harga: Rp", totalHarga);
  } else {
    console.log("Silakan pilih setidaknya satu menu.");
  }
}
