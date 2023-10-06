
let users = [{
    "id": 1,
    "first_name": "Lorilee",
    "last_name": "Adame",
    "email": "ladame0@guardian.co.uk",
    "password": "12345678"
}, {
    "id": 2,
    "first_name": "Gannon",
    "last_name": "Manwell",
    "email": "gmanwell1@naver.com",
    "password": "12345678"
}, {
    "id": 3,
    "first_name": "Christiana",
    "last_name": "Dowtry",
    "email": "cdowtry2@mapy.cz",
    "password": "12345678"
}, {
    "id": 4,
    "first_name": "Warden",
    "last_name": "Ansteys",
    "email": "wansteys3@yahoo.com",
    "password": "12345678"
}, {
    "id": 5,
    "first_name": "Claybourne",
    "last_name": "Barbosa",
    "email": "cbarbosa4@si.edu",
    "password": "12345678"
}, {
    "id": 6,
    "first_name": "Zita",
    "last_name": "Triner",
    "email": "ztriner5@youku.com",
    "password": "12345678"
}, {
    "id": 7,
    "first_name": "Orsa",
    "last_name": "Pilcher",
    "email": "opilcher6@surveymonkey.com",
    "password": "12345678"
}, {
    "id": 8,
    "first_name": "Lyn",
    "last_name": "Fockes",
    "email": "lfockes7@answers.com",
    "password": "12345678"
}, {
    "id": 9,
    "first_name": "Harv",
    "last_name": "Olifaunt",
    "email": "holifaunt8@jalbum.net",
    "password": "12345678"
}, {
    "id": 10,
    "first_name": "Nikita",
    "last_name": "Duncanson",
    "email": "nduncanson9@harvard.edu",
    "password": "12345678"
}];
console.log(users)
//Đăng nhập//
const $email = document.getElementById('email');
const $password = document.getElementById('password');
const $Dangnhap = document.getElementById('dangnhap');
function nhapthongtin(){
    for(let e of users){
        if($email.value==e.email&&$password.value==e.password){
            console.log('xin chào'+' '+e.first_name+e.last_name);
            break;
        }else if($email.value!=e.email&&$password.value!=e.password){
            console.log('thông tin nhập chưa chính xác');
            break;
        }
    }
}
$Dangnhap.onclick = function(){
    if($email.value==''|| $password== ''){
        console.log('Hay nhap du thong tin')
    }else{
       nhapthongtin();
    }
}
//Đăng ký//
const $firtname = document.getElementById('firtname');
const $lastname = document.getElementById('lastname');
const $emaildangky= document.getElementById('email-dangky');
const $passworddangky = document.getElementById('password-dangky');
const $dangky = document.getElementById('dangky');
function themID(){
    const a = users.at(-1);
    return a.id + 1
}
function kiemtraThongtin(){
    for(let e of users){
        if($emaildangky.value==e.email){
            return true
        }
    }
}
function nhapthongtindangky(){
    for(let e of users){
        if(kiemtraThongtin()==true){
            console.log('Email này đã có tài khoản')
            break;
        }else if($emaildangky.value!=e.email){
            console.log('Đăng ký thành công')
            let addusers = [
                {
                    id : themID(),
                    first_name : $firtname.value,
                    last_name : $lastname.value,
                    email : $emaildangky.value,
                    password: $passworddangky.value
                }
            ]
            users.push(...addusers)
            console.log(users);
            break;
        }
    }
}
$dangky.onclick = function(){
    if($firtname.value==''){
        console.log('Hãy nhập đầy đủ thông tin')
    }else if($lastname.value==''){
        console.log('Hãy nhập đầy đủ thông tin')
    }else if($emaildangky.value==''){
        console.log('Hãy nhập đầy đủ thông tin')
    }else if($passworddangky.value == '' ){
        console.log('Hãy nhập đầy đủ thông tin')

    }else{
        nhapthongtindangky();
    }
}
 //Tìm kiếm//
 const $btnsearch = document.getElementById('btn-search');
$btnsearch.onclick = function(){
 const keyword = document.getElementById('input-search').value;
   const data = users.filter(
    (item) =>
    item.first_name+item.last_name == keyword ||
    item.email == keyword 
    ) 
    if(keyword==''){
        for(let e of users){
            console.log(
                `
                ID : ${e.id}
                Name: ${e.first_name} ${e.last_name}
                Email : ${e.email}
             `   
            ) 
        }
    }else{
    console.log(locthongtin(data));
    }
}
function locthongtin(a){
    for(let e of a){
        return `
        ID : ${e.id}
        Name: ${e.first_name} ${e.last_name}
        Email : ${e.email}
     `
    }
}

