const input= require("readline-sync");

let num1 = input.questionInt("Digite um número: ");
let num2 = input.questionInt("Digite outro número: ");
let num3 = input.questionInt("Digite mais um número: ");

if(num1>num2){
    if(num1 > num3){
        if(num3 > num2){
            num3++
            while(num1 > num3){
            console.log(`Resultado: ${num3}`);
            num3++;
            }
        }

        else {
            num2++
            while(num1>num2){
                console.log(`Resultado: ${num2}`);
                num2++
            }
        }
    }

    else{
        num1++
        while(num3 > num1){
            console.log(`Resultado: ${num1}`);
            num1++
            
        }
    }
}

else{
    if(num2 > num3){
        if(num1>num3){
            num1++
            while(num2 > num1){
                console.log(`Resultado: ${num1}`);
                num1++   
            }
        }
        else{
            num3++
            while(num2 > num3){
            console.log(`Resultado: ${num3}`);
            num3++;
            }
        }
    }
    
    else{
        num2++
        while(num3 > num2){
        console.log(`Resultado: ${num2}`);
        num2++
        }
    }
}
 