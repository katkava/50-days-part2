// select the elements that are the numbers and add to nodelist

const counters = document.querySelectorAll(".counter")

//we want to run a function for each of them 


counters.forEach(counter => {
    counter.innerText = "0"
    
    const countUp = () => {
        const target = +counter.getAttribute('data-target')
        
        const c = +counter.innerText
        const increment = target/200       
        
        if(c < target){
            counter.innerText = `${Math.ceil(c+increment)}`
            setTimeout(countUp, 1)
        
    }else{
        counter.innerText = target
        }
    }
     countUp()
})