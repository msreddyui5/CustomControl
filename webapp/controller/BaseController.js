sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"oft/fiori/nov/model/models"
	
	], function(Controller,models){
		
		
		return Controller.extend("oft.fiori.nov.controller.BaseController",{
			
			initiateModels: function(){
				var oAppView = sap.ui.getCore().byId("idMyXml");
			
				var oModels = models.createFruitModel();
				oAppView.setModel(oModels);// acts like setting model @entire application level
			
				
			}
			
			
		}); 
			
	
		
		
	});