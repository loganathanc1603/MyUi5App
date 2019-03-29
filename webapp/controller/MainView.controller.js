sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.sap.mygithup_app.MyGitApp.controller.MainView", {
		onInit: function () {	
			var jsonmodle = new sap.ui.model.json.JSONModel();
			this.getView().setModel(jsonmodle);
		},

		myPress: function (evt) {
			var oV = evt.getSource().getText();
			sap.m.MessageToast.show(oV); // Messagetoast show
		}
	});
});