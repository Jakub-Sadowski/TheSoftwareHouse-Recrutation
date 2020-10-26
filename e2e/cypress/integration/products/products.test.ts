/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('HomePage should', () => {
  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);
  });

  it('Displays products page', () => {
    cy.clearSession();
    cy.location().should(loc => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });
  });

  it('Displays navbar', () => {
    cy.clearSession();
    cy.contains('join.tsh.io');
    cy.contains('Log in');
    cy.contains('Active');
    cy.contains('Promo');
    cy.contains('Search');
  });

  it('Displays pagination', () => {
    cy.clearSession();
    cy.get('#pagination').should(($pagination) => {
      expect($pagination).to.contain('First');
      expect($pagination).to.contain('Last')
    })
  })
  it('Typing to search input', () => {
    cy.clearSession();
    cy.get('#outlined-adornment-search')
      .type('search text')
      .should('have.value', 'search text')
  });

  it('searching phrase unsuccesfull', () => {
    cy.clearSession();
    cy.get('#outlined-adornment-search')
      .type('searchfdsfdsfd text')
      .should('have.value', 'searchfdsfdsfd text');
    cy.get('form').submit();
    cy.contains('Ooops... It\'s empty here');
    cy.contains('There are no products on the list');
  });

  it('searching phrase succesfull', () => {
    cy.clearSession();
    cy.get('#outlined-adornment-search')
      .type('Generic Soft Pants')
      .should('have.value', 'Generic Soft Pants');
    cy.get('form').submit();
    cy.get('h2')
      .contains('Generic Soft Pants');
  });

  it('active filtr', () => {
    cy.clearSession();
    cy.get('input[name="active checkbox"]')
      .check();
    cy.contains('Show details')
    cy.contains('Unavailable').should('not.exist');
  });

  it('promo filtr', () => {
    cy.clearSession();
    cy.get('input[name="promo checkbox"]')
      .check();
    cy.get('.makeStyles-promoBox-42').should('have.length', 8);
  });

  it('logging in', () => {
    cy.clearSession();
    cy.get('button[name="login button"]')
      .click();
    cy.get('img[alt="Random avatar"]')
      .should('exist');
  });

  it('logging out', () => {
    cy.clearSession();
    cy.get('button[name="login button"]')
      .click();
    cy.get('img[alt="Random avatar"]')
      .click();
    cy.get('li[role="menuitem"]').click();
    cy.get('button[name="login button"]')
      .should('exist');
  });
  it('shows dialog', () => {
    cy.clearSession();
    cy.get('.MuiButton-containedPrimary')
      .contains('Show details')
      .click();
    cy.get('div[role="dialog"]').should('exist');
  })
  it('closing dialog', () => {
    cy.clearSession();
    cy.get('.MuiButton-containedPrimary')
      .contains('Show details')
      .click();
    cy.get('button[aria-label="close dialog button"]')
      .click();
    cy.get('div[role="dialog"]').should('not.exist');
  })
});
