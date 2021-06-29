// For JS, we want to create an increment that goes up to the data-target attribute we set up in the HTML, for our counter. 
//put that increment into the innertext of counter.

const counters = document.querySelectorAll(".counter")

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        // + here turns our string into a number 
        console.log(typeof target, target)
        //typeof returns a string indicating the type of the unevaluated operand
        const c = +counter.innerText
        // c is whatever is in our innerText, we set it to 0 previously
        // plus sign again because we want it to be a number
        const increment = target / 200
        //creating our increment, need to decide how much we want to increment this by. 
        //is we only leave it as target, it will increment by itself and will just show the number on the screen,
        // so we see the count up happening, we divide our target so it increments by sets of 200
        //if I want to slow it down, divide by a larger number
        //also because we took the target and divided it by a specific number, it's not going to take a longer time or shorter to reach that target. 
        
        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`
        //c is currently 0 that's why we write c + increment
        //if we just call updateCounter() here, it will not have the going up animation
        // to make it load and see each of the numbers slowers:
        setTimeout(updateCounter, 1)
                } else {
                    counter.innerText = target
                }
    }
    updateCounter()
})