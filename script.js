const displayText = document.querySelector('#displayText')
const buttonGrid = document.querySelector('#buttonGrid')
const allButtons = buttonGrid.querySelectorAll('button')
const add = allButtons[3]
const sub = allButtons[7]
const multiply = allButtons[13]
const divide = allButtons[11]
const clear = allButtons[14]
const equalsTo = allButtons[15]

// NUMBER-INDEX GUIDE

    //  1,2,3 -> -1 from the value
    //  4,5,6 -> same value
    //  7,8,9 -> +1 from the value
    //      0 -> 12

    // + -> 3
    // - -> 7
    // / -> 11
    // * ->13
    // = -> 15
    // AC -> 14


let result
let numbers = []
let count = 1
let status = 0
let queue = null


for(let i=0;i<16;i++){
allButtons[i].addEventListener('click',()=>{
    if(count===2){
        displayText.textContent=``
        count = 1
    }
})
}



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
    queue= 0
})

function additon(a,b){
    count++
    return a+b
}

function subtraction(a,b){
    count++
    return a-b
}

function multiplication(a,b){
    count++
    return a*b
}

function division(a,b){
    count++
    return a/b
    
}

function displayState(result){
    numbers.length = 0
    numbers.push(result)
    displayText.textContent = Math.round(result*1000)/1000
}

function operate(operator){


    if(operator===1){

        result = additon(numbers[0],numbers[1])
       
        displayState(result)
        console.log(`addition result is ${result}`)
        queue = 0
    }

    if(operator===2){

        result = subtraction(numbers[0],numbers[1])
       
        displayState(result)
        console.log(`subtraction result is ${result}`)
        queue = 0
    }

    if(operator===3){

        result = multiplication(numbers[0],numbers[1])    
        displayState(result)
        console.log(`multiplication result is ${result}`)
        queue = 0
    }

    if(operator===4){

        if(numbers[1]===0){
            let statement = "lol"
            displayState(statement)
            console.log(`divison statement is infinity`)
            queue = 0

        }

        else{

        result = division(numbers[0],numbers[1])
        displayState(result)
        console.log(`divison result is ${result}`)
        queue = 0

        }
    }
    
    if(operator===5){
        operate(queue)
        displayState(result)
        console.log( `total result is ${result}`)
        queue = 0
    }
}


function handleQueue(){
    if(queue===1){
        operate(1)
        console.log(`the queue is ${queue} in sub (1)`)
    }
    if(queue===2){
        operate(2)
        console.log(`the queue is ${queue} in sub (2)`)
    }
    if(queue===3){
        operate(3)
        console.log(`the queue is ${queue} in multiply (3)`)
    }
    if(queue===4){
        operate(4)
        console.log(`the queue is ${queue} in divide (4)`)
    }
}


add.addEventListener('click',()=>{
    storeAndClear()
    handleQueue()

    queue = 1


    if(numbers.length>=2){
        operate(1)
    }
})


sub.addEventListener('click',()=>{
    storeAndClear()
    handleQueue()

    queue=2

    if(numbers.length>=2){
        operate(2)
    }
})


multiply.addEventListener('click',()=>{

    storeAndClear()
    handleQueue()

    queue=3

    if(numbers.length>=2){
        operate(3)
    }
})

divide.addEventListener('click',()=>{

    storeAndClear()
    handleQueue()

    queue=4

    if(numbers.length>=2){
        operate(4)
    }

})


equalsTo.addEventListener('click',()=>{
    storeAndClear()
    operate(5)
})




























