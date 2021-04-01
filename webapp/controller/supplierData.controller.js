sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("oft.fiori.nov.controller.supplierData", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf oft.fiori.nov.view.supplierData
		 */
		onInit: function() {
			this.oRouter = this.getOwnerComponent().getRouter();
				this.oRouter.attachRoutePatternMatched(this.hunk, this);
	
		},
		hunk: function(oEvent){
		var index = oEvent.getParameter("arguments").index;
		this.getView().bindElement("/suppliers/" + index);
			
		},
		onBack: function(){
			window.history.go(-1);
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf oft.fiori.nov.view.supplierData
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf oft.fiori.nov.view.supplierData
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf oft.fiori.nov.view.supplierData
		 */
		//	onExit: function() {
		//
		//	}

	});

});