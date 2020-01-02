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
        $('button').click(function () {
            let child = $('.child').val();
            let adult = $('.adult').val();
            let baby = $('.baby').val();
            let summ = parseInt(child) + parseInt(adult) + parseInt(baby);
            $('.dropbtn p').text(summ + ' ' + declOfNum(summ, ['гость', 'гостя', 'гостей']));
            if(summ === 0){
                $('.dropbtn p').text('Сколько гостей');
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
    $('.dropbtn').click(function () {
        let content = $('.dropdown-content');
        content.toggle();
    });
});