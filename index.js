/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

let userFirstLetter = prompt(`First letter of user name`)

let userName = users.filter(user => user.name[0] === userFirstLetter)
console.log('userName:', userName)


setTimeout(function() {
    console.log(`Hello ${userName[0].name}`)
}, 2000)

let userIdNumber = Number(prompt(`Type user ID`))

let userTask = todos.filter(todo => todo.id === userIdNumber)
console.log(userTask)
   

// IT AIN'T MUCH, BUT IT'S HONEST WORK.  <3
