type ManType = {
    name: string
    age: number
    lessons: Array<{title:string}>
    address: { street: { title: string }


let props: ManType;

        beforeEach( () => {
        props = {
        name: 'Alex',
        age: 34,
        lessons: [{title: '1'}, {title: 2}],
        address: {
            street: {
                title: 'Lenina'
            }
        }
    }
})




test('destructur', () => {

//деструктуирование: если название переменной совпадает с теми свойствами что в объекте справа то используем деструктурирование:
        /*const age = props.age
        const lessons = props.lessons*/

// в эти переменные забираем свойства в свои переменные что в объекте справа   и 2 строчки что выше эквиваленты 1 строчки:
    // БЫСТРЕНЬКО КОРОТКОЙ ЗАПИСЬЮ ИЗ ОБЪЕКТА ЗАБИРАЕМ ПЕРЕМЕННЫЕ = СВОЙСТВА:
        const {age, lessons, cat} = props
    // если нужен второй элемент а не первый ставим пустоту:
        const {, lessons} = props
    // или:
        const {lessons, , ...rest } = props // деструктурировали первый элемент второй пропустили остальные упаковали в rest оператор
    // 2) Вторая запись для глубоко вложенных:
    let {title} = props.address.street

        expect(age).toBe(34);
        expect(lessons.length).toBe(2);
        expect(title).toBe('Lenina');
    }
)

// с массивами дестртруктуризация работате также
/*const [value, setVAlue] = useState(0) - мы вызвали функцию получили массив и "разорвали его - забрали значения - в массиве должно быть мин 2 элемента"*/
