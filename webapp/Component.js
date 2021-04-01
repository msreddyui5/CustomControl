sap.ui.define([
	"sap/ui/core/UIComponent"
	
	], function(UIComponent){
		
		return UIComponent.extend("oft.fiori.nov.Component",{
			metadata:{
				manifest:"json"
				
			},
			//constructor of the class all the initialization can be done here
			// must be added in this code
			init:function(){
				//calling the base class constructor to activate the base
				//its calling the base class constructor  to enable our component with some special power
				
				sap.ui.core.UIComponent.prototype.init.apply(this);
				//UIComponent.prototype.init.apply(this, arguments);
					
				
				//GET THE OBJECT OF ROUTER FROM PARENT
				var oRouter = this.getRouter();
				//var oRouter = UIComponent.getRouterFor(this);
			
				oRouter.initialize();
			
				//this.getRouter().initialize();
				
			}
			//here we have instantiate the app view code
		/*	createContent: function(){
				
							//Creating App Object
            	var  oAnubhav = new sap.ui.view("idMyXml",{
		             viewName: "oft.fiori.nov.view.App",
		              type:sap.ui.core.mvc.ViewType.XML
		              });
		
	          	//creating View1 Object
	         var oView1 = new sap.ui.view("idView1",{
		       viewName:"oft.fiori.nov.view.View1",
		         type:sap.ui.core.mvc.ViewType.XML
		
	             });
	
	          //creating view2 Object
              var oView2 = new sap.ui.view("idView2",{
                 viewName:"oft.fiori.nov.view.View2",
                type: sap.ui.core.mvc.ViewType.XML
                });

            var oApp = oAnubhav.byId("idApp");

            oApp.addMasterPage(oView1).addDetailPage(oView2);
            //oApp.addPage(oView1).addPage(oView2);

	        return oAnubhav;
				
			},*/
		/*	destroy: function(){
				
			}
			*/
			
		}) ;
			
			
		
		
		
		
	});