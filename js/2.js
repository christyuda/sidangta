function confirmSubmit() {
    Swal.fire({
      title: 'Apakah Anda yakin ingin mengirim data ini?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak',
    }).then((result) => {
      if (result.isConfirmed) {
        // Jika pengguna menekan "Ya", kirim data
        sendData();
        document.getElementById('successSection').style.display = 'block';

      }
    });
  }

function sendData() {
    Alpine.data('step', () => 'complete');

};
