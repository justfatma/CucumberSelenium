package stepDefinitions;

import java.util.List;

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

public class DealsCRUDStepDefinition {
	
	WebDriver driver;
	 
	
	 @Given("^deals user is on CRM Page$")
	 public void deals_user_is_on_CRM_Page(){
		 System.setProperty("webdriver.gecko.driver","C:\\Users\\Selenium\\Gecko Driver\\geckodriver.exe");
		 driver = new FirefoxDriver();
		 driver.get("https://www.freecrm.com/index.html");
	 }
	
	
	 @When("^deals title of login page is Free CRM customer relationship$")
	 public void deals_title_of_login_page_is_free_CRM_customer_relationship(){
		 String title = driver.getTitle();
		 System.out.println(title);
		 Assert.assertEquals(title, "#1 Free CRM customer relationship management software cloud" );
	 }
	 
	 @When("^deals user clicks on sign in button$")
	 public void deals_user_clicks_on_sign_in_button() {
		 WebDriverWait wait=new WebDriverWait(driver, 60);		 
		 WebElement signInBtn = driver.findElement(By.cssSelector(".btn.btn-primary.btn-xs-2.btn-shadow.btn-rect.btn-icon.btn-icon-left"));
		 wait.until(ExpectedConditions.visibilityOf(signInBtn));
		 signInBtn.click();
	 }
		
	 @Then("^deals user enters username and password$")
	 public void deals_user_enters_name_and_password(DataTable credentials) throws InterruptedException{
		 Thread.sleep(3000);
		 List<List<String>> data = credentials.raw();
		 driver.findElement(By.xpath("//input[@type='text' and @name='email']")).sendKeys(data.get(0).get(0));
		 driver.findElement(By.xpath("//input[@type='password' and @name='password']")).sendKeys(data.get(0).get(1));
	 }
	
	 @Then("^deals user clicks on login$")
	 public void deals_user_clicks_on_login() {
		 WebElement loginBtn = driver.findElement(By.cssSelector(".ui.fluid.large.blue.submit.button"));
		 loginBtn.click();
	 }
	
	
	 @Then("^deals user logs in$")
	 public void deals_user_logs_in(){
		 String title = driver.getTitle();
		 System.out.println("Home Page title :"+ title);
	     Assert.assertEquals(title, "Cogmento CRM");
	 }
		
	 @Then("^deals user moves to new deal page$")
	 public void deals_user_moves_to_new_deal_page() throws InterruptedException {
		
		Actions action = new Actions(driver);
		Thread.sleep(3000);
		action.moveToElement(driver.findElement(By.cssSelector(".users.icon"))).build().perform();
		driver.findElement(By.cssSelector("div#main-nav div:nth-of-type(5) button")).click();
		action.moveByOffset(250,200).build().perform();
		Thread.sleep(2000);
	}
	 
	 	 
	 @Then("^deals user enters deal details and click save$")
	 public void deals_user_enters_deal_details_and_click_save(DataTable dealData){
		 List<List<String>> dealValues =  dealData.raw();
		 driver.findElement(By.xpath("//input[@type='text' and @name='title']")).sendKeys(dealValues.get(0).get(0));
		 driver.findElement(By.xpath("//textarea[@name='description']")).sendKeys(dealValues.get(0).get(1));
		 driver.findElement(By.xpath("//input[@type='text' and @name='amount']")).sendKeys(dealValues.get(0).get(2));
		 driver.findElement(By.xpath("//input[@type='text' and @name='commission']")).sendKeys(dealValues.get(0).get(3));
		 driver.findElement(By.xpath("//input[@type='text' and @name='probability']")).sendKeys(dealValues.get(0).get(4));
		 
		 driver.findElement(By.cssSelector(".ui.linkedin.button")).click();
	 }
	 
	 @Then("^deals user clicks update button$")
	 public void deals_user_clicks_update_button() throws InterruptedException{
		 Thread.sleep(2000);
		 driver.findElement(By.xpath("//i[@class='edit icon' and @aria-hidden='true']")).click();
	 }

	 @Then("^deals user updates deal details$")
	 public void deals_user_updates_deal_details() throws InterruptedException{
		 Thread.sleep(2000);
		 driver.findElement(By.xpath("//div[@class='ui selection dropdown' and @name='stage']")).click();
		 driver.findElement(By.xpath("//span[text()='Research']")).click();
		 
		 driver.findElement(By.xpath("//div[@class='ui selection dropdown' and @name='status']")).click();
		 driver.findElement(By.xpath("//span[text()='Active']")).click();
	 }

	 @Then("^deals user click save button$")
	 public void deals_user_click_save_button(){
		 driver.findElement(By.cssSelector(".save.icon")).click();
	 }

	 @Then("^deals user views updated info$")
	 public void deals_user_views_updated_info() throws InterruptedException{
		 Thread.sleep(2000);
 		 
		 String updatedStage = driver.findElement(By.cssSelector("div.field:nth-child(13) div>div")).getText();
		 Assert.assertEquals(updatedStage, "Research");
		 
		 String updatedStatus = driver.findElement(By.cssSelector("div.field:nth-child(15) div>div")).getText();
		 Assert.assertEquals(updatedStatus, "Active");
	 }

	 @Then("^deals user delete deal$")
	 public void deals_user_delete_deal() throws InterruptedException{
		 Thread.sleep(2000);
 		 
		 driver.findElement(By.xpath("//i[@class='trash icon' and @aria-hidden='true']")).click();
		 Thread.sleep(2000);
		 driver.findElement(By.xpath("//i[@class='remove icon' and @aria-hidden='true']")).click();
		 Thread.sleep(2000);
		 String deals = driver.findElement(By.cssSelector(".ui.header.item.mb5.light-black")).getText();
		 Assert.assertEquals(deals, "Deals");
		 Thread.sleep(1000);
	 }

	 @Then("^deals user close the browser$")
	 public void deals_user_close_the_browser() {
		 driver.quit();
	 }
	 	
	

}
