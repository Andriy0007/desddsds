<?php
$a = 5;
$b = 10;

echo "Сума: " . ($a + $b) . "<br>";
echo "Різниця: " . ($a - $b) . "<br>";
echo "Добуток: " . ($a * $b) . "<br>";
echo "Ділення: " . ($a / $b) . "<br><br>";
$days = ["Monday","Tuesday", "Wednesday", "Thursday", "Friday","Saturday", "Sunday"];
echo "3-й день: " . $days[2] . "<br>";
echo "5-й день: " . $days[4] . "<br><br>";
$products = [
    "Apple" => 30,
    "Banana" => 20,
    "Orange" => 25,
];
echo "Списрк товарів:<br>";
foreach ($products as $product => $price) {
    echo "${product}: ${price} грн<br>";
}
echo "<br>";
$day = "Monday";
switch ($day) {
    case "Monday":
        echo "Початок тижня!<br>";
        break;
    case "Friday":
        echo "Нарешті п'ятниця!<br>";
        break;
    case "Sunday":
        echo "Відпочинок!<br>";
        break;
    default:
        echo "Звичайний день.<br>";
}
echo "<br>";
$x = 15;
if ($x % 2 == 0) {
    echo "${x} є парним числом.";
} else {
    echo "${x} є непарним числом.";
}

