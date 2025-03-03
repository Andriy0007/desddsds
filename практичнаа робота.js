const products = [
    { name: "Хліб", category: "Продукти" },
    { name: "Молоко", category: "Продукти" },
    { name: "Шампунь", category: "Косметика" },
    { name: "Мило", category: "Косметика" },
    { name: "Чайник", category: "Побутова техніка" },
    { name: "Пилосос", category: "Побутова техніка" },
];
function prosrochka (items) {
    return items.reduce((groups, item) => {
        const { category, name } = item;
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(name);
        return groups;
    }, {});
}
const dobrota = prosrochka(products);
console.log("Групи товарів:");
Object.entries(dobrota).forEach(([category, item]) => {
    console.log('\nКатегорія: $(category}');
    items.forEach((item, index) => {
        console.log('$(index + 1}. $(item}');
    });
});