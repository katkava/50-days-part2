//with our JS, we want to find a trigger point in the height
//of the window so it knows when to bring back in the boxes. 


const boxes = document.querySelectorAll('.box')
//querySelectorAll adds all of these elements to the node list called box. 

window.addEventListener('scroll', checkBoxes)

checkBoxes()
//this function is what triggers the boxes to show up initially so 
//so we need to show the function 
//if we remove this function then it will only show once we start scrolling.

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5*4
    //(innerHeight is the height of the screen (610))
    //we want our trigger point to be a little less than our innerHeight 
    //can't have fixed height because the window may be less/bigger on some screens
    //so we divide height by 5 and multiply by 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        //getBoundingClientRect is a method that gives you a rectangle object and it has some methods like top, bottom etc. 
        //so our above boxTop variable will get us the value of the top of the box 
    
    
        //next we need to find out if the top of the box is less than the class of bottom 
        // if it's less we want to have class show, else remove class of show
    
    if(boxTop < triggerBottom) {
        box.classList.add('show')
    }else{
        box.classList.remove('show')
    }
    
    })
}