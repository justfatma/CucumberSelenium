package stepDefinitions;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

//data table with maps : for parameterization of test cases

public class DealsStepWithMapDefinition {

	WebDriver driver;
	 
	
	 @Given("^map deals user is on CRM Page$")
	 public void map_deals_user_is_on_CRM_Page(){
		 System.setProperty("webdriver.gecko.driver","C:\\Users\\Selenium\\Gecko Driver\\geckodriver.exe");
		 driver = new FirefoxDriver();
		 driver.get("https://www.freecrm.com/index.html");
	 }
	
	
	 @When("^map deals title of login page is Free CRM customer relationship$")
	 public void map_deals_title_of_login_page_is_free_CRM_customer_relationship(){
		 String title = driver.getTitle();
		 System.out.println(title);
		 Assert.assertEquals(title, "#1 Free CRM customer relationship management software cloud" );
	 }
	 
	 @When("^map deals user clicks on sign in button$")
	 public void map_deals_user_clicks_on_sign_in_button() {
		 WebDriverWait wait=new WebDriverWait(driver, 60);		 
		 WebElement signInBtn = driver.findElement(By.cssSelector(".btn.btn-primary.btn-xs-2.btn-shadow.btn-rect.btn-icon.btn-icon-left"));
		 wait.until(ExpectedConditions.visibilityOf(signInBtn));
		 signInBtn.click();
	 }
		
	 @Then("^map deals user enters username and password$")
	 public void map_deals_user_enters_name_and_password(DataTable credentials) throws InterruptedException{
		 Thread.sleep(2000);			 
		 for (Map<String, String> data : credentials.asMaps(String.class, String.class)) {
				driver.findElement(By.xpath("//input[@type='text' and @name='email']")).sendKeys(data.get("username"));
				driver.findElement(By.xpath("//input[@type='password' and @name='password']")).sendKeys(data.get("password"));
		}
	 }
	
	 @Then("^map deals user clicks on login$")
	 public void map_deals_user_clicks_on_login() {
		 WebElement loginBtn = driver.findElement(By.cssSelector(".ui.fluid.large.blue.submit.button"));
		 loginBtn.click();
	 }
	
	
	 @Then("^map deals user logs in$")
	 public void map_deals_user_logs_in(){
		 String title = driver.getTitle();
		 System.out.println("Home Page title :"+ title);
	     Assert.assertEquals(title, "Cogmento CRM");
	 }
		
	 @Then("^map deals user moves to new deal page$")
	 public void map_deals_user_moves_to_new_deal_page() throws InterruptedException {
		
		Actions action = new Actions(driver);
		Thread.sleep(2000);
		action.moveToElement(driver.findElement(By.cssSelector(".users.icon"))).build().perform();
		driver.findElement(By.cssSelector("div#main-nav div:nth-of-type(5) button")).click();
		action.moveByOffset(250,200).build().perform();
		Thread.sleep(2000);
	}
	 
	 	 
	 @Then("^map deals user enters deal details and click save$")
	 public void map_deals_user_enters_deal_details_and_click_save(DataTable dealData) throws InterruptedException{
		 for (Map<String, String> data : dealData.asMaps(String.class, String.class)) {
			 driver.findElement(By.xpath("//input[@type='text' and @name='title']")).sendKeys(data.get("title"));
			 driver.findElement(By.xpath("//textarea[@name='description']")).sendKeys(data.get("description"));
			 driver.findElement(By.xpath("//input[@type='text' and @name='amount']")).sendKeys(data.get("amount"));
			 driver.findElement(By.xpath("//input[@type='text' and @name='probability']")).sendKeys(data.get("probability"));
			 driver.findElement(By.xpath("//input[@type='text' and @name='commission']")).sendKeys(data.get("commission"));
						 
			 driver.findElement(By.cssSelector(".ui.linkedin.button")).click();
			 
			 map_deals_user_moves_to_new_deal_page();
		 }
	 }
	
	 
	 @Then("^map deals user click deals$")
	 public void map_deals_user_click_deals() throws Throwable {
		 Actions action = new Actions(driver);
		 action.moveToElement(driver.findElement(By.cssSelector(".money.icon"))).build().perform();
		 Thread.sleep(1000);
		 driver.findElement(By.xpath("//span[@class='item-text' and text()='Deals']")).click();
		 action.moveByOffset(250,200).build().perform();
		 Thread.sleep(2000);
	 }

	 @Then("^map deals user click select all$")
	 public void map_deals_user_click_select_all() throws Throwable {
		 driver.findElement(By.xpath("//div[@class='ui fitted checkbox']")).click();
	 }

	 @Then("^map deals user click actions and select delete$")
	 public void map_deals_user_click_actions_and_select_delete() throws Throwable {
		 driver.findElement(By.xpath("//div[@class='ui selection upward dropdown']")).click();
		 driver.findElement(By.xpath("//span[@class='text' and text()='Delete']")).click();
	 }

	 @Then("^map deals user delete deals$")
	 public void map_deals_user_delete_deals() throws Throwable {
		driver.findElement(By.xpath("//div[@class='ui basic icon left attached button']")).click();
		driver.findElement(By.xpath("//button[@class='ui primary button' and text()='Delete']")).click();
	 }
	 

	@Then("^map deals user close the browser$")
	public void map_deals_user_close_the_browser() {
		driver.quit();
	}

}
