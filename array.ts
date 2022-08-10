// array de string
//let gatos: string[]

//gatos = '123'

// fazer um push
//const gatos: string[] = [
  //  'Mike',
    //'preta'
//]
//gatos.push(5);
//funçao
const gatos: string[] = [
    'Mike',
    'preta',
    'pantufa'
]

function exibeGatos(gatos: string[]) {
    
    return `Os gatos são: ${gatos.join(', ')}`
    
}

console.log(exibeGatos(gatos))