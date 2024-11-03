import * as firebase from 'firebase/auth';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import LoginForm from '../../components/LoginForm/LoginForm';

describe('LoginForm Component', () => {
    beforeEach(() => {
        cy.stub(firebase, 'signInWithEmailAndPassword').callsFake(() => {
            return Promise.reject(new Error('Auth Error'));
        });
    });

    const mountLoginForm = () => {
        cy.mount(
            <MemoryRouter>
                <LoginForm />
            </MemoryRouter>,
        );
    };

    it('renders the login form correctly', () => {
        mountLoginForm();

        cy.get('h2').should('have.text', 'Login');
        cy.get('label').contains('Email/Mobile Phone').should('exist');
        cy.get('label').contains('Password').should('exist');
        cy.get('button').contains('Sign in').should('exist');
    });

    it('allows a user to enter their credentials', () => {
        mountLoginForm();

        cy.get('input[type="text"]').type('test@example.com');
        cy.get('input[type="password"]').type('password123');

        cy.get('input[type="text"]').should('have.value', 'test@example.com');
        cy.get('input[type="password"]').should('have.value', 'password123');
    });

    it('displays an error message on failed login', () => {
        mountLoginForm();

        cy.get('input[type="text"]').type('invalid@example.com');
        cy.get('input[type="password"]').type('wrongpassword');
        cy.get('button').contains('Sign in').click();

        cy.get('p.error')
            .should('be.visible')
            .and('contain', 'Failed to login. Please check your credentials and try again.');
    });
});
