/*FooTable Init*/

$(function () {
	"use strict";
	
	
	setTimeout(()=> {
		$('#footable_1,#footable_3').footable();
	
	/*Editing FooTable*/
	
	var $modal = $('#editor-modal'),
	$editor = $('#editor5'),
	$editorTitle = $('#editor-title'),
	ft = FooTable.init('#footable_5', {
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
				$editor.find('#cname').val(values.cname);
				$editor.find('#email').val(values.email);
				$editor.find('#driveDate').val(values.driveDate);
				$editor.find('#driveType').val(values.driveType);
				$editor.find('#description').val(values.description);
				$modal.data('row', row);
				$editorTitle.text('Edit Drive Details  : ' + values.cname);
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
		