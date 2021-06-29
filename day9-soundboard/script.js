// for every id audio sound, we make an element .createElement()
//appendChild() 
//function onClick() -> play sounds

const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"]

sounds.forEach(sound => {
    //create element for every button 
    
    const btn = document.createElement('button') 

    btn.classList.add("btn") //styling
    btn.innerText = sound 

    btn.addEventListener('click', () => {
        stopSound()
        document.getElementById(sound).play()
    })
    
    document.getElementById("buttons").appendChild(btn)

})

function stopSound() {
 // pause () 
 // reset currentTime = 0 
 sounds.forEach(sound => {
     const song = document.getElementById(sound)
     song.pause()
     song.currentTime = 0 
 })
}
