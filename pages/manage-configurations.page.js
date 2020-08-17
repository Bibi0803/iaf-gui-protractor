var ManageConfigurationsPage = function() {
	this.btnUpload = element(by.buttonText("Upload Config"));
	this.btnReset = element(by.buttonText("Reset"));
	this.btnBack = element(by.buttonText("Back"));
	this.checkbox = element.all(by.className("iCheck-helper")).get(0);
	this.multipleConfigurations = element(by.model("form.multiple_configs"));
};
module.exports = ManageConfigurationsPage;