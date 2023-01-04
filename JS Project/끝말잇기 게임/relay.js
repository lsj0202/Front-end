const number = parseInt(prompt('몇명이 참가하나요?'));

const $button = document.querySelector('button');
const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');

let word; // 제시어 
let newWord; //새로 입력한 단어

const onClickButton = () => {
    if(!word){//비어있는 경우
        word = newWord;
        $word.textContent = word;
        $input.value = '';
        const order = parseInt($order.textContent); //현재 순서
        if(order === number){
            $order.textContent = 1;
        }
        else{
            $order.textContent = order + 1;
        }
        $input.focus();
    }
    else{
        //비어있지 않은 경우
        if(word[word.length -1] === newWord[0]){
            word = newWord;
            $word.textContent = word;
            $input.value = '';
            const order = parseInt($order.textContent);
            if(order === number){
                $order.textContent = 1;
            }
            else{
                $order.textContent = order + 1;
            }
        }
        else{
            alert('올바르지 않은 단어입니다!');
            alert("게임 종료!");
            $input.value = '';
            $input.focus();
        }
    }
};

const onInput = (event) => {
    newWord = event.target.value; //입력한 단어를 현재 단어로
};

$button.addEventListener('click',onClickButton);
$input.addEventListener('input',onInput);