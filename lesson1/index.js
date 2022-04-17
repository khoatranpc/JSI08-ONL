console.log('Connected');

//JSA: object,
//khai báo:

// let student = {
//     name:"Khoa dep trai",
//     age:10,
//     crush:"Ngoc Trinh"
// }


// cách hoạt động (thông dịch) file js

// file js sẽ đọc từ trên xuống dưới
// đọc xong câu lệnh này sẽ tới câu lệnh khác, đọc từ trái qua phải


// sử lý bất đồng bộ

// C1: sử dụng Callback function
// C2: Promise

// C3: async  await

// cú pháp

// thường sẽ sử dụng đối với hàm

// let AsyncFnc = async () => {
//     //time
//     //   await code....
// }

//APIs: nó là 1 dạng tương tác dữ liệu | CRUD  | thêm, sửa, xóa, tìm kiếm

// localStorage: nó là dạng lưu trữ dữ liệu của trình duyệt, nó có giới hạn
// update, xóa, tìm kiếm

// kiểu dữ liệu JSON

//----------

// kiểu dữ liệu: string, number, array, object

// Array
//khai báo

// let arr = [3, 4, 7, 12, 3, 8, 1, 324, 5, 8, 43, 0];

//duyệt mảng

// map -> return any array

// arr.map((item, index) => {
//     console.log(`Item of array: ${item} with index: ${index}`);
// });

// có thể trả về một điều kiện nào đó
// arr.filter((item, index) => {
//     // console.log(`Item of array: ${item} with index: ${index}`);

//     return item % 2 == 0 ? console.log(item):console.log('not');;
// })


// let arr = [1, 2, 3, 1, "Khoa mindX", {
//     name: "Khoa",
//     age: 10
// }];

// arr.map((item, index) => {
//     if (typeof item == "object") {
//         console.log(`Item of array: ${item.name} with index: ${index}`);
//     } else {
//         console.log(`Item of array: ${item} with index: ${index}`);
//     }
// });

// yêu cầu 1: Tạo 1 mảng object (name, age, crush) bao gồm 5 phần tử
// sử dụng hàm map để in ra tên của các phần tử này trong mảng vừa tạo


// let arrObject = new Array();

// let arrObject = [{
//     name: "Khoa",
//     age: 10
// },
// {
//     name: "May",
//     age: 2
// }, {
//     name: "Gio",
//     age: 5
// }, {
//     name: "yasuo",
//     age: 6
// }, {
//     name: "Riven",
//     age: 1
// },
// ];

// arrObject.map((item, index) => {
//     console.log(`Item of array: ${item.name} with index: ${index}`);
// })


let arrObject = [{
    name: "Khoa",
    age: 10
},
{
    name: "May",
    age: 2
}, {
    name: "Gio",
    age: 5
}, {
    name: "yasuo",
    age: 6
}, {
    name: "Riven",
    age: 1
},
];

// yêu cầu 2: sử dụng mảng object đã tạo ở yêu cầu 1, thực hiện dùng hàm filter
// log ra màn hình tên của object mà tuổi > 5

arrObject.filter((item,index) => {
    return (item.age > 5) ? console.log(`Name: ${item.name}; age: ${item.age}`) : console.log(`Not`);
})












