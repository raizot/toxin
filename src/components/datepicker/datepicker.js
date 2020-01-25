$('.start').datepicker({
    onSelect(formattedDate){
        $(".start").val(formattedDate.split(",")[0]);
        $(".end").val(formattedDate.split(",")[1]);
}
});
$(".end").click(function func() {
    $(".start").datepicker().data('datepicker').show();

});

// let drivers = ['Вася', 'Петя1', 'Петя2', 'Петя3'];

// for (let i = drivers.length - 1; i >= 0; i--) {
//     console.log(drivers[i]);
// }
// console.log(drivers.length);
// console.log(drivers);
// console.log(drivers[0]);
// console.log(drivers[1]);

// let hater = {
//     firstName: 'Билл',
//     lastName: 'Gayts',
//     getName(){
//         return `${this.firstName}  ${this.lastName}`;
//     }
// }

// console.log(hater.getName());

// class Hater{
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     sayName(){
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }

// let hater1 = new Hater("Дядя","Вася");

// hater1.sayName();

// class Blogger {
//     constructor(nameOfChannel, firstName, lastName) {
//         this.nameOfChannel = nameOfChannel;
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     channel(){
//         console.log("Канал -" + `${this.nameOfChannel}` + `[автор канала: ${this.firstName} ${this.lastName}]`);
//     }
// }

// let blogger1 = new Blogger("Хо","Fuck it","I love it");
// blogger1.channel();
// let color = aColor;
// color("red");

// function aColor(color = "red") {
//     if(color == "red"){
//         return;
//     }
//     console.log(color);
// }

// let myColor = color;
// color("yellow");

// function color(color = 'red') {
//     if (color == 'red') {
//         return;
//     }
    
//     console.log(color);
// }

// document.getElementsByClassName('valueRy').innerText = "Хеллое";
// console.log(document.getElementsByClassName("va"));
//1
// let num = 123;
// alert(num);
//3
// let a=10;
// alert(a);
// a=20;
// alert(a);
//4
// let str=String(12345);

// console.log(str[0] * str[1] * str[2] * str[3] * str[4]);
//  console.log(str.length);
// let arr = ['1', '2', '3'];
// let arr2 = arr;
// arr2[0] = '!';
// console.log(arr2);

// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = 'a';
// arr2[0] = 'b';

// console.log(arr2);

// let test1 = 3;
// let test2 = 2;

// if (test1 !== test2) {
//     alert('верно');
// } else {
//     alert('неверно');
// }

// let num1 = 19;
// let num2 =12;

// if(num >= 10 || num == 2){
//     console.log('Верно');
// }else{
//     console.log('не верно');
// }

// let test = -1;

// if (test) {
//     alert('верно');
// } else {
//     alert('неверно');
// }

// let day = 0;

// if(day >= 1 && day <= 10){
//     console.log("Первая декада");
// } else if (day >= 11 && day <= 20) {
//     console.log("Вторая декада");
// } else if (day >= 21 && day <= 30) {
//     console.log("Третья декада");
// } else {
//     console.log('pizdetc');
// }
// let num = 15;
// let str = String(num);
// let last = str.length-1; 
// if ((num%3)== 0) {
//     console.log('Да');
// }else{
//     console.log('Нет');
// let result = 0;

// for (let i = 1; i <= 100; i++) {
//     result = result + i;
// }

// console.log(result);

// let num = 12345;
// let str = String(num);
//  let summ = 0;
//  for(let i=0; i < str.length ; i++){
//     summ+= Number(str[i]);
//  }
// console.log(summ);

// let arr = [10, 20, 30, 50, 235, 3000];

// for (let i = 0; i < arr.length; i++) {
//     let num = String(arr[i]);
//     if (num[0] == 1 || num[0] == 2 || num[0]  == 5 ){
//         console.log(arr[i]);
//     }
// }

// let arr = [0,1,2,4,5,5];
// for (let i =0; i<=arr.length; i++){
//     if(arr[i]==i){
//         console.log(arr[i]);
//     }
//  }

// let arr = ["Пн","Вт","Ср","Чт","Пт","Сб","Вс"];

// for (let i = 0; i <= arr.length-1; i++) {
//     if (arr[i] == "Сб" || arr[i] == "Вс" ){
//     document.write("<br>"+"<b>"+arr[i]+"</b>");
//     } else document.write("<br>"+arr[i] );
// }
// let summ=0;
// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// for (let key in obj){
//     summ+=obj[key]
// }
// console.log(summ);

// for (let i = 0, j = 0; i <= 9; i++ , j += 2) {
//     console.log(i, j);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let elem of arr) {
//     let result;

//     if (elem % 2 == 0) {
//         result = elem * elem;
//     } else if (elem % 3 == 0) {
//         result = elem * elem * elem;
//     }else{
//         continue;
//     }

//     console.log(result); // вынесли вывод за условие
// }

// let arr = [1, 2, 3, 4, 3, 5];

// for (let elem of arr) {
//     if (elem == 3) {
//         console.log('есть'); // выведет несколько раз
//     }
// }
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let flag = false;
// for (let elem of arr) {
//     if (elem == 'c') {
//         flag = true;
//         break;
//     }
// }

// if (flag === true) {
//     console.log('есть');
// } else {
//     console.log('нет');
// }

// let num=30;
// let i = 0;
// while(num<1000){
//     i++;
//     num *= 3;
// }
// console.log(num,i);
//  let str = '';
//  for(i=15; i > 0; i--){
//     str += '-' + i;
//     if(i==1){
//         str+='-';
//     }
//  }
//  console.log(str);

// for(let i=1; i<=3;i++){
//     for(j=1;j<=3;j++){
//     document.write(i+String(j)+ ' ');
// }
// }
// let arr = [];

// for(let i =2, j =0; i<=100; i += 2,j++){
//     arr[j] = i;
// }
// console.log(arr);

// for(let i=0;i<5;i++){
//     arr[i] = 'X';
// }
// console.log(arr);

// let arr = [];

// for (let i = 2; i <= 100; i += 2) {
//     arr[i] = i;
// }

// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// for(i=0; i < arr.length;i++){
//     arr[i] *= arr[i];
// }
// console.log(arr);
// let keys = ['a', 'b', 'c', 'd', 'e'];
// let values = [1, 2, 3, 4, 5];
// let obj = {};

// for (let i = 0; i <= 4; i++) {
//     let key = keys[i];
//     let value = values[i];

//     obj[key] = value;
// }

// console.log(obj);

// let obj = {
//     1: 6,
//     2: 7,
//     3: 8,
//     4: 9,
//     5: 10
// };
// let result = 0;
// let sum1 = [];
// let sum2 = [];
// for (let key in obj) {
//      sum1.push(key);
//     sum2.push(obj[key]);
//     result = sum1 / sum2;
// }
// console.log(sum1,sum2);

// let arr1 = [1, 2, 3, 3, 1, 2, 3, 3, 1, 2, 3, 3, 1, 2, 3, 3, 1, 2, 3, 3];
// let num1 = 0;
// let num2 = 0;

// for(let elem of arr1){
// if(elem == 3){
//     num1++;
// }else if (elem == 2) {             
//     num2++;
// }
// }
// console.log(num1,num2);

// let arr = ['a', 'b', 'c', 'a', 'a', 'b','v'];
// let count = {};

// for (let elem of arr) {
//     if (count[elem] === undefined) {
//         count[elem] = 1;
//     } else {
//         count[elem]++;
//     }
// }

// console.log(count);

// let arr = [1, 2, 3, 4, 5];

// for (let i = 1; i < arr.length-1; i++) {

//     console.log(arr[i - 1]+ arr[i+1]+arr[i]);
// }

// let arr = [];
//  for (let i = 1; i <= 5; i++) {
//     let str = '';
//     for (let j = 1; j <= 5; j++) { 
//         str += i;
//      }
//     arr.push(str);
// }
// document.write(arr)

// let arr=[];

// for(let i=1;i <= 10;i++){
//     arr.push(i);
// }

// console.log(arr);
// let arr = [-2,-1,0,1, 2, 3, 4, 5,11,12];

// for(i=0; i < arr.length;i++){
//     if(arr[i]<0 || arr[i]>10){
//         continue;
//     }
//     console.log(arr[i]);
// }
// for (let elem of arr) {
//     if (elem < 0 || elem > 10) {
//         continue;
//     }
//     console.log(elem);
// }
// let arr = [1, 2, 3, 4, 5];
// let result= 0;
// for (let i=0; i < arr.length;i++){
//     result += arr[i]*arr[i];
// }
// console.log(result);

// let arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];
// let sum=0;
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j < arr[i].length; j++){
//         sum+= arr[i][j];
//     }
// }
// console.log(sum);

// let arr = [
//     [
//         [1, 2],
//         [3, 4]
//     ],
//     [
//         [5, 6],
//         [7, 8]
//     ]
// ];
// let sum=0;
// for(let i=0; i < arr.length; i++){
//     for(let j=0; j < arr[i].length;j++){
//         for(let k=0; k < arr[i][j].length; k++){
//         sum += arr[i][j][k];
//         }
//     }
// }

// let arr = [4, -2, 5, 190, -130, 0, 1000];

// console.log(Math.min.apply(null,arr));

// console.log(Math.max.apply(null, arr));

// function getRandomArbitary(min, max) {
//     return Math.random() * (max - min) + min;
// }
// console.log(Math.round(getRandomArbitary(5,130)));

// let arr= [];
// let num=0;
// for(let i=0; i<10; i++){
//     num = getRandomArbitary(1,100);
//     arr.push(num);
//     function getRandomArbitary(min, max) {
//         return Math.round(Math.random() * (max - min) + min);
// }
// }
// console.log(arr);

// let str = 'https://geekologie.html';
// let word = str.lastIndexOf('.html');
// if(word != -1){
//     console.log('есть!');
// }else{
//     console.log('отсутствует!');
// }


// console.log(str.indexOf('c'));

// let str = '12345';

// arr = str.split('');

// console.log(arr);
// let arr = [1, 2, 3, 4, 5];
// let str=arr.join('-');
// console.log(str);

// function cube(num) {
//     document.write(Math.pow(num,3));
// }
// cube(33);

//  function plusOrMinus(num) {
//     if(num > 0){
//         console.log('++++');
//     }else{
//         console.log('----');
//     }
// }

// plusOrMinus(10);

// function func(name = 'Аноним') {
//     alert('ваше имя: ' + name);
// }

// // func(); // выведет 'ваше имя: Аноним'

// // С параметром:
// func('Вася'); // выведет 'ваше имя: Вася'

// function func(num) {
//     return num * num;
// }
// let numberT=func(2);
// console.log(numberT);

// let arr1=[2,3,3,4];
// let sum=0;
// function summ(x,num) {
//     for(let i=0; i<x.length;i++){
//       sum += Math.pow(x[i],num);
//     }
// }
// summ(arr1,3);
// console.log(sum);

// function getDigitsSum(num) {
//     let str = String(num);
//     let summ = 0;
//     for(i=0; i < str.length;i++){
//         summ += Number(str[i]);
//     }
//     return summ;   
// }

// console.log(getDigitsSum(21));


// function getDivisors(num) {
//     let arr = []; 
//     for(let i=0;i <= num;i++){
//         if (num % i == 0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// console.log(getDivisors(26));

// function reverseStr(str) {
//     let arr = str.split('');
//     arr.reverse();
//     return arr.join();
// }
// console.log(reverseStr('2434rdf'));
// 
// let arr = [1, 2, 3, 2];
// function delElem(arr,param) {
//     for(let i=0; i < arr.length; i++){
//         if(arr[i] == param){
//             arr.splice(i,1);
//         }
//     }
//     return arr;
// }
// console.log(delElem(arr,3));

// function addNumbers(num) {
//     let arr=[];
//     for(let i=1;i <= num; i++){
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(addNumbers(23));


// function addNumbers(min,max) {
//     let arr = [];
//     for (let i = min; i <= max; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(addNumbers(18,23));
// let arr1=[7,9,3];
// function even(arr) {
//     for(let elem of arr){
//         if(elem%2 == 0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(even(arr1));

// let arr1=[1,2,3,2,35,35];

// function numbersSequence(arr) {
//     for(let i=0; i < arr.length; i++){
//         if(arr[i] == arr[i+1]){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(numbersSequence(arr1));

// function func(a, b) {
//         return a + b >= 10
//         }
// console.log(func(20,3));

// function num(max) {
//     for(let i=2;i < max;i++){
//         return i;
//     }
// }

// function isPrime(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }

//     return true;
// }

// var elems = document.getElementsByTagName('input');
// for (var i = 0; i < elems.length; i++) {
//     elems[i].addEventListener('click', func);
// }

// function func() {
//     alert(this.value);
//     this.removeEventListener('click', func);
// }

// function func() {
// 	var elems = document.getElementsByClassName('www');
// 	for (var i = 0; i < elems.length; i++) {
// 		elems[i].innerHTML = '!!!';
// 	}
// }
// document.querySelector('.www').innerHTML = '!!!';

// let obj = {
//     year: 2025,
//     month: 12,
//     day
// };

// let { year, month, day } = obj;

// console.log(year);  // выведет 2025
// console.log(month); // выведет 12
// console.log(day);

// let arr = [1, 2, 3, 4, 5];

// let j=arr.map(function (elem) {
//     for (let i = j.length; i > 0;i--){
//         console.log(j[i]);
//     }
// })

// let arr = [1, 2, 3, 4, 5];


// function func(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }
// console.log(func(...arr));