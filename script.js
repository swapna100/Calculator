/* function add(x,y)
{
  console.log(x + y);
}

function subtract(x, y)
{
   console.log(x - y);
}

function division(x, y)
{
    console.log(x / y);
}

function multiplication(x, y)
{
    console.log(x *  y);
}

function operate(oper){
    
    let num1 = prompt("enter first number");
    let num2 = prompt("enter second number");
    
    if(oper == '+'){
        add(num1,num2);
    }
    else if(oper == '-'){
        subtract(num1,num2);
    }
    else if(oper == '*'){
        console.log('multiplication of '+num1+ '*'+num2);
        multiplication(num1,num2);
    }
    else if (oper == '/')
    {   console.log("division of" + num1+"/" + num2);
        division(num1,num2);
    }
    else{
        console.log("error");
    }
}

//let oper = prompt("enter an operatorfrom[ + - * /]");
operate(oper);

 */
// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    let str = document.getElementById("result").value += value;
    return str;
}

// This function evaluates the expression and returns result
 function calculate() {
   
    var x = document.getElementById('result').value ;
    var y = eval(x);
    document.getElementById("result").value = y;
 }
    /* function operate(){
    let input = display(value);
    inputExp = parseFloat(input);
    return inputExp;

 */
/* function operate()
{
 var input = document.getElementById("result").value;
 // const compute = (input = '') =>{
    var total = 0;
    input= input.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];

    while (input.length){
        total += parseFloat(input.shift());
    }
    return total;

}
 */

