/// <reference types="Cypress" />

  const email = 'tester@cypress.com';
  const password = 'Tester123';
  const firstName = 'Testy'
  const surname = 'McTesterson'

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('has a title', () => {
    cy.contains('Email address');
  });

  it('signs up new user', () => {
    cy.contains('a', 'Sign Up').click();
    cy.get('input[name=email').type(email);
    cy.get('input[name=password').type(password);
    cy.get('input[name=passwordConfirmation').type(password);
    cy.get('button[type=submit').click();
    cy.url().should('include', 'profile')
    cy.contains('Hey hot stuff')
  });

  it('signs up new user & enters profile details', () => {
    cy.contains('a', 'Sign Up').click();
    cy.get('input[name=email').type(email);
    cy.get('input[name=password').type(password);
    cy.get('input[name=passwordConfirmation').type(password);
    cy.get('button[type=submit').click();
    cy.url().should('include', 'profile')
    cy.contains('Hey hot stuff')
    cy.get('input[name=firstName').type(firstName);
    cy.get('input[name=surname').type(surname);
    cy.get('.select__value-container select__value-container--has-value')
  });