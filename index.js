let inputTask = document.getElementById('inputTask')
let btnAddTask = document.getElementById('btnAddTask')

let taskBox = document.querySelector('.box')
let deckTask = document.createElement('ul')

btnAddTask.addEventListener('click', () => {

    if(inputTask.value == ""){
        alert('Digite uma task seu bosta!!!')

    } else{

        let task = inputTask.value
        let newTask = document.createElement('li')
        let btnRemoveTask = document.createElement('button')
        btnRemoveTask.innerHTML = 'Remover Task'

        newTask.innerHTML = task
        deckTask.appendChild(newTask)
        taskBox.appendChild(deckTask)
        newTask.appendChild(btnRemoveTask)

        btnRemoveTask.addEventListener('click', () => {
            newTask.remove()
        })
    
        inputTask.value = ""
    }

})





