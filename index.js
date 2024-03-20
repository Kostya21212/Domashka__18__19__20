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

//2
let array = ['text', 'John', '12', 2, 6, 10, 12]
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
console.log(arr(array))


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
    let user = []
    
    function userData (arrayUser,length){
    for(let i = 0; i < length;i++){
     const name = 'Ivan'
     const age = 26
     const status = 'married'
     const  arr2 = [name, age, status]
     arrayUser.push(arr2)
     } 
    console.log(arrayUser)
    }
    userData(user,8)