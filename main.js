                                                    //Завдання №1


/*
let a = [1, 2, 3, 4, 5, ];
let b = ['user', 'userAge', 'car', 'surName', 'matherName'];
let arr = [12, 14, 'forever', 'hotgirl', false, true];
console.log(a,b,arr);
*/

                                                    //Завдання №2

/*
let usersName = [];
usersName [0] = 'olya';
usersName [1] = 'igor';
usersName [2] = 'katia';
usersName [3] = false;
usersName [4] = true;
usersName [5] = 18;
usersName [6] = 228;

console.log(usersName)*/

                                                    //Завдання №3


/*for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write('<div>Lorem ipsum dolor sit amet.</div>');
};*/

                                                    //Завдання №4
/*
for (let i = 0; i < 10; i++) {
    console.log(i)
    document.write(i, '<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, sapiente!</div>');
}
*/
                                                    //Завдання №5
/*
let i = 0;
while (i < 20){
document.write('<div><h1>Lorem ipsum dolor sit amet.</h1></div>')
console.log(i)
i++
}*/

                                                    //Завдання №6

/*let i = 0;
while (i <= 20) {
document.write((i), '<div><h1>Lorem ipsum dolor sit amet.</h1></div>')
console.log(i);
i++
}*/

                                                    //Завдання №7
/*let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for ( let item of a) {
    console.log(item)
}


                                                       //Завдання №8

let b = ['стіл', 'лампочка', 'вікно', 'куртка', 'шапка', 'нога', 'рука', 'вилка', 'ложка', 'подушка'];
for (let item of b) {
    console.log(item)
}
                                                    //Завдання №9
 */

/*let arr = ['green', 'yellow', 'blue', 123, 234, 54, null, true, false, 'big bord']
for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
}*/
                                                    //Завдання №10
/*let item = ['green', 'yellow', 'blue', 123, 234, 54, null, true, false, 'big bord'];
for (i = 0; i < item.length; i++ ) {
    if (typeof item [i] === 'boolean') {
        console.log(item[i])
    }
}*/
/*let item = ['green', 'yellow', 'blue', 123, 234, 54, null, true, false, 'big bord'];
let i = 0
while (i < item.length) {
i++
if (typeof item [i] === 'number') {
console.log(item[i])
    }
}*/
/*
let item = ['green', 'yellow', 'blue', 123, 234, 54, null, true, false, 'big bord'];
for (let itemElments of item ) {
    if (typeof itemElments === 'string') {
        console.log(itemElments)
    }
}
*/




                                                    //Завдання №11

/*
let arr = [];
arr [0] = 'green';
arr [1] = 'yellow';
arr [3] = 85;
arr [4] = 38;
arr [5] = false;
arr [6] = true;
arr [7] = 'bike';
arr [8] = 'Solomiya';
arr [9] = 'lepTop';
console.log(arr);
 */

       //Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

/*for (i = 0; i < 10; i++) {
    console.log(i)
    document.write(i)
}*/
 //Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

/*let i = 0;
while (i < 100) {
    console.log(i);
    i++
    document.write(i)
}*/
//Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

/*for (i = 0; i < 100; i = i + 2) {
    console.log(i)
    document.write(i)
}*/
               //Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
/*for (i = 0; i < 100; i = i + 2) {
console.log(i)
document.write(i)
   }*/
       //Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
/*
   for (i = 1; i < 100; i = i + 2) {

    console.log(i)
    document.write(i)
}
*/

/*Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)*/

/*for (i = 0; i <= 2; i++){
    for (j = 0; j <= 60; j++) {
    console.log(i,':',j)
 }
}*/

/* - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди);*/

/* for (i=2; i <= 2; i++){
     for (j=0; j<=20; j++) {
         for (k=0; k<60; k++){
             console.log(i,':',j, ':',k)
         }
     }
 }


            */                            /*робота в Аудиторії  */


 /*Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.*/

