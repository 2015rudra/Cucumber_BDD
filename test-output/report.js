$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/Contact.feature");
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
formatter.uri("src/main/java/Features/Deals.feature");
formatter.feature({
  "name": "Free CRM Deals Page Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify create new deal functionality",
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
  "name": "user click on Deals option from options",
  "keyword": "Then "
});
formatter.step({
  "name": "user click on New button to create deal",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters deals details \"\u003ctitle\u003e\" and \"\u003cProbability\u003e\" and \"\u003cCommission\u003e\"",
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
        "title",
        "Probability",
        "Commission"
      ]
    },
    {
      "cells": [
        "vighnaharta.rupesh@gmail.com",
        "rudra@1911",
        "Test1",
        "50",
        "10"
      ]
    },
    {
      "cells": [
        "vighnaharta.rupesh@gmail.com",
        "rudra@1911",
        "Test2",
        "60",
        "35"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify create new deal functionality",
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
  "name": "user click on Deals option from options",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.click_on_Deals_Option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on New button to create deal",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.click_on_new_button_to_create_new_deal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters deals details \"Test1\" and \"50\" and \"10\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.enter_new_deals_details(String,String,String)"
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
  "name": "Verify create new deal functionality",
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
  "name": "user click on Deals option from options",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.click_on_Deals_Option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on New button to create deal",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.click_on_new_button_to_create_new_deal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters deals details \"Test2\" and \"60\" and \"35\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.enter_new_deals_details(String,String,String)"
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
formatter.uri("src/main/java/Features/Login.feature");
formatter.feature({
  "name": "Free CRM Login Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Free CRM Login Page",
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
        "password"
      ]
    },
    {
      "cells": [
        "vighnaharta.rupesh@gmail.com",
        "rudra@1911"
      ]
    },
    {
      "cells": [
        "skdfbsdfb@sdfbfs.com",
        "reset@asd"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Free CRM Login Page",
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
  "name": "Verify Free CRM Login Page",
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
  "name": "user enters \"skdfbsdfb@sdfbfs.com\" and \"reset@asd\"",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027user-display\u0027]\"}\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-JF89UMLV\u0027, ip: \u0027192.168.0.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d79.0.3945.16 (93fcc21110c10dbbd49bbff8f472335360e31d05-refs/branch-heads/3945@{#262}), userDataDir\u003dC:\\Users\\RUPESH~1\\AppData\\Local\\Temp\\scoped_dir22348_1718800702}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:64090}, acceptInsecureCerts\u003dfalse, browserVersion\u003d80.0.3987.149, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue}]\nSession ID: ae27bd40a4b862f4dc527ce236328267\n*** Element info: {Using\u003dxpath, value\u003d//span[@class\u003d\u0027user-display\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat stepDefinition.loginStepDefinition.user_is_on_home_page(loginStepDefinition.java:56)\r\n\tat ✽.user is on home page(src/main/java/Features/Login.feature:23)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.user_close_browser()"
});
formatter.result({
  "status": "skipped"
});
});