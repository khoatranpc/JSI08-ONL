console.log(`Connected`);

// APIs: là cách thức để tương tác data

// sử dụng cơ chế bất đồng bộ: async  await

let callData = async ()=>{
    let data = await fetch('https://jsonplaceholder.typicode.com/posts');
    let jsonData  = await data.json();

    localStorage.setItem('data',JSON.stringify(jsonData));

    console.log(JSON.parse(localStorage.getItem('data')));
}
callData();
// cơ chế hoạt động của promise: https://res.cloudinary.com/practicaldev/image/fetch/s--us8FF30N--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/6wxjxduh62fqt531e2rc.gif

