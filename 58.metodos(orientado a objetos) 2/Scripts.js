const cachorro = {
    raca: 'SRD',
    uivar: function() {
   console.log("AUUUUUUU");
    },
    rosnar: function(){
console.log("GRRRRR");
    },
    setRaca: function(raca) {
        this.raca = raca;
    },
    getRaca: function(){
        return "A raça é " + this.raca;
    }
}

console.log(cachorro.raca);

cachorro.setRaca('Pastor Alemao');

console.log(cachorro.raca);

console.log(cachorro.getRaca);
