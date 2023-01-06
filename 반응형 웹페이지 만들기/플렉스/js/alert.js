const $id = document.querySelector('#id');
            const $pw = document.querySelector('#pw');
            const $forget = document.querySelector('#forget');
            const $login = document.querySelector('#login');

            let errStack = 0;

            login.addEventListener('click', () => {
                if (id.value == 'lsj0202') {
                    if (pw.value == 'lsj0202!') {
                        alert('로그인 되었습니다!');
                    }
                    else {
                        alert('아이디와 비밀번호를 다시 한 번 확인해주세요!');
                        errStack ++;
                        alert(`틀린 횟수 ${errStack}`);
                    }
                }
                else {
                    alert('존재하지 않는 계정입니다.');
                }
                if (errStack >= 5) {
                    alert('비밀번호를 5회 이상 틀리셨습니다. 비밀번호 찾기를 권장드립니다.');
                }
            });

            forget.addEventListener('click', () =>{
                alert('비밀번호를 찾으시겠습니까?');
            });