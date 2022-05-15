package com.cucumber.steps;

import com.automation.utility.Utilites;
import com.automation.websitepages.CreateAccountPage;
import com.automation.websitepages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class CreateAccountPageTest {
    @And("^I enter email address for create account \"([^\"]*)\"$")
    public void iEnterEmailAddressForCreateAccount(String email) {
        new SignInPage().enterEmailForCreateAccount(Utilites.getRandomString(3)+email);
    }

    @And("^I click on create account button$")
    public void iClickOnCreateAccountButton() {
        new SignInPage().clickOnCreateAccountButton();
    }

    @And("^I enter the first name \"([^\"]*)\"$")
    public void iEnterTheFirstName(String firstname) {
        new CreateAccountPage().enterFirstNameInInfo(firstname);
    }

    @And("^I enter the last name \"([^\"]*)\"$")
    public void iEnterTheLastName(String lastname) {
        new CreateAccountPage().enterlastNameInInfo(lastname);
    }

    @And("^I enter the password \"([^\"]*)\"$")
    public void iEnterThePassword(String password) {
        new CreateAccountPage().enterPasswordInInfo(password);
    }

    @And("^I enter the address \"([^\"]*)\"$")
    public void iEnterTheAddress(String address) {
        new CreateAccountPage().enterAddress(address);
    }

    @And("^I enter the city \"([^\"]*)\"$")
    public void iEnterTheCity(String city) {
        new CreateAccountPage().enterCity(city);
    }

    @And("^I select the state \"([^\"]*)\"$")
    public void iSelectTheState(String state) {
        new CreateAccountPage().selectStateFromDropDown(state);
    }

    @And("^I enter the zipcode \"([^\"]*)\"$")
    public void iEnterTheZipcode(String zipcode) {
        new CreateAccountPage().enterZipCode(zipcode);
    }

    @And("^I select the country \"([^\"]*)\"$")
    public void iSelectTheCountry(String country) {
        new CreateAccountPage().selectCountryFromDropDown(country);
    }

    @And("^I enter the phone number \"([^\"]*)\"$")
    public void iEnterThePhoneNumber(String phoneNumber) {
        new CreateAccountPage().enterMobilePhone(phoneNumber);
    }

    @And("^I enter the alias address \"([^\"]*)\"$")
    public void iEnterTheAliasAddress(String aliasAddress) {
        new CreateAccountPage().enterAliasAddress(aliasAddress);
    }

    @And("^I click on registration button$")
    public void iClickOnRegistrationButton() {
        new CreateAccountPage().clickOnRegisterButton();
    }

    @Then("^I am successfully registration with valid information$")
    public void iAmSuccessfullyRegistrationWithValidInformation() {
    }

    @And("^I can see the my account message \"([^\"]*)\"$")
    public void iCanSeeTheMyAccountMessage(String expectedMyAccountMessage) {
        Assert.assertEquals("my account is not match",expectedMyAccountMessage,new CreateAccountPage().getMyAccountText());
    }
}
