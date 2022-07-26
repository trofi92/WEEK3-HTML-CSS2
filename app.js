
function handleSubmitInput(){
    document.getElementsByClassName("submit");
    addEventListener("click", alert("감사합니다!"));
};


function handleToLogin() {
    document.getElementsByClassName("to-login");
    addEventListener("click", alert("회원가입 페이지로 이동합니다!"));
}





function handleVisible() {
    const visible = document.getElementById("rating"); 
    if (rating.style.visibility !== "hidden") {
        rating.style.visibility = "hidden";
    }
    else {
        rating.style.visibility = "visible";
    }
}

console.log(rating)