//calcul program

const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input ;
}

function clearDisplay() {
    display.value = "";
}

function calculate(){
    try {
        display.value = eval(display.value);
    }catch(error){
        display.value ="error";
    }
}

function UserName(){
    let username = document.getElementById("UserName").value;
    const welcomsg = document.getElementById("wel-msg");
    welcomsg.textContent ="Welcome " + (username === "" ? 'Guest' : username);
    document.getElementById("UserName").value = "";
}

