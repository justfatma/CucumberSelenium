Feature: Free CRM Create-Read-Update-Delete Contract

Scenario Outline: Free CRM CRUD contact scenario

Given cont user is on CRM Page
When cont title of login page is Free CRM customer relationship
Then cont user clicks on sign in button
Then cont user enters "<username>" and "<password>"
Then cont user clicks on login
Then cont user logs in
Then cont user moves to new contact page
Then cont user enters contact details "<firstname>" and "<lastname>"
Then cont user is on new contacts page "<firstname>" and "<lastname>" 
Then cont user clicks update button
Then cont user updates contact details "<position>" and "<department>"
Then cont user click save button
Then cont user views updated info "<position>" and "<department>"
Then cont user delete user
Then cont user close the browser

Examples:
	| username           | password   | firstname | lastname | position | department |
	| tasatan@gmail.com  | Fatma3112  | John 	    | Pitt     | QA Engineer | Information Technology|

	