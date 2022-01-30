Feature: Deal data creation with map

Scenario: Free CRM Create a new deal scenario 

	Given map deals user is on CRM Page
	When map deals title of login page is Free CRM customer relationship
	Then map deals user clicks on sign in button
	Then map deals user enters username and password
	| username | password|
	| tasatan@gmail.com  | Fatma3112 |
	
	Then map deals user clicks on login
	Then map deals user logs in
	
	Then map deals user moves to new deal page
	Then map deals user enters deal details and click save
	| title       | description       | amount | probability | commission |
	| New Deal1   | Deal Description1 | 1000   | 15          | 16         |
	| New Deal2   | Deal Description2 | 2000   | 25          | 26         |
	| New Deal3   | Deal Description3 | 3000   | 35          | 36         |


  Then map deals user click deals
  Then map deals user click select all
  Then map deals user click actions and select delete
  Then map deals user delete deals
	Then map deals user close the browser