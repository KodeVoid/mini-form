function showMessage() {
    const firstName = document.getElementsByClassName(firstName).value;
    const surName = document.getElementsByClassName(surName).value;
    const age = document.getElementsByClassName(age).value;
    const Gender = document.getElementsByClassName(Gender).value;    


const Message = 'HI, ${firstname} ${surName}, ${age} years old, ${gender}, welcome to our site!';

document.getElementsByClassName("message").innerText = Message + "\nIf you want to continue click YES, if not click NO.";

document.getElementsByClassName("YES").style.display = "inline-block";
document.getElementsByClassName("NO").style.display = "inline-block";}

function continueSite() {
    alert("Great! Enjoy your stay.");}

function exitSite(){
    alert("Goodbye! Enjoy Have a nice day.");}

