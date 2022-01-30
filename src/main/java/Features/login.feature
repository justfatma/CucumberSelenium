Feature: Free CRM Login Feature

Scenario Outline: Free CRM Login Test Scenario

Given user is on CRM Page
When title of login page is Free CRM customer relationship
Then user clicks on sign in button
Then user enters "<username>" and "<password>"
Then user clicks on login
Then user logs in
Then Close the browser


Examples:
	| username           | password  |
	| tasatan@gmail.com  | Fatma3112 |
	
		