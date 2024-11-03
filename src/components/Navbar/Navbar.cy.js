import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { auth } from '../../../firebase/firebase';
import Navbar from '../../components/Navbar/Navbar';

describe('Navbar Component', () => {
    beforeEach(() => {
        cy.stub(auth, 'currentUser').value();
    });

    const mountNavbar = () => {
        cy.mount(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>,
        );
    };

    it('renders the navbar correctly when user is not logged in', () => {
        mountNavbar();

        cy.get('div').contains('Home').should('exist');
        cy.get('div').contains('About').should('exist');
        cy.get('div').contains('Gallery').should('exist');
        cy.get('div').contains('Contact').should('exist');
        cy.get('button').contains('Login').should('exist');
        cy.get('button').contains('Register').should('exist');
    });

    it('renders the navbar correctly when user is logged in', () => {
        cy.stub(auth, 'currentUser').value({ uid: '123' });

        mountNavbar();

        cy.get('div').contains('Book a Table').should('exist');
        cy.get('img[alt="User Avatar"]').should('exist');
    });
});
