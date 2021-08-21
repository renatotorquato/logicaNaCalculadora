

    // Calculadora simples utilizando funções. 

    var num1 = "";
    var num2 = "";
    var oper = " ";
    var result = " ";

    function addNum(n) {
        if (campo1.value !== undefined && campo2.value == undefined) {
            alert("ESCOLHA UMA OPERAÇÃO")
        } else if (campo1.value !== undefined && campo2.value !== undefined) {
            num2 = n
            document.getElementById("campo3").innerHTML = num2
            campo3.value = num2
        } else {
            num1 = n
            document.getElementById("campo1").innerHTML = num1
            campo1.value = num1            
        }
    }


    function addOper(n) {
        oper = n
        document.getElementById("campo2").innerHTML = oper
        campo2.value = oper
    }


    function calc() {
        if (oper == "+") {
            result = num1 + num2
            document.getElementById("campo4").innerHTML = result
        } else if (oper == "-") {
            result =  num1 - num2
            document.getElementById("campo4").innerHTML = result
        } else if (oper == "*") {
            result =  num1 * num2
            document.getElementById("campo4").innerHTML = result
        } else if (oper == "/") {
            result =  num1 / num2
            document.getElementById("campo4").innerHTML = result
        }
    }

    function rzt() {
        num1 = "";
        num2 = "";
        oper = "";
        result = "";
        document.getElementById("campo1").innerHTML = num1;
        document.getElementById("campo2").innerHTML = num2;
        document.getElementById("campo3").innerHTML = oper;
        document.getElementById("campo4").innerHTML = result;
        campo1.value = undefined;
        campo2.value = undefined;
        campo3.value = undefined;
        campo4.value = undefined;
    }