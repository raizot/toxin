$likeButtons = document.querySelectorAll('.like-button');
$likeInputs = document.querySelectorAll('.like-button__input');

for(let likeButton of $likeButtons){
    likeButton.addEventListener('click',function () {
        this.classList.toggle('like-button__true');
        this.lastChild.classList.toggle('like-button__value-color');
        if(this.classList.contains('like-button__true') == true){
            this.lastChild.innerHTML = Number(this.lastChild.innerText) + 1;
        } else {
            this.lastChild.innerHTML = Number(this.lastChild.innerText) - 1;
        }

    })
}