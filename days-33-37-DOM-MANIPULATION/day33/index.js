//console.dir(document);

// document.body.children[1].children[0].href = 'https://google.com';

let anchElement = document.getElementById('external-link');

anchElement.href = 'https://yahoo.com';

// anchElement = document.querySelector('#external-link');

 anchElement.href = 'https://udemy.com'
 

 anchElement = document.querySelector('a')

 anchElement.href = 'https://github.com'
 // Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and 
//    save it in a variable with a name of your choice
let drilledH1 = document.body.children[0]
console.log(drilledH1)

// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
//    BONUS: Try using the variable from (1) to get access to the 
//    sibling element (i.e. the <p> element next to the <h1> element)
console.log(drilledH1.parentElement)
console.log(drilledH1.parentNode)
console.log(drilledH1.nextElementSibling)

// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)

let newH1 = document.getElementById('h1')
console.log(newH1)

// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class) 
//    and store it in a new variable with a name of your choice

let secondP = document.getElementById('p2')
console.log(secondP)

// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice

secondP.innerText = 'ypyp'