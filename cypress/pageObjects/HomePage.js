class HomePage {
    //elements
    getElements = () => cy.get('.category-cards >div:nth-child(1) h5');
    getElementsIcon = () => cy.get('.category-cards > div:nth-child(1) .avatar');    
    getForms = () => cy.get('.category-cards >div:nth-child(2) h5');

    // methods
    clickElements(){
        this.getElements().click();
    }


}
export default HomePage