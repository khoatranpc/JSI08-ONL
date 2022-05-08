console.log(`Connected!`);
// thế nào là đối tượng, đối tượng được xây dựng từ đâu
// object
// kiểu dữ liệu object
// let doremon = {
//     name: "Do rả ê mon",
//     skin: "Blue",
//     head: "Radius Circle, Without ear!",
//     height: "lùn!"
// }
// let Car = {
//     type: "Model 1980s",
//     name: "Fiat",
//     color: "White",
//     drive: function () {
//         console.log(`The car with name ${this.name} is running!`);
//     },
//     brake: function () {
//         console.log(`The car with name ${this.name} is braking!`);
//         let count = 4;
//         let idCount = setInterval(() => {
//             count = count - 1
//             console.log("Den do: ",count);
//             if (count == 0) {
//                 let timeOut = setTimeout(() => {
//                     this.drive();
//                     return clearTimeout(timeOut);
//                 }, 1000)
//                 return clearInterval(idCount);
//             }
//         }, 1000);
//     }
// }
// Car.brake();

// constructor

// function person(name, age, height) {
//     this.name = name;
//     this.age = age;
//     this.height = height;
// }
// // đây mới được gọi là đối tượng
// let khoa = new person("Tran Dang Khoa", 10, 150);
// console.log(khoa);

class Person {

    // constructor
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    eat() {
        console.log(`Đang ăn nè!`);
    }
}
let Khoa = new Person("Trần đăng Khóa");

console.log(Khoa.name);


