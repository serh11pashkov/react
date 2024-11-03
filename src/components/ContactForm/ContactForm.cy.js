import React from 'react';

import ContactForm from './ContactForm';

describe('ContactForm Component', () => {
    beforeEach(() => {
        cy.mount(<ContactForm />);
    });

    it('renders the ContactForm component', () => {
        cy.contains('Send Us A Message').should('be.visible');
        cy.get('input[name="firstName"]').should('exist');
        cy.get('input[name="lastName"]').should('exist');
        cy.get('input[name="email"]').should('exist');
        cy.get('textarea[name="message"]').should('exist');
    });

    it('updates form fields on user input', () => {
        cy.get('input[name="firstName"]').type('John');
        cy.get('input[name="firstName"]').should('have.value', 'John');

        cy.get('input[name="lastName"]').type('Doe');
        cy.get('input[name="lastName"]').should('have.value', 'Doe');

        cy.get('input[name="email"]').type('john.doe@example.com');
        cy.get('input[name="email"]').should('have.value', 'john.doe@example.com');

        cy.get('textarea[name="message"]').type('Hello!');
        cy.get('textarea[name="message"]').should('have.value', 'Hello!');
    });

    it('displays loading message and success notification on submit', () => {
        cy.get('input[name="firstName"]').type('John');
        cy.get('input[name="lastName"]').type('Doe');
        cy.get('input[name="email"]').type('john.doe@example.com');
        cy.get('textarea[name="message"]').type('Hello!');

        cy.get('button[type="submit"]').click();

        cy.contains('Sending...').should('be.visible');

        cy.contains('Message sent successfully!', { timeout: 10_000 }).should('be.visible');
    });
});
