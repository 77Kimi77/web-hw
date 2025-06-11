function submitForm() {
    var firstname = document.getElementById("firstname").value;
    var middlename = document.getElementById("middlename").value;
    var lastname = document.getElementById("lastname").value;
    var age = document.getElementById("age").value;

    if (firstname === "" || lastname === "" || age === "") {
        alert("Заполните все поля!");
    } else {
        alert("Данные успешно отправлены! Имя: " + firstname + " " + middlename + " " + lastname + ", Возраст: " + age + " лет.");
    }

    let output = document.getElementById("output");
    output.innerHTML =
        `
        <p>Имя: ${firstname} ${middlename} ${lastname}</p>
        <p>Возраст: ${age} лет</p>
        `
}