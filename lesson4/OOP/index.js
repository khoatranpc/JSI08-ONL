class Form {
    constructor() {
        this.node = document.createElement("div");
        this.root = document.createElement("div");
        this.h1 = document.createElement("h1");
        this.form = document.createElement("form");
        this.inputEmail = document.createElement("input");
        this.inputPassword = document.createElement("input");
        this.button = document.createElement("button");
    }
    createAttributes() {
        this.node.className = "form-sigup";
        this.h1.innerText = "Đăng ký"
        this.inputEmail.name = "email";
        this.inputEmail.type = "email";

        this.inputPassword.type = "password";
        this.inputPassword.name = "password";
        this.button.innerText = "Register"

        this.button.type = 'submit'
    }
    createForm() {
        this.createAttributes();
        // khởi tạo form
        this.form.appendChild(this.inputEmail);
        this.form.appendChild(this.inputPassword);
        this.form.appendChild(this.button);

        // khởi tạo node cho form
        this.node.appendChild(this.h1);
        this.node.appendChild(this.form);

        //khởi tạo innerhtml cho node
        this.root.appendChild(this.node);

    }
    register(email, password) {
        try {
            if (email == '') throw new Error("Email must be not empty!");
            if (password == '' || password.length <= 6)
                throw new Error("Password must be not empty and large 6 character!");
            // code...
            const account = {
                email: email,
                password: password
            }
            let listAccount;
            if (localStorage.getItem('listAccount'))
                listAccount = JSON.parse(localStorage.getItem('listAccount'))
            else listAccount = new Array();
            // sử dụng filter để lọc ra các email đã tồn tại,
            // kết quả trả về của filter luôn có độ rộng bằng với số lượng các giá trị thỏa mãn điều kiện
            const checkExistedEmail = listAccount.filter((item, index) => {
                return item.email == email;
            })
            if (checkExistedEmail.length != 0) throw new Error('Email already existed!')

            listAccount.push(account)

            localStorage.setItem('listAccount', JSON.stringify(listAccount));


        } catch (error) {
            alert(error.message);
        }
    }
}
let createFormRegister = new Form();
console.log('đây là oop');
createFormRegister.createForm();

document.querySelector('div.container').innerHTML += createFormRegister.root.innerHTML;

let form = document.querySelector('form');

let email = form['email'];
let password = form['password'];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    createFormRegister.register(email.value, password.value);
})
