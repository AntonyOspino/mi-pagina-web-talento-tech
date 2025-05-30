let numero1;
let numero2;
let operacion;

function realizarOperacion(num1, num2, operacion){
    if(operacion=="suma"){
        return num1 + num2;
    }else if(operacion == "resta"){
        return num1 - num2;
    }else if(operacion == "multiplicacion"){
        return num1 * num2;
    }else if(operacion == "division"){
        if(num1>0 && num2>0){
            return num1 / num2;
        }else{
            return "error en division - no se puede dividir por '0'";
        }
    }else{
        return "error: ingrese una operacion correcta";
    }
}

do {
    operacion = prompt("Ingrese que opéracion a utilizar:\n 'suma'\n 'resta'\n 'multiplicacion'\n 'division'\n 'salir'\n ");
    if( operacion == "suma" || operacion == "resta" || operacion == "multiplicacion" || operacion == "division"){
        numero1 = parseInt(prompt("Ingrese el primer numero ")); 
        numero2 = parseInt(prompt("Ingrese el segundo numero"));
        const resultado = realizarOperacion(numero1, numero2, operacion);
        alert(resultado);
    }else if(operacion == "salir"){
        alert("hasta luego")
    }else{
        alert("ingrese una operacion correcta")
    }
} while (operacion != "salir")