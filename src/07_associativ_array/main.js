// Ассоциативный массив - O(1)
let userObj = {
    '0': 'Alex',
    '1': 'Oleg',
    '2': 'Valera',
}
userObj[null] = 'хорошоооо' // результат:{ '0': 'Alex', '1': 'Oleg', '2': 'Valera', null: 'хорошоооо' } - превратиться в строку
userObj[{}] = 'hello'  //  '[object Object]': 'hello'


console.log(userObj)

// Простой массив - он тяжеловеснее - 0(n)
let userObj = [
    {id: 1, name:'ffff'},
    {id: 2, name:'dddd'},
    {id: 3, name:'ccc'},
    {id: 4, name:'u'},
    {id: 5, name:'ww'},

]