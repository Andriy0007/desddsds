function vac_ban() {
	const age = prompt("Будь ласка, введіть ваш вік:");
	if (age < 18) {
	alert("Вам заборонено вхід");
	} else if (age >= 18&& age <= 65) {

    }
    else if ( age > 65) {
	alertr ("Будь ласка будьте обережні!");
	} else {
	alertr ("Некоректне значення віку. Спробуйте ще раз.");
	}
}
vac_ban();
function printEvenNumbers() {
	const n = prompt("Ведіть число n:");
	if (isNaN(n) || n < 2) {
		console.log("Будь ласка, ведіть число більше або рівне 2.");
		return;
	}
	consol.log('Парні числа від 2 до ${n}:');
	for (let i = 2; i <= n; i+=2) {
		console.log(i);
	}
}
printEvenNumbers();
function calush() {
	const n = prompt("Введіть число n для обчислення факторіалу:");
	if (isNaN(n) || n <0) {
		console.log("Будь ласка, введіть додане ціле число.");
		return;
	}
	let factorial = 1;
	let i = 1;
	while (i <= n) {
		factorial *= i;
		i++;
	}
	console.log('Факторіал числа ${n} дорівнює ${factorial}');
}
calush();