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

/*****************************************************
/*  initialize_sections
/*****************************************************/
function initializaSection(){

	var aione_section = new Array();
	$(".aione-builder section").each(function() {
		var aione_sec_id = $(this).attr("id");
		if(aione_sec_id != undefined){
			aione_section.push(aione_sec_id);
		} else {
			var aione_sec_id = 'section_'+Math.floor(Math.random()*100000000);
			$(this).attr("id", aione_sec_id);
			aione_section.push(aione_sec_id);
		}
        
    });
   
    $.each(aione_section, function( index, aione_sec ) {
    	var aione_sec_id = document.getElementById(aione_sec);
    	
    	Sortable.create(aione_sec_id,{
			//group: "name_"+(index+1),  // or { name: "...", pull: [true, false, clone], put: [true, false, array] }
			group: { name: "rows", pull: true, put: ['aione_elements_row'] },
			sort: true,  // sorting inside list
			delay: 0, // time in milliseconds to define when the sorting should start
			disabled: false, // Disables the sortable if set to true.
			store: null,  // @see Store
			handle: '.aione-col-handle',
			animation: 150,  // ms, animation speed moving items when sorting, `0` — without animation
		});
    });
}

/*****************************************************
/*  Initialize ROWS
/*****************************************************/
function InitializeRow(){
	var aione_rows = new Array();
	$(".aione-builder .ar").each(function() {
		var aione_row_id = $(this).attr("id");
		if(aione_row_id != undefined){
			aione_rows.push(aione_row_id);
		} else {
			var aione_row_id = 'el_id_'+Math.floor(Math.random()*100000000);
			$(this).attr("id", aione_row_id);
			aione_rows.push(aione_row_id);
		}
        
    });
    $.each(aione_rows, function( index, aione_row ) {
    	var aione_row_id = document.getElementById(aione_row);
    	
    	Sortable.create(aione_row_id,{
			//group: "name_"+(index+1),  // or { name: "...", pull: [true, false, clone], put: [true, false, array] }
			group: { name: "rows", pull: true, put: ['aione_elements_columns','aione_elements'] },
			sort: true,  // sorting inside list
			delay: 0, // time in milliseconds to define when the sorting should start
			disabled: false, // Disables the sortable if set to true.
			store: null,  // @see Store
			handle: '.aione-col-handle',
			animation: 150,  // ms, animation speed moving items when sorting, `0` — without animation
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

	var aione_elements_section = document.getElementById('aione_elements_section');
	Sortable.create(aione_elements_section,{
		group: { name: "aione_elements_section", pull: 'clone', put: true },
		sort: false,
		onEnd: function(){
				setTimeout(function(){
					initializaSection();
				},200);
			}
	});
	initializaSection();

	var aione_builder = document.getElementById('aione_section');
	Sortable.create(aione_builder,{
		//group: "name_"+(index+1),  // or { name: "...", pull: [true, false, clone], put: [true, false, array] }
		group: { name: "aione_builder_sections", pull: false, put: ['aione_elements_row'] },
		sort: true,  // sorting inside list
		delay: 0, // time in milliseconds to define when the sorting should start
		disabled: false, // Disables the sortable if set to true.
		store: null,  // @see Store
		animation: 150,  // ms, animation speed moving items when sorting, `0` — without animation
		// handle: ".aione-section-handle",
		ghostClass: "ghost-section", 
		// chosenClass: "chosen-section",
		dragClass:"drag-section",
		//filter: '.ar , .ac'
	});
	

	var aione_elements_row = document.getElementById('aione_elements_row');
	Sortable.create(aione_elements_row,{
		group: { name: "aione_elements_row", pull: 'clone', put: ['aione_elements_columns'] },
		sort: false,
		onEnd: function(){
					setTimeout(function(){
						InitializeRow();
						
					},200);
					
				}
	});
	InitializeRow();

});

		 