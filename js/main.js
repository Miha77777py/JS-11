// 1
const bankAccount = {
    ownerName: "Tom",
    accountNumber: "123324672643",
    balance: 5000,
    deposit(ammount) {
        this.balance += ammount;
        return `Баланс: ${this.balance}`;
    },
    withdraw(ammount) {
        this.balance -= ammount;
        return `Баланс: ${this.balance}`;
    },
};

const deppositInput = document.querySelector(".deposit_ammount");
const withdrawInput = document.querySelector(".withdraw_ammount");

document.querySelector(".deposit").addEventListener("click", () =>
    alert(bankAccount.deposit(Number(deppositInput.value)))
);
document.querySelector(".withdraw").addEventListener("click", () =>
    alert(bankAccount.withdraw(Number(withdrawInput.value)))
);

// 2
const weather = {
    temperature: 28,
    humidity: 37,
    windSpeed: 8,
    checkTemperature() {return this.temperature < 0},
    changeTemperature(newTemperature) {this.temperature = newTemperature}
};

const temperatureInput = document.querySelector(".temperature");

document.querySelector(".btn_checkTemperature").addEventListener("click", () => {
    weather.changeTemperature(Number(temperatureInput.value));

    weather.checkTemperature()
        ? alert("Температура нижче 0 градусів Цельсія")
        : alert("Температура вище або дорівнює 0 градусів Цельсія")
});

// 3
const user = {
    name: "Tom",
    email: "username@gmail.com",
    password: "1234",
    login(enteredEmail, enteredPassword) {
        return enteredEmail === this.email && enteredPassword === this.password
            ? "Вхід виконано!"
            : "Невірні данні для входу!";
    },
}

const enteredEmail = document.querySelector(".email");
const enteredPassword = document.querySelector(".password");

document.querySelector(".btn_checkUser").addEventListener("click", () => {
    alert(user.login(enteredEmail.value, enteredPassword.value));
});

// 4
const movie = {
    title: "Гаррі Поттер та Орден Фенікса",
    director: "Девід Єйтс",
    year: 2007,
    rating: 8.5,
    checkRating() {return this.rating > 8},
}

const titleField = document.querySelector(".title");
titleField.innerHTML = `Назва: ${movie.title}`;
titleField.style.color = movie.checkRating() ? "green" : "red";
document.querySelector(".director").innerHTML = `Режисер: ${movie.director}`;
document.querySelector(".year").innerHTML = `Рік: ${movie.year}`;
document.querySelector(".rating").innerHTML = `Рейтинг: ${movie.rating}`;

