let list=$('.checkbox-list__list'),
    btnList = $('.checkbox-list__title-box');
list.hide();
$('#showList').show();

btnList.on('click',function showList() {
    $(this).next('.checkbox-list__list').toggle(400);
    
    $(this).find('button > .material-icons').toggleClass('transform');
    
});

