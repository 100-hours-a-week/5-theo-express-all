let userPass = document.querySelector('#userPass');
let checkPass = document.querySelector('#checkPass');
let editPass = document.querySelector('#editPass');

let passValid = false;
let checkValid = false;

// 헤더 드롭다운 동작
let dropDown = document.querySelector('.headerImage');
let isOn = false
dropDown.addEventListener('click', () => {
    if (isOn === true) {
        isOn = false;
        dropDown.classList.remove('on');
    } else {
        isOn = true;
        dropDown.classList.add('on');
    }
})
// 헤더 드롭다운 코드 끝


userPass.onkeyup = () => { // 비밀번호 입력
    let password = userPass.value;
    let message1 = document.querySelector('#help1');


    if (validatePassword(password)) {
        message1.innerText = "* 비밀번호가 적당합니다."
        passValid = true;
    } else {
        message1.innerText = "* 비밀번호는 8자이상, 20자이하, 대소문자, 특수문자를 포함하여야합니다.";
        passValid = false;
    }
    if (userPass.value.length === 0){
        message1.innerText = "* 비밀번호를 입력해주세요."
    }
}

checkPass.onkeyup = () => { // 비밀번호 확인 검사
    let password = userPass.value;
    let check = checkPass.value;

    let message2 = document.querySelector('#help2');

    if (password === check) {
        message2.innerText = "* 비밀번호 일치";
        checkValid = true;
        editPass.style.backgroundColor = "#7F6AEE"
    } else {
        message2.innerText = "* 비밀번호가 일치하지 않습니다.";
        checkValid = false;
        editPass.style.backgroundColor = "#ACA0EB"
    }
    if (checkPass.value.length === 0){
        message2.innerText = "* 비밀번호를 입력해주세요."
    }
}

editPass.addEventListener('click', () => {

    if (passValid && checkValid) {
        alert("수정 완료");
    }
})

function validatePassword(password) {
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    return passwordRegex.test(password);
}