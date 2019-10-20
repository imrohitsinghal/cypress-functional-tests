import LandingPage from "./pages/landing-page";

const landingpage = new LandingPage();

describe('Landing Page', function() {

	context('Landing Page Scenarios', () => {
		beforeEach(() => {
			const landingpage = new LandingPage();
			landingpage.goTo();
		})

		it('Validate Page Title', function () {
			cy.setResolution(Cypress.env('browser'));
			landingpage.isLandingPage()
		})
		
		it('Validate Page Translations for Germany', function () {
			cy.setResolution(Cypress.env('browser'));
			landingpage.selectLanguageFilter('de')
		})
		
	})
})