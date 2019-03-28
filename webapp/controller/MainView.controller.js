sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.sap.mygithup_app.MyGitApp.controller.MainView", {
		onInit: function () {

		},

		myPress: function (evt) {
			var oV = evt.getSource().getText();
		}
	});
});