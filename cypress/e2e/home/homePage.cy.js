/// <reference types = "Cypress" >
import HomePage from "../../pageObjects/HomePage";
import homeData from "../../fixtures/homeData.json";
import ElementsPage from "../../pageObjects/ElementsPage";
import elementsData from "../../fixtures/elementsData.json";
import FormsPage from "../../pageObjects/FormsPage";
import formData from "../../fixtures/formsData.json";
import AlertPage from "../../pageObjects/AlertsPage";
import alertsData from "../../fixtures/alertsData.json";
import WidgetsPage from "../../pageObjects/WidgetsPage";
import widgetsData from "../../fixtures/widgetsData.json"

const homePage = new HomePage();
const elementsPage = new ElementsPage();
const formsPage = new FormsPage();
const alertsPage = new AlertPage();
const widgetsPage = new WidgetsPage();

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

        cy.url().should('be.eq', elementsData.url);
        elementsPage.getMainHeader().should('have.text', elementsData.mainHeader);
    })

    it('TC_01.01.03 | Elements Icon has color rgb(1, 160, 224) and background-color rgb(238, 238, 238)', () => {
        homePage.getElementsIcon()
            .should('have.css', 'color', homeData.iconColor)
            .and('have.css', 'background-color', homeData.iconBackgroundColor);
    })

    it('TC_01.01.04 | Verify that each link has icon with color rgb(1, 160, 224) and background-color rgb(238, 238, 238)', () => {
        homePage.getLinkIconList().each($el => {
            cy.wrap($el)
                .should('have.css', 'color', homeData.iconColor)
                .and('have.css', 'background-color', homeData.iconBackgroundColor);
        })
    })

    it('TC_01.02.01 | Verify that Forms link is visible and has text "Forms"', () => {
        homePage.getForms()
            .should('be.visible')
            .and('have.text', homeData.linkPageName[1])
    })

    it('TC_01.02.02 | Click on Forms link and verify that it redirects to Forms page with main header "Forms" and url https://demoqa.com/forms ', () => {
        homePage.clickForms();

        cy.url().should('be.eq', formData.url);
        formsPage.getMainHeader().should('have.text', formData.mainHeader);
    })

    it('TC_01.03.01 | Alerts, Frame & Windows link is visible and has text "Alerts, Frame & Windows"', () => {
        homePage.getAlerts()
            .should('be.visible')
            .and('have.text', homeData.linkPageName[2]);
    })

    it('TC_01.03.02 | Click on Alerts, Frame & Windows link and verify that it redirects to Alerts, Frame & Windows page', () => {
        homePage.clickAlerts();

        cy.url().should('be.eq', alertsData.url);
        alertsPage.getMainHeader().should('have.text', alertsData.mainHeader);
    })

    it('TC_01.04.01 | Widgets link is visible and has text "Widgets"', () => {
        homePage.getWidgets()
            .should('be.visible')
            .and('have.text', homeData.linkPageName[3]);
    })

    it('TC_01.04.02 | Click on Widgets link and verify that it redirects to Widgets page', () => {
        homePage.clickWidgets();

        cy.url().should('be.eq', widgetsData.url);
        alertsPage.getMainHeader().should('have.text', widgetsData.mainHeader);

    });
});
