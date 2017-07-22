var MW = document.getElementById('Slider_Vadagon').clientWidth;
var prePW = 0;
var curPos=0;
var opa = 0;
var PW = 0;
var countPage = $('.page').length/1;
console.log(countPage);
var pageNow = 2;
var PageCountTo = 0;
var sliderHeight = 500;
$(document).ready(function(){

	$('#preview .prePage').css("width", 100/countPage+'%');

});

$(function(){
	$(window).mousemove(function(m){

		opa = m.pageX / MW;
		pageNow = Math.round((opa)*countPage);	
		if (PageCountTo) {
			if (opa <  0.3) {
				opa=0.3-(0.3-opa)/10;			
			}else if(opa >  0.7){
				opa=0.7-(0.7-opa)/10;
			}
		}
			// if (opa < 0.5) {
			// 	$('#container')[0].style.left = opa*(MW/2)+'px';
			// }else{
			// 	$('#container')[0].style.left = (1-opa)*(MW/2)+'px';
			// }
			for (var i = 0; i < $('.page').length; i++) {
					
					$('.page')[i].style.left = MW/2+(opa*countPage-i)*160+'px';
					$('.page img')[i].style.height = ((countPage/2 - Math.abs(opa*countPage-i))/(countPage/2))*sliderHeight+'px';
					$('.page img')[i].style.marginTop = (1-((countPage/2 - Math.abs(opa*countPage-i))/(countPage/2)))*(sliderHeight/2)+'px';
					

					// if(pageNow > i-3 && pageNow < i+3){
					// 	$('.page img')[i].style.display = 'block';
					// }else{
					// 	$('.page img')[i].style.display = 'none';
					// }
					
					if (opa > 0.5) {
						if (opa*countPage-0.5 <= i-1) {
							$('.page')[i].style.zIndex = countPage-i;
						}else{
							$('.page')[i].style.zIndex = i;
						}
						$('.prePage img')[i].style.borderColor = 'white';
					}else{
						if (opa*countPage-0.5 <= i) {
							$('.page')[i].style.zIndex = countPage-i;
						}else{
							$('.page')[i].style.zIndex = i;
						}
						$('.prePage img')[i].style.borderColor = 'white';
					}
			}
			$('.prePage img')[pageNow].style.borderColor = 'red';
	});

});
function showOriginal(){

	var element1 = document.getElementsByClassName("imgSrc")[pageNow].src;
	$('#imgToPrint').attr("src", element1);
	$('#entireSize')[0].style.display = 'block';
	console.log(element1);
	// $('.thumbnail').attr("src", newSRC);
}
// var MW = document.getElementById('Slider_Vadagon').clientWidth;
// var curPos=0;
// $(function(){
// 	$(window).mousemove(function(m){
// 		// console.log(m.pageX);
// 		opa = 200 - (curPos / MW * 200);
// 		// console.log(opa);
// 		if (opa < 100) {
// 			$('#doo').css({"width": opa+'%'});
// 		}else{
// 			$('#doo').css({"width": 100+'%'});
// 		}

// 		if (opa < 125) {
// 			$('#page1').css({"right": opa+'%'});
// 		}else{
// 			$('#page1').css({"right": 125+'%'});
// 		}
		
// 		$('#boo').css({"right": -opa+'%'});
// 		// $("p").css({"background-color": "yellow", "font-size": "200%"});




// 		curPos = m.pageX;
// 	});

// });
