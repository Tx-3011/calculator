const displayText = document.querySelector('#displayText')
const buttonGrid = document.querySelector('#buttonGrid')
const allButtons = buttonGrid.querySelectorAll('button')
const add = allButtons[3]
const sub = allButtons[7]
const multiply = allButtons[15]
const divide = allButtons[11]
const clear = allButtons[14]

let numbers = []
let count = 0


// for(let i=0;i<16;i++){
// allButtons[i].addEventListener('click',()=>{
//     if(count===2){
//         displayText.textContent=``
//         count = 1
//     }
// })
// }


// NUMBER-INDEX GUIDE

    //  1,2,3 -> -1 from the value
    //  4,5,6 -> same value
    //  7,8,9 -> +1 from the value
    //      0 -> 12

    // + -> 3
    // - -> 7
    // / -> 11
    // * ->15
    // = -> 13
    // AC -> 14


function storeAndClear(){
    numbers.push(Number(displayText.textContent))
    console.log(numbers)
    displayText.textContent = ``
}

for(let i=0; i<=2;i++){
    allButtons[i].addEventListener('click',()=>{
        displayText.textContent += `${i+1}`
    })
}

for(let i=4;i<=6;i++){
    allButtons[i].addEventListener('click',()=>{
        displayText.textContent += `${i}`
    })
}

for(let i=8; i<=10;i++){
    allButtons[i].addEventListener('click',()=>{
        displayText.textContent += `${i-1}`
    })
}

allButtons[12].addEventListener('click',()=>{
    displayText.textContent += `0`
})

clear.addEventListener('click',()=>{
    console.log(`all cleared`)
    numbers.length = 0
    displayText.textContent = ``
})

function additon(a,b){
    count++
    return a+b
}

function subtraction(a,b){
    return a-b
}

function multiplication(a,b){
    return a*b
}

function division(a,b){
    return a/b
}

function operate(operator){
    if(operator===1){

        let result = additon(numbers[0],numbers[1])
       
        numbers.length = 0
        numbers.push(result)
        console.log(`addition result is ${result}`)
        // displayText.textContent = result
    }

    if(operator===2){

        let result = subtraction(numbers[0],numbers[1])
       
        numbers.length = 0
        numbers.push(result)
        console.log(`subtraction result is ${result}`)
        // displayText.textContent = result
    }



}

add.addEventListener('click',()=>{
    storeAndClear()
    if(numbers.length===2){
        operate(1)
    }
})

sub.addEventListener('click',()=>{
    storeAndClear()
    if(numbers.length===2){
        operate(2)
    }
})





























