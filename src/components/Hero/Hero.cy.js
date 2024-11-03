import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Hero from '../../components/Hero/Hero.jsx';

describe('Hero Component', () => {
    const routes = {
        '/': {
            backgroundColor: 'rgb(210, 163, 138)',
            image: 'BackgroundHome.jpg',
            text: 'The place to enjoy Good books &fresh coffee.Lorem ipsum dolor sit amet, consectetur adipiscingRead more',
        },
        '/about': {
            backgroundColor: 'rgb(182, 130, 140)',
            image: 'BackgroundAbout.jpg',
            text: 'About UsDiscover our story and passion for coffee and books',
        },
        '/gallery': { backgroundColor: 'rgb(182, 130, 140)', image: 'BackgroundGallery.jpg', text: 'Our Gallery' },
        '/contact': { backgroundColor: 'rgb(182, 130, 140)', image: 'BackgroundHome.jpg', text: 'Contact Us' },
    };

    const mountWithRouter = (initialEntry) => {
        cy.mount(
            <MemoryRouter initialEntries={[initialEntry]}>
                <Hero />
            </MemoryRouter>,
        );
    };

    const routesEntries = Object.entries(routes);

    for (const [path, { backgroundColor, image, text }] of routesEntries) {
        it(`Displays the correct background and text for the ${path} route`, () => {
            mountWithRouter(path);

            cy.get('[data-testid="left-background"]').should('have.css', 'background-color', backgroundColor);

            cy.get('[data-testid="background-image"]').should('have.attr', 'src').and('include', image);

            cy.get('[data-testid="hero-text"]').should('include.text', text);
        });
    }
});
