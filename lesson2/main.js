const $inputText = document.getElementById('input')
const $BTN = document.getElementById('btn')
const $taglist = document.getElementById('list')
$BTN.addEventListener('click',function(){
    const $tagli = document.createElement('li')
    const content = $inputText.value
    $tagli.innerHTML = content
    $taglist.appendChild($tagli) 
})






