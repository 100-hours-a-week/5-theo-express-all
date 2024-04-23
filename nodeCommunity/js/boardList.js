let postCreate = document.querySelector('#postCreate');
let posts = document.querySelectorAll('.post');

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


postCreate.addEventListener('mouseout', () => { // 게시글 작성 버튼
    postCreate.style.backgroundColor = "#ACA0EB";
});

postCreate.addEventListener('mouseover', () => {
    postCreate.style.backgroundColor = "#7F6AEE";
});

postCreate.addEventListener('click', () => { // 게시글 작성 페이지로 이동
    window.location.href = "./boardCreate.html";
});

posts.forEach(post => {
    post.addEventListener('click', () => {
        window.location.href = "./boardDetail.html";
    });
});