//get the button by class ripple (querySelectorAll) 
//make the click event function (just normal function) (e)
//get the coordinates of where we clicky (x, y) on button relative to tehe viewport
//get the x and y coordiates of our button (offsetTop, offsetLeft)
//then we subtract the clicky from offset to get the button 
//create circle variable(createelement) const circle
// add class to it which is also called circle (classlist) 
// appendChild (button) 
//remove the element with .remove so it doesn't saturate the DOM  


const buttons = document.querySelectorAll('.ripple') 

buttons.forEach(button => {
    button.addEventListener('click', function(e){

    const x = e.clientX
    const y = e.clientY

    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    const insideX = x-buttonLeft 
    const insideY = y-buttonTop 

    const circle = document.createElement('span')
    circle.classList.add('circle') 
    circle.style.left = insideX + 'px'
    circle.style.top = insideY + 'px'

    this.appendChild(circle) 

    setTimeout(() => circle.remove(), 500)
// 
console.log(insideX, insideY);
    })
})