/* let a = ['a', 'b', 'c'];
 for (i = 0; i < 6; i++) {
  a.push(1)
  a.push(2)
  a.push(3)
     console.log(a[i])
 }*/
      /*Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].*/
 /*   let c = [1, 2, 3];
 c.pop()
 c.pop()
 c.pop()
 c.push(3)
 c.push(2)
 c.push(1)
                                                    console.log(c)


*/
/* Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.*/

/*
let a = [1, 2, 3];
 a.push(4)
 a.push(5)
 a.push(3)
console.log(a)*/
//Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
/*
  let a = [1, 2, 3]
  a.unshift(6)
  a.unshift(5)
  a.unshift(4)
console.log(a)*/

//Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

/*
let a = ['js', 'css', 'jq']
let b = a.shift(0)
console.log(b)
*/

//Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
/*
let a = ['js', 'css', 'jq'];
let b = a.pop(2);
console.log(b)
*/

//Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
/*let a = [1, 2, 3, 4, 5];
a.splice(0,3)
console.log(a)*/
//Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2]
/*
let a = [1, 2, 3, 4, 5];
a.splice(2,3)
console.log(a)*/
//Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5];
/*
let a =[1, 2, 3, 4, 5];
a.splice(2,0,'a','b','c')
console.log(a)
*/
/*
Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри
Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].*/
/*
let a = [1, 2, 3, 4, 5];
a.splice(1,0,'a','b')
a.splice(6,0,'c')
a.splice(8,0,'e')

console.log(a)*/;
//Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
/*
let arr = [11, 24, 43, 56, 21, 23, 34, 45, 56, 68]
for (i = 0; i < arr.length; i++) {
    if (arr[i]% 2 === 0) {
        console.log(arr[i])
    }
}
*/

/*зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
1. перебрати його циклом while*//*
let i = 0;
let arr = [2,17,13,6,22,31,45,66,100,-18];
while (i < arr.length) {
    console.log(arr[i])
    i++
}*/
/*
let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = 10;
while (i >= 0) {
    console.log(arr[i-1])
    i--
}
*/

                                                    //перебрати його циклом for
/*
let arr = [2,17,13,6,22,31,45,66,100,-18];
for ( i= 0; i < arr.length; i++ ) {
    console.log(arr[i])
}
for (i = 10; i > 0; i--) {
    console.log(arr[i-1])
}
*/
                                                    //перебрати циклом while та вивести  числа тільки з непарним індексом
/*
let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = 0
while (i < arr.length) {
if (arr[i]% 2 === 1  )
console.log(arr[i])
i++
}

let i = 10;
while (i >= 0) {
if (arr[i]% 2 === 1)
console.log(arr[i])
i--
}
*/


//перебрати циклом for та вивести  числа тільки з непарним індексом
/*
let arr = [2,17,13,6,22,31,45,66,100,-18];
for (i = 0; i < arr.length; i++) {
    if (arr[i]% 2 === 1 )
        console.log(arr[i])
}
for (i = 10; i > 0; i-- ) {
    if (arr[i]% 2 === 1)
        console.log(arr[i])
}

*/

//перебрати циклом while та вивести  числа тільки парні  значення
/*
let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < arr.length) {
    if (arr[i]% 2 === 0)
        console.log(arr[i])
    i++
}
let i = 10;
while ( i >= 0 ) {
    if (arr[i]% 2 === 0 )
        console.log(arr[i])
    i--
}

*/

//перебрати циклом for та вивести  числа тільки парні  значення
/*
let arr = [2,17,13,6,22,31,45,66,100,-18];
for (i = 0; i < arr.length; i++) {
    if (arr[i]% 2 === 0)
        console.log(arr[i])
}
for (i = 10; i >= 0; i--) {
    if (arr[i]% 2 === 0)
    console.log(arr[i])
}


*/
//замінити кожне число кратне 3 на слово "okten"
/*
let arr = [2,17,13,6,22,31,45,66,100,-18];
arr.splice(3,1,'okten');
arr.splice(7,1,'okten');
arr.splice(9,1,'okten')
console.log(arr)

*/
/*
let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = 9;
while (i >=0 ){
    console.log(arr[i])
    i--
}
*/
//всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
/*
let arr = [2,17,13,6,22,31,45,66,100,-18];
let i = 9;
while (i >= 0 ) {
    console.log(arr[i]);
    i--
}
*/
/*let arr = [2,17,13,6,22,31,45,66,100,-18];*/
/*
for (i = 9; i >= 0; i --) {
    console.log(arr[i])
}

*/
/*let i = 9;
while (i >= 0) {
    if (arr[i]% 2 === 1)
        console.log(arr[i]);
    i--
}*/
/*for (i = 9; i >= 0; i--) {
    if (arr[i]% 2 === 1)
        console.log(arr[i])
}*/
/*let i = 10;
while (i >= 0) {
    if (arr[i]% 2 === 0)
        console.log(arr[i])
    i--
}*/
/*
for (i = 10; i >= 0; i--) {
    if (arr[i]% 2 === 0 )
        console.log(arr[i])
}
*/

