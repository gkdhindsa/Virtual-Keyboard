let text='';
let cpsLk=false;

function updateText(pressedButton){
    if(pressedButton=='bs'){
        text=text.slice(0,-1);
    }
    else if(pressedButton=='cl'){
        if(cpsLk)
        cpsLk=false;
        else
        cpsLk=true;
    }
    else if(pressedButton=='sb'){
        text=text+' ';
        console.log('text'+'nkothing');
    }
    else{
        if(cpsLk)
            pressedButton=pressedButton.toUpperCase();
        text=text+pressedButton;

    }
}

function displayText(){
    currentTextBar.innerText=text;
}


let currentTextBar=document.querySelector(".text-bar");
let btns=document.querySelectorAll('button');
btns.forEach( (btn) =>{
    btn.addEventListener('click', function(){
        updateText(btn.id);
        displayText();
    })

});
