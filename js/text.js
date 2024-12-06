const input = document.querySelector("input");
const btn = document.querySelector(".main-btn");

const length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase ='abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '@#$%^&*()_+=-<>/';

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = '';
    
    while (length > password.length) {      
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    input.value = password;
}

btn.addEventListener("click", createPassword);

function copyPassword() {
    input.select();
    document.execCommand("copy");
}

document.querySelector(".copy-icon").addEventListener("click", copyPassword);
