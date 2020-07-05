/*FooTable Init*/

$(function () {
	"use strict";
	
	
	setTimeout(()=> {
		$('#footable_1,#footable_3').footable();
	
	/*Editing FooTable*/
	
	var $modal = $('#editor-modal'),
	$editor = $('#editor'),
	$editorTitle = $('#editor-title'),
	ft = FooTable.init('#footable_2', {
		editing: {
			enabled: true,
			// addRow: function(){
			// 	$modal.removeData('row');
			// 	$editor[0].reset();
			// 	$editorTitle.text('Add a new row');
			// 	$modal.modal('show');
			// },
			editRow: function(row){
				var values = row.val();
				$editor.find('#rollNo').val(values.rollNo);
				$editor.find('#fullName').val(values.fullName);
				$editor.find('#course').val(values.course);
				$editor.find('#batch').val(values.batch);
				$editor.find('#email').val(values.email);
				$editor.find('#phnno').val(values.phnno);
				$editor.find('#assigned').val(values.assigned);
				$editor.find('#accepted').val(values.accepted);
				$editor.find('#present').val(values.present);
				$modal.data('row', row);
				$editorTitle.text('Add Duty Details RollNo : ' + values.rollNo);
				$modal.modal('show');
			},
			deleteRow: function(row){
				// if (confirm('Are you sure you want to delete the row?')){
				// 	row.delete();
				// }
			}
		}
	})
	$(".btnyo").on("click", function() {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
	  
		if ($button.text() == "+") {
			var newVal = parseFloat(oldValue) + 1;
		  } else {
		 // Don't allow decrementing below zero
		  if (oldValue > 0) {
			var newVal = parseFloat(oldValue) - 1;
		  } else {
			newVal = 0;
		  }
		}
	  
		$button.parent().find("input").val(newVal);
	  
	});
	},3000);
	
	/*Init FooTable*/
	
});
		