type User = {
    name: string;
    lastName: string;
    birth: string;
    age: number; //---- se puser um age? a propriedade nao fica sendo obrigatoria.é opcional
}
const Rita: User = {
    name: 'Rita',
    lastName: 'Lopes',
    birth: '17/07/1988',
    age: 33,
}

//type Union
// |como se fosse de um tipo ou de outro.|

type logLevel = 'info' | ' error' | 'debug';

function logMessage(message: string, level: logLevel) {
    console.log(`[${level}] - ${message}`)

}

logMessage(' Uma mensagem info', ' error')
logMessage('Uma mensagem info', 'debug')
logMessage('Uma mensagem info', 'info')



// intersect types servem para combinar os alias
///sao caracterizados pelo &

type About = {

    bio: string;
    interests: string[]

}


type Profile = User & About;
const userWithProfile: Profile = {
    name: 'Rita',
    lastName: 'Lopes',
    birth: '17/07/1988',
    bio: 'Ola o meu nome é Rita',
    age: 33,
    interests: ['musica', 'jogos', 'gatos']
}
    
//combinar todos

type ComposedProfile = User & {
    log: logLevel;

}



