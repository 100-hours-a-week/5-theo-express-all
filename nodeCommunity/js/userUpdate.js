let userName = document.querySelector('#userName');
let update = document.querySelector('#edit'); // 수정 성공하면 밑에 수정완료 보여야됨. hide 했다 푸는거나, opacity 조정하면 될듯
let done = document.querySelector('.done');

let leave = document.querySelector('#leave');
let modal = document.querySelector('.modal');

let nameValid = false;

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


userName.onkeyup = () => { // 닉네임 입력 검사
    let message = document.querySelector('#help');
    let validName = validUserName(userName.value);

    if (userName.value.length != 0 && validName === true) {
        message.innerText = "적합한 닉네임입니다.";
        nameValid = true;
    } else {
        message.innerText = "* 한글,영어,숫자만 입력해주세요.";
        nameValid = false;
    }
    if (userName.value.length === 0) {
        message.innerText = "* 닉네임을 입력해주세요."
    }

    if (userName.value.includes(' ')) {
        message.innerText = "* 공백을 제거해주세요.";
        nameValid = false;
    }

    if (userName.value.length > 10) {
        message.innerText = "* 10자 이하로 입력해주세요.";
        nameValid = false;
    }

    if (nameValid) {
        update.style.backgroundColor = "#7F6AEE";
    } else {
        update.style.backgroundColor = "#ACA0EB";
    }
}



update.addEventListener('click', () => { // 수정하기 버튼

    if (nameValid === true) {
        done.classList.add('on');
    }
})

leave.addEventListener('click', () => { // 회원탈퇴 버튼
    let ok = document.querySelector('.ok');

    modal.classList.add('on');

    ok.addEventListener('click',()=>{ // 확인 클릭시 로그인 페이지
        window.location.href = "./login.html"
    })
})

function validUserName(userName) {
    let userNameRegex = /^[a-zA-Z가-힣0-9]*$/;

    return userNameRegex.test(userName);
}







///// 이미지 변경 시도해봤습니다. 나중에 하기 ///
// upload.addEventListener('change', () => { // 이미지 업로드 이벤트
//     const preContainer = document.querySelector('.profileImage');
//     const preImage = preContainer.querySelector('img');

//     const changeButton = document.querySelector('#change');
//     changeButton.style.display = "none";

//     const file = upload.files[0];
//     const reader = new FileReader();

//     reader.addEventListener('load', () => {
//         if (preImage) {
//             preImage.remove();
//         }
//         const image = document.createElement('img');
//         image.src = reader.result;
//         preContainer.appendChild(image);
//     });

//     if (file) {
//         reader.readAsDataURL(file);
//     }
// });