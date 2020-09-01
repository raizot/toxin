
//SCSS imports
import './room-details.scss'
import '../../assets/fonts/fonts.scss'
let pi = Math.PI;

//получаем все числа из data-*
// let canvas = document.getElementById('pie');
let $canvas = document.querySelectorAll('.pie');
for(let canvas of $canvas){
let canvasDataSet=canvas.dataset;
let arrDataSet = [];

for(let elem in canvasDataSet){
   arrDataSet.push(canvasDataSet[elem]);
}

// получаем общее количество чисел data
let total = arrDataSet.reduce((total, num)=>{
    return total + Number(num); 
}, 0);

//создаем массив с числами радиуса сектора
let arrAngle=[];
for(let i=0; i < arrDataSet.length;i++){
    arrAngle.push(((2 * pi) / 100) * (Number(arrDataSet[i]) / total * 100));
}
//цвета для секторов
let arrColor = ['#6FCF97', '#FFCF9C', '#BC9CFF'];

//добавляем через canvas секторы
let ctx=canvas.getContext('2d');

for(let i=0; i< arrAngle.length; i++){
    let sum=0;
    for(let j=0; j <= i; j++){
        sum += arrAngle[j];
    }
    
    if(i == 0){
        ctx.beginPath();
        ctx.lineWidth = '4';
        ctx.strokeStyle = arrColor[i];
        ctx.arc(62, 62, 60, 0, sum - 0.05, false);
        ctx.stroke();
    }else{
        ctx.beginPath();
        ctx.lineWidth = '4';
        ctx.strokeStyle = arrColor[i];
        ctx.arc(62, 62, 60, sum - arrAngle[i], sum  - 0.05, false);
        ctx.stroke();
    }
    
}
//Пример стилизации текста из канваса
// ctx.font = "24px Open Sans Bold";
// ctx.textAlign = "center";
// ctx.fillStyle = "#BC9CFF";
// ctx.fillText(total, 62, 62);

// ctx.font = "18px Montserrat Bold";
// ctx.textAlign = "center";
// ctx.fillStyle = "#BC9CFF";
// ctx.lineWidth = 2;
// ctx.fillText('голосов', 62, 82);

//Изменяем цифру внутри диаграммы
let pieNum=canvas.parentElement.querySelector('.pie-num');
pieNum.innerHTML = total;

}