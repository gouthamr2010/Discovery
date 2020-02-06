sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.sap.Discovery.controller.View1", {
		onInit: function () {
			this.array = [];
			var sPath = jQuery.sap.getModulePath("com.sap.Discovery");
			var oModel = new JSONModel(sPath + "/model/SupportCrew.json");
			this.getView().setModel(oModel, "Crews");
		}
	});
});