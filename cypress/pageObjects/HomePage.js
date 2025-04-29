import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  static get url() {
    return "/";
  }

  static get makeAppointmentBtn() {
    return cy.get("#btn-make-appointment");
  }
}
