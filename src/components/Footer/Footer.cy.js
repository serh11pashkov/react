import React from 'react';

import Footer from './Footer';

describe('Footer Component', () => {
    it('renders the Footer component with hours and contact info', () => {
        cy.mount(<Footer />);
        cy.contains('Monday — Friday: 08:00-22:00').should('be.visible');
        cy.contains('T. Shevchenko street, 789, Uzhhorod, 88000').should('be.visible');
    });
});
