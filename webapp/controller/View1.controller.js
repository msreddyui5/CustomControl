sap.ui.define([
	"oft/fiori/nov/controller/BaseController",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(BaseController, Filter, FilterOperator) {
	"use strict";
	return BaseController.extend("oft.fiori.nov.controller.View1", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf oft.fiori.nov.view.View1
		 */
		onInit: function() {
			var oList = this.getView().byId("dynamicList");
			//	var oListActual = this.getView().byId("idFruits");
			oList.bindAggregation("items", {
				path: "/fruits",
				template: new sap.m.ObjectListItem({
					intro: "{type}",
					title: "{name}",
					number: "{price}",
					numberUnit: "{currency}",
					icon: "{image}"
				})
			});
			// oListActual.addEventDelegate({
			// 	updateFinished:function(){
			// 	oListActual.setSelectedItem(oList.getItems()[0]);	
			// }
			// });
			//oList.setSelectedItem(oList.getItems()[0]); //method got executed before the data avaliable
			//this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter = this.getOwnerComponent().getRouter(this); // it will gives the router object
		},
		onUpdate: function(oEvent) {
			var oListActual = oEvent.getSource();
			oListActual.setSelectedItem(oListActual.getItems()[0]);
			var oView2 = this.getView().getParent().getParent().getDetailPages()[0];
			oView2.bindElement("/fruits/0");
		},
		onItemPress: function(oEvent) {
			//getting the item selected by the user
			var oItemPressed = oEvent.getParameter("listItem");
			//address of the data which was ffrom item
			var addressofSelectedItem = oItemPressed.getBindingContextPath();
			//load detail view by firing route as a result on top in url we will see fruits as a pattern endpoint
			this.oRouter.navTo("simposon", {
				jump: addressofSelectedItem.split("/")[addressofSelectedItem.split("/").length - 1]
			}); //load detail view by firing route as a result on top in url we will see fruits as a pattern endpoint
			/*this.oRouter.navTo("simposon",{
				jump:addressofSelectedItem.split("/")[addressofSelectedItem.split("/").length - 1]
			});*/
			//view 2 object by going to the parent which is app control
			//var oView2 = this.getView().getParent().getPages()[1];
			/* var oView2 = this.getView().getParent().getParent().getDetailPages()[0];*/
			//binding address to the second view
			/* oView2.bindElement(addressofSelectedItem);*/
			// debugger;
			//get the object of tab filter
			//inside that fragment
			//inside each fragment a simpleform
			//bind that simple form with /address/index
			/* oView2.byId("__filter3").getContent()[0].getItems()[0].bindElement("address/0");
		   oView2.byId("__filter3").getContent()[1].getItems()[0].bindElement("address/1");*/
			//navigate to next screen
			//this.onShowMe();
		},
		onFilter: function(oEvent) {
			//sap.m.MessageBox.confirm("this page is under construction.......");
			var oFragment = new sap.ui.xmlfragment("oft.fiori.nov.fragments.spiderman");
			this.getView().addDependent(oFragment);
			//fragment has to be a friend for the view
			oFragment.bindAggregation("items", {
				path: "/suppliers",
				template: new sap.m.StandardListItem({
					description: "{city}",
					title: "{name}"
				})
			});
			oFragment.open();
		},
		onSearch: function(oEvent) {
			var searchString = oEvent.getParameter("query");
			//var oFilter = new Filter(op1,opr,op2);
			var oFilter = new Filter("name", FilterOperator.Contains, searchString);
			var oFilter1 = new Filter("type", FilterOperator.Contains, searchString);
			//var aFilter = [oFilter,oFilter1]; //and functionality both has to match then related search founctionality will come here name and type has to match
			var oMainFilter = new Filter({
				filters: [
					oFilter,
					oFilter1
				],
				and: false
			});
			var aFilter = [oMainFilter];
			var oList = this.getView().byId("idFruits");
			oList.getBinding("items").filter(aFilter);
		},
		onShowMe: function() {
				//step1: get the object of the parent for both view :container control -App
				var oApp = this.getView().getParent();
				//step2: call the method to navigate to another view by passing id
				oApp.to("idView2");
			}
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf oft.fiori.nov.view.View1
			 */
			//	onBeforeRendering: function() {
			//
			//	},
			/**
			 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
			 * This hook is the same one that SAPUI5 controls get after being rendered.
			 * @memberOf oft.fiori.nov.view.View1
			 */
			//	onAfterRendering: function() {
			//
			//	},
			/**
			 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
			 * @memberOf oft.fiori.nov.view.View1
			 */
			//	onExit: function() {
			//
			//	}
			,
		/**
		 *@memberOf oft.fiori.nov.controller.View1
		 */
		onAdd: function(oEvent) {
			//This code was generated by the layout editor.
			this.oRouter.navTo("zumba");
		}
	});
});