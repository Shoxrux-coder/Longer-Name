
let arr = ['Aleksey', 'Kartoshka', 'Margarita' , 'Morgenshtern', 'Monica']

let longerName = ''
arr.filter(item => {
    if (item.length > longerName.length) {
        longerName = item
    }
})
console.log(longerName);