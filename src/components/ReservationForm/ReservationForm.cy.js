/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable cypress/unsafe-to-chain-command */

import React from 'react';

import ReservationForm from './ReservationForm';

describe('ReservationForm Component', () => {
    beforeEach(() => {
        cy.mount(<ReservationForm />);
    });

    it('displays the form with initial values', () => {
        cy.get('input[name="date"]').should('have.value', '');
        cy.get('input[name="time"]').should('have.value', '');
        cy.get('input[name="mobile"]').should('have.value', '');
    });

    it('updates form fields on user input', () => {
        const today = new Date().toISOString().split('T')[0];
        cy.get('input[name="date"]').type(today).should('have.value', today);

        cy.get('input[name="time"]').type('12:00').should('have.value', '12:00');
        cy.get('input[name="mobile"]').type('+380123456789').should('have.value', '+380123456789');
    });

    it('shows validation error for invalid mobile number', () => {
        cy.get('input[name="mobile"]').type('12345');
        cy.get('button[type="submit"]').click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Please enter a valid mobile number');
        });
    });
});
