function calc() {
    var currentYear = 2023;
    //사용자로부터 입력을 받은 값으로 변수 birthYear에 할당함.
    var birthYear = prompt("태어난 년도를 입력하세요.", "YYYY");
    //변수 age를 0으로 초기화함.
    var age = 0;
    age = currentYear - birthYear + 1;
    //실제 나이를 구하기 위한 코드
    document.querySelector("#result").innerHTML = 
    "당신의 나이는 " + age + "세 입니다.";
}