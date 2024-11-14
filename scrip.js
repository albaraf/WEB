// Fungsi untuk menampilkan section berdasarkan menu yang dipilih
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.classList.remove('active');
    });
  
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
  }
  
  // Fungsi untuk mengolah form pemesanan
  function submitForm(event) {
    event.preventDefault();
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    alert(`Pesanan Anda untuk ${product} sejumlah ${quantity} telah diterima!`);
  }
  
  // Menampilkan Home sebagai halaman default
  document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
  });
  