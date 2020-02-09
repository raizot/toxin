$(document).ready(function () {
    $('.minus').click(function () {
        let $input = $(this).parent().find('input');
        let count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    function declOfNum(number, titles) {
        cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    } 
    // let $data;
    // let $input = $('.dropdown-content__box-button').find('input');
    // let summ;
    $('.minus,.plus').click(function () {
        var $data = [];
        var summ=0;
        var $input = $('.dropdown-content__box-button').find('input');
        $input.each(function () {
            $data.push($(this).val());
        }); 
        for (i = 0; i < $data.length; i++) {
            summ += Number($data[i]);
        }
        const target = $(this).target;
        const dropdown = target.closest('.dropdown'); // нашли родителя
        const selectDisplay = dropdown.querySelector('.dropdown__select')
        $(this).find('.dropdown > .dropdown__dropbtn > .btnText').text(summ + ' ' + declOfNum(summ, ['гость', 'гостя', 'гостей']));
        
        if(summ == 0){
            $('.dropdown__dropbtn .btnText').text('Сколько гостей');
        }
        });

    //resize input
    function resizeInput() {
        $(this).attr('size', $(this).val().length);
    }
    $('input[type="text"]')
        // event handler
        .keyup(resizeInput)
        // resize on page load
        .each(resizeInput);
    
    //show-hide
    $('.dropdown__dropbtn').click(function () {
        $(this).next('.dropdown-content').toggle();
    });
    //buttons
    $('.form-elements__btn-container > .clear').click(function () {
        var $input = $('.dropdown-content__box-button').find('input');
        $input.each(function f() {
            $(this).val(0);
        });
        $('.dropdown__dropbtn p').text('Сколько гостей');
    });

    $('.form-elements__btn-container .submit').click(function () {
        $('.dropdown-content').css("display","none");
     });
});




