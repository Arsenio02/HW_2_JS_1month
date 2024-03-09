/* Написать программу, которая переводит сумму в сомах в количество литров бензина разного типа
(АИ-92, АИ-95, АИ-98, ДТ, Газ). Сделать по аналогии с конвертером валют.
У пользователя запрашивать сумму и тип топлива. */

/*
let sumInSom = parseFloat(prompt("Введите сумму в сомах:"));
let fuelType = prompt("Введите тип топлива (АИ-92, АИ-95, АИ-98, ДТ, Газ):").toLowerCase();
let pricePerLiter;

switch (fuelType) {
    case "аи-92":
        pricePerLiter = 62.9;
        break;
    case "аи-95":
        pricePerLiter = 66.1;
        break;
    case "аи-98":
        pricePerLiter = 74.5;
        break;
    case "дт":
        pricePerLiter = 63.5;
        break;
    case "газ":
        pricePerLiter = 34.6;
        break;
    default:
        console.log("Неподдерживаемый тип топлива!");
        break;
}

if (pricePerLiter) {
    let liters = sumInSom / pricePerLiter;

    if (!isNaN(liters) && isFinite(liters)) {
        console.log(`За ${sumInSom} сом можно купить примерно ${liters.toFixed(2)} литров ${fuelType.toUpperCase()}.`);
    } else {
        console.log("Ошибка расчета.");
    }
}
*/

/* Написать программу которая запрашивает число у пользователя и выводит название планеты солнечной системы
по порядковому номеру. Например: 1 -> Меркурий, 3 -> Земля, 9 -> Плутон.
Очередность планет если точно не знаете, то гуглите) */

/*
let planetNumber = parseInt(prompt("Введите порядковый номер планеты в солнечной системе:"));

let planetName;

switch (planetNumber) {
    case 1:
        planetName = "Меркурий";
        break;
    case 2:
        planetName = "Венера";
        break;
    case 3:
        planetName = "Земля";
        break;
    case 4:
        planetName = "Марс";
        break;
    case 5:
        planetName = "Юпитер";
        break;
    case 6:
        planetName = "Сатурн";
        break;
    case 7:
        planetName = "Уран";
        break;
    case 8:
        planetName = "Нептун";
        break;
    case 9:
        planetName = "Плутон";
        break;
    default:
        planetName = "Нет такой планеты";
        break;
}

console.log(`Планета под номером ${planetNumber}: ${planetName}`); */
