const plus = () => {
    const resultObj = document.querySelector(".result");
    let oldNumber = parseInt(resultObj.innerHTML);
    
    resultObj.innerHTML = oldNumber + 1;
}

const minus = () => {
    const resultObj = document.querySelector(".result");
    let oldNumber = parseInt(resultObj.innerHTML);
    
    resultObj.innerHTML = oldNumber - 1;
}