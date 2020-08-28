
$(function() {
    $('.my-pagination').pagination({
        pages: 15,
        hrefTextPrefix: '#NumberPage-',
        hrefTextSuffix: '-page',
        labelMap: Array,
        edges:1,
        displayedPages:3,
        itemsOnPage: 1,
        prevText: '<i class="button-icon material-icons">arrow_back</i>',
        nextText: '<i class="button-icon material-icons">arrow_forward</i>'

    });
});
console.log($('.my-pagination').pagination())
let myPagination = document.querySelectorAll('.my-pagination');
window.addEventListener('load',function () {
    for(let pagination of myPagination){
        let currentPrev = pagination.querySelectorAll('li');
        currentPrev[0].classList.add('hiddenCurrentPrev');
    }
});

for(let pagination of myPagination){
            pagination.addEventListener('click', function () {
                let numberSpan = pagination.querySelectorAll('.my-pagination li');
                if(numberSpan[1].classList.contains('active')) {
                    numberSpan[0].classList.add('hiddenCurrentPrev');
                }
                if( numberSpan[numberSpan.length-2].classList.contains('active')){
                    numberSpan[numberSpan.length-1].classList.add('hiddenCurrentPrev');
                }
            })
        }



