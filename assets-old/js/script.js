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
	// var aione_builder = document.getElementById('aione_builder');
	// Sortable.create(aione_builder,{
	// 	group: "aione_sections",
	// 	sort: true,
	// 	delay: 0,
	// 	disabled: false,
	// 	store: null,
	// 	//filter: '.actions',
	// 	handle: '.section-handle',
	// 	ghostClass: 'ghost-section',
	// 	chosenClass: 'chosen-section',
	// 	dragClass: 'drag-section', 
	// 	animation: 150
	// });
	var aione_sections = new Array();
	$(".aione-builder").each(function() {
		var aione_sec_id = $(this).attr("id");
		if(aione_sec_id != undefined){
			aione_sections.push(aione_sec_id);
		} else {
			var aione_sec_id = 'build_id_'+Math.floor(Math.random()*100000000);
			$(this).attr("id", aione_sec_id);
			aione_sections.push(aione_sec_id);
		}
    });
    console.log("= = =");
    console.log(aione_sections);
    $.each(aione_sections, function( index, aione_sec ) {
    	var aione_sec_id = document.getElementById(aione_sec);
    	
    	Sortable.create(aione_sec_id,{
			//group: "name_"+(index+1),  // or { name: "...", pull: [true, false, clone], put: [true, false, array] }
			group: { name: "rows", pull: true, put: ['aione_elements','aione_elements_section'] },
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
	$(".aione-builder > section  .ar").each(function() {
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
/*  function triggers on drop of a section
/*****************************************************/
function onDropSection(){

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
/*   function triggers on drop of a row
/*****************************************************/
function onDropRow(){
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
/*****************************************************
/*   function triggers on drop of a column
/*****************************************************/
function onDropColumn(){
	var aione_column = new Array();
	$(".aione-builder .ac").each(function() {
		var aione_column_id = $(this).attr("id");
		if(aione_column_id != undefined){
			aione_column.push(aione_column_id);
		} else {
			var aione_column_id = 'col_id_'+Math.floor(Math.random()*100000000);
			$(this).attr("id", aione_column_id);
			var columnHeader = $('.aione-options').html();
			$(this).html(columnHeader);
			aione_column.push(aione_column_id);
		}
        
    });

    //columns 
    $.each(aione_column, function( index, aione_colm ) {
    	var aione_column_id = document.getElementById(aione_colm);
    	
    	Sortable.create(aione_column_id,{
			//group: "name_"+(index+1),  // or { name: "...", pull: [true, false, clone], put: [true, false, array] }
			group: { name: "columns", pull: true, put: ['aione_elements'] },
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
/*  Initialize aione builder elements on sidebar
/*****************************************************/
function initBuilderElements() {
	var aione_elements_section = document.getElementById('aione_elements_section');
	Sortable.create(aione_elements_section,{
		group: { name: "aione_elements_section", pull: 'clone', put: true },
		sort: false,
		onEnd: function(){
				setTimeout(function(){
					onDropSection();
				},200);
			}
	});

	var aione_elements_row = document.getElementById('aione_elements_row');
    Sortable.create(aione_elements_row,{
		group: { name: "aione_elements_row", pull: 'clone', put: ['aione_elements_columns'] },
		sort: false,
		onEnd: function(){
					setTimeout(function(){
						onDropRow();
						
					},200);
					
				}
    });

    var aione_elements_columns = document.getElementById('aione_elements_columns');
    Sortable.create(aione_elements_columns,{
		group: { name: "aione_elements_columns", pull: 'clone', put: ['aione_elements'] },
		sort: false,
		onEnd: function(){
					setTimeout(function(){
						onDropColumn();
						
					},200);
					
				}
    });
}
$(document).ready(function() {
	init_columns();
	init_rows();
	init_sections();
	initBuilderElements();



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
		$('body').on('click','.clone',function(){
			var insertAfter = $(this).parents('.ac').attr('id');
			$('#'+insertAfter).parent().append($('#'+insertAfter).clone()).html();
			
			
		});	

		//decressWidth of column
		$('body').on('click','.decress-width',function(){
			var id = $(this).parents('.ac').attr('id');
			if(/l([1-9][0-9]?|100)\b/.test($(this).parents('.ac').attr('class'))){

				var classLength = $(this).parents('.ac').attr('class').match(/l([1-9][0-9]?|100)\b/)[1];
				var newclass = $(this).parents('.ac').attr('class').replace(/l([1-9][0-9]?|100)\b/,'l'+(parseInt(classLength)-4));
				$('#'+id).attr('class',newclass);
			}
		});

		//incressWidth of column
		$('body').on('click','.incress-width',function(){
			var id = $(this).parents('.ac').attr('id');
			if(/l([1-9][0-9]?|100)\b/.test($(this).parents('.ac').attr('class'))){

				var classLength = $(this).parents('.ac').attr('class').match(/l([1-9][0-9]?|100)\b/)[1];
				var newclass = $(this).parents('.ac').attr('class').replace(/l([1-9][0-9]?|100)\b/,'l'+(parseInt(classLength)+4));
				$('#'+id).attr('class',newclass);
			}
		});

		$(document).on('click','.delete-column',function(){
			$(this).parents('.aione-option-bar').parent().remove();
		});



		//right side accordian
		$('body').on('click','.aione_collapse_element',function(){
			$(this).siblings('div').slideToggle();
			$(this).find('i').toggleClass('fa-minus');
		});

	

});

		 