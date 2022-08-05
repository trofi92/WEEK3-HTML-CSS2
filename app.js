// 회원가입 링크 클릭시 메시지 송출
function handleToLogin() {
    document.getElementsByClassName("to-login");
    addEventListener("click", alert("회원가입 페이지로 이동합니다!"));
}

//평가 폼 이용시 메시지 송출
function handleSubmitInput() {
    document.getElementsByClassName("submit");
    addEventListener("click", alert("감사합니다!"));
};

// 평가 폼 숨기기, 드러내기
function handleVisible() {
    const display = document.getElementById("rating"); 
    if (rating.style.display !== "none") {
        rating.style.display = "none";
    }
    else {
        rating.style.display = "block";
    }
}

// 로그인-테이블 페이지 함수, 제출시 사용하지 않음.
// function openMain(){
//     window.close(self);
//     window.open("./index.html");
// }

// function handleJoinInput(){
//     // event.preventDefault();
//     document.getElementsByClassName("joinComplete");
//     addEventListener("click", alert("가입완료!"));
//     openMain();
// };


