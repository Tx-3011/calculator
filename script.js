const displayText = document.querySelector('#displayText')
const buttonGrid = document.querySelector('#buttonGrid')
const allButtons = buttonGrid.querySelectorAll('button')
const add = allButtons[3]
const sub = allButtons[7]
const multiply = allButtons[15]
const divide = allButtons[11]
const clear = allButtons[14]

let numbers = []



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

add.addEventListener('click',()=>{

    storeAndClear()

    if(numbers.length === 2){
        let total = numbers[0]+numbers[1]
        console.log(total)
        numbers.length = 0
        numbers.push(total)
        displayText.textContent = total
    }

    
   

})