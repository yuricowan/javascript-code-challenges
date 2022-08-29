// Q. Print "Hello, world" with a delay of 3 seconds
function printWord(word) {
  console.log(word)
}

setTimeout(() => printWord('Hello, world'), 3000)

// Q. Create a function which receives a function as argument and executes it after 2 seconds

sayHello = () => console.log('Executing after 2 seconds')
callfunction = (anotherfunction) => anotherfunction

setTimeout(() => callfunction(sayHello()), 2000)
