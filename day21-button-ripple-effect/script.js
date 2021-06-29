const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x  = e.clientX
        const y = e.clientY
        
        //position of the button itself 
        const buttonTop = e.target.offsetTop //element the event fires off at
        const buttonLeft = e.target.offsetLeft
         
         //the position of the button itself 
         const xInside = x - buttonLeft
         const yInside = y - buttonTop

         console.log(xInside, yInside)

         const circle = document.createElement('span')
         circle.classList.add('circle')
         //top - y axis how up or down it's going to go
         circle.style.top = yInside + 'px'
         //left - how right or left it is 
         circle.style.left = xInside + 'px' 

         this.appendChild(circle) 

         setTimeout(() => circle.remove(), 500)
         })
})