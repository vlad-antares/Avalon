$(document).ready(function(){
 $('#clock').countdown('2020/10/10', function(event) {
   var $this = $(this).html(event.strftime(''
     + '<span>%d<b>days</b></span><i>:</i>'
     + '<span>%H<b>hours</b></span><i>:</i>'
     + '<span>%M<b>min</b></span><i>:</i>'
     + '<span>%S<b>sec</b></span>'));
 });

 $('#clock2').countdown('2020/10/10', function(event) {
   var $this = $(this).html(event.strftime(''
     + '<span>%d<b>days</b></span><i>:</i>'
     + '<span>%H<b>hours</b></span><i>:</i>'
     + '<span>%M<b>min</b></span><i>:</i>'
     + '<span>%S<b>sec</b></span>'));
 });
 $('.main__faq_page__wrapp__faq_info_list_ul > li').click(function () {
        $(this).children('div').slideToggle(1000);
        if($(this).children('i').hasClass('faq_img_rotate'))
            $(this).children('i').removeClass('faq_img_rotate')
        else
            $(this).children('i').addClass('faq_img_rotate')
    })
 $(function(){
    var count=$('.count').html();
    var data=new Date();
    var day=data.getDate();
    var newcount=count*(1+(day-21)*0.05);
    })
});