var numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    decimalBtn = document.getElementById('decimal'),
    clearBtns = document.querySelectorAll('.clear_btn'),
    display = document.getElementById('display'),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '';
 
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    number.addEventListener('click', function (e) {
        numberPress(e.target.textContent);
    });
}

for (var i = 0; i < operations.length; i++) {
    var operationBtn = operations[i];
    operationBtn.addEventListener('click', function (e) {
        operation(e.target.textContent);
    });
}

for (var i = 0; i < clearBtns.length; i++) {
    var clearBtn = clearBtns[i];
    clearBtn.addEventListener('click', function (e) {
        clear(e.srcElement.id);
    });
}
decimalBtn.addEventListener('click', decimal);


function numberPress(number) {
    if (MemoryNewNumber){
        display.value = number;
        MemoryNewNumber = false;
    } else{
        if (display.value === "0") {
            display.value = number;
        }
        else {
            display.value += number;
        };
    };

};

function operation(op) {
    var localOperationMemory = display.value;

    if(MemoryNewNumber && MemoryPendingOperation !== '='){
        display.value = MemoryCurrentNumber;
    }else{
        MemoryNewNumber = true;
        if (MemoryPendingOperation === '+'){
            MemoryCurrentNumber += parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '-'){
            MemoryCurrentNumber -= parseFloat(localOperationMemory);
        }
        else if (MemoryPendingOperation === '*') {
            MemoryCurrentNumber *= parseFloat(localOperationMemory);
        }
        else if (MemoryPendingOperation === '/') {
            MemoryCurrentNumber /= parseFloat(localOperationMemory);
        } else{
            MemoryCurrentNumber = parseFloat(localOperationMemory);
        }
        display.value = MemoryCurrentNumber;
        MemoryPendingOperation = op; 
    };
};
function decimal() {
    var localDecimalMemory = display.value;

    if (MemoryNewNumber) {
        localDecimalMemory = '0.';
        MemoryNewNumber = false;
    } else {
        if (localDecimalMemory.indexOf('.') === -1) {
            localDecimalMemory += '.';
        }
    };
    display.value = localDecimalMemory;
};

function clear(id) {
    if(id === 'ce'){
         display.value = '0';
         MemoryNewNumber = true;
    } else if (id === 'c'){
         display.value = '0';
         MemoryNewNumber = true;
        MemoryCurrentNumber = 0;
        MemoryPendingOperation= '';
        };
};
//просто практика
// let str = 12345;
// str= String(str);
// let num = 1;
// let arr=[];
// for(i=str.length-1;i>=0;i--){
//     arr.push(str[i]);
// }
// console.log(arr);

let arr = ['a', 'b', 'c', 'd','c', 'd'];
let str='';
for(i=0;i<arr.length;i++){
 str += arr[i]+',';
}
console.log(str);