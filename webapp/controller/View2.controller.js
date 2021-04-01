sap.ui.define([

	"oft/fiori/nov/controller/BaseController",
	 "sap/m/MessageBox",
	 "sap/m/MessageToast",
	 "oft/fiori/nov/formatter/formatter"
], 
function(BaseController,MessageBox,MessageToast,Formatter) {
	"use strict";

	return BaseController.extend("oft.fiori.nov.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf oft.fiori.nov.view.View2
		 */
			onInit: function() {
				this.oRouter = this.getOwnerComponent().getRouter();
				this.oRouter.attachRoutePatternMatched(this.herculis, this);
		
			},
			herculis: function(oEvent){
			debugger;
			var selectedIndex = oEvent.getParameter("arguments").jump;
			var sPath = "/fruits/" + selectedIndex;
			this.getView().bindElement(sPath);
			},
			onSelectRow: function(oEvent){
				var sPath =oEvent.getParameter("listItem").getBindingContextPath();
				console.log(sPath);
				this.oRouter.navTo("supplier", {
					index: sPath.split("/")[sPath.split("/").length - 1]
					
				});
				
			},
		onBack: function(){
			//step1: get the object of the parent for both the view-container control
			var oApp = this.getView().getParent();
			
			//step2:call the method to navigate to another view by passing id
			oApp.to("idView1");
			
		},
		onMadhu: function(){
			sap.m.MessageBox.error("error came");
			
		},
		onSuperman: function(){
		sap.m.MessageBox.error("error came");	
			
		},
		formatter:"Formatter",
		selectedFruit:" ",
		
			onConfirm : function(oEvent){
			var value = oEvent.getParameter("selectedItem").getTitle();
			this.getView().byId(this.cellId).setValue(value);
			
		},
		onValueHelp: function(oEvent){
			
			this.cellId = oEvent.getSource().getId();  // to set the selected value 
			//creating instance of fragment
			
			var oFragment = new sap.ui.xmlfragment("oft.fiori.nov.fragments.spiderman", this); //this :controller instance can passed as a this pointer to all the fragment event handlers
			this.getView().addDependent(oFragment);   //fragment has to be a friend for the view
			oFragment.bindAggregation("items",{
				path:"/city",
				template: new sap.m.StandardListItem({
					description:"{cityName}",
					title:"{state}"
					
				})
				
			});
			oFragment.setMultiSelect(false);
			oFragment.open();
			
			
		},
		
	
		onApprove: function(){
			this.selectedFruit = this.getView().byId("idHeader").getTitle();
			console.log(this.selectedFruit);
			var Anubhav = this;
			MessageBox.confirm("Do You Really Like This fruit?",{
				
				onClose: function(status){
					//here we cannot access this variable because this is not in scope
					//local variables of caller will be in scope of Async Function
					if(status === "OK"){
						MessageToast.show('Hey!! that was a good choice of fruit'+ Anubhav.selectedFruit);
					}
					
				}
			});
			
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf oft.fiori.nov.view.View2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf oft.fiori.nov.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf oft.fiori.nov.view.View2
		 */
		//	onExit: function() {
		//
		//	}

	});

});