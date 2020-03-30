Feature: Free CRM Deals Page Functionality

Scenario: Verify create new deal functionality

Given user is already on Login Page
When title of login page is Cogmento CRM
Then user enters username and password
|	vighnaharta.rupesh@gmail.com	|	rudra@1911	|
Then user clicks on login button
And user is on home page
Then user click on Deals option from options
Then user click on New button to create deal
Then user enters details title and Probability and Commission
|	test	|	100	|	10	|
Then user click on Save button
Then user close browser