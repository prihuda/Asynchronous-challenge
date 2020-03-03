# Asynchronous-challenge

## Ecmascript 6 / ES6

Ecmascript 6 merupakan gebrakan yang sangat menginspirasi developer javascript untuk mengerjakan file .js menjadi lebih mudah.Pada versi ini problem yang ada pada ES5 bisa di handle lebih baik.<br>
Sebagai contoh:<br>
- Variable, constant pada javascript bisa dipakai sejak ES6 dengan menggunakan 'const' dan untuk mutable variable bisa menggunakan 'let'
- Arrow function, melakukan penyederhanaan penulisan sebuah function pada javascript dengan menggunakan panah '=>'
##### Regular function
```
function timesTwo(params) {  return params * 2}function timesTwo(params) {
     return params * 2
   }
   
   timesTwo(4);
```
##### Arrow function
```$xslt
var timesTwo = params => params * 2

timesTwo(4);
```
- Spread operator<br>
Sebagian besar digunakan pada variable array yang mana memiliki value lebih dari 1.Spread operator mengijinkan untuk mengambil list paramater pada sebuah array.Syntax spread operator sama layaknya rest paramater tapi memiliki fungsi yang berlawanan.
##### Normal concat
```$xslt
let arr = [1,2,3]; 
let arr2 = [4,5]; 
  
arr = arr.concat(arr2); 
  
console.log(arr);
```
##### Spread operator
```
let arr = [1,2,3]; 
let arr2 = [4,5]; 
  
arr = [...arr,...arr2]; 
console.log(arr); 
```
Untuk lebih jelasnya bisa kunjungi website [Tutorial ES6 lengkap](http://es6-features.org/#Constants)

## Function
Function merupakan sebuah code block yang digunakan untuk melakukan tugas tertentu, pada JavaScript mendeklarasikan function bisa dengan menggunakan keyowrd 'function', parantheses '()' dan curly bracked '{do something here}'<br>
Sebagai contoh:<br>
##### Normal function
```$xslt
function hello(){
    console.log("Hello world")
}
hello()
```
##### Function expression
```$xslt
const fun = function(){
console.log("Hello world")
}
fun()
```
##### Default parameter
Pada JavaScript membolehkan membuat parameter default dalam sebuah function, parameter tersebut akan menggantikan parameter yang dikirim pada function yang berupa undefined.
```$xslt
function f(a,b=1,c) {
    const x = c ? c: 1
    console.log(a * b / x)
}

f(10) //Output:10
f(10,2) //Output:20
f(10,2,4) //Output:5
```
##### Arrow function
```$xslt
const print = (value) => value.length
const fun = (a,b) => {
    let c = a * b
    let d = Math.floor((Math.random() * 10)+ 1)
    console.log(c/d)
}
console.log(print("Hello world")) //Output:11
fun(1000,10001)
```
## Array
Array adalah sekumpulan variabel yang memiliki tipe data yang sama dan dinyatakan dengan nama yang sama. Array merupakan konsep yang penting dalam pemrograman, karna array memungkinkan untuk menyimpan data maupun referensi objek dalam jumlah banyak dan terindeks.
####Contoh penggunaan
##### Spread operator
```
let arr = [1,2,3]; 
let arr2 = [4,5]; 
  
arr = [...arr,...arr2]; 
console.log(arr); 
```
##### Rest paramater
```$xslt
const total = (...arr) => {
    console.log(arr.reduce((x,y) => x * y))
}
total(1) //Output:1
total(1,2,3) Output:6
total(1,2,3,4,5,6) //Output:720
```
#### Array operation
##### Contoh penggunaan
```$xslt
let a = [1,2,3]
a.forEach(x => console.log(x)) //Output:1 \n 2 \n 3
a.map(x => x % 2 == 0 ? "genap" : "ganjil") //Output:"ganjil","genap",""ganjil""
```
Dan masih banyak lagi method yang dapat digunakan pada javascript, supaya lebih mahir akan lebih baik jika dipraktekkan satu persatu supaya hafal fungsi dan parameter yang digunakan pada method tersebut. Tips/trick, pada saat coding seorang developer bisa melihat method dengan cara object.'nama method' otomatis pada code editor akan menganjurkan method tersedia<br>
Untuk lebih jelasnya bisa kunjungi website [Tutorial array operation lengkap](https://developer.mozilla.org/id/docs/Web/JavaScript/Reference/Global_Objects/Array)
## Object
Di JavaScript, objek adalah entitas yang mandiri dengan properti dan tipe. Bandingkan dengan cangkir, misalnya. Sebuah cangkir adalah objek dengan banyak properti. Cangkir punya warna, desain, berat, materi bahan, dll. Dengan cara sama, objek JavaScript juga punya banyak properti yang menjelaskan karakteristiknya.
#### Contoh penggunaan
##### Spread operator
```$xslt
const a = {
    id:1,
    name: "Zeus"
}
const b = {
    ...a,
    live:"Yunani" //Output:{id:1, name:'Zeus' live:'Yunani'}
}
const c = {
    id:2,
    age:104
}
console.log({...b, ...c}) //Output:{id:1, name:'Zeus' live:'Yunani', age:104}
```
##### Object operation
Sama halnya dengan array operation, supaya lebih mahir akan lebih baik jika dipraktekkan satu persatu supaya hafal fungsi dan parameter yang digunakan pada method tersebut. Tips/trick, pada saat coding seorang developer bisa melihat method dengan cara object.'nama method' otomatis pada code editor akan menganjurkan method tersedia<br>
Untuk lebih jelasnya bisa kunjungi website [Tutorial object operation lengkap](https://developer.mozilla.org/id/docs/Web/JavaScript/Panduan/Working_with_Objects)
## Asynchronous
JavaScript (JS) terkenal dengan gaya asynchronous-nya dibanding dengan bahasa lain yang pada awalnya diakomodir menggunakan callback. Terlebih pada node.js yang hampir semua core API-nya bersifat async. Pada Asynchronous memiliki 3 status yaitu pending, fulfilled(resolve(value)), rejected(reject (value)).
#### Contoh Pending
```
let AuthUser = function(data) {
  return google.login(data.username, data.password).then(token => { return token } )
}

let userToken = AuthUser(data)
console.log(userToken) //Output:Promise { <pending> }
```
#### Callback
Alasan utama penggunaan asynchronous karna pada callback dapat menimbulkan callback hell dan sulit melakukan error handling
##### Callback Hell
```$xslt
const fs = require('fs');
fs.readFile('A.txt', 'utf8', (errA, resA) => {
  fs.readFile('B.txt', 'utf8', (errB, resB) => {
    fs.readFile('C.txt', 'utf8', (errC, resC) => {
      fs.readFile('D.txt', 'utf8', (errD, resD) => {
        console.log(resA, resB, resC, resD);
      });
    });
  });
});
```
#### Promise
```$xslt
const fs = require('fs');
const promiseA = new Promise((resolve, reject) => {
  fs.readFile('A.txt', 'utf8', (err, res) => {
    if (err) reject(err);
    resolve(res);
  });
});

const promiseB = new Promise((resolve, reject) => {
  fs.readFile('B.txt', 'utf8', (err, res) => {
    if (err) reject(err);
    resolve(res);
  });
});

const promiseC = new Promise((resolve, reject) => {
  fs.readFile('C.txt', 'utf8', (err, res) => {
    if (err) reject(err);
    resolve(res);
  });
});

const promiseD = new Promise((resolve, reject) => {
  fs.readFile('D.txt', 'utf8', (err, res) => {
    if (err) reject(err);
    resolve(res);
  });
});

promiseA
  .then(resA => {
    console.log('hasil A: ', resA);
  })
  .then(resB => {
    console.log('hasil B: ', resB);
  })
 .then(resC => {
    console.log('hasil C: ', resC);
  })
 .then(resD => {
    console.log('hasil D: ', resD);
  })
  .catch(err => console.log('error: ', err));
```
##### Promise Method
Beberapa static method yang bisa dipakai didalam Promise.
- Promise.all([promise1, promise2])
- Promise.race([promise1, promise2])
- Promise.resolve(value)
- Promise.reject(value)
```$xslt
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
```
#### Async - Await
Async function merupakan function yang mengandung ekspresi 'await' untuk menunggu hasil dari sebuah promise diselesaikan terlebih dahulu (synchronous).
```$xslt
async function test() {
    let arr = []
    for (let i = 1; i <= 3; i++) {
        await sleep(() => {
            // console.log(i)
            console.log(`${i}`)
        });
    }
    console.log("Done!");
}

const sleep = async (result, ...args) => {
    timeout(1000);
    return result(...args);
}

const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

test();
```





