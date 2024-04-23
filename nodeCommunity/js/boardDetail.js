// 댓글 수정
// 댓글 삭제 - 모달

let postEdit = document.querySelector('#postEdit');
let postDelete = document.querySelector('#postDelete');
let commentUpload = document.querySelector('#commentUpload');
let commentSubmit = document.querySelector('#commentSubmit');

let commentText = document.querySelector('#commentValue');

let commentUpdate = document.querySelector('#commentUpdate');
let commentDelete = document.querySelector('#commentDelete');

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
    window.location.href = "./boardList.html";
})
// 헤더 화살표 끝

postEdit.addEventListener('click', () => { // 게시글 수정으로 이동 버튼
    window.location.href = "./boardUpdate.html";
})

postDelete.addEventListener('click', () => { // 게시글 삭제. 모달 표현
    let postModal = document.querySelector('.modal');
    let postOk = document.querySelector('#postOk');

    postModal.classList.add('on');

    postOk.addEventListener('click', () => {
        alert("게시글 삭제 완료.");
        window.location.href = "./boardList.html";
    })
})

commentSubmit.onkeyup = () => { // textarea에 댓글 작성시 버튼 색상 활성화
    if (commentSubmit.value.length !== 0) {
        commentUpload.style.backgroundColor = "#7F6AEE";
    } else {
        commentUpload.style.backgroundColor = "#ACA0EB";
    }
}

commentUpload.addEventListener('click', () => { // 댓글 등록 버튼
    //form 가져와서 넘겨줘야됨 나중에

    if (commentSubmit.value.length !== 0) {
        alert(`${commentSubmit.value} 등록 완료`);
        commentText.innerText = commentSubmit.value;
        commentSubmit.value = ''; // textarea 비워주기
        commentUpload.innerText = "댓글 등록";
    } else {
        alert("댓글을 입력해주세요.");
    }
})

commentUpdate.addEventListener('click', () => { // 수정버튼
    commentSubmit.value = commentText.innerText;
    commentUpload.innerText = "댓글 수정";
})

commentDelete.addEventListener('click', () => { // 이거 forEach안해서 맨위만 적용되는중
    let commentModal = document.querySelector('.commentModal');
    let commentOk = document.querySelector('#commentOk');

    commentModal.classList.add('on');

    commentOk.addEventListener('click',()=>{
        commentModal.classList.remove('on');
    })
})