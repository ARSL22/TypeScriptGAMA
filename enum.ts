enum Permissoes{

    admin,
    editor, 
    comum 
}
//const usuario = {
  //  nivel: Permissoes.admin
//}


//console.log(usuario)


// com string

//enum Permissoes{

  //  admin = 'ADMIN',
    //editor = 'EDITOR',  
    //comum = 'COMUM'
//}
//const usuario = {
  ///  nivel: Permissoes.admin
//}


//cores
enum cores {
    red = '#FF0000',
   black = '#000'
}
const usuario = {
    perfil: cores.red,
    nivel: Permissoes.admin
}
console.log(usuario)

