async function getAllstudent(){
    try{
        const res = await fetch(
            'https://64c25bf6eb7fd5d6ebcfb370.mockapi.io/api/v1/users'
        )
    const data = await res.json();
    console.log(data);
    renderNameStudent(data);

    }
    catch(err){
        console.log(err)
    }
}
function renderNameStudent(data){
    let stringHTML = '';
    for( let e of data){
        stringHTML += `<h1>${e.name}</h1>`
    }
document.getElementById('all-name').innerHTML = stringHTML;

}
getAllstudent();
