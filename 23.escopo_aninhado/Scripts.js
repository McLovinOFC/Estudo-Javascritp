let  a = 10;//escopo Global 

function multiplicar(x,y){
    let a = x * y;

    if(a > 10){
        let a = 0;
        a++;
        console.log(a);//escopo do IF
    }
console.log(a);//escopo da função 
}
console.log(a);

multiplicar(3,7);