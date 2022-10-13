var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/main-pic.jpg') {
        myImage.setAttribute ('src','images/sec-pic.jpg');
    } else {
        myImage.setAttribute ('src','images/main-pic.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Правда или действие, ' + myName + '?';
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Правда или действие, ' + storedName + '?';
}
myButton.onclick = function() {
    setUserName();
}