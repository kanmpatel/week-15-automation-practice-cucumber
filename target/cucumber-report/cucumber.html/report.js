$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createaccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account Functionality",
  "description": "As user , I would like to create account successfully",
  "id": "create-account-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4805957100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "I should able to create account with valid information",
  "description": "",
  "id": "create-account-functionality;i-should-able-to-create-account-with-valid-information",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter email address for create account \"shena@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on create account button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter the first name \"johnen\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter the last name \"sena\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter the password \"1234567\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter the address \"johnen road\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter the city \"london\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the state \"Hawaii\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter the zipcode \"12345\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the country \"United States\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter the phone number \"1234567890\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter the alias address \"My address\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on registration button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I am successfully registration with valid information",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I can see the my account message \"My Account\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignInPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 2044723400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shena@gmail.com",
      "offset": 42
    }
  ],
  "location": "CreateAccountPageTest.iEnterEmailAddressForCreateAccount(String)"
});
formatter.result({
  "duration": 88108299,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountPageTest.iClickOnCreateAccountButton()"
});
formatter.result({
  "duration": 52516900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "johnen",
      "offset": 24
    }
  ],
  "location": "CreateAccountPageTest.iEnterTheFirstName(String)"
});
formatter.result({
  "duration": 2365575800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sena",
      "offset": 23
    }
  ],
  "location": "CreateAccountPageTest.iEnterTheLastName(String)"
});
formatter.result({
  "duration": 71390700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567",
      "offset": 22
    }
  ],
  "location": "CreateAccountPageTest.iEnterThePassword(String)"
});
formatter.result({
  "duration": 66277700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "johnen road",
      "offset": 21
    }
  ],
  "location": "CreateAccountPageTest.iEnterTheAddress(String)"
});
formatter.result({
  "duration": 78467600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "london",
      "offset": 18
    }
  ],
  "location": "CreateAccountPageTest.iEnterTheCity(String)"
});
formatter.result({
  "duration": 63443000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hawaii",
      "offset": 20
    }
  ],
  "location": "CreateAccountPageTest.iSelectTheState(String)"
});
formatter.result({
  "duration": 281164900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 21
    }
  ],
  "location": "CreateAccountPageTest.iEnterTheZipcode(String)"
});
formatter.result({
  "duration": 60537700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 22
    }
  ],
  "location": "CreateAccountPageTest.iSelectTheCountry(String)"
});
formatter.result({
  "duration": 47735301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 26
    }
  ],
  "location": "CreateAccountPageTest.iEnterThePhoneNumber(String)"
});
formatter.result({
  "duration": 73898500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My address",
      "offset": 27
    }
  ],
  "location": "CreateAccountPageTest.iEnterTheAliasAddress(String)"
});
formatter.result({
  "duration": 65784899,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountPageTest.iClickOnRegistrationButton()"
});
formatter.result({
  "duration": 1827394801,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountPageTest.iAmSuccessfullyRegistrationWithValidInformation()"
});
formatter.result({
  "duration": 18400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Account",
      "offset": 34
    }
  ],
  "location": "CreateAccountPageTest.iCanSeeTheMyAccountMessage(String)"
});
formatter.result({
  "duration": 32996100,
  "error_message": "org.junit.ComparisonFailure: my account is not match expected:\u003cM[y Account]\u003e but was:\u003cM[Y ACCOUNT]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.cucumber.steps.CreateAccountPageTest.iCanSeeTheMyAccountMessage(CreateAccountPageTest.java:82)\r\n\tat ✽.And I can see the my account message \"My Account\"(createaccount.feature:21)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 888927101,
  "status": "passed"
});
formatter.uri("signin.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "As user, I would like to login With valid credentials",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4978235900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Background: I am on Login page of automation practice",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 22701,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 2235475500,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iAmOnLoginPage()"
});
formatter.result({
  "duration": 17200,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "I should navigate to login page successfully",
  "description": "",
  "id": "login-functionality;i-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@sanity"
    },
    {
      "line": 8,
      "name": "@smoke"
    },
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on login page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I am successfully navigate to login page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I can see the authentication message \"AUTHENTICATION\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignInPageTest.iAmOnLoginPage()"
});
formatter.result({
  "duration": 11799,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iAmSuccessfullyNavigateToLoginPage()"
});
formatter.result({
  "duration": 14899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUTHENTICATION",
      "offset": 38
    }
  ],
  "location": "SignInPageTest.iCanSeeTheAuthenticationMessage(String)"
});
formatter.result({
  "duration": 26525401,
  "status": "passed"
});
formatter.after({
  "duration": 654548600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "I should able to login with invalid credentials",
  "description": "",
  "id": "login-functionality;i-should-able-to-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@smoke"
    },
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I enter username \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I am not able to login with invalid credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I can see the \"\u003cErrorMessage\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "login-functionality;i-should-able-to-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "ErrorMessage"
      ],
      "line": 23,
      "id": "login-functionality;i-should-able-to-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 24,
      "id": "login-functionality;i-should-able-to-login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 25,
      "id": "login-functionality;i-should-able-to-login-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 26,
      "id": "login-functionality;i-should-able-to-login-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 27,
      "id": "login-functionality;i-should-able-to-login-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5581792099,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Background: I am on Login page of automation practice",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 17901,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 7219056800,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iAmOnLoginPage()"
});
formatter.result({
  "duration": 10799,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "I should able to login with invalid credentials",
  "description": "",
  "id": "login-functionality;i-should-able-to-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@smoke"
    },
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I enter username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I am not able to login with invalid credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I can see the \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignInPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 52901000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 65694399,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 6364151100,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iAmNotAbleToLoginWithInvalidCredentials()"
});
formatter.result({
  "duration": 19201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 15
    }
  ],
  "location": "SignInPageTest.iCanSeeThe(String)"
});
formatter.result({
  "duration": 28439099,
  "status": "passed"
});
formatter.after({
  "duration": 651967400,
  "status": "passed"
});
formatter.before({
  "duration": 11974299099,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Background: I am on Login page of automation practice",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 14001,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 7905229900,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iAmOnLoginPage()"
});
formatter.result({
  "duration": 10400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "I should able to login with invalid credentials",
  "description": "",
  "id": "login-functionality;i-should-able-to-login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@smoke"
    },
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I am not able to login with invalid credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I can see the \"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 74135600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "SignInPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 58314400,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 5708433300,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iAmNotAbleToLoginWithInvalidCredentials()"
});
formatter.result({
  "duration": 8500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 15
    }
  ],
  "location": "SignInPageTest.iCanSeeThe(String)"
});
formatter.result({
  "duration": 26552700,
  "status": "passed"
});
formatter.after({
  "duration": 686356000,
  "status": "passed"
});
formatter.before({
  "duration": 9784749100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Background: I am on Login page of automation practice",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 22301,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 8420920500,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iAmOnLoginPage()"
});
formatter.result({
  "duration": 12700,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "I should able to login with invalid credentials",
  "description": "",
  "id": "login-functionality;i-should-able-to-login-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@smoke"
    },
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I enter username \"adfdfgfg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I am not able to login with invalid credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I can see the \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 18
    }
  ],
  "location": "SignInPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 67292500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 57569200,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 6635374700,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iAmNotAbleToLoginWithInvalidCredentials()"
});
formatter.result({
  "duration": 10099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 15
    }
  ],
  "location": "SignInPageTest.iCanSeeThe(String)"
});
formatter.result({
  "duration": 28014800,
  "status": "passed"
});
formatter.after({
  "duration": 687993501,
  "status": "passed"
});
formatter.before({
  "duration": 10751985100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Background: I am on Login page of automation practice",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 16101,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 14464594099,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iAmOnLoginPage()"
});
formatter.result({
  "duration": 13199,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "I should able to login with invalid credentials",
  "description": "",
  "id": "login-functionality;i-should-able-to-login-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@smoke"
    },
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I enter username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I am not able to login with invalid credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I can see the \"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 69287800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 59087500,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 4940668700,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iAmNotAbleToLoginWithInvalidCredentials()"
});
formatter.result({
  "duration": 11900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 15
    }
  ],
  "location": "SignInPageTest.iCanSeeThe(String)"
});
formatter.result({
  "duration": 26257000,
  "status": "passed"
});
formatter.after({
  "duration": 660587499,
  "status": "passed"
});
formatter.before({
  "duration": 11225954700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Background: I am on Login page of automation practice",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 13899,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 9018397500,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iAmOnLoginPage()"
});
formatter.result({
  "duration": 21800,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "I should able to login with valid credentials",
  "description": "",
  "id": "login-functionality;i-should-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I enter username \"john222@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I enter password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I am successfully login with valid credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I can see the sign out link",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "john222@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 75296000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 60809800,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 9311807800,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iAmSuccessfullyLoginWithValidCredentials()"
});
formatter.result({
  "duration": 18699,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iCanSeeTheSignOutLink()"
});
formatter.result({
  "duration": 30893501,
  "status": "passed"
});
formatter.after({
  "duration": 687100001,
  "status": "passed"
});
formatter.before({
  "duration": 5364792800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Background: I am on Login page of automation practice",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 22201,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 4414737699,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iAmOnLoginPage()"
});
formatter.result({
  "duration": 9800,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "I should able to log out after login with valid credentials",
  "description": "",
  "id": "login-functionality;i-should-able-to-log-out-after-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I enter username \"john222@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I enter password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I am successfully logout the account",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I can see the sign in link",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "john222@gmail.com",
      "offset": 18
    }
  ],
  "location": "SignInPageTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 75830700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "SignInPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 55085099,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 4472333000,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 8615978901,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iAmSuccessfullyLogoutTheAccount()"
});
formatter.result({
  "duration": 31799,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTest.iCanSeeTheSignInLink()"
});
formatter.result({
  "duration": 28154500,
  "status": "passed"
});
formatter.after({
  "duration": 670111100,
  "status": "passed"
});
formatter.uri("womencategory.feature");
formatter.feature({
  "line": 1,
  "name": "Women Category Functionality",
  "description": "As user, I would like to shopping on women\u0027s category",
  "id": "women-category-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "I should able to added the product on add to cart basket",
  "description": "",
  "id": "women-category-functionality;i-should-able-to-added-the-product-on-add-to-cart-basket",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I click on women link tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on product \"\u003cProductName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I change the quantity \"\u003cQuantity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select the size \"\u003cSize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select colour \"\u003cColour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on add to card button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I am successfully added the product on add to cart basket",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I can see the addtocart message \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I close the popup",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "women-category-functionality;i-should-able-to-added-the-product-on-add-to-cart-basket;",
  "rows": [
    {
      "cells": [
        "ProductName",
        "Quantity",
        "Size",
        "Colour"
      ],
      "line": 17,
      "id": "women-category-functionality;i-should-able-to-added-the-product-on-add-to-cart-basket;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 18,
      "id": "women-category-functionality;i-should-able-to-added-the-product-on-add-to-cart-basket;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 19,
      "id": "women-category-functionality;i-should-able-to-added-the-product-on-add-to-cart-basket;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 20,
      "id": "women-category-functionality;i-should-able-to-added-the-product-on-add-to-cart-basket;;4"
    },
    {
      "cells": [
        "Printed Summer Dress with Price $28.98",
        "2",
        "M",
        "Blue"
      ],
      "line": 21,
      "id": "women-category-functionality;i-should-able-to-added-the-product-on-add-to-cart-basket;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5334051399,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "I should able to added the product on add to cart basket",
  "description": "",
  "id": "women-category-functionality;i-should-able-to-added-the-product-on-add-to-cart-basket;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I click on women link tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I change the quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select the size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on add to card button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I am successfully added the product on add to cart basket",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I can see the addtocart message \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenLinkTab()"
});
formatter.result({
  "duration": 3677290600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProduct(String)"
});
formatter.result({
  "duration": 2788157700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "WomenCategoryPageTest.iChangeTheQuantity(String)"
});
formatter.result({
  "duration": 3093970300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iSelectTheSize(String)"
});
formatter.result({
  "duration": 79359199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageTest.iSelectColour(String)"
});
formatter.result({
  "duration": 85795900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCardButton()"
});
formatter.result({
  "duration": 51592100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iAmSuccessfullyAddedTheProductOnAddToCartBasket()"
});
formatter.result({
  "duration": 22099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 33
    }
  ],
  "location": "WomenCategoryPageTest.iCanSeeTheAddtocartMessage(String)"
});
formatter.result({
  "duration": 2035247400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iCloseThePopup()"
});
formatter.result({
  "duration": 2833955500,
  "status": "passed"
});
formatter.after({
  "duration": 666983600,
  "status": "passed"
});
formatter.before({
  "duration": 6503361699,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "I should able to added the product on add to cart basket",
  "description": "",
  "id": "women-category-functionality;i-should-able-to-added-the-product-on-add-to-cart-basket;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I click on women link tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I change the quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select the size \"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on add to card button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I am successfully added the product on add to cart basket",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I can see the addtocart message \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenLinkTab()"
});
formatter.result({
  "duration": 4738207500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProduct(String)"
});
formatter.result({
  "duration": 5299808099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 23
    }
  ],
  "location": "WomenCategoryPageTest.iChangeTheQuantity(String)"
});
formatter.result({
  "duration": 3082721300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iSelectTheSize(String)"
});
formatter.result({
  "duration": 68819299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageTest.iSelectColour(String)"
});
formatter.result({
  "duration": 82123300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCardButton()"
});
formatter.result({
  "duration": 47249500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iAmSuccessfullyAddedTheProductOnAddToCartBasket()"
});
formatter.result({
  "duration": 18200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 33
    }
  ],
  "location": "WomenCategoryPageTest.iCanSeeTheAddtocartMessage(String)"
});
formatter.result({
  "duration": 2036677900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iCloseThePopup()"
});
formatter.result({
  "duration": 2172139300,
  "status": "passed"
});
formatter.after({
  "duration": 678109101,
  "status": "passed"
});
formatter.before({
  "duration": 8321675100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "I should able to added the product on add to cart basket",
  "description": "",
  "id": "women-category-functionality;i-should-able-to-added-the-product-on-add-to-cart-basket;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I click on women link tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on product \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I change the quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select the size \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select colour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on add to card button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I am successfully added the product on add to cart basket",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I can see the addtocart message \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenLinkTab()"
});
formatter.result({
  "duration": 4644850201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProduct(String)"
});
formatter.result({
  "duration": 4725591400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 23
    }
  ],
  "location": "WomenCategoryPageTest.iChangeTheQuantity(String)"
});
formatter.result({
  "duration": 3087290299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iSelectTheSize(String)"
});
formatter.result({
  "duration": 40168400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageTest.iSelectColour(String)"
});
formatter.result({
  "duration": 79222500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCardButton()"
});
formatter.result({
  "duration": 50440999,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iAmSuccessfullyAddedTheProductOnAddToCartBasket()"
});
formatter.result({
  "duration": 17299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 33
    }
  ],
  "location": "WomenCategoryPageTest.iCanSeeTheAddtocartMessage(String)"
});
formatter.result({
  "duration": 2042564300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iCloseThePopup()"
});
formatter.result({
  "duration": 53591201,
  "status": "passed"
});
formatter.after({
  "duration": 696230700,
  "status": "passed"
});
formatter.before({
  "duration": 5711336200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "I should able to added the product on add to cart basket",
  "description": "",
  "id": "women-category-functionality;i-should-able-to-added-the-product-on-add-to-cart-basket;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I click on women link tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on product \"Printed Summer Dress with Price $28.98\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I change the quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select the size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select colour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on add to card button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I am successfully added the product on add to cart basket",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I can see the addtocart message \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I close the popup",
  "keyword": "And "
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWomenLinkTab()"
});
formatter.result({
  "duration": 3510124701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress with Price $28.98",
      "offset": 20
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnProduct(String)"
});
formatter.result({
  "duration": 90151799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "WomenCategoryPageTest.iChangeTheQuantity(String)"
});
formatter.result({
  "duration": 20019247500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027quantity_wanted\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-N67ITPLC\u0027, ip: \u0027192.168.1.67\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [261765efc8133a5e2c3524576570a649, findElement {using\u003dxpath, value\u003d//input[@id\u003d\u0027quantity_wanted\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\megha\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59012}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59012/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 261765efc8133a5e2c3524576570a649\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.clear(Unknown Source)\r\n\tat com.automation.websitepages.ProductPage.enterQuantity(ProductPage.java:41)\r\n\tat com.cucumber.steps.WomenCategoryPageTest.iChangeTheQuantity(WomenCategoryPageTest.java:24)\r\n\tat ✽.And I change the quantity \"2\"(womencategory.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 19
    }
  ],
  "location": "WomenCategoryPageTest.iSelectTheSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 17
    }
  ],
  "location": "WomenCategoryPageTest.iSelectColour(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCardButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategoryPageTest.iAmSuccessfullyAddedTheProductOnAddToCartBasket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 33
    }
  ],
  "location": "WomenCategoryPageTest.iCanSeeTheAddtocartMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategoryPageTest.iCloseThePopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 931444000,
  "status": "passed"
});
});