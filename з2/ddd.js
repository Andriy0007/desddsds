
const itemList = document.getElementById('itemList');
const searchInput = document.getElementById('search');
const sortSelect = document.getElementById('sort');
const noResultsMessage = document.getElementById('noResults');

const defaultItems = [
    { text: "Apple", date: new Date().toISOString() },
    { text: "Banana", date: new Date().toISOString() },
    { text: "Orange", date: new Date().toISOString() }
];

let items = JSON.parse(localStorage.getItem('items')) || defaultItems;

const saveToLocalStorage = () => {
    localStorage.setItem('items', JSON.stringify(items));
};

const renderList = () => {
    itemList.innerHTML = '';

    const searchTerm = searchInput.value.toLowerCase();
    const filteredItems = items.filter(item => 
        item.text.toLowerCase().includes(searchTerm)
    );

    if (filteredItems.length === 0) {
        noResultsMessage.style.display = 'block';
    } else {
        noResultsMessage.style.display = 'none';
        filteredItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.text} (Added: ${new Date(item.date).toLocaleDateString()})`;
            itemList.appendChild(li);
        });
    }
};

const sortItems = () => {
    const sortType = sortSelect.value;
    if (sortType === 'alphabet') {
        items.sort((a, b) => a.text.localeCompare(b.text));
    } else if (sortType === 'date') {
        items.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
};

searchInput.addEventListener('input', renderList);
sortSelect.addEventListener('change', () => {
    sortItems();
    renderList();
});

sortItems();
renderList();
