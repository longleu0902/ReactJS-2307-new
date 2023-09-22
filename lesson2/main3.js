const $sumit = document.getElementById('Dangky')
const $name = document.getElementById('Name')
const $age = document.getElementById('age')
const $adress = document.getElementById('adress')
const $email = document.getElementById('email')
const $password = document.getElementById('password')
function kiemtra(){
    if($name.value==''){
        alert('Không được để trống tên')
    }else if($age.value==''){
        alert ('Không được để trống tuổi')
    }else if($adress.value==''){
        alert ('Không được để trống địa chỉ')
    }else if($email.value==''){
        alert ('Không được bỏ trống email')
    }
    else if($password.value.length<6){
        alert ('Mật khẩu ít nhất 6 kí tự')
    }else {
        alert('Đăng kí thành công')
    }
}
