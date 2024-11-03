describe('E2E Tests', () => {
    beforeEach(() => {
        cy.visit('/');

        cy.get('body').should('be.visible');
    });

    it('should navigate through main pages', () => {
        cy.get('a[href="/"]').first().click({ force: true });
        cy.url().should('include', '/');

        cy.get('a[href="/about"]').first().click({ force: true });
        cy.url().should('include', '/about');

        cy.get('a[href="/gallery"]').first().click({ force: true });
        cy.url().should('include', '/gallery');

        cy.get('a[href="/contact"]').first().click({ force: true });
        cy.url().should('include', '/contact');
    });

    it('should display correct hero text on different pages', () => {
        cy.get('[data-testid="hero-text"]').should('contain', 'The place to enjoy');

        cy.get('a[href="/about"]').first().click({ force: true });
        cy.get('[data-testid="hero-text"]').should('contain', 'About Us');

        cy.get('a[href="/gallery"]').first().click({ force: true });
        cy.get('[data-testid="hero-text"]').should('contain', 'Our Gallery');

        cy.get('a[href="/contact"]').first().click({ force: true });
        cy.get('[data-testid="hero-text"]').should('contain', 'Contact Us');
    });

    it('should display About Us grid', () => {
        cy.get('a[href="/about"]').first().click({ force: true });
        cy.get('h2').contains('About Us').should('exist');
        cy.get('div').contains('Our Story').should('exist');
        cy.get('div').contains('Our Vision').should('exist');
    });

    it('should display Gallery grid', () => {
        cy.get('a[href="/gallery"]').first().click({ force: true });
        cy.get('h1').contains('Our Place').should('exist');
        cy.get('img[alt="Coffee Experience"]').should('exist');
    });

    it('should submit contact form', () => {
        cy.get('a[href="/contact"]').first().click({ force: true });
        cy.get('#firstName').type('John');
        cy.get('#lastName').type('Doe');
        cy.get('#email').type('john.doe@example.com');
        cy.get('#message').type('This is a test message');
        cy.get('button[type="submit"]').click();
        cy.contains('Message sent successfully!', { timeout: 10_000 }).should('be.visible');
    });

    it('should navigate to login page', () => {
        cy.get('a[href="/login"]').first().click({ force: true });
        cy.url().should('include', '/login');
    });

    it('should navigate to register page', () => {
        cy.get('a[href="/register"]').first().click({ force: true });
        cy.url().should('include', '/register');
    });

    it('should attempt login', () => {
        cy.get('a[href="/login"]').first().click({ force: true });
        cy.get('input[type="text"]').type('example@domain.com');
        cy.get('input[type="password"]').type('12345678');
        cy.get('button[type="submit"]').click();

        cy.url().should('not.include', '/login');
    });

    it('should attempt registration', () => {
        cy.get('a[href="/register"]').first().click({ force: true });
        cy.get('input[type="text"]').type('test1@domain.com');
        cy.get('input[type="password"]').type('12345678');
        cy.get('button[type="submit"]').click();

        cy.url().should('not.include', '/register');
    });

    it('should attempt to make a reservation', () => {
        cy.get('a[href="/login"]').first().click({ force: true });
        cy.get('input[type="text"]').type('example@domain.com');
        cy.get('input[type="password"]').type('12345678');
        cy.get('button[type="submit"]').click();

        cy.get('a[href="/reservation"]', { timeout: 10_000 }).should('exist').click({ force: true });
        cy.get('input[name="date"]').type('2024-11-05');
        cy.get('input[name="time"]').type('14:00');
        cy.get('input[name="mobile"]').type('0501234567');
        cy.get('button[type="submit"]').click();
        cy.contains('Reservation successful!', { timeout: 10_000 }).should('be.visible');
    });
});
