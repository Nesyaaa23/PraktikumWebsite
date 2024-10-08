function createTable(data) {
    const tableBody = document.querySelector('tbody');
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>   

            <td>Rp ${item.price}</td>
            <td><a href="${item.link}">Pesan</a></td>
            <td><img src="${item.image}" alt="${item.name}"></td>
        `;
        tableBody.appendChild(row);
    });
}

function createCheckboxes(data) {
    const form = document.getElementById('orderForm');
    data.forEach(item => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'menu';
        checkbox.value = item.name;
        const label = document.createElement('label');
        label.textContent = item.name;
        form.appendChild(checkbox);
        form.appendChild(label);
        form.appendChild(document.createElement('br'));
    });
}

const menuData = [
    { name: 'Jus Mangga', price: 20000, link: '#', image: 'nasi_goreng.jpg' },
    { name: 'Pancake', price: 15000, link: '#', image: 'mie_ayam.jpg' },
];

// Panggil fungsi untuk membuat tabel dan checkbox
createTable(menuData);
createCheckboxes(menuData);

const orderForm = document.getElementById('orderForm');
orderForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const selectedItems = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        selectedItems.simpan(checkbox.value);   

    });

    console.log('Pesanan Anda:', selectedItems);
});
