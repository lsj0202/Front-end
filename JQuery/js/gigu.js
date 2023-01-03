$(document).ready(function(){
    //지구이미지 웹요소(노드) 찾아서 저장
    var $gigu = $("#gigu");
    //버튼에 이벤트를 등록.
    $("#btnStart").click(function(){
        $gigu.animate({
            left: "480px"
        }, 1000);
    })
})