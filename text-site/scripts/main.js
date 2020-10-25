
let myHeading = document.querySelector('h1');
myHeading.textContent = 'hello world';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    
    if(mySrc === 'images/timg.jpg'){
        myImage.setAttribute('src', 'images/gray.jpg');

    }else{
        myImage.setAttribute('src', 'images/timg.jpg');

    }
}

let myButton = document.querySelector('button');

function setUserName(){
    let myName = prompt('Please enter your name.');
    
 
  if (!myName || myName === null) {        //why
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
  }

    /*localStorage.setItem('name',myName);
    myHeading.textContent = myName;*/

}

if (!localStorage.getItem('name')){
    setUserName;
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent  = storedName;
}

myButton.onclick = function(){
    setUserName();
}
