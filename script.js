const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = ()=>{
        const target = +counter.getAttribute('data-target')
        const followerNumber = +counter.innerText
        const increment = target / 200 
        

        if(followerNumber < target){
            counter.innerText = `${Math.ceil(followerNumber + increment)}`
            
            setTimeout(() => {
                updateCounter()
            }, 1);
        }
        else{
            counter.innerText = target
        }

    }

    updateCounter() 
});


function consoleReader(){
    console.log("Bro are you reading the console lmao?")

    setTimeout(() => {
        console.log("Cant believe you're still here lol !")
    }, 5000);
    setTimeout(() => {
        console.log("Why are you still here?")
    }, 8000);
    setTimeout(() => {
        console.log("Please go away and do your thing!")
    }, 10000);
    setTimeout(() => {
        console.log("I guess you don't have a life huh? Me too bro! I know that's sad")
    }, 12000);
    
}

consoleReader()