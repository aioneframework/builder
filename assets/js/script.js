/*****************************************************
/*  set_page_content
/*****************************************************/
function set_page_content() {
	var page_content = $('#aione_builder').html();
	localStorage.setItem('page_content',page_content);
}
/*****************************************************
/*  get_page_content
/*****************************************************/
function get_page_content() {
	var page_content = $('#aione_builder').html();
	return page_content;
}
/*****************************************************
/*  init_sections
/*****************************************************/
function init_sections(){
	var aione_builder = document.getElementById('aione_builder');
	Sortable.create(aione_builder,{
		group: "aione_sections",
		sort: true,
		delay: 0,
		disabled: false,
		store: null,
		//filter: '.actions',
		handle: '.section-handle',
		ghostClass: 'ghost-section',
		chosenClass: 'chosen-section',
		dragClass: 'drag-section', 
		animation: 150
	});
}

/*****************************************************
/*  init_rows
/*****************************************************/
function init_rows(){
	var aione_sections = new Array();
	$(".aione-builder > section > .wrapper").each(function() {
		var aione_section_id = $(this).attr("id");
		if(aione_section_id != undefined){
			aione_sections.push(aione_section_id);
		} else {
			var aione_section_id = 'section_id_'+Math.floor(Math.random()*100000000);
			$(this).attr("id", aione_section_id);
			aione_sections.push(aione_section_id);
		}
    });
    console.log("= = =");
    console.log(aione_sections);
    $.each(aione_sections, function( index, aione_section_id ) {
    	var aione_section = document.getElementById(aione_section_id);
    	Sortable.create(aione_section,{
			group: { name: "aione_rows", pull: true, put: ['aione_rows'] },
			sort: true,
			delay: 0,
			disabled: false,
			store: null,
			//handle: '.aione-col-handle',
			animation: 150
		});
    });
}
/*****************************************************
/*  init_columns
/*****************************************************/
function init_columns(){
	var aione_rows = new Array();
	$(".aione-builder > section > .ar").each(function() {
		var aione_row_id = $(this).attr("id");
		if(aione_row_id != undefined){
			aione_rows.push(aione_row_id);
		} else {
			var aione_row_id = 'row_id_'+Math.floor(Math.random()*100000000);
			$(this).attr("id", aione_row_id);
			aione_rows.push(aione_row_id);
		}
    });
    console.log("= = =");
    console.log(aione_rows);
    $.each(aione_rows, function( index, aione_row_id ) {
    	var aione_row = document.getElementById(aione_row_id);
    	
    	Sortable.create(aione_row,{
			group: { name: "aione_columns", pull: true, put: ['aione_columns'] },
			sort: true,
			delay: 0,
			disabled: false,
			store: null,
			//handle: '.aione-col-handle',
			animation: 150
		});
    });
}


$(document).ready(function() {
	init_columns();
	init_rows();
	init_sections();
	



	/*****************************************************
	/*  builder_switch
	/*****************************************************/
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
});

		 