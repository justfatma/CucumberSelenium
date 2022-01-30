Feature: Free CRM Create-Read-Update-Delete Deal

Scenario: Free CRM CRUD deal scenario

Given deals user is on CRM Page
When deals title of login page is Free CRM customer relationship
Then deals user clicks on sign in button
Then deals user enters username and password
| tasatan@gmail.com  | Fatma3112 |

Then deals user clicks on login
Then deals user logs in

Then deals user moves to new deal page
Then deals user enters deal details and click save
| New Deal Title |  Deal Description  |2000 | 10 | 60 |

Then deals user clicks update button
Then deals user updates deal details 
Then deals user click save button
Then deals user views updated info 
Then deals user delete deal
Then deals user close the browser