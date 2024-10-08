const orderForm = document.getElementById('orderForm');
orderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    localStorage.setItem('order', JSON.stringify(selectedItems));
    console.log('Pesanan Anda:', selectedItems);
});
