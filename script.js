function submitForm() {
    let firstname = document.getElementById("firstname").value;
    let middlename = document.getElementById("middlename").value;
    let lastname = document.getElementById("lastname").value;
    let dateOfBirth = document.getElementById("dateOfBirth").value;
    let age = 0;

    if (firstname === "" || lastname === "") {
        alert("Заполните все поля!");
    } else {
        let birthDate = new Date(dateOfBirth);
        let today = new Date();
        age = today.getFullYear() - birthDate.getFullYear();
    }

    let output = document.getElementById("output");
    output.innerHTML =
        `
        <p>Имя: ${firstname} ${middlename} ${lastname}</p>
        <p>Возраст: ${age} лет</p>
        `
    }