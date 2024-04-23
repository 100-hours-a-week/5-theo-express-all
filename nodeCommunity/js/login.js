// import { response } from "express";

const signIn = document.querySelector('#signIn');
let userId = document.querySelector('#userId');
let userPass = document.querySelector('#userPass');

let idValid = false;
let passValid = false;

signIn.addEventListener('click', (event) => {
    event.preventDefault();

    if (idValid && passValid) {
        window.location.href = "./boardList.html";
    } else {
        alert("이메일과 비밀번호를 확인해주세요.");
    }

    // const getJson = fetch("data.json")
    //     .then((response) => response.json())
    //     .then((data) => data);

    // console.log(getJson);

    let getName;

    async function logJSONData() {
        const response = await fetch("data.json");
        const jsonData = await response.json();
        console.log(jsonData);
        getName = jsonData;
    }
    logJSONData();
})

userId.onkeyup = () => {
    let message1 = document.getElementById('help1');

    if (userId.value.length >= 10) {
        message1.innerText = '* 이메일 길이 적당';
        idValid = true;
    }
    if (userId.value.length < 10) {
        message1.innerText = '* 이메일 길이 짧음';
        idValid = false;
    }
}

userPass.onkeyup = () => {
    let password = userPass.value;
    let message2 = document.getElementById('help2');


    if (validatePassword(password)) {
        signIn.style.backgroundColor = "#7F6AEE";
        passValid = true;
    } else {
        passValid = false;
        signIn.style.backgroundColor = "#ACA0EB";
        message2.innerText = "비밀번호는 8자이상, 20자이하, 대소문자, 특수문자를 포함하여야합니다.";
    }
}

function validatePassword(password) {
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    return passwordRegex.test(password);
}


async function logJSONData() {
    const response = await fetch("../db/data.json");
    const jsonData = await response.json();
    console.log(jsonData);
}