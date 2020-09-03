$('.start').datepicker({
    onSelect(formattedDate){
        $(".start").val(formattedDate.split(",")[0]);
        $(".end").val(formattedDate.split(",")[1]);
        },

    dateFormat:'dd.mm.yyyy'
});
let datepickerDouble = $(".date-dropdown__double");


// Show double datepicker 
let inpputEnd = datepickerDouble.find('.date-dropdown.end');
for(let input of inpputEnd){
input.addEventListener('click', function () {
    $(this).parents('.date-dropdown__double')
            .find('.start')
            .data('datepicker')
            .show();
})
}

window.addEventListener('load', function () {
    let datepickers = document.querySelectorAll('div .datepicker');
    for(let i = 0; i<=datepickers.length-1; i++){
        let div = document.createElement('div');
        let spanApply = document.createElement('span');
        div.classList.add('datepicker-buttons');
        spanApply.innerHTML = 'Принять';
        spanApply.classList.add('datepicker-button','apply');
        spanApply.addEventListener('click',function () {
            $(".start").data('datepicker').hide();
        });
        datepickers[i].appendChild(div);
        div.appendChild(spanApply);
    }
});


window.addEventListener('load', function () {
    let datepickerOfInput = $('.date-mask.date-dropdown.datepicker-here');
    let buttonsDatepickers = $('.datepicker-buttons');
    for(let i = 0; i<=buttonsDatepickers.length-1; i++){
        let spanClear = document.createElement('span');
        spanClear.innerHTML = 'Очистить';
        spanClear.classList.add('datepicker-button','clear');
        buttonsDatepickers[i].appendChild(spanClear);
        spanClear.addEventListener("click",function () {
            $(".start").val('');
            $(".end").val('');
            $(".single").val('');
                
        })
    }

});
let datepickerOfInput = $('.date-mask.date-dropdown.datepicker-here');

// console.log(singleDatepicker);
// for(let input of singleDatepicker){
//     spanClear.addEventListener('click',function () {
//             this.parent().find('.single').val('');
//             console.log(this);
//     });

// }
//Добавляем стрелки навигации
let customDatepicker=$('.datepicker-here');
customDatepicker.datepicker({
    prevHtml:'<span class="material-icons arrow-calendar__color">arrow_back</span>',
    nextHtml: '<span class="material-icons arrow-calendar__color">arrow_forward</span>',
    navTitles: {
        days: 'MM yyyy'
    }
});
//Устанавливаем для одиночного поля инпут формат даты
let inputSingle = $('.date-mask.date-dropdown.datepicker-here.single');

inputSingle.datepicker({

    // clearButton: true
});

inputSingle.datepicker.language['ru'] =  {
    days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
    daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
    daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthsShort: ['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'],
    today: 'Сегодня',
    clear: 'Очистить',
    dateFormat: 'dd M',
    timeFormat: 'hh:ii',
    firstDay: 1
};