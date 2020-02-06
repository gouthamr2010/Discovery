sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/FlexBox"
], function (Control, FlexBox) {
	"use strict";

	var crewTile = Control.extend("com.sap.Discovery.customControl.CrewTile", {
		metadata: {
			properties: {

			},

			aggregations: {

			},

			events: {

			}
		},

		renderer: {

			render: function (oRm, oControl) {
				var oFlex = new FlexBox();
				oRm.write("<div");
				oRm.writeControlData(oControl);
				oRm.renderControl(oFlex);
				oRm.write(">");
				oRm.write("Hi </div>");
			}
		}
	});

	return crewTile;

});