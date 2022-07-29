
function handleSubmitInput(){
    document.getElementsByClassName("submit");
    addEventListener("click", alert("감사합니다!"));
};


function handleToLogin() {
    document.getElementsByClassName("to-login");
    addEventListener("click", alert("회원가입 페이지로 이동합니다!"));
}





function handleVisible() {
    const display = document.getElementById("rating"); 
    if (rating.style.display !== "none") {
        rating.style.display = "none";
    }
    else {
        rating.style.display = "block";
    }
}


function openMain(){
    window.close(self);
    window.open("./index.html");
}

function handleJoinInput(){
    // event.preventDefault();
    document.getElementsByClassName("joinComplete");
    addEventListener("click", alert("가입완료!"));
    openMain();
};