/*
let arr = [2,17,13,6,22,31,45,66,100,-18];
arr.splice(0,1,'okten');
arr.splice(1,1,'okten');
arr.splice(2,1,'okten');
arr.splice(4,1,'okten');
arr.splice(5,1,'okten');
arr.splice(6,1,'okten');
arr.splice(8,1,'okten');

console.log(arr)

*/

/*створити пустий масив та :
заповнити його 50 парними числами за допомоги циклу.*/
/*
let arr = [];
for (i = 0; i <= 50; i++) {
   arr[i] = i * 2
    console.log(arr[i])
}
*/

//заповнити його 50 непарними числами за допомоги циклу.
/*
let arr = [];
for (i = 0; i < 50; i++){
    arr[i] = i * 2 + 1

    console.log(arr[i])
}
*/

/*Створити пустий масив та :
a. заповнити його 50 парними числами за допомоги циклу.   */
/*
let arr = [];
for (i = 0; i <= 50; i++) {
    arr[i] = i * 2;
    console.log(arr[i])
}
//b. заповнити його 50 непарними числами за допомоги циклу.
let i = 0;
while (i <= 50) {
    arr[i] = i * 2 + 1;
    console.log(arr[i])
    i++
}
*/

//c. Заповнити масив 20ма рандомними числами.;
/*let arr = [];
for (i = 0; i <= 20; i++ ) {
arr[i] = Math.floor(Math.random() * 19)
    console.log(arr[i])
}*/
//Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
/*let arr = [];
for (i = 0; i < 20; i ++) {
    arr[i] = Math.floor(Math.random()* 732) + 8;
    console.log(arr[i])
}*/
//Вивести за допомогою console.log кожен третій елемен
                                                    //
/*let  arr = [];
for (i = 0; i <= 100; ++i) {
    arr[i] = Math.floor(Math.random() * 732 - 8) + 8; {
        if (arr[i]% 3 === 0 )
            console.log(arr[i])
    }

}*/

/*Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.*/
/*

let newArr = [];
for (i = 0; i <= 100; i++) {
    newArr[i]= Math.floor(Math.random() * 732 - 8) + 8;
        if (i% 3 === 0) {
            if (newArr[i]% 2 === 0)
            console.log(newArr[i])

}
}
*/
/*5. Вивести кожен елемент масиву, сусід справа якого є парним
EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56*/
/*

let arr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] ;

for (i = 0; i <= 9; i ++) {
if (arr[i]% 2 === 0)
    console.log(arr[i])
}

*/
/*Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.*/
/*
let arr = [100,250,50,168,120,345,188];
let newArr = 0
for (i = 0; i < arr.length; i++){
    newArr += arr[i]

}
newArr /= arr.length
 console.log(newArr)
*/
//Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
/*
let arr =[]
let newArr = []
 for (i = 0; i < 20; i++) {
     arr[i] = Math.floor(Math.random()* 20)
     newArr = arr[i]*5
     console.log(newArr)
 }
*/
//Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let arr = [12, 'Клоун', 'Рюкзак', 83, 123, 'bike', false, true , 345];
let newArr = [];
for ( i = 0; i < arr.length; i++){
    if (typeof arr[i]  === "number") {
        newArr.push(arr[i])
    }
}
console.log(newArr)




















