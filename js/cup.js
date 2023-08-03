window.onload = () => {
    const cupImg = document.querySelector(".img-border img");
    cupImg.src = "./images/cup1.jpg";
    // cupImg.onclick = cupImgOnClickHandle;

    // document.onclick = () => {
    //     if(cupImg.src.includes("cup1")) {
    //         cupImg.src = "./images/cup2.jpg";
    //     }else {
    //         cupImg.src = "./images/cup1.jpg";
    //     }
    // }
    
}

const cupImgOnClickHandle = (e) => {
    console.log(e.target);
    if(e.target.src.includes("cup1")) {
        e.target.src = "./images/cup2.jpg";
    }else {
        e.target.src = "./images/cup1.jpg";
    }
}

