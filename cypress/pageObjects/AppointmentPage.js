export class AppointmentPage {
  static get facility() {
    return cy.get("#combo_facility");
  }

  static get check() {
    return cy.get("#chk_hospotal_readmission");
  }

  static get medicaid() {
    return cy.get("#radio_program_medicaid");
  }

  static get dateInput() {
    return cy.get("#txt_visit_date");
  }

  static get datePicker() {
    return cy.get(".datepicker-days");
  }

  static get textarea() {
    return cy.get("#txt_comment");
  }

  static get bookBtn() {
    return cy.get("#btn-book-appointment");
  }

  static get menuToggle() {
    return cy.get("#menu-toggle");
  }

  static get sidebar() {
    return cy.get("#sidebar-wrapper");
  }

  static get history() {
    return cy.get("li").contains("History");
  }
}
