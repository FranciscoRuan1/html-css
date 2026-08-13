const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');

const rl = readline.createInterface({input, output})

rl.question('o bus ainda vai dar uma tv pra mae dele?', (resposta) => {

if(resposta == 'nao'){
    
    console.log('verdade')
}
    else{
        console.log('mentira')
    }

rl.close()
})