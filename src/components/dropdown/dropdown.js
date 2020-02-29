$(document).ready(function () {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
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
        $('.dropdown-content__box-button').find('button').click(function () {
            let child = $('.child').val();
            let adult = $('.adult').val();
            let baby = $('.baby').val();
            let summ = parseInt(child) + parseInt(adult) + parseInt(baby);
            console.log($(this));
            console.log($(this).closest('.dropdown').find('.btnText'));
            if(summ === 0){
                $(this).closest('.dropdown').find('.btnText').text('Сколько гостей');
            } else $(this).closest('.dropdown').find('.btnText').text(summ + ' ' + declOfNum(summ, ['гость', 'гостя', 'гостей']));
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
        if($(this).next('.dropdown-content').hasClass('dropdown-content__show')){
            $(this).next('.dropdown-content').removeClass('dropdown-content__show');
        } else $(this).next('.dropdown-content').addClass('dropdown-content__show');

    });
    //buttons
    $('.form-elements__btn-container .clear').click(function () {
        $('.dropdown__dropbtn p').text('Сколько гостей');
        $('.child').val(0);
        $('.adult').val(0);
        $('.baby').val(0);
    
    });
    $('.form-elements__btn-container .submit').click(function () {
        $('.dropdown-content').removeClass('dropdown-content__show');
     });
});