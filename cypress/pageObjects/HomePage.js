import ElementsPage from "./ElementsPage";
import FormsPage from "./FormsPage";

class HomePage {
    //elements
    getElements = () => cy.get('.category-cards >div:nth-child(1) h5');
    getElementsIcon = () => cy.get('.category-cards > div:nth-child(1) .avatar'); 
    getLinkIconList = (idx) => cy.get('.avatar');
    getForms = () => cy.get('.category-cards >div:nth-child(2) h5');

    // methods
    clickElements(){
        this.getElements().click();
        return ElementsPage;
    }

    clickForms() {
        this.getForms().click();
        return FormsPage;
    }


}
export default HomePage