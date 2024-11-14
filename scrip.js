// Menangani event submit pada form pemesanan
document.getElementById('orderForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah pengiriman form secara default
  
  // Mendapatkan nilai dari input nama dan produk
  const name = document.getElementById('name').value;
  const product = document.getElementById('product').value;

  // Menampilkan pesan konfirmasi kepada pengguna
  alert(`Terima kasih, ${name}! Anda telah memesan produk: ${product}.`);

  // Mengosongkan input form setelah submit
  document.getElementById('name').value = '';
  document.getElementById('product').value = '';
});
