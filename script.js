function Calcular(){
    let inputs = document.getElementsByTagName('input');
    let input1 = inputs [0];
    let input2 = inputs [1];
    let altura = parseFloat(input1.value);
    let massa = parseFloat(input2.value);
    let imc = massa / (altura*altura);
    if(imc<16){
        window.alert("Magreza Grave");
    } else if(imc>=16 & imc <17 ){
        window.alert("Magreza Moderada");
    } else if(imc>=17 & imc< 18.5){
        window.alert("Magreza Leve");
    } else if(imc>=18.5 & imc< 25){
        window.alert("Saudável");
    } else if(imc>=25 & imc< 30){
        window.alert("Sobrepeso");
    } else if(imc>=30 & imc< 35){
        window.alert("Obesidade Grau I");
    } else if(imc>=35 & imc< 40){
        window.alert("Obesidade Grau II(Severa)");
    } else if(imc>=40){
        window.alert("Obesidade Grau III(Mórbida)");
    }
    input1.value='';
    input2.value='';
}
