// 1st and 2nd task

const user =  [{name: 'Temo', age: 25},{name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]

const theLowestAge = (user) => {

    let minimum = user[0].age;
    
    for(const index in user) {
        if(minimum > user[index].age) {
            minimum = user[index].age
        }
    }

    let name;

    for(const i in user) {
        if(minimum === user[i].age) {
            name = user[i].name;
        }
    }

    return name;
}


console.log(`The name of the youngest person among this 3 is ${theLowestAge(user)}`)

// 3rd task

const returnNewUserArr =(user) =>
{
    let newArr = []
    user.map(e=>{
        newArr.push({'name':e.name, 'age':Math.floor(Math.random() * 30)}) // random year
    })
    return newArr
}

console.log(returnNewUserArr(user))
// 4th task
const a = 'Tornike'
const b = 'Nika'

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let ifThree = true;
let counterA = 0;
let counterB = 0;
while(true) {
    const playerA = rollDice()
    const playerB = rollDice()

    console.log(`Player ${a} rolled ${playerA}`)
    console.log(`Player ${b} rolled ${playerB}`)
    if(playerA === 3) {
        console.log(`Winner is ${a}`)
        break;
    } else if (playerA !== 3)
    {
        counterA+=1;
        console.log(counterA, 'Try');
    }
    else if(playerB === 3) {
        console.log(`Winner is ${b}`)
        break;
    } else if (playerB !== 3)
    {
        counterB+=1;
    }
}















