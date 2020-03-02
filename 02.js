const axios = require('axios').default;
// axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => {
//         let dataPost = response.data;
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then((response) => {
//                 let dataUser = response.data;
//                 console.log(response);return;
//                 let rs = joindata(dataPost,dataUser);
//                 console.log(rs)
//             });
//     });

async function makeRequests() {

    let [u1, u2] = await Promise.all([
        axios.get('https://jsonplaceholder.typicode.com/posts'),
        axios.get('https://jsonplaceholder.typicode.com/users')
    ]);
    let dataPost = u1.data;
    let dataUser = u2.data;
    let rs = joindata(dataPost,dataUser);
    console.log(rs)
}

makeRequests();

const joindata = (data1,data2) => {
     // console.log(data2)
    let rs=[];
    for (let i=0;i<data1.length;i++){
        let userId = data1[i].userId;

        for (let j = 0; j < data2.length; j++) {
            let id = data2[j].id;
            if (userId == id){
                data1[i].user = data2[j];
                rs.push(data1[i]);
                break;
            }
        }


    }

    return rs;
}
