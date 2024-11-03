import * as firebase from 'firebase/auth';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import RegisterForm from '../../components/RegisterForm/RegisterForm';

describe('RegisterForm Component', () => {
    beforeEach(() => {
        cy.stub(firebase, 'createUserWithEmailAndPassword').callsFake((auth, email) => {
            if (email === 'existing@example.com') {
                return Promise.reject(new Error('User already exists'));
            }
            return Promise.resolve({ user: { uid: '123' } });
        });
    });

    const mountRegisterForm = () => {
        cy.mount(
            <MemoryRouter>
                <RegisterForm />
            </MemoryRouter>,
        );
    };

    it('renders the registration form correctly', () => {
        mountRegisterForm();

        cy.get('h2').should('have.text', 'Register');
        cy.get('label').contains('Email/Mobile Phone').should('exist');
        cy.get('label').contains('Password').should('exist');
        cy.get('button').contains('Register').should('exist');
    });

    it('allows a user to enter their credentials', () => {
        mountRegisterForm();

        cy.get('input[type="text"]').type('test@example.com');
        cy.get('input[type="password"]').type('password123');

        cy.get('input[type="text"]').should('have.value', 'test@example.com');
        cy.get('input[type="password"]').should('have.value', 'password123');
    });
});
