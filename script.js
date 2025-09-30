let isoff =  true;
let button = document.getElementById('onoffthebulb');
button.textContent = 'Switch On Bulb';
function updateBulb(){
    let lightimg = document.getElementById('bulb-img');
    
    
    if(!isoff){
        lightimg.src = "bulboff.jpg";
        isoff = true;
        button.textContent = 'Switch On Bulb';
        button.style.backgroundColor = 'green';
    }
    else if(isoff){
        lightimg.src = "bulbon.jpg";
        isoff =false;
        button.textContent = 'Switch Off Bulb';
        button.style.backgroundColor = 'red';
    }
    console.log(isoff);
    
}