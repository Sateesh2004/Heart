document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
    let element = document.getElementsByClassName('container');
        
element[0].setAttribute('id','heart-container')

    
    
});



document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});



let no = document.getElementsByClassName("btn-div")[0];
let currentAction = 0;
no.addEventListener("mouseenter", function() {
    switch (currentAction) {
        case 0:
            no.style.left = "200px";
            break;
        case 1:
            no.style.top = "200px";
            break;
        case 2:
            no.style.left = "0";
            break;
        case 3:
            no.style.top = "0";
            break;
    }
    currentAction = (currentAction + 1) % 4; 
});
no.addEventListener("click", function() {
    switch (currentAction) {
        case 0:
            no.style.left = "70px";
            break;
        case 1:
            no.style.top = "70px";
            break;
        case 2:
            no.style.left = "0";
            break;
        case 3:
            no.style.top = "0";
            break;
    }
    currentAction = (currentAction + 1) % 4; 
});


