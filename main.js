// setTimeout(function(){
//     $('.images>img:nth-child(1)').css({
//         transform:'translateX(-100%)'
//     })
//     $('.images>img:nth-child(2)').css({
//         transform:'translateX(-100%)'
//     })
//     $('.images>img:nth-child(1)').one('transitionend',function(e){
//         $(e.currentTarget).addClass('right').css({transform:'none'})
//     })
// },3000)
// setTimeout(function(){
//     $('.images>img:nth-child(2)').css({
//         transform:'translateX(-200%)'
//     })
//     $('.images>img:nth-child(3)').css({
//         transform:'translateX(-100%)'
//     })
//     $('.images>img:nth-child(2)').one('transitionend',function(e){
//         $(e.currentTarget).addClass('right').css({transform:'none'})
//     })
// },6000)
// setTimeout(function(){
//     $('.images>img:nth-child(3)').css({
//         transform:'translateX(-200%)'
//     })
//     $('.images>img:nth-child(1)').css({
//         transform:'translateX(-100%)'
//     })
//     $('.images>img:nth-child(3)').one('transitionend',function(e){
//         $(e.currentTarget).addClass('right').css({transform:'none'})
//     })
// },9000)
$('.images>img:nth-child(1)').addClass('current');
$('.images>img:nth-child(2)').addClass('enter');
$('.images>img:nth-child(3)').addClass('enter');
/* 优化前*/
/*
setTimeout(() => {
    $('.images>img:nth-child(1)').removeClass('current').addClass('leave')
        .one('transtionend',function(e){
            $(e.currentTarget).removeClass('leave').addClass('enter')
        })
    $('.images>img:nth-child(2)').removeClass('enter').addClass('current')
}, 3000);
setTimeout(() => {
    $('.images>img:nth-child(2)').removeClass('current').addClass('leave')
        .one('transtionend',function(e){
            $(e.currentTarget).removeClass('leave').addClass('enter')
        })
    $('.images>img:nth-child(3)').removeClass('enter').addClass('current')
}, 6000);
setTimeout(() => {
    $('.images>img:nth-child(3)').removeClass('current').addClass('leave')
        .one('transtionend',function(e){
            $(e.currentTarget).removeClass('leave').addClass('enter')
        })
    $('.images>img:nth-child(1)').removeClass('enter').addClass('current')
}, 9000);
setTimeout(() => {
    $('.images>img:nth-child(1)').removeClass('current').addClass('leave')
        .one('transtionend',function(e){
            $(e.currentTarget).removeClass('leave').addClass('enter')
        })
    $('.images>img:nth-child(2)').removeClass('enter').addClass('current')
}, 12000); */
/*优化后*/
let n=1;
let timer = setInterval(() => {
    $(`.images>img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
        .one('transitionend',function(e){
            $(e.currentTarget).removeClass('leave').addClass('enter')
        })
    $(`.images>img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current')
    n=n+1
}, 3000);

function x(n){
    if(n>3){
        n=n%3
        if(n===0){
            n = 3
        }
    } // n = 1 2 3 
    return n 
}
document.addEventListener('visibilitychange',function(){
    console.log(document.hidden)
    if(document.hidden){
        window.clearInterval(timer);
    }else{
        timer = setInterval(() => {
            $(`.images>img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
                .one('transitionend',function(e){
                    $(e.currentTarget).removeClass('leave').addClass('enter')
                })
            $(`.images>img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current')
            n=n+1
        }, 3000);
    }
})