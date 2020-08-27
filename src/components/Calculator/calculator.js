// var numbers = document.querySelectorAll('.number'),
//     operations = document.querySelectorAll('.operation'),
//     decimalBtn = document.getElementById('decimal'),
//     clearBtns = document.querySelectorAll('.clear_btn'),
//     display = document.getElementById('display'),
//     MemoryCurrentNumber = 0,
//     MemoryNewNumber = false,
//     MemoryPendingOperation = '';
//
// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     number.addEventListener('click', function (e) {
//         numberPress(e.target.textContent);
//     });
// }
//
// for (var i = 0; i < operations.length; i++) {
//     var operationBtn = operations[i];
//     operationBtn.addEventListener('click', function (e) {
//         operation(e.target.textContent);
//     });
// }
//
// for (var i = 0; i < clearBtns.length; i++) {
//     var clearBtn = clearBtns[i];
//     clearBtn.addEventListener('click', function (e) {
//         clear(e.srcElement.id);
//     });
// }
// decimalBtn.addEventListener('click', decimal);
//
//
// function numberPress(number) {
//     if (MemoryNewNumber){
//         display.value = number;
//         MemoryNewNumber = false;
//     } else{
//         if (display.value === "0") {
//             display.value = number;
//         }
//         else {
//             display.value += number;
//         };
//     };
//
// };
//
// function operation(op) {
//     var localOperationMemory = display.value;
//
//     if(MemoryNewNumber && MemoryPendingOperation !== '='){
//         display.value = MemoryCurrentNumber;
//     }else{
//         MemoryNewNumber = true;
//         if (MemoryPendingOperation === '+'){
//             MemoryCurrentNumber += parseFloat(localOperationMemory);
//         } else if (MemoryPendingOperation === '-'){
//             MemoryCurrentNumber -= parseFloat(localOperationMemory);
//         }
//         else if (MemoryPendingOperation === '*') {
//             MemoryCurrentNumber *= parseFloat(localOperationMemory);
//         }
//         else if (MemoryPendingOperation === '/') {
//             MemoryCurrentNumber /= parseFloat(localOperationMemory);
//         } else{
//             MemoryCurrentNumber = parseFloat(localOperationMemory);
//         }
//         display.value = MemoryCurrentNumber;
//         MemoryPendingOperation = op;
//     };
// };
// function decimal() {
//     var localDecimalMemory = display.value;
//
//     if (MemoryNewNumber) {
//         localDecimalMemory = '0.';
//         MemoryNewNumber = false;
//     } else {
//         if (localDecimalMemory.indexOf('.') === -1) {
//             localDecimalMemory += '.';
//         }
//     };
//     display.value = localDecimalMemory;
// };
//
// function clear(id) {
//     if(id === 'ce'){
//          display.value = '0';
//          MemoryNewNumber = true;
//     } else if (id === 'c'){
//          display.value = '0';
//          MemoryNewNumber = true;
//         MemoryCurrentNumber = 0;
//         MemoryPendingOperation= '';
//         };
// };
//практика


// let number1 = document.querySelectorAll('.number1');
// let button1 = document.querySelectorAll('.button1');
// let button2 = document.querySelectorAll('.button2');
// for (let elem of button1){
//     elem.addEventListener('click', function () {
//         let num = 0;
//         num++;
//         let number1 = this.parentElement.previousElementSibling;
//         console.log(number1);
//         number1.innerHTML = 'число ' + num;
// })}
// for (let elem of button2){
//
//     elem.addEventListener('click', function () {
//         let num = 0;
//         num--;
//         let number1 = this.parentElement.previousElementSibling;
//         console.log(number1);
//         number1.innerHTML = 'число ' + num;
//     })}


//Генератор таблицы
let table =document.querySelector('.table12');
let input1 =document.querySelector('.input1');
let input2 =document.querySelector('.input2');

input1.addEventListener('input',function () {
    let trs= document.querySelectorAll('.table12 tr');
    for(let j=0;j<= trs.length-1; j++){
        table.removeChild(trs[j]);
    }
    for(let j=0; j<=input1.value-1;j++) {
        let tr = document.createElement('tr');
        for (let i = 0; i <= input2.value - 1; i++) {
                let td = document.createElement('td');
                tr.appendChild(td);
        }
        table.appendChild(tr);
    }
});
input2.addEventListener('input',function () {
    let trs= document.querySelectorAll('.table12 tr');
    for(let j=0;j<= trs.length-1; j++){
        table.removeChild(trs[j]);
    }
    for(let j=0; j<=input1.value-1;j++) {
        let tr = document.createElement('tr');
        for (let i = 0; i <= input2.value - 1; i++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    for (let i = 0; i<=input2.value-1; i++){
        for (let tr of trs) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
}
});

function func1() {
    let tds = table.querySelectorAll('td');
    console.log(tds);
    for (let td of tds) {
        td.addEventListener('click', function foo() {
            let input = document.createElement('input');
            input.value = td.innerHTML;
            td.innerHTML = '';
            td.appendChild(input);
            input.addEventListener('blur', function() {
                td.innerHTML = input.value;
                td.addEventListener('click', foo);
            });
            td.removeEventListener('click', foo);
        })
    }
}
input1.addEventListener('click',func1);
input2.addEventListener('click',func1);
// TextRemove
let buttonAddText = document.querySelector('.addText');
buttonAddText.addEventListener('click',function () {
    let removeText = document.querySelector('.removeText');
    let newP =  document.createElement('p');
    removeText.appendChild(newP);
    func5();
});
window.addEventListener('load',func5);
function func5() {
    let i=1;
    let $removeTextP = document.querySelectorAll('.removeText p');
    for (let p of $removeTextP) {
        let a = document.createElement('a');
        let span = document.createElement('span');
        a.href = '#~';
        a.innerHTML = ' ' + 'remove';
        a.addEventListener('click', function () {
            this.parentElement.remove();
        });
        p.innerHTML = 'Text' + i++;
        span.innerHTML = p.innerHTML;
        p.innerHTML = '';
        p.appendChild(span);
        p.appendChild(a);
        a.preventDefault;
    }

    let $span = document.querySelectorAll('.removeText p span');

    for (let span of $span) {
        span.addEventListener('click', function foo1() {
            let input = document.createElement('input');
            input.value = span.innerHTML;
            span.innerHTML = '';
            input.addEventListener('blur', function () {
                span.innerHTML = this.value;
                span.addEventListener('click', foo1);
            });
            span.appendChild(input);
            span.removeEventListener('click', foo1);
        })
    }

}

console.log(document.cookie);

