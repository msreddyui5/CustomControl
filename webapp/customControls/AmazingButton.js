sap.ui.define([
	"sap/m/Button"
	], function(Button){
		
		Button.extend("oft.fiori.nov.customControls.AmazingButton",{
			
			metadata:{
				
				events:{
					"superman": { }
					
				}
				
			},
		
			renderer:{ },
			/*init: function(){
				
			},
			renderer: function(oRm,oControl){
				
				
			},*/
			"onmouseover": function(){
				this.fireSuperman();
				
			}
			
		});
		
		
	});