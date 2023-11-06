/// <reference types = "Cypress" >
import HomePage from "../../pageObjects/HomePage";
import homeData from "../../fixtures/homeData.json";

const homePage = new HomePage();

describe('Home page UI and functionality', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
    })

    it('TC_01.01.01 | Elements link is visible and has text "Elements"', () => {
        homePage.elements().should('be.visible')
        .and('have.text', homeData.linkPageName[0])
    })
    
});
