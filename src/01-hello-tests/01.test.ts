/*
import {multiply, splitIntoWords, sum} from './01';
//0:
// Если данные дублируются в тестах выносим их выше

//1 data - данные "харкодить нельзя на значения при описании в глобальной области видимости данных":
let a: number
let b: number
let c: number

// 2 перед каждым тестом выполни - присвой данные чтобы они были не в глобальной области видимости. см. выше. На входе тесты получат эти установленные данные:
beforeEach( () => { // эта функция перезатирает глобальные данные
    a = 1
    b = 2
    c = 3
})

test('sum should be correct', () => {

    // 3 actions:
    let result1 = sum(a, b);
    let result2 = sum(c, b);

    // 4 expect result:
    expect(result1).toBe(3)
    expect(result2).toBe(5)
})
//5 :
test('multiply should be correct', () => {

    // actions:
    let result1 = multiply(a, b);
    let result2 = multiply(c, a);

    //expect result:
    expect(result1).toBe(2)
    expect(result2).toBe(4)
})
//6
test('splitting inti words should be correct', () => {

    //actions
   /!* let result1 = splitIntoWords(sent1);
    let result2 = splitIntoWords(sent2);*!/

    //expect result:
    expect(result1.length).toBe(3)
    // expect(result1[0]).toBe('Hello')  -- ошибка будет: тестируем первое слово c возврата значения с функции splitIntoWords где тестируем что вернет return ['hello', 'my', 'friend']

    //Тестируем каждое слово из splitIntoWords():
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friend')


    expect(result2.length).toBe(5)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('the')
    expect(result2[2]).toBe('best')
    expect(result2[3]).toBe('programming')
    expect(result2[4]).toBe('language')
})


*/
