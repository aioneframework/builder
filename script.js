$('#builder_switch').click(function(e){
	e.preventDefault();
	var switch_html = $(this).text();
	if (switch_html == 'Edit') {
		$(this).text('Preview');
	} else {
		$(this).text('Edit');
	}
	$(".aione-builder-wrapper").toggleClass("mode-preview");
	$(".aione-builder-wrapper").toggleClass("mode-editable");
});

//right side accordian
$('body').on('click','.aione_collapse_element',function(){
	$(this).siblings('div').slideToggle();
	$(this).find('i').toggleClass('fa-minus');
});