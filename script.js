const toggleBackgroundColor = (event) => {
    event.preventDefault();
    const body = document.body;
    const currentBackgroundColor = body.style.backgroundColor;
    
    if (currentBackgroundColor === "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
};

const consoleResult = (var1, var2) => {
    return var1*var2;
}

let var1 = 15; 
let var2 = 203;

console.log(consoleResult(var1,var2))

