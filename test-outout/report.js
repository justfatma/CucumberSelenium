$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contactsCRUD.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create-Read-Update-Delete Contract",
  "description": "",
  "id": "free-crm-create-read-update-delete-contract",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM CRUD contact scenario",
  "description": "",
  "id": "free-crm-create-read-update-delete-contract;free-crm-crud-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "cont user is on CRM Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "cont title of login page is Free CRM customer relationship",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "cont user clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "cont user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "cont user clicks on login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "cont user logs in",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "cont user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "cont user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "cont user is on new contacts page \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "cont user clicks update button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "cont user updates contact details \"\u003cposition\u003e\" and \"\u003cdepartment\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "cont user click save button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "cont user views updated info \"\u003cposition\u003e\" and \"\u003cdepartment\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "cont user delete user",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "cont user close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "free-crm-create-read-update-delete-contract;free-crm-crud-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position",
        "department"
      ],
      "line": 22,
      "id": "free-crm-create-read-update-delete-contract;free-crm-crud-contact-scenario;;1"
    },
    {
      "cells": [
        "tasatan@gmail.com",
        "Fatma3112",
        "John",
        "Pitt",
        "QA Engineer",
        "Information Technology"
      ],
      "line": 23,
      "id": "free-crm-create-read-update-delete-contract;free-crm-crud-contact-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 505800,
  "status": "passed"
});
formatter.before({
  "duration": 346500,
  "status": "passed"
});
formatter.before({
  "duration": 376100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Free CRM CRUD contact scenario",
  "description": "",
  "id": "free-crm-create-read-update-delete-contract;free-crm-crud-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "cont user is on CRM Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "cont title of login page is Free CRM customer relationship",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "cont user clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "cont user enters \"tasatan@gmail.com\" and \"Fatma3112\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "cont user clicks on login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "cont user logs in",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "cont user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "cont user enters contact details \"John\" and \"Pitt\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "cont user is on new contacts page \"John\" and \"Pitt\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "cont user clicks update button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "cont user updates contact details \"QA Engineer\" and \"Information Technology\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "cont user click save button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "cont user views updated info \"QA Engineer\" and \"Information Technology\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "cont user delete user",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "cont user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactsCRUDStepDefinition.cont_user_is_on_CRM_Page()"
});
formatter.result({
  "duration": 17555987700,
  "status": "passed"
});
formatter.match({
  "location": "ContactsCRUDStepDefinition.cont_title_of_login_page_is_free_CRM_customer_relationship()"
});
formatter.result({
  "duration": 37521000,
  "status": "passed"
});
formatter.match({
  "location": "ContactsCRUDStepDefinition.cont_user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 1649298200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tasatan@gmail.com",
      "offset": 18
    },
    {
      "val": "Fatma3112",
      "offset": 42
    }
  ],
  "location": "ContactsCRUDStepDefinition.cont_user_enters_name_and_password(String,String)"
});
formatter.result({
  "duration": 3178898800,
  "status": "passed"
});
formatter.match({
  "location": "ContactsCRUDStepDefinition.cont_user_clicks_on_login()"
});
formatter.result({
  "duration": 271959400,
  "status": "passed"
});
formatter.match({
  "location": "ContactsCRUDStepDefinition.cont_user_logs_in()"
});
formatter.result({
  "duration": 13469900,
  "status": "passed"
});
formatter.match({
  "location": "ContactsCRUDStepDefinition.cont_user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 6141395600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 34
    },
    {
      "val": "Pitt",
      "offset": 45
    }
  ],
  "location": "ContactsCRUDStepDefinition.cont_user_enters_contacts_details(String,String)"
});
formatter.result({
  "duration": 2668650200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 35
    },
    {
      "val": "Pitt",
      "offset": 46
    }
  ],
  "location": "ContactsCRUDStepDefinition.cont_user_is_on_new_contacts_page(String,String)"
});
formatter.result({
  "duration": 2037649000,
  "status": "passed"
});
formatter.match({
  "location": "ContactsCRUDStepDefinition.cont_user_clicks_update_button()"
});
formatter.result({
  "duration": 849714600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA Engineer",
      "offset": 35
    },
    {
      "val": "Information Technology",
      "offset": 53
    }
  ],
  "location": "ContactsCRUDStepDefinition.cont_user_updates_contact_details(String,String)"
});
formatter.result({
  "duration": 4757657600,
  "status": "passed"
});
formatter.match({
  "location": "ContactsCRUDStepDefinition.cont_user_click_save_button()"
});
formatter.result({
  "duration": 453002600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA Engineer",
      "offset": 30
    },
    {
      "val": "Information Technology",
      "offset": 48
    }
  ],
  "location": "ContactsCRUDStepDefinition.cont_user_views_updated_info(String,String)"
});
formatter.result({
  "duration": 2050088800,
  "status": "passed"
});
formatter.match({
  "location": "ContactsCRUDStepDefinition.cont_user_delete_user()"
});
formatter.result({
  "duration": 7610383800,
  "status": "passed"
});
formatter.match({
  "location": "ContactsCRUDStepDefinition.cont_user_close_the_browser()"
});
formatter.result({
  "duration": 2107241700,
  "status": "passed"
});
formatter.after({
  "duration": 96700,
  "status": "passed"
});
formatter.after({
  "duration": 53000,
  "status": "passed"
});
formatter.after({
  "duration": 56600,
  "status": "passed"
});
formatter.uri("dealsCRUD.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create-Read-Update-Delete Deal",
  "description": "",
  "id": "free-crm-create-read-update-delete-deal",
  "keyword": "Feature"
});
formatter.before({
  "duration": 269500,
  "status": "passed"
});
formatter.before({
  "duration": 283800,
  "status": "passed"
});
formatter.before({
  "duration": 278500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM CRUD deal scenario",
  "description": "",
  "id": "free-crm-create-read-update-delete-deal;free-crm-crud-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "deals user is on CRM Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "deals title of login page is Free CRM customer relationship",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "deals user clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "deals user enters username and password",
  "rows": [
    {
      "cells": [
        "tasatan@gmail.com",
        "Fatma3112"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "deals user clicks on login",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "deals user logs in",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "deals user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "deals user enters deal details and click save",
  "rows": [
    {
      "cells": [
        "New Deal Title",
        "Deal Description",
        "2000",
        "10",
        "60"
      ],
      "line": 16
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "deals user clicks update button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "deals user updates deal details",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "deals user click save button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "deals user views updated info",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "deals user delete deal",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "deals user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsCRUDStepDefinition.deals_user_is_on_CRM_Page()"
});
formatter.result({
  "duration": 15632676000,
  "status": "passed"
});
formatter.match({
  "location": "DealsCRUDStepDefinition.deals_title_of_login_page_is_free_CRM_customer_relationship()"
});
formatter.result({
  "duration": 18810700,
  "status": "passed"
});
formatter.match({
  "location": "DealsCRUDStepDefinition.deals_user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 1936675900,
  "status": "passed"
});
formatter.match({
  "location": "DealsCRUDStepDefinition.deals_user_enters_name_and_password(DataTable)"
});
formatter.result({
  "duration": 3201511100,
  "status": "passed"
});
formatter.match({
  "location": "DealsCRUDStepDefinition.deals_user_clicks_on_login()"
});
formatter.result({
  "duration": 257989800,
  "status": "passed"
});
formatter.match({
  "location": "DealsCRUDStepDefinition.deals_user_logs_in()"
});
formatter.result({
  "duration": 8363800,
  "status": "passed"
});
formatter.match({
  "location": "DealsCRUDStepDefinition.deals_user_moves_to_new_deal_page()"
});
formatter.result({
  "duration": 5900304200,
  "status": "passed"
});
formatter.match({
  "location": "DealsCRUDStepDefinition.deals_user_enters_deal_details_and_click_save(DataTable)"
});
formatter.result({
  "duration": 1133641400,
  "status": "passed"
});
formatter.match({
  "location": "DealsCRUDStepDefinition.deals_user_clicks_update_button()"
});
formatter.result({
  "duration": 2447364300,
  "status": "passed"
});
formatter.match({
  "location": "DealsCRUDStepDefinition.deals_user_updates_deal_details()"
});
formatter.result({
  "duration": 3099182300,
  "status": "passed"
});
formatter.match({
  "location": "DealsCRUDStepDefinition.deals_user_click_save_button()"
});
formatter.result({
  "duration": 365247100,
  "status": "passed"
});
formatter.match({
  "location": "DealsCRUDStepDefinition.deals_user_views_updated_info()"
});
formatter.result({
  "duration": 2057768400,
  "status": "passed"
});
formatter.match({
  "location": "DealsCRUDStepDefinition.deals_user_delete_deal()"
});
formatter.result({
  "duration": 7615724000,
  "status": "passed"
});
formatter.match({
  "location": "DealsCRUDStepDefinition.deals_user_close_the_browser()"
});
formatter.result({
  "duration": 2086011600,
  "status": "passed"
});
formatter.after({
  "duration": 56600,
  "status": "passed"
});
formatter.after({
  "duration": 72500,
  "status": "passed"
});
formatter.after({
  "duration": 59000,
  "status": "passed"
});
formatter.uri("dealsmap.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation with map",
  "description": "",
  "id": "deal-data-creation-with-map",
  "keyword": "Feature"
});
formatter.before({
  "duration": 597000,
  "status": "passed"
});
formatter.before({
  "duration": 319300,
  "status": "passed"
});
formatter.before({
  "duration": 550000,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new deal scenario",
  "description": "",
  "id": "deal-data-creation-with-map;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "map deals user is on CRM Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "map deals title of login page is Free CRM customer relationship",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "map deals user clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "map deals user enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9
    },
    {
      "cells": [
        "tasatan@gmail.com",
        "Fatma3112"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "map deals user clicks on login",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "map deals user logs in",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "map deals user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "map deals user enters deal details and click save",
  "rows": [
    {
      "cells": [
        "title",
        "description",
        "amount",
        "probability",
        "commission"
      ],
      "line": 17
    },
    {
      "cells": [
        "New Deal1",
        "Deal Description1",
        "1000",
        "15",
        "16"
      ],
      "line": 18
    },
    {
      "cells": [
        "New Deal2",
        "Deal Description2",
        "2000",
        "25",
        "26"
      ],
      "line": 19
    },
    {
      "cells": [
        "New Deal3",
        "Deal Description3",
        "3000",
        "35",
        "36"
      ],
      "line": 20
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "map deals user click deals",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "map deals user click select all",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "map deals user click actions and select delete",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "map deals user delete deals",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "map deals user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepWithMapDefinition.map_deals_user_is_on_CRM_Page()"
});
formatter.result({
  "duration": 16779232100,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.map_deals_title_of_login_page_is_free_CRM_customer_relationship()"
});
formatter.result({
  "duration": 7692600,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.map_deals_user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 1146286100,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.map_deals_user_enters_name_and_password(DataTable)"
});
formatter.result({
  "duration": 2525216600,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.map_deals_user_clicks_on_login()"
});
formatter.result({
  "duration": 257636100,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.map_deals_user_logs_in()"
});
formatter.result({
  "duration": 5255800,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.map_deals_user_moves_to_new_deal_page()"
});
formatter.result({
  "duration": 4967016600,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.map_deals_user_enters_deal_details_and_click_save(DataTable)"
});
formatter.result({
  "duration": 17585183800,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.map_deals_user_click_deals()"
});
formatter.result({
  "duration": 3819682000,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.map_deals_user_click_select_all()"
});
formatter.result({
  "duration": 255039800,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.map_deals_user_click_actions_and_select_delete()"
});
formatter.result({
  "duration": 504787900,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.map_deals_user_delete_deals()"
});
formatter.result({
  "duration": 561476000,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepWithMapDefinition.map_deals_user_close_the_browser()"
});
formatter.result({
  "duration": 2664124300,
  "status": "passed"
});
formatter.after({
  "duration": 49000,
  "status": "passed"
});
formatter.after({
  "duration": 39200,
  "status": "passed"
});
formatter.after({
  "duration": 23100,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on CRM Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM customer relationship",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user logs in",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "tasatan@gmail.com",
        "Fatma3112"
      ],
      "line": 16,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 74200,
  "status": "passed"
});
formatter.before({
  "duration": 55100,
  "status": "passed"
});
formatter.before({
  "duration": 233300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on CRM Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM customer relationship",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters \"tasatan@gmail.com\" and \"Fatma3112\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user logs in",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_CRM_Page()"
});
formatter.result({
  "duration": 20831280400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_CRM_customer_relationship()"
});
formatter.result({
  "duration": 10749100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 1729184100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tasatan@gmail.com",
      "offset": 13
    },
    {
      "val": "Fatma3112",
      "offset": 37
    }
  ],
  "location": "LoginStepDefinition.user_enters_name_and_password(String,String)"
});
formatter.result({
  "duration": 3171882100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login()"
});
formatter.result({
  "duration": 256594500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_logs_in()"
});
formatter.result({
  "duration": 2311000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_close_the_browser()"
});
formatter.result({
  "duration": 7860961700,
  "status": "passed"
});
formatter.after({
  "duration": 97700,
  "status": "passed"
});
formatter.after({
  "duration": 57900,
  "status": "passed"
});
formatter.after({
  "duration": 41900,
  "status": "passed"
});
});