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
            let $inputs = $(this).closest('.dropdown').find('input');
            let summ =  parseInt('0');
            let $numberInputs = $inputs.map(function(indx, element){
                return parseInt($(element).val());
            });
            for (i=0; i < $numberInputs.length;i++){
                summ += $numberInputs[i];
            }
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
        $(this).closest('.dropdown').find('.btnText').text('Сколько гостей');
        let $inputs = $(this).closest('.dropdown').find('input');
        let $numberInputs = $inputs.map(function(indx, element){
            return parseInt($(element).val());
        });
        for (i=0; i < $numberInputs.length;i++){
            $numberInputs[i] = 0;
            $inputs.val('0');
        }
    });
    $('.form-elements__btn-container .submit').click(function () {
        $('.dropdown-content').removeClass('dropdown-content__show');
     });
});