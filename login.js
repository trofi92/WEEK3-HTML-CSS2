function store(){

    const name = document.getElementById('name');
    const pw = document.getElementById('pw');
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('가입시 사용한 메일 주소를 입력해주세요!');

    }else if(pw.value.length == 0){
        alert('비밀번호를 입력해주세요!');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('메일 주소와 비밀번호를 입력해주세요!');

    }else if(pw.value.length > 12){
        alert('12자리 이하로 입력해주세요!');

    }else if(!pw.value.match(numbers)){
        alert('숫자를 1개 이상 포함해주세요!');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('영어 대문자를 1자 이상 포함해주세요!');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('영어 소문자를 1자 이상 포함해주세요!');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('계정이 생성되었습니다!', window.close(self));
        window.open("/home/edu02/WEEK3-HTML-CSS2/login.html")
    }
}

//checking
function check(){
    const storedName = localStorage.getItem('name');
    const storedPw = localStorage.getItem('pw');

    const userName = document.getElementById('userName');
    const userPw = document.getElementById('userPw');
    const userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('로그인 되었습니다!',window.close(self));
    }else{
        alert('문제가 발생했습니다. 다시 시도해주세요.');
    }
    window.open("https://trofi92.github.io/")
}