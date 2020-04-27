$(document).ready(function(){


$('.guitar-thumb-gallery').fancybox({
		loop: true,
    thumbs : {
        autoStart : true,
    }
	});
/*GUITAR SELECT - HEADER SELECT*/
$guitarmainboxes = $('.guitar-main-boxes');
$homelink = $('#home-link');
$lockhornlogomain = $('#lockhorn-logo-main');
$lockhornlogomarquette = $('#lockhorn-logo-marquette');
$lockhornlogozipper = $('#lockhorn-logo-zipper');
$marquette = $('.marquette');
$marquettelink = $('#marquette-link');
$marquetteguitar = $('#marquette-guitar');
$zipper = $('.zipper');
$zipperlink = $('#zipper-link');
$zipperguitar = $('#zipper-guitar');

$homelink.click(function(){
  $('body').addClass('home-body');
  $('body').removeClass('marquette-body');
  $('body').removeClass('zipper-body');
  $homelink.css({'font-family':'core-bold, sans-serif'});
  $guitarmainboxes.fadeIn(500);
  $lockhornlogomain.fadeIn(500);
  $lockhornlogomarquette.hide();
  $lockhornlogozipper.hide();
  $zipperguitar.hide();
  $marquetteguitar.hide();
  $zipperlink.css('font-family', 'core, sans-serif');
  $marquettelink.css('font-family', 'core, sans-serif');

/*GUITAR SELECT*/
});
$marquette.click(function(){
  $('body').addClass('marquette-body'); 
  $('body').removeClass('home-body');
  $('body').removeClass('zipper-body');
  $guitarmainboxes.hide();
  $homelink.css({'font-family':'core, sans-serif'});
  $lockhornlogomain.hide();
  $lockhornlogomarquette.fadeIn(500);
  $lockhornlogozipper.hide();
  $marquetteguitar.fadeIn(500);
  $marquettelink.css('font-family', 'core-bold, sans-serif');
  $zipperguitar.hide();
  $zipperlink.css('font-family', 'core, sans-serif');
});

$zipper.click(function(){
  $('body').addClass('zipper-body'); 
  $('body').removeClass('home-body');
  $('body').removeClass('marquette-body');
  $guitarmainboxes.hide();
  $lockhornlogomain.hide();
  $lockhornlogomarquette.hide();
  $lockhornlogozipper.fadeIn(500);
  $homelink.css({'font-family':'core, sans-serif'});
  $marquetteguitar.hide();
  $marquettelink.css('font-family', 'core, sans-serif');
  $zipperguitar.fadeIn(500);
  $zipperlink.css('font-family', 'core-bold, sans-serif');
});
/*ZIPPER COLOR SELECT*/
  $("#color-select-zipper").change(function () {
      if ($(this).val() == "zipper-1") {
          $("#zipper-white-wood-blue-images").toggle();
          $("#zipper-blue-white-images").toggle();
      } else {
          $("#zipper-white-wood-blue-images").toggle();
          $("#zipper-blue-white-images").toggle();
      }
  });
/*MARQUETTE COLOR SELECT*/
  $("#color-select-marquette").change(function () {
      if ($(this).val() == "marquette-1") {
          $("#marquette-sunburst-images").toggle();
          $("#marquette-midnight-burst-images").toggle();
      } else {
          $("#marquette-sunburst-images").toggle();
          $("#marquette-midnight-burst-images").toggle();
      }
  });

  
/*MARQUETTE THUMBNAILS - BLUE/WHITE*/
  $marquettesunburstthumb1 = $('#marquette-sunburst-thumb-1 img');
  $marquettesunburstthumb2 = $('#marquette-sunburst-thumb-2 img');
  $marquettesunburstthumb3 = $('#marquette-sunburst-thumb-3 img');
  $marquettesunburstthumb4 = $('#marquette-sunburst-thumb-4 img');
  $marquettesunburstthumb5 = $('#marquette-sunburst-thumb-5 img');
  $marquettesunburstthumb6 = $('#marquette-sunburst-thumb-6 img');
  $marquettesunburstthumb7 = $('#marquette-sunburst-thumb-7 img');
  $marquettesunburstthumb8 = $('#marquette-sunburst-thumb-8 img');
  $marquettesunburstthumb9 = $('#marquette-sunburst-thumb-9 img');
  $marquettesunburstthumb10 = $('#marquette-sunburst-thumb-10 img');
  $marquettesunburstthumb11 = $('#marquette-sunburst-thumb-11 img');
  $marquettesunburstthumb12 = $('#marquette-sunburst-thumb-12 img');
  $marquettesunburstthumb13 = $('#marquette-sunburst-thumb-13 img');
  $marquettesunburstthumb14 = $('#marquette-sunburst-thumb-14 img');
  $marquettesunburstthumb15 = $('#marquette-sunburst-thumb-15 img');
  $marquettesunburstthumb16 = $('#marquette-sunburst-thumb-16 img');
  $marquettesunburstthumb17 = $('#marquette-sunburst-thumb-17 img');
  $marquettesunburstthumb18 = $('#marquette-sunburst-thumb-18 img');

  $marquettesunburstthumb1.hover(function(){$marquettesunburstthumb1.toggleClass('guitar-thumb-hover');});
  $marquettesunburstthumb2.hover(function(){$marquettesunburstthumb2.toggleClass('guitar-thumb-hover');});
  $marquettesunburstthumb3.hover(function(){$marquettesunburstthumb3.toggleClass('guitar-thumb-hover');});
  $marquettesunburstthumb4.hover(function(){$marquettesunburstthumb4.toggleClass('guitar-thumb-hover');});
  $marquettesunburstthumb5.hover(function(){$marquettesunburstthumb5.toggleClass('guitar-thumb-hover');});
  $marquettesunburstthumb6.hover(function(){$marquettesunburstthumb6.toggleClass('guitar-thumb-hover');});
  $marquettesunburstthumb7.hover(function(){$marquettesunburstthumb7.toggleClass('guitar-thumb-hover');});
  $marquettesunburstthumb8.hover(function(){$marquettesunburstthumb8.toggleClass('guitar-thumb-hover');});
  $marquettesunburstthumb9.hover(function(){$marquettesunburstthumb9.toggleClass('guitar-thumb-hover');});
  $marquettesunburstthumb10.hover(function(){$marquettesunburstthumb10.toggleClass('guitar-thumb-hover');});
  $marquettesunburstthumb11.hover(function(){$marquettesunburstthumb11.toggleClass('guitar-thumb-hover');});
  $marquettesunburstthumb12.hover(function(){$marquettesunburstthumb12.toggleClass('guitar-thumb-hover');});
  $marquettesunburstthumb13.hover(function(){$marquettesunburstthumb13.toggleClass('guitar-thumb-hover');});
  $marquettesunburstthumb14.hover(function(){$marquettesunburstthumb14.toggleClass('guitar-thumb-hover');});
  $marquettesunburstthumb15.hover(function(){$marquettesunburstthumb15.toggleClass('guitar-thumb-hover');});
  $marquettesunburstthumb16.hover(function(){$marquettesunburstthumb16.toggleClass('guitar-thumb-hover');});
  $marquettesunburstthumb17.hover(function(){$marquettesunburstthumb17.toggleClass('guitar-thumb-hover');});
  $marquettesunburstthumb18.hover(function(){$marquettesunburstthumb18.toggleClass('guitar-thumb-hover');});
/*MARQUETTE THUMBNAILS - MIDNIGHT BURST*/
  $marquettemidnightburstthumb1 = $('#marquette-midnight-burst-thumb-1 img');
  $marquettemidnightburstthumb2 = $('#marquette-midnight-burst-thumb-2 img');
  $marquettemidnightburstthumb3 = $('#marquette-midnight-burst-thumb-3 img');
  $marquettemidnightburstthumb4 = $('#marquette-midnight-burst-thumb-4 img');
  $marquettemidnightburstthumb5 = $('#marquette-midnight-burst-thumb-5 img');
  $marquettemidnightburstthumb6 = $('#marquette-midnight-burst-thumb-6 img');
  $marquettemidnightburstthumb7 = $('#marquette-midnight-burst-thumb-7 img');
  $marquettemidnightburstthumb8 = $('#marquette-midnight-burst-thumb-8 img');
  $marquettemidnightburstthumb9 = $('#marquette-midnight-burst-thumb-9 img');
  $marquettemidnightburstthumb10 = $('#marquette-midnight-burst-thumb-10 img');
  $marquettemidnightburstthumb11 = $('#marquette-midnight-burst-thumb-11 img');
  $marquettemidnightburstthumb12 = $('#marquette-midnight-burst-thumb-12 img');
  $marquettemidnightburstthumb13 = $('#marquette-midnight-burst-thumb-13 img');
  $marquettemidnightburstthumb14 = $('#marquette-midnight-burst-thumb-14 img');
  $marquettemidnightburstthumb15 = $('#marquette-midnight-burst-thumb-15 img');
  $marquettemidnightburstthumb16 = $('#marquette-midnight-burst-thumb-16 img');
  $marquettemidnightburstthumb17 = $('#marquette-midnight-burst-thumb-17 img');
  $marquettemidnightburstthumb18 = $('#marquette-midnight-burst-thumb-18 img');

  $marquettemidnightburstthumb1.hover(function(){$marquettemidnightburstthumb1.toggleClass('guitar-thumb-hover');});
  $marquettemidnightburstthumb2.hover(function(){$marquettemidnightburstthumb2.toggleClass('guitar-thumb-hover');});
  $marquettemidnightburstthumb3.hover(function(){$marquettemidnightburstthumb3.toggleClass('guitar-thumb-hover');});
  $marquettemidnightburstthumb4.hover(function(){$marquettemidnightburstthumb4.toggleClass('guitar-thumb-hover');});
  $marquettemidnightburstthumb5.hover(function(){$marquettemidnightburstthumb5.toggleClass('guitar-thumb-hover');});
  $marquettemidnightburstthumb6.hover(function(){$marquettemidnightburstthumb6.toggleClass('guitar-thumb-hover');});
  $marquettemidnightburstthumb7.hover(function(){$marquettemidnightburstthumb7.toggleClass('guitar-thumb-hover');});
  $marquettemidnightburstthumb8.hover(function(){$marquettemidnightburstthumb8.toggleClass('guitar-thumb-hover');});
  $marquettemidnightburstthumb9.hover(function(){$marquettemidnightburstthumb9.toggleClass('guitar-thumb-hover');});
  $marquettemidnightburstthumb10.hover(function(){$marquettemidnightburstthumb10.toggleClass('guitar-thumb-hover');});
  $marquettemidnightburstthumb11.hover(function(){$marquettemidnightburstthumb11.toggleClass('guitar-thumb-hover');});
  $marquettemidnightburstthumb12.hover(function(){$marquettemidnightburstthumb12.toggleClass('guitar-thumb-hover');});
  $marquettemidnightburstthumb13.hover(function(){$marquettemidnightburstthumb13.toggleClass('guitar-thumb-hover');});
  $marquettemidnightburstthumb14.hover(function(){$marquettemidnightburstthumb14.toggleClass('guitar-thumb-hover');});
  $marquettemidnightburstthumb15.hover(function(){$marquettemidnightburstthumb15.toggleClass('guitar-thumb-hover');});
  $marquettemidnightburstthumb16.hover(function(){$marquettemidnightburstthumb16.toggleClass('guitar-thumb-hover');});
  $marquettemidnightburstthumb17.hover(function(){$marquettemidnightburstthumb17.toggleClass('guitar-thumb-hover');});
  $marquettemidnightburstthumb18.hover(function(){$marquettemidnightburstthumb18.toggleClass('guitar-thumb-hover');});
/*ZIPPER THUMBNAILS - BLUE/WHITE*/
  $zipperbluethumb1 = $('#zipper-blue-thumb-1 img');
  $zipperbluethumb2 = $('#zipper-blue-thumb-2 img');
  $zipperbluethumb3 = $('#zipper-blue-thumb-3 img');
  $zipperbluethumb4 = $('#zipper-blue-thumb-4 img');
  $zipperbluethumb5 = $('#zipper-blue-thumb-5 img');
  $zipperbluethumb6 = $('#zipper-blue-thumb-6 img');
  $zipperbluethumb7 = $('#zipper-blue-thumb-7 img');
  $zipperbluethumb8 = $('#zipper-blue-thumb-8 img');
  $zipperbluethumb9 = $('#zipper-blue-thumb-9 img');
  $zipperbluethumb10 = $('#zipper-blue-thumb-10 img');
  $zipperbluethumb11 = $('#zipper-blue-thumb-11 img');
  $zipperbluethumb12 = $('#zipper-blue-thumb-12 img');
  $zipperbluethumb13 = $('#zipper-blue-thumb-13 img');
  $zipperbluethumb14 = $('#zipper-blue-thumb-14 img');
  $zipperbluethumb15 = $('#zipper-blue-thumb-15 img');
  $zipperbluethumb16 = $('#zipper-blue-thumb-16 img');
  $zipperbluethumb17 = $('#zipper-blue-thumb-17 img');
  $zipperbluethumb18 = $('#zipper-blue-thumb-18 img');

  $zipperbluethumb1.hover(function(){$zipperbluethumb1.toggleClass('guitar-thumb-hover');});
  $zipperbluethumb2.hover(function(){$zipperbluethumb2.toggleClass('guitar-thumb-hover');});
  $zipperbluethumb3.hover(function(){$zipperbluethumb3.toggleClass('guitar-thumb-hover');});
  $zipperbluethumb4.hover(function(){$zipperbluethumb4.toggleClass('guitar-thumb-hover');});
  $zipperbluethumb5.hover(function(){$zipperbluethumb5.toggleClass('guitar-thumb-hover');});
  $zipperbluethumb6.hover(function(){$zipperbluethumb6.toggleClass('guitar-thumb-hover');});
  $zipperbluethumb7.hover(function(){$zipperbluethumb7.toggleClass('guitar-thumb-hover');});
  $zipperbluethumb8.hover(function(){$zipperbluethumb8.toggleClass('guitar-thumb-hover');});
  $zipperbluethumb9.hover(function(){$zipperbluethumb9.toggleClass('guitar-thumb-hover');});
  $zipperbluethumb10.hover(function(){$zipperbluethumb10.toggleClass('guitar-thumb-hover');});
  $zipperbluethumb11.hover(function(){$zipperbluethumb11.toggleClass('guitar-thumb-hover');});
  $zipperbluethumb12.hover(function(){$zipperbluethumb12.toggleClass('guitar-thumb-hover');});
  $zipperbluethumb13.hover(function(){$zipperbluethumb13.toggleClass('guitar-thumb-hover');});
  $zipperbluethumb14.hover(function(){$zipperbluethumb14.toggleClass('guitar-thumb-hover');});
  $zipperbluethumb15.hover(function(){$zipperbluethumb15.toggleClass('guitar-thumb-hover');});
  $zipperbluethumb16.hover(function(){$zipperbluethumb16.toggleClass('guitar-thumb-hover');});
  $zipperbluethumb17.hover(function(){$zipperbluethumb17.toggleClass('guitar-thumb-hover');});
  $zipperbluethumb18.hover(function(){$zipperbluethumb18.toggleClass('guitar-thumb-hover');});
/*ZIPPER THUMBNAILS - WHITE WOOD/BLUE*/
  $zipperwhitethumb1 = $('#zipper-white-thumb-1 img');
  $zipperwhitethumb2 = $('#zipper-white-thumb-2 img');
  $zipperwhitethumb3 = $('#zipper-white-thumb-3 img');
  $zipperwhitethumb4 = $('#zipper-white-thumb-4 img');
  $zipperwhitethumb5 = $('#zipper-white-thumb-5 img');
  $zipperwhitethumb6 = $('#zipper-white-thumb-6 img');
  $zipperwhitethumb7 = $('#zipper-white-thumb-7 img');
  $zipperwhitethumb8 = $('#zipper-white-thumb-8 img');
  $zipperwhitethumb9 = $('#zipper-white-thumb-9 img');
  $zipperwhitethumb10 = $('#zipper-white-thumb-10 img');
  $zipperwhitethumb11 = $('#zipper-white-thumb-11 img');
  $zipperwhitethumb12 = $('#zipper-white-thumb-12 img');
  $zipperwhitethumb13 = $('#zipper-white-thumb-13 img');
  $zipperwhitethumb14 = $('#zipper-white-thumb-14 img');
  $zipperwhitethumb15 = $('#zipper-white-thumb-15 img');
  $zipperwhitethumb16 = $('#zipper-white-thumb-16 img');
  $zipperwhitethumb17 = $('#zipper-white-thumb-17 img');
  $zipperwhitethumb18 = $('#zipper-white-thumb-18 img');

  $zipperwhitethumb1.hover(function(){$zipperwhitethumb1.toggleClass('guitar-thumb-hover');});
  $zipperwhitethumb2.hover(function(){$zipperwhitethumb2.toggleClass('guitar-thumb-hover');});
  $zipperwhitethumb3.hover(function(){$zipperwhitethumb3.toggleClass('guitar-thumb-hover');});
  $zipperwhitethumb4.hover(function(){$zipperwhitethumb4.toggleClass('guitar-thumb-hover');});
  $zipperwhitethumb5.hover(function(){$zipperwhitethumb5.toggleClass('guitar-thumb-hover');});
  $zipperwhitethumb6.hover(function(){$zipperwhitethumb6.toggleClass('guitar-thumb-hover');});
  $zipperwhitethumb7.hover(function(){$zipperwhitethumb7.toggleClass('guitar-thumb-hover');});
  $zipperwhitethumb8.hover(function(){$zipperwhitethumb8.toggleClass('guitar-thumb-hover');});
  $zipperwhitethumb9.hover(function(){$zipperwhitethumb9.toggleClass('guitar-thumb-hover');});
  $zipperwhitethumb10.hover(function(){$zipperwhitethumb10.toggleClass('guitar-thumb-hover');});
  $zipperwhitethumb11.hover(function(){$zipperwhitethumb11.toggleClass('guitar-thumb-hover');});
  $zipperwhitethumb12.hover(function(){$zipperwhitethumb12.toggleClass('guitar-thumb-hover');});
  $zipperwhitethumb13.hover(function(){$zipperwhitethumb13.toggleClass('guitar-thumb-hover');});
  $zipperwhitethumb14.hover(function(){$zipperwhitethumb14.toggleClass('guitar-thumb-hover');});
  $zipperwhitethumb15.hover(function(){$zipperwhitethumb15.toggleClass('guitar-thumb-hover');});
  $zipperwhitethumb16.hover(function(){$zipperwhitethumb16.toggleClass('guitar-thumb-hover');});
  $zipperwhitethumb17.hover(function(){$zipperwhitethumb17.toggleClass('guitar-thumb-hover');});
  $zipperwhitethumb18.hover(function(){$zipperwhitethumb18.toggleClass('guitar-thumb-hover');});
});

$('#zipper-white-wood-blue-contact-form').change(function(){
    var sum = 2000;
    $('select :selected').each(function() {
        sum += Number($(this).val());
    });
     $("#zipper-white-wood-blue-contact-form-sum").html("$"+sum);

});

/*function zipperBlueWhiteTotal(){
	var amount = document.getElementById('amount').value;
	var payment = amount;
	document.getElementById('payment').innerHTML = "Monthly Payment = $"+payment;

}*/

/*function computerLoan(){
	var amount = document.getElementById('amount').value;
	var interest_rate = document.getElementById('interest-rate').value;
	var months = document.getElementById('months').value;
	var interest = (amount * (interest_rate * .01)) / months;
	var payment = ((amount / months) + interest).toFixed(2);
	payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById('payment').innerHTML = "Monthly Payment = $"+payment;
}*/


