sap.ui.define([
	"sap/ui/core/Control"
	],
	function(Control){
		
		 Control.extend("oft.fiori.nov.customControls.Heading",{
		 	metadata:{
		 	properties:{
		 		"magic":"",
		 		"mario":"",
		 		"border":""
		 		
		 		
		 	},
		 	functions:{ },
		 	events:{ }
		 	},
		 	init: function(){
		 		this.setBorder("1px solid black");
		 		
		 	},
		 	renderer:function(oRm,oControl){
		 		//oRm.write("<h1>Spiderman is here </h1>");
		 		//oRm.write("<h1 style='color:" + oControl.getMario()+"'>" + oControl.getMagic()    + "</h1>");
		 		//we will breakdown the code in renderer api
		 		oRm.write("<h1");
		 		oRm.addStyle("color",oControl.getMario());
		 		oRm.addStyle("border",oControl.getBorder());
		 		oRm.writeStyles();
		 		oRm.write(">" + oControl.getMagic() + "</h1>");
		 		
		 	}
			
		});
		
		
		
	});