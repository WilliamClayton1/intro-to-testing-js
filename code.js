// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if(!input) {
        return "Hello, World!";
    } else if(typeof input === "boolean"){
        return "Hello, World!";
    } else {
        return `Hello, ${input}!`;
    }
}