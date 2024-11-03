import React from 'react';

import GalleryGrid from './GalleryGrid';

describe('GalleryGrid Component', () => {
    it('renders the GalleryGrid component with images', () => {
        cy.mount(<GalleryGrid />);
        cy.contains('Our Place').should('be.visible');
        cy.get('img').should('have.length', 9);
        cy.contains('Coffee Experience').should('be.visible');
    });
});
