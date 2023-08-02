const signinButtonOnClickHandle = () => {
    AccountSevice.getInstance().signin();
};

class AccountSevice {
    
    authUsername = "aaa";
    authPassword = "1234";

    // 변수명 앞에 #을 붙이면 private 접근지정자
    static #instance = null;

    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new AccountSevice();
        }
        return this.#instance;
    }

    signin() {
        const usernameInput = document.querySelector(".username-input");
        const passwordInput = document.querySelector(".password-input");
        const username = usernameInput.value;
        const password = passwordInput.value;

        if(username !== this.authUsername || password !== this.authPassword) {
            alert("사용자 정보를 확인하세요.");
            return;
        }

        alert("로그인 성공");
    }

}