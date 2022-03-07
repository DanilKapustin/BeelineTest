$(document).ready(function()
{
//active button-switcher
$('.switch').click(function()
{
$(this).toggleClass("switchOn");
});

//active submenu
$('.sub-nav-item').click(function()
{
$('.sub-nav-item').removeClass('sub-active');
$(this).toggleClass("sub-active");
});


$('.sub3').click(function()
{
$('.submenu').toggleClass('show');

$(this.lastElementChild).toggleClass('rotate');
});

});