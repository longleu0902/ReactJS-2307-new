// const listTagLi = document.getElementsByClassName('favorite-list-item')
// // y1
// for(i = 0;i<listTagLi.length;i++){
//     listTagLi[i].innerHTML = 'I Love this thing'
// }
// //y2
// for(i=0;i<listTagLi.length;i++){
//     listTagLi[i].style.color='red'
// }
// //y3
// const content = ''
// // tao the moi
// const tagli = document.createElement('li')
// //gan noi dung vua tao
// tagli.innerHTML = content;
// // chi dinh vi tri muon them the vua tao
// document.getElementById('favorite-list').appendChild(tagli)
// //su kien oneclick
// //cach1
// function logger(){
//     alert('aaa')
// }
// //cach2
// const a = document.getElementById('btn')
// a.onclick = function (){
//     alert('xin chao');
// }
// //cach 3
// const b = document.getElementById('btn-bye')
// b.addEventListener('click',function(){
//     console.log(`thanhcong`)
// })

//btvn 
//bai1
//1
const $inputUrl = document.getElementById('url')
const $image = document.getElementById('img')
const $inputwidth = document.getElementById('width')
const $inputheight = document.getElementById('height')
const $inputalt = document.getElementById('alt')
$inputUrl.onchange = function(){
    const inputvalue = $inputUrl.value;
    $image.setAttribute('src', inputvalue);
}
//2
$inputwidth.onchange = function(){
    const inputvalue = $inputUrl.value;
    $image.style.width = inputvalue
}
//
$inputheight.onchange = function(){
    const inputvalue = $inputheight.value;
    $image.style.height = inputvalue
}
$inputalt.onchange = function(){
    const inputvalue = $inputalt.value
    $image.setAttribute('alt',inputvalue)
}

