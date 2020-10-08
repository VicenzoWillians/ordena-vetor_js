var vetor = [12, 42, 64, 26, 3, 31, 57]
document.getElementById("ordena").innerHTML = vetor;
console.log(vetor);

// RESOLUÇÃO USANDO A FUNÇÃO DO JAVASCRIPT - SORT
// fornece a função sort uma outra função, que serve de comparação
function ordena_vetor(){
    vetor.sort(function(a, b){
        return a-b;
    });

    document.getElementById("ordena").innerHTML = vetor;
    console.log(vetor);
}

// RESOLUÇÃO USANDO ESTRUTURA DE REPETIÇÃO
/*function ordena_vetor(){
    for(var i=0; i<7; i++){
        for(var j=0; j<7; j++){
            var a=vetor[j];

            if(a>vetor[j+1]){
                vetor[j]=vetor[j+1];
                vetor[j+1]=a;
            }
        }
    }
    document.getElementById("ordena").innerHTML = vetor;
    console.log(vetor);
}*/