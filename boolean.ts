let estaAtivo: boolean;

// string--da erro
//estaAtivo = '123' 
// numero ---da erro
//estaAtivo = 123
// entao ele so aceita um true ou false.
estaAtivo = true
// exemmplo :
function mapearStatusDeUsuario(status: boolean ){
    if (status) {
    return `Usuario esta Ativo`    
    } else {
        return `Usuario Não esta ativo`
    }
}

mapearStatusDeUsuario(true);
mapearStatusDeUsuario(false);