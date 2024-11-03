import * as firebase from 'firebase/auth';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

describe('Header Component', () => {
    const mountHeader = () => {
        return cy.mount(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
        );
    };

    it('renders basic header elements', () => {
        mountHeader();

        cy.get('img[alt="Logo"]').should('exist');
        cy.contains('Home').should('exist');
        cy.contains('About').should('exist');
        cy.contains('Gallery').should('exist');
        cy.contains('Contact').should('exist');
    });

    it('shows login/register buttons when not logged in', () => {
        cy.stub(firebase, 'onAuthStateChanged').yields();

        mountHeader();

        cy.contains('Login').should('exist');
        cy.contains('Register').should('exist');
        cy.contains('Book a Table').should('not.exist');
    });
});
