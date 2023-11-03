// const tinderUser = new Object()  // Singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "John Doe"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Dhiraj",
            lastname: "Thakre"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2}
// console.log(obj4);

const users = [
    {
        id: '1',
        email: "d@gmail.com"
    },
    {
        id: '1',
        email: "d@gmail.com"
    },
    {
        id: '1',
        email: "d@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    course: "JS CODE",
    price: "999",
    courseInstructor: "Dhiraj"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// const navbar = ({company}) => {

// }

// navbar(company = "Techno");


