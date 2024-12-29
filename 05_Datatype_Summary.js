// JavaScript Data Types:

// In JavaScript, data types can be categorized into two main types: Primitive Types and Reference Types.

// 1. Primitive Data Types (Value Types)
// Primitive types are immutable and hold data directly. When you assign one primitive value to another variable, a copy of the value is made, not a reference to the original value.

// There are 7 primitive data types in JavaScript:

// String: Represents a sequence of characters.

// Example: "Hello, World!" 

// Number: Represents both integer and floating-point numbers.

// Example: 42, 3.14

// Boolean: Represents a logical entity. Can be true or false.

// Example: true, false

// BigInt: Represents integers with arbitrary precision (larger than the Number type).

// Example: 1234567890123456789012345678901234567890n

// Symbol: Represents a unique and immutable value used as an identifier for object properties.

// Example: Symbol('id')

// Undefined: Represents a variable that has been declared but not assigned a value.

// Example: let a; // a is undefined

// Null: Represents the intentional absence of any object value.

// Example: let b = null;

// Characteristics of Primitive Types:
// Immutability: Once created, primitive values cannot be changed.
// Pass-by-Value: When you assign a primitive value to another variable, it copies the value (not the reference).
// 2. Reference Data Types (Non-Primitive Types)
// Reference types store references to the actual data, not the data itself. When you assign a reference type to another variable, both variables point to the same memory location (the same object or array).

// There are 3 main types of reference data types (non-primitive):

// Array: A collection of elements, which can be of any type.

// Example:
// const heros = ["Shaktiman", "Ninja"];

// Object: A collection of key-value pairs.

// Example:
// let obj = {
//     name: "Abhi",
//     age: 21
// };

// Function: A block of code that can be invoked to perform an action.

// Example:
// const myFun = function() {
//     console.log("Helloooooo");
// };
// Characteristics of Reference Types:
// Mutability: Reference types can be modified after creation.
// Pass-by-Reference: When you assign a reference type to another variable, the reference (memory address) is copied, not the actual object. Both variables point to the same memory location.

// Key Differences Between Primitive and Reference Types:

//                         Feature	Primitive                               Types	Reference Types
// Storage	                Stores the value directly.	                    Stores a reference (memory address) to the object.
// Mutability	            Immutable (value cannot be changed).	        Mutable (value can be changed).
// Assignment  Behavior    Copies the value (pass-by-value).	            Copies the reference (pass-by-reference).
// Example	                 String, Number, Boolean, Null, Undefined	    Array, Object, Function









//-----------------------------------------------Memory-----------------------------------------------------------//
// Memory in js there are tru type stack and Heap memory.

// stack:
//     -primative datatype is always use stack memory.
//     -stack memory return copy of original value

        let name="abhishek"
        let newName =name
        newName="anuja"

        console.log(name)
        console.log(newName)

        //in this example not change 'name' value because it is pass-by-value to the 'newName' not a refrence


// heap:
//     -non-primative datatype is always is heap memory.
//     -heap return refrence of original value

        let obj={
            email:"abhishekjadhav@gmail.com",
            pass:"123"
        }

        let newObj=obj
        newObj.email="aj123@gmail.com";

        console.log(obj)
        console.log(newObj)

        //in this example change both object email because it pass refrence and both object point same address thats why it direct change email in heap