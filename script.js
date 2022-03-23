input=document.querySelector('input')
button=document.querySelector('button')
output=document.querySelector('.message')

button.addEventListener("click", () =>{
    tip=input.value*10/100
    output.innerText=`Your Tip is ${tip}`
})