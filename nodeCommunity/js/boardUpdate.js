let postTitle = document.querySelector('#postTitleText');
let postText = document.querySelector('#postText');
let message = document.querySelector('#helpCreateMain');
let postDone = document.querySelector('#postDone');

let validTitle = false;
let validMain = false;

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

// 헤더 화살표 부분
let prev = document.querySelector('.prev');
prev.addEventListener('click', () => {
    window.location.href = "./boardDetail.html";
})
// 헤더 화살표 끝

postTitle.onkeyup = () => { // 제목 입력 부분

    if (postTitle.value.length >= 26) {
        message.innerText = "* 제목은 26를 초과할 수 없습니다."
    }

    if (postTitle.value.length !== 0 && postTitle.value.length <= 26) {
        validTitle = true;
        message.innerText = "* 제목 길이 적당"
    } else {
        validTitle = false;
    }
}

postText.onkeyup = () => {

    if (postText.value.length !== 0) {
        validMain = true;
    } else {
        validMain = false;
    }

    if (validTitle && validMain) {
        postDone.style.backgroundColor = "#7F6AEE";
    } else {
        postDone.style.backgroundColor = "#ACA0EB";
    }
}

postDone.addEventListener('click', () => {

    if (validTitle && validMain) {
        alert("게시글 등록 완료.");
        window.location.href = "./boardDetail.html";
    } else {
        alert("제목, 내용을 확인해주세요.");
    }
})