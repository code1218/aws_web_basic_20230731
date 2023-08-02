window.onload = () => {
    main();
}

function main() {
    console.log("개발자 관리 도구의 콘솔창에 출력");
    
    alert("알림창");

    let flag = confirm("예, 아니오 선택");
    console.log(flag);
    
    let name = prompt("이름을 입력하세요.");
    console.log(name);
}