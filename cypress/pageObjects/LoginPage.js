export class LoginPage {
  static get makeAppointmentBtn() {
    return cy.get("#btn-make-appointment");
  }

  static get demoUsername() {
    return cy.get("input[aria-describedby='demo_username_label'");
  }

  static get demoPassword() {
    return cy.get("input[aria-describedby='demo_password_label'");
  }

  static get usernameInput() {
    return cy.get("#txt-username");
  }

  static get passwordInput() {
    return cy.get("#txt-password");
  }

  static get loginBtn() {
    return cy.get("#btn-login");
  }
}
