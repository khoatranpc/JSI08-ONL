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
        this.h1.innerText="Đăng ký"
        this.inputEmail.name = "email";
        this.inputEmail.type = "email";

        this.inputPassword.type = "password";
        this.inputPassword.name = "password";
        this.button.innerText="Register"
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
}
let createFormRegister = new Form();

createFormRegister.createForm();
document.querySelector('div.container').innerHTML += createFormRegister.root.innerHTML;