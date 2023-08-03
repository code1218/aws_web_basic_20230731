window.onload = () => {
    const numbers = [1,2,3,4,5];

    const numbers2 = numbers.map((n) => {
        return n * 2;
    });

    console.log(numbers.join(""));
    console.log(numbers2);


    loadUserList();
}

const userList = new Array();
userList.push({username: "aaa", password: "1111"});
userList.push({username: "bbb", password: "2222"});
userList.push({username: "ccc", password: "3333"});
userList.push({username: "ddd", password: "4444"});
userList.push({username: "eee", password: "5555"});
userList.push({username: "fff", password: "6666"});

const loadUserList = () => {
    const userListTbody = document.querySelector(".user-list");

    for(let i = 0; i < userList.length; i++) {
        userListTbody.innerHTML += `
            <tr>
                <td>${userList[i].username}</td>
                <td>${userList[i].password}</td> 
            </tr>
        `;
    }

    const mapTest = userList.map((user) => {
        return `
            <tr>
                <td>${user.username}</td>
                <td>${user.password}</td> 
            </tr>
        `
    });

    console.log(mapTest)

    userListTbody.innerHTML = mapTest.join("");

    
};
