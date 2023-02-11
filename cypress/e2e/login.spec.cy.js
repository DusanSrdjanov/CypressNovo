
/// <reference types="Cypress" />

const locators = require("../fixtures/locators.json");

describe("Login test", () => {

    before("Visit app", () => {
        cy.visit("/");
    });

    beforeEach("Visit app and click on the login link", () => {
        cy.visit("/");
        cy.get(locators.navbar.loginButton).click();
        cy.url().should("contain", "/login");
    });

    it("Login as registered user and logout test", () => {
        cy.get(locators.navbar.loginButton).click();
        cy.get(locators.commonFormElements.emailInput).type("nestonekoneki@gmail.com");
        cy.get(locators.commonFormElements.passwordInput).type("duleduledule991");
        cy.get(locators.commonFormElements.submitButton).click();
    });

    it("Login with email without .com test", () => {
       cy.get(locators.navbar.loginButton).click();
       cy.get(locators.commonFormElements.emailInput).type("email@");
       cy.get(locators.commonFormElements.passwordInput).type("duleduledule991");
       cy.get(locators.commonFormElements.submitButton).click();
    });

    it("Login with email without @ test", () => {
      cy.get(locators.navbar.loginButton).click();
      cy.get(locators.commonFormElements.emailInput).type("email.com");
      cy.get(locators.commonFormElements.passwordInput).type("duleduledule991");
      cy.get(locators.commonFormElements.submitButton).click();
    });
  
    it("Login with no email", () => {
      cy.get(locators.navbar.loginButton).click();
      cy.get(locators.commonFormElements.passwordInput).type("duleduledule991");
      cy.get(locators.commonFormElements.submitButton).click();
    }); 
  
    it("Login with no password", () => {
      cy.get(locators.navbar.loginButton).click();
      cy.get(locators.commonFormElements.emailInput).type("nestonekoneki@gmail.com");
      cy.get(locators.commonFormElements.submitButton).click();
    });

    it("Login with wrong password", () => {
      cy.get(locators.navbar.loginButton).click();
      cy.get(locators.commonFormElements.emailInput).type("nestonekoneki@gmail.com");
      cy.get(locators.commonFormElements.passwordInput).type("wrongpassword");
      cy.get(locators.commonFormElements.submitButton).click();
    });
  });
  
  
  