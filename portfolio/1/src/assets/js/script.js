let burgerBtn = document.querySelector('#burgerBtn');
let nav = document.querySelector('#nav');




burgerBtn.addEventListener("click", function() {
    nav.classList.toggle('active__nav');
});
