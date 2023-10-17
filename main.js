var operator="+";
var a=20,b=50;
switch(operator){
    case "+":
        document.write("The addition value is: ",a+b);
    break;

    case "-":
        document.write("The subtraction value is: ",a-b);
    break;
    
    case "*":
        document.write("The miultiplication value is: ",a*b);
    break;

    case "/":
        document.write("The division value is: ",a/b);
    break;

    case "%":
        document.write("The modulo value is: ",a%b);
    break;

    default:
        document.write("enter only airthmetic operators");

}