let changeProfile = document.querySelector('#changeProfile');
let userId = document.querySelector('#userId');
let userPass = document.querySelector('#userPass');
let checkPass = document.querySelector('#checkPass');
let userName = document.querySelector('#userName');

let signUp = document.querySelector('#signUp');
let toLogin = document.querySelector('#toLogin');

let upload = document.querySelector('#upload');

let idValid = false;
let passValid = false;
let checkValid = false;
let nameValid = false;

// 헤더 화살표 부분
let prev = document.querySelector('.prev');
prev.addEventListener('click', () => {
    window.location.href = "./login.html";
})
// 헤더 화살표 끝


upload.addEventListener('change', () => { // 이미지 업로드 이벤트
    let hor = document.querySelector('.hor');
    let ver = document.querySelector('.ver');

    hor.style.opacity = "0";
    ver.style.opacity = "0";

    const preContainer = document.querySelector('.createProfile');
    const preImage = preContainer.querySelector('img');

    const file = upload.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', () => {
        if (preImage) {
            preImage.remove();
        }
        const image = document.createElement('img');
        image.src = reader.result;
        preContainer.appendChild(image);
    });

    if (file) {
        reader.readAsDataURL(file);
    }
});

userId.onkeyup = () => { //이메일 입력
    let message1 = document.querySelector('#help1');

    if (userId.value.length >= 10) {
        message1.innerText = '* 이메일 길이 적당';
        idValid = true;
    }
    if (userId.value.length < 10) {
        message1.innerText = '* 이메일 길이 짧음';
        idValid = false;
    }
}

userPass.onkeyup = () => { // 비밀번호 입력
    let password = userPass.value;
    let message2 = document.querySelector('#help2');


    if (validatePassword(password)) {
        message2.innerText = "비밀번호가 적당합니다."
        passValid = true;
    } else {
        message2.innerText = "비밀번호는 8자이상, 20자이하, 대소문자, 특수문자를 포함하여야합니다.";
        passValid = false;
    }
}

checkPass.onkeyup = () => { // 비밀번호 확인 검사
    let password = userPass.value;
    let check = checkPass.value;

    message3 = document.querySelector('#help3');

    if (password === check) {
        message3.innerText = "비밀번호 일치";
        checkValid = true;
    } else {
        message3.innerText = "비밀번호가 일치하지 않습니다.";
        checkValid = false;
    }
}

userName.onkeyup = () => { // 닉네임 입력 검사
    let message4 = document.querySelector('#help4');
    let validName = validUserName(userName.value);

    if (validName === true) {
        message4.innerText = "적합한 닉네임입니다.";
        nameValid = true;
    } else {
        message4.innerText = "한글,영어,숫자만 입력해주세요.";
        nameValid = false;
    }

    if (userName.value.includes(' ')) {
        message4.innerText = "공백을 제거해주세요.";
        nameValid = false;
    }

    if (userName.value.length > 10) {
        message4.innerText = "10자 이하로 입력해주세요.";
        nameValid = false;
    }

    if (idValid && passValid && checkValid && nameValid) {
        signUp.style.backgroundColor = "#7F6AEE";
    } else {
        signUp.style.backgroundColor = "#ACA0EB";
    }
}

signUp.addEventListener('click', () => { // 회원가입 버튼
    if (idValid && passValid && checkValid && nameValid) {
        window.location.href = "./login.html";
    } else {
        alert("정보를 확인해주세요.");
    }
})

toLogin.addEventListener('click', () => { // 로그인하러 가기 버튼
    window.location.href = "./login.html";
})

function validUserName(userName) {
    let userNameRegex = /^[a-zA-Z가-힣0-9]*$/;

    return userNameRegex.test(userName);
}


function validatePassword(password) {
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    return passwordRegex.test(password);
}