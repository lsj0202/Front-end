window.onload = () => {
    const $container = document.querySelectorAll('.container1');
    console.log($container);  //NodeList 객체

    //FAQ 본문 선택
    let $answer1 = document.querySelectorAll('.answer1');
    //console.log($answer1[i]);
    console.log($answer1);

    const $btn = document.getElementById('btn');
    console.log($btn);

    //반복문을 순회하면서 해당 FAQ 제목 클릭시 콜백 처리
    for(let i=0; i<$container.length; i++) {
        $container[i].addEventListener('click', () =>{
            //클릭시 처리 할 일
            console.log('나클릭' + i );  //HTMLElement 객체

            //FAQ 제목 클릭시 --> 본문이 보이게끔 --> active 클래스 추가.
            //this.classList.add('active');
            $answer1[i].classList.add('active');
        });
    }

    $btn.addEventListener('click', () => {
        //버튼 클릭시 처리할 일
        console.log('모두 닫기 버튼');
        
        for(let i = 0; i< $answer1.length; i++){
            $answer1[i].classList.remove('active');
        }
    });
}

