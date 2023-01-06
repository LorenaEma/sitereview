const elements = [
    { name: 'book'},
    { name: 'series'},
    { name: 'chris'},
    { name: 'dillon'},
    { name: 'evan'},
    { name: 'frank'},
    { name: 'georgette'},
    { name: 'hugh'},
    { name: 'igor'},
    { name: 'jacoby'},
    { name: 'kristina'},
    { name: 'lemony'},
    { name: 'matilda'},
    { name: 'nile'},
    { name: 'ophelia'},
    { name: 'patrick'},
    { name: 'quincy'},
    { name: 'roslyn'},
    { name: 'solene'},
    { name: 'timothy'},
    { name: 'uff'},
    { name: 'violet'},
    { name: 'wyatt'},
    { name: 'x'},
    { name: 'yadri'},
    { name: 'zack'},
]

const searchInput = document.querySelector('.input')
const clearButton = document.getElementById('clear')

searchInput.addEventListener("input", (e) => {
    let value = e.target.value

    if (value && value.trim().length > 0){
         value = value.trim().toLowerCase()

        //returning only the results of setList if the value of the search is included in the person's name
        setList(people.filter(person => {
            return person.name.includes(value)
        })

})



