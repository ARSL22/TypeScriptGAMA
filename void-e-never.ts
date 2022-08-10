function principal(): void{
    console.log('executando')
}
//laços de repeticao infinitos
// ou finaçao que disparam erros.
function funcaoQueNuncaRetorna(): never {
    while (true) {
        return false; //conseguimos garantir que nao vai retornar nada.
    }
}

funcaoQueNuncaRetorna()
