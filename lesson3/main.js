let liststudent = [];
if(localStorage.getItem('liststudent')!==null){
    liststudent = JSON.parse(localStorage.getItem('liststudent'));
}
function renderData(data=[]){
    
let stringHTML=''
for(i=0;i<data.length;i++){
    stringHTML += `
    <tr>
    <th scope="row">${data[i].id}</th>
    <td class="id">${data[i].name}</td>
    <td class="age">${data[i].age}</td>
    <td class="gender">${data[i].gender}</td>
    <td class="point">${data[i].point}</td>
    <td>
        <button onclick="updateStudent(${data[i].id})"  type="button" class="btn btn-success">Update</button>
        <button onclick="deleteStudent(${data[i].id})" type="button" class="btn btn-danger">Delete</button>
    </td>
  </tr>

    `
}
document.getElementById('data-student').innerHTML = stringHTML;
}

function clearInput(){
     document.getElementById('id').value='';
     document.getElementById('name').value='';
     document.getElementById('age').value='';
     document.getElementById('gender').value='';
     document.getElementById('Point').value='';
}

//addstundent
const $btnadd = document.getElementById('btn-addstudent')
$btnadd.addEventListener('click' , function(){
    let addstudent = [
        {
            id : document.getElementById('id').value,
            name :document.getElementById('name').value,
            age: document.getElementById('age').value,
            gender: document.getElementById('gender').value,
            point: document.getElementById('Point').value,
        }
      ]
    liststudent.push(...addstudent)
    localStorage.setItem('liststudent',JSON.stringify(liststudent));
    console.log(liststudent)
    clearInput();
    renderData(liststudent);
    
})
//reload lai trang web không mất giữ liệu
renderData(liststudent)
//Delete student
function deleteStudent(id){
    const index = liststudent.findIndex((student)=> student.id==id);
    liststudent.splice(index,1)
    localStorage.setItem('liststudent',JSON.stringify(liststudent));
    renderData(liststudent)
}

//update student

function updateStudent(id){
    const student = liststudent.find((e)=>e.id == id);
    document.getElementById('id').value= student.id;
    document.getElementById('name').value= student.name;
    document.getElementById('age').value= student.age;
    document.getElementById('gender').value=student.gender;
    document.getElementById('Point').value=student.point;
    document.getElementById('btn-update').style.display='inline'
    document.getElementById('btn-addstudent').style.display='none'
    document.getElementById('id').disabled=true;

}
document.getElementById('btn-update').onclick =   function(){

    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender =  document.getElementById('gender').value;
    const point = document.getElementById('Point').value;
    document.getElementById('id').disabled=false;
    //update du lieu vao mang
    const index = liststudent.findIndex((student)=> student.id == Number(id));
    liststudent[index].name = name;
    liststudent[index].age = age;
    liststudent[index].gender = gender;
    liststudent[index].point = point;
    localStorage.setItem('liststudent',JSON.stringify(liststudent));
    document.getElementById('btn-update').style.display='none'
    document.getElementById('btn-addstudent').style.display='inline'
    clearInput();
    renderData(liststudent);

}

//search stundent
document.getElementById('Search').onclick = function(){
    const keyword = document.getElementById('input-search').value;
    const dataSearch = liststudent.filter(
        (student)=>
        student.id == keyword ||
        student.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())||
        student.age == keyword||
        student.gender == keyword ||
        student.point == keyword

    );
    renderData(dataSearch);
}
renderData(liststudent)
