// Arrays 
// const myArray = []

// add elements to an array
// myArray[0] = 'Dave'
// myArray[1] = 1001
// myArray[2] = false

// refer to an array
// console.log(myArray)

// // length property
// console.log(myArray.length)

// // last element in an array
// console.log(myArray[myArray.length - 1])
// console.log(myArray[1])

// myArray.push('school')
// console.log(myArray)

//  // remove elements from the array
//  const myItem = myArray.pop()
//  console.log(myItem)

//  const newLength = myArray.unshift(42)
//  console.log(newLength)

//  // unshifr() and push() return new length of the array

//  const firstItem = myArray.shift()
//  console.log(firstItem)


// const myArray = []

// myArray[0] = 'Dave'
// myArray[1] = 1001
// myArray[2] = false

// // splice() method - deletes and replace value in array
// myArray.splice(1, 1, 42)
// myArray.splice(1, 0, 1001) // to add value to spesific place in array

// console.log(myArray)
// console.log(myArray[1])


// const myArray = ['A', 'B', 'C', 'D', 'E', 'F']

// const newArray = myArray.slice(2, 5)

// console.log(newArray)

// // reverse() method
// myArray.reverse()

// console.log(myArray)

// // join() method
// const  newString = myArray.join()

// const newArray = newString.split(',')

// console.log(newArray)

// console.log(newString)
////////////////////////////////////////////////////////

// const myArrayA = ['A', 'B', 'C']
// const myArrayB = ['D', 'E', 'F']

// // const newArray = myArrayA.concat(myArrayB)
// const newArray = [...myArrayA, ...myArrayB]

// console.log(newArray)
//////////////////////////////////////////////////////////

// Nested Arrays
const equipShelfA = ['baseball', 'football', 'volleyball']
const equipShelfB = ['basketball', 'golf balls', 'tennis balls']

const clothesShelfA = ['tank tops', 't-shirts', 'jerseys']
const clothesShelfB = ['sweat tops', 'sweat pants', 'hoodies']

console.log(equipShelfA[1])
// or
console.log(clothesShelfB[0])

const equipDept = [equipShelfA, equipShelfB]
const clothesDept = [clothesShelfA, clothesShelfB]

console.log(equipDept[0][1])
console.log(clothesDept[1][0])

const sportStore = [equipDept, clothesDept]
console.log(sportStore[0][0][1])
console.log(sportStore[1][1][0])