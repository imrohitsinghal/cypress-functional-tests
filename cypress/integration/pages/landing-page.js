class LandingPage {
    
    constructor() {
        this.uri = '/'
        this.pageTitle = 'Fixture Finder ATD 2019'
    }
    
    goTo() {
        cy.visit(Cypress.env('baseURL') + this.uri)
    }
    
    getPageTitle() {
        return this.pageTitle
    }
    
    isLandingPage() {
        cy.get('h1').invoke('text').should('contain', 'Fixture Finder ATD 2019')
    }
    
    deFlag() {
        return cy.get('[for="de_loc"] > .flag')
    }
    
    usaFlag() {
        return cy.get('[for="en_loc"] > .flag')
    }
    
    filterDropdown() {
        return cy.get('#dropdownMenu1')
    }
    
    selectLanguageFilter(country) {
        if (country.valueOf('de')) {
            this.deFlag().click()
        } else {
            this.usaFlag().click()
        }
    }
    
    selectDropdownFilter(country) {
        this.filterDropdown().click()
    }
}

export default LandingPage;