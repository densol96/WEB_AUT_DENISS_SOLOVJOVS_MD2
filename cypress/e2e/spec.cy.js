const { AppointmentPage } = require("../pageObjects/AppointmentPage");
const {
  AppointmentConfirmationPage,
} = require("../pageObjects/ConfirmationPage");
const { HistoryPage } = require("../pageObjects/HistoryPage");
const { HomePage } = require("../pageObjects/HomePage");
const { LoginPage } = require("../pageObjects/LoginPage");

describe("WEB_AUT MD2", () => {
  context("Appointment related tests.", () => {
    beforeEach(() => {
      // Open https://katalon-demo-cura.herokuapp.com/
      HomePage.visit();

      // Click - Make Appointment
      HomePage.makeAppointmentBtn.click();

      // Set username and password fields with the demo account credentials
      LoginPage.demoUsername
        .invoke("val")
        .then((value) => LoginPage.usernameInput.type(value));
      LoginPage.demoPassword
        .invoke("val")
        .then((value) => LoginPage.passwordInput.type(value));

      // Click - Login
      LoginPage.loginBtn.click();
    });

    it("Make an Appointment", () => {
      // Facility - Seoul CURA Healthcare Center
      AppointmentPage.facility.select("Seoul CURA Healthcare Center");

      // Check - Apply for hospital readmission
      AppointmentPage.check.check();

      // Select - Medicaid
      AppointmentPage.medicaid.check();

      // Set Date value by using the widget - 30
      AppointmentPage.dateInput.click();
      AppointmentPage.datePicker
        .find("td.day:not(.old)")
        .contains("30")
        .click();

      // Set comment - CURA Healthcare Service
      AppointmentPage.textarea.type("CURA Healthcare Service");
      AppointmentPage.bookBtn.click();

      // Validate that previously set values are correct
      AppointmentConfirmationPage.facility.should(
        "have.text",
        "Seoul CURA Healthcare Center"
      );
      AppointmentConfirmationPage.readmission.should("have.text", "Yes");
      AppointmentConfirmationPage.healthcareProgram.should(
        "have.text",
        "Medicaid"
      );
      AppointmentConfirmationPage.visitDate.should(
        "have.text",
        `30/${
          new Date().getMonth() + 1 < 10
            ? `0${new Date().getMonth() + 1}`
            : new Date().getMonth() + 1
        }/${new Date().getFullYear()}`
      );

      AppointmentConfirmationPage.comment.should(
        "have.text",
        "CURA Healthcare Service"
      );
    });

    it("Appointment history empty", () => {
      // Click - Menu/Stack/Burger icon
      AppointmentPage.menuToggle.click();
      // Validate that the sidebar is active
      AppointmentPage.sidebar.should("have.class", "active");
      // Click - History
      AppointmentPage.sidebar.within(() => AppointmentPage.history.click());
      // Validate that - No appointment - is visible
      HistoryPage.section.should("contain.text", "No appointment");
    });
  });
});
