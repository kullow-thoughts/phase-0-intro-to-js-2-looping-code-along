// Code your solutions in this file
let nameArr = []
function writeCards(names, event){
    for(let i = 0; i < names.length; i++){
        nameArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return nameArr
}

console.log(writeCards(nameArr, 'birthday'))

function countDown(){
    let count = 0
    while(count <= 10){
        console.log(count++)
    }
}
countDown()
