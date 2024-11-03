import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import HeroText from '../../components/Hero/HeroText.jsx';

describe('HeroText Component', () => {
    const mountHeroText = (variant) => {
        cy.mount(
            <MemoryRouter>
                <HeroText variant={variant} />
            </MemoryRouter>,
        );
    };

    it('Renders the home variant correctly', () => {
        mountHeroText('home');

        cy.get('h1').first().should('have.text', 'The place to enjoy ');
        cy.get('h1').eq(1).should('have.text', 'Good books &');
        cy.get('h1').eq(2).should('have.text', 'fresh coffee.');

        cy.get('p').should('have.text', 'Lorem ipsum dolor sit amet, consectetur adipiscing');

        cy.get('button').should('have.text', 'Read more');
        cy.get('a').should('have.attr', 'href', '/about');
    });

    it('Renders the about variant correctly', () => {
        mountHeroText('about');

        cy.get('h1').should('have.text', 'About Us');

        cy.get('p').should('have.text', 'Discover our story and passion for coffee and books');
    });

    it('Renders the gallery variant correctly', () => {
        mountHeroText('gallery');

        cy.get('h1').should('have.text', 'Our Gallery');
    });

    it('Renders the contact variant correctly', () => {
        mountHeroText('contact');

        cy.get('h1').should('have.text', 'Contact Us');
    });
});
