$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Practise/CucumberBDD/src/main/java/Features/Contact.feature");
formatter.feature({
  "name": "Free CRM Contact Page Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify create new contacts functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "name": "user is on home page",
  "keyword": "And "
});
formatter.step({
  "name": "user click on Contact option from options",
  "keyword": "Then "
});
formatter.step({
  "name": "user click on New button to create contact",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user click on Save button",
  "keyword": "Then "
});
formatter.step({
  "name": "user close browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname"
      ]
    },
    {
      "cells": [
        "vighnaharta.rupesh@gmail.com",
        "rudra@1911",
        "Tom",
        "Hank"
      ]
    },
    {
      "cells": [
        "vighnaharta.rupesh@gmail.com",
        "rudra@1911",
        "Chris",
        "Einstein"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify create new contacts functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStepDefinition.user_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.match({
  "location": "loginStepDefinition.login_page_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"vighnaharta.rupesh@gmail.com\" and \"rudra@1911\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.enter_login_credentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "And "
});
formatter.match({
  "location": "loginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Contact option from options",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.click_on_Contact_Option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on New button to create contact",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.click_on_new_button_to_create_new_contact()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters details \"Tom\" and \"Hank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.enter_new_contact_details(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Save button",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.user_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify create new contacts functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStepDefinition.user_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.match({
  "location": "loginStepDefinition.login_page_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"vighnaharta.rupesh@gmail.com\" and \"rudra@1911\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.enter_login_credentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "And "
});
formatter.match({
  "location": "loginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Contact option from options",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.click_on_Contact_Option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on New button to create contact",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.click_on_new_button_to_create_new_contact()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters details \"Chris\" and \"Einstein\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.enter_new_contact_details(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Save button",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.user_close_browser()"
});
formatter.result({
  "status": "passed"
});
});