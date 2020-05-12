/*

Rotina simples de validação de CPF

Autor: Peterson da Silva Santos
12/05/2020

*/

function ValidaCPF(){

    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    var CPF = document.getElementById('CPF').value;
    var ResultadoValidacao = EfetuaValidacao(CPF);

    if(ResultadoValidacao == true){
        document.getElementById('success').style.display = 'block';
    }
    else{
        document.getElementById('error').style.display = 'block';
    }
}

function EfetuaValidacao(CPFValidar){

    if(CPFValidar.length != 11){
        return false;
    }
    else{
        var numerosCPF = CPFValidar.substring(0, 9);
        var digitosCPF = CPFValidar.substring(9);

        // Debug ------------------------
        console.log('CPF Digitado: ' + CPFValidar);
        console.log('Numeros: ' + numerosCPF);
        console.log('Digitos: ' + digitosCPF);

        // Valida Primeiro Digito Verificador

        var Soma = 0;

        for(var x = 10; x > 1; x--){
            Soma += numerosCPF.charAt(10 - x) * x;
        }

        // Debug ------------------------
        console.log("Soma 1: " + Soma);

        var resultado = Soma % 11 < 2 ? 0 : 11 - (Soma % 11);
        
        // Debug ------------------------
        console.log("Resultado 1: " + resultado);
        console.log("Resultado 1 Esperado: " + digitosCPF.charAt(0));

        if(resultado != digitosCPF.charAt(0)){
            return false;
        }

        // Valida Segundo Digito Verificador

        Soma = 0;
        numerosCPF = CPFValidar.substring(0, 10);

        for(var y = 11; y > 1; y--){
            Soma += numerosCPF.charAt(11 - y) * y;
        }

        // Debug ------------------------
        console.log("Soma 2: " + Soma);

        resultado = Soma % 11 < 2 ? 0 : 11 - (Soma % 11);

        // Debug ------------------------
        console.log("Resultado 2: " + resultado);
        console.log("Resultado 2 Esperado: " + digitosCPF.charAt(1));

        if(resultado != digitosCPF.charAt(1)){
            return false;
        }

        //----------------------------------------
        
        return true;
    }
}