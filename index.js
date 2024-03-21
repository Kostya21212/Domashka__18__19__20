// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement (arr,elem){
return arr.filter(item => item !== elem)}
const newArray = removeElement(array, 5 );
console.log(newArray);
// Результат: [1, 2, 3, 4, 6, 7]

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let string = '';
const key = generateKey(16, characters);
function generateKey (length,characters){
    for(let i = 0 ; i < length;i++){
         string += characters.charAt(Math.floor(Math.random() * length))}
   return string
}
console.log(key); // eg599gb60q926j8i
// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function symbols (text,deleted){
    let result = ''
for(let i = 0;i< text.length;i++){
    if(!deleted.includes(text[i])){
       result += text[i]
    }
}
return  console.log(result)
}

symbols('hello world',['l','d'])

//Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
let mas = ['text', 'John', '12', 2, 6, 10, 12]
let res = 0
let sum = 0
function arr(massive){
    for(let i = 0; i < massive.length;i++){
        if(typeof(massive[i]) === 'number'){
        sum += massive[i]
        res++
    }  
    }
  
    return sum/res
}
console.log(arr(mas))

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
function mathAction (x, znak, y){ 
    
    if(typeof x !== 'string' && typeof y !== 'string'){
        const result = znak(x,y);
        console.log(result)
    }}
    function userZnak (userNumFirst,userNumSecond){
        const mathAction = prompt('Введіть арифметичну дію')
        if(mathAction === '-'){
             return userNumFirst - userNumSecond;
        }else if (mathAction === '+'){
            return userNumFirst + userNumSecond;
        }else if( mathAction === '*'){
            return mathAction * userNumSecond;
        }else if ( mathAction === '/'){
            return mathAction / userNumSecond;
        }else if (mathAction === '^'){
            return userNumFirst ^ userNumSecond;
        }else if(mathAction === '%'){
            return userNumFirst % userNumSecond;
        }else{
            alert('Не вірна операція!')
        }
    }
    mathAction( 5,userZnak,5)

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

    let userDataFirst  = parseInt(prompt('Введіть довжину массиву'))
    let userDataSecond  = parseInt(prompt('Введіть довжину внутрішнього массиву'))
    let userArray = []
function userData (mainArrLength,innerArrLength,arr){
   for(let i = 0; i < mainArrLength; i++){
    let arrayInner = []
    UserInnerData(arrayInner,innerArrLength,i)
    arr.push(arrayInner)
    }
    return console.log(arr)
 }
 function UserInnerData(arr,innerArrLength,i){
    for(let j = 0; j < innerArrLength; j++){
        const value = prompt(`Введіть будь яке значення [${i}][${j}]: `)
        arr.push(value);
    }}
userData(userDataFirst,userDataSecond,userArray)

