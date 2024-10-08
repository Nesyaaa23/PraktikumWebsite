function createTable(data) {
    const tableBody = document.querySelector('tbody');
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>   

            <td>Rp ${15.000}</td>
            <td><a href="${https://penniesandpancakes.blogspot.com/2013/07/1-year-blog-anniversary-and-my-favorite.html}">Pesan</a></td>
            <td><img src="${https://tse3.mm.bing.net/th?id=OIP.HC1xu3AP9c7_w8BomyPK-AHaFS&pid=Api&P=0&h=220.png}" alt="${Jus Mangga}"></td>
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

// Data menu (contoh)
const menuData = [
    { name: 'Jus Mangga', price: 15.000, link: 'https://tse3.mm.bing.net/th?id=OIP.HC1xu3AP9c7_w8BomyPK-AHaFS&pid=Api&P=0&h=220.png', image: 'Jus Mangga.jpg' },
    { name: 'Pancake', price: 20.000, link: 'http://4.bp.blogspot.com/-K3OlqwfuuG4/UeF9Wi0RyBI/AAAAAAAAA24/f46uloxkYqI/s1600/favorite%2Bpancakes2.png.', image: 'Pancake' },
    // Tambahkan data menu lainnya di sini
];

createTable(menuMakanan);
createCheckboxes(menuMakanan);

const orderForm = document.getElementById('orderForm');
orderForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Ambil semua checkbox yang dicentang
    const selectedItems = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        selectedItems.push(checkbox.value);   

    });

    console.log('Pesanan Anda:', selectedItems);
});
