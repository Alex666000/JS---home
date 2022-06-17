const ages = [18,20,22,1,98,14]

const predic = (age: number) => {
    return age > 90
}

const allAges = [100]

//2
type CouresesType = {
    title: string
    price: string
}

const courses = [
    {title: 'CSS', price: 100,},
    {title: 'CSS', price: 200,},
]

const changeCourses = (course: string) => {
    return course.price < 180
}

function drawStairs(n) {
    return n.split('').map(n => n\n)
}

console.log(drawStairs(4));