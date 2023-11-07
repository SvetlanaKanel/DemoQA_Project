/// <reference types = "Cypress" >
import HomePage from "../../pageObjects/HomePage";
import homeData from "../../fixtures/homeData.json";
import ElementsPage from "../../pageObjects/ElementsPage";
import elementsData from "../../fixtures/elementsData.json";

const homePage = new HomePage();
const elementsPage = new ElementsPage();

describe('Home page UI and functionality', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
    })

    it('TC_01.01.01 | Elements link is visible and has text "Elements"', () => {
        homePage.getElements().should('be.visible')
            .and('have.text', homeData.linkPageName[0])
    })

    it('TC_01.01.02 | Click on Elements link and verify that it redirects to Elements page', () => {
        homePage.clickElements();

        cy.url().should('be.eq', 'https://demoqa.com/elements');
        elementsPage.getMainHeader().should('have.text', elementsData.mainHeader);
    })

    it('TC_01.01.03 | Elements Icon has color rgb(1, 160, 224) and background-color rgb(238, 238, 238)', () => {
        homePage.getElementsIcon()
            .should('have.css', 'color', homeData.iconColor)
            .and('have.css', 'background-color', homeData.iconBackgroundColor);
    })

    it('TC_01.01.4 | Verify that each link has icon with color rgb(1, 160, 224) and background-color rgb(238, 238, 238)', () => {
        homePage.getLinkIconList().each($el => {
            cy.wrap($el)
                .should('have.css', 'color', homeData.iconColor)
                .and('have.css', 'background-color', homeData.iconBackgroundColor);

        })
    })

});
