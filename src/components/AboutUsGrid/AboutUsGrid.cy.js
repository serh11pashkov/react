import React from 'react';

import AboutUsGrid from './AboutUsGrid';

describe('About Us Grid Component', () => {
    beforeEach(() => {
        cy.mount(<AboutUsGrid />);
    });

    it('renders the title', () => {
        cy.get('h2').contains('About Us').should('be.visible');
    });

    it('renders the story and vision sections with correct content', () => {
        cy.get('h3').contains('Our Story').should('be.visible');
        cy.get('h3').contains('Our Vision').should('be.visible');

        cy.get('p')
            .contains('We are passionate about providing the perfect blend of cozy atmosphere')
            .should('be.visible');
        cy.get('p').contains('Our vision is to create a community space').should('be.visible');
    });

    it('renders images with correct alt text', () => {
        cy.get('img[alt="Our Café"]').should('be.visible');
        cy.get('img[alt="Reading Corner"]').should('be.visible');
        cy.get('img').should('have.length', 2);
    });
});
