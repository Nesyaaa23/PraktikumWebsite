const orderForm = document.getElementById('orderForm');

orderForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Ambil semua checkbox yang dicentang
    const selectedItems = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        selectedItems.push(checkbox.value);   

    });

    // Tampilkan hasil pesanan di console
    console.log('Pesanan Anda:', selectedItems);

    // Opsional: Kirim data pesanan ke server (misalnya, menggunakan fetch API)
    // fetch('/submit-order', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ items: selectedItems })
    // })
    // .then(response => response.json())
    // .then(data => console.log('Pesanan   
 berhasil dikirim:', data))
    // .catch(error => console.error('Error:', error));
});
