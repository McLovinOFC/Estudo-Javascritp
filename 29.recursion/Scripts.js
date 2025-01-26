function recursao(n) {

    if (n - 1 < 2){
        console.log("Recursão Parou");
    } else if(n % 2 != 0 ) {
        console.log("NUmero impar");
        recursao(n - 1) 
    } else {
        console.log("NUmero par");
        recursao(n - 2);
    }

}
        
    recursao(39);
    recursao(10);
    recursao(55);