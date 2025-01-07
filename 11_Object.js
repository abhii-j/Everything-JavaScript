const tinderUser = new Object(); //singleton object
// const tinderUser={}                 //non singleton object

tinderUser.name = "abhishek";
tinderUser.age = 21;

console.log(tinderUser);

const regularUser = {
  email: "abi@gmail.com",
  fullname: {
    userfullname: {
      firstname: "abhhishek",
      lastname: "jadhav",
    },
  },
};

console.log(regularUser.fullname.userfullname.firstname);

//---------------------------------------------------------------------------------------------------

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = {...obj1 , ...obj2}
const obj3 = Object.assign({}, obj1, obj2); //its static method,and it return new object
console.log(obj3);

//-----------------------------------------------------------------------------------------------------

const user = [
  {
    id: 1,
    email: "abhishek@gmail.com",
  },
  {
    id: 1,
    email: "abhishek@gmail.com",
  },
  {
    id: 1,
    email: "abhishek@gmail.com",
  },
  {
    id: 1,
    email: "abhishek@gmail.com",
  },
];

console.log(user[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

//-----------------de-structure--------------------------------------------------------------

const course = {
  name: "javascript",
  fees: "12000",
  courseInstructor: "hitesh",
};

console.log(course.courseInstructor);

const { courseInstructor: instructor } = course; //this is object de-structuring

console.log(instructor);


