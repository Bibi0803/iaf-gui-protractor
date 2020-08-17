const ManageConfigurationsPage = require('./pages/manage-configurations.page');
const CookieBar = require('./components/cookiebar.component');

describe('Manage Configurations Page tests', function() {
    let manageConfigurations = new ManageConfigurationsPage();
    let cookiebar = new CookieBar();
    let EC = protractor.ExpectedConditions;

    beforeAll(function() {
        browser.get("#!/configurations/manage");
        browser.wait(EC.visibilityOf(manageConfigurations.btnUpload), 100000);
    });

    beforeEach(function() {
        cookiebar.closeIfPresent();
    });

    it("Should show the correct url when Upload Config botton is clicked", function() {
        manageConfigurations.btnUpload.click();
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "/#!/configurations/upload");
    });

    it("Should show the correct url when Back botton is clicked",  function() {
        browser.get("/#!/configurations/upload");
        manageConfigurations.btnBack.click();
		expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + "/#!/configurations/manage");
    });

    it("Should reset the form when clicking the reset button", function() {
        browser.get("/#!/configurations/upload");
		manageConfigurations.checkbox.click();
		expect(manageConfigurations.multipleConfigurations.isSelected()).toBe(true);
		manageConfigurations.btnReset.click();
		expect(manageConfigurations.multipleConfigurations.isSelected()).toBe(false);
    });
});