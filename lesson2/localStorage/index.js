console.log(`Connected`);

// localStorage
// Nó là 1 dạng cơ sở dữ liệu, được cung cấp bởi trình duyệt, lưu theo từng trang web
// Nó giới hạn, nó sẽ không bị mất, khi chúng ta reload trang web
// Các phương thức làm việc với csdl: CRUD | create, read, update, delete

// Đối với localStorage: set, get, remove


// dom tới thẻ form
let domForm = document.querySelector('form');
domForm.addEventListener('submit', (e) => {
    e.preventDefault();
})



//dom btn add item
let btnAddItem = document.querySelector('button.btn-add');

//dom tới phần hiển thị dữ liệu div.container-list-item
let listItem = document.querySelector('div.container-list-item');


// lấy giá trị từ localStorage truyền ra
// cú pháp: localStorage.getItem('key')



listItem.innerHTML += `<div class="item">
    <span>${localStorage.getItem('itemTodo')}</span>
    <button class="remove-item">Remove</button>
</div>`

btnAddItem.addEventListener('click', (e) => {
    // lấy giá trị thẻ input có name: itemTodo
    let inputAddItem = domForm.itemTodo.value;

    localStorage.setItem('itemTodo',inputAddItem);

    listItem.innerHTML += `<div class="item">
    <span>${inputAddItem}</span>
    <button class="remove-item">Remove</button>
</div>`
})


// cú pháp để thêm, hoặc cập nhật: localStorage.setItem('key','value')