$(document).ready(function () {
    $(".container").mouseenter(function () {
        $(".card").stop(true,true).animate({
            top: "-90px"
        }, "slow");
    }).mouseleave(function () {
        $(".card").stop(true,true).animate({
            top: 0
        }, "slow");
    });
});

const card = document.querySelector('.card');

card.addEventListener('mouseover', () => {
    card.style.transform = 'translateY(-90px)';
});

card.addEventListener('mouseout', () => {
    card.style.transform = 'translateY(0)';
});
