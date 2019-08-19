$(document).ready(function(){
	$('.header-menu__btn').click(function(){
		$(this).toggleClass('open');
		$('.header-menu__list').toggleClass('active');
	});
});


   $(function () {
        $("#datetimepicker1").datetimepicker();
        $("#datetimepicker2").datetimepicker({
            useCurrent: false
        });
        $("#datetimepicker1").on("dp.change", function (e) {
            $('#datetimepicker2').data("DateTimePicker").minDate(e.date);
        });
        $("#datetimepicker2").on("dp.change", function (e) {
            $('#datetimepicker7').data("DateTimePicker").maxDate(e.date);
        });
    });

   
    $(document).ready(function () {
     var $forPhotosG = $('#forPhotosG'),
         $head_b = $('.more_b');
         
     $('#show_more').click(function () {
         $forPhotosG.finish();
         $forPhotosG.slideToggle("slow");
         $(this).find("b").first().css({"display":"none"})
         return false;
     });
 });