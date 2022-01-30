package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class ContactsCRUDStepDefinition {
	 
	WebDriver driver;
	 
		
	 @Given("^cont user is on CRM Page$")
	 public void cont_user_is_on_CRM_Page(){
//		 System.setProperty("webdriver.chrome.driver","/Users/Selenium/Chrome Driver/chromedriver.exe");
//		 driver = new ChromeDriver();
		 
		 System.setProperty("webdriver.gecko.driver","C:\\Users\\Selenium\\Gecko Driver\\geckodriver.exe");
		 driver = new FirefoxDriver();
		 driver.get("https://www.freecrm.com/index.html");
	 }
	
	
	 @When("^cont title of login page is Free CRM customer relationship$")
	 public void cont_title_of_login_page_is_free_CRM_customer_relationship(){
		 String title = driver.getTitle();
		 System.out.println(title);
		 Assert.assertEquals(title, "#1 Free CRM customer relationship management software cloud" );
	 }
	 
	 @When("^cont user clicks on sign in button$")
	 public void cont_user_clicks_on_sign_in_button() {
		 WebDriverWait wait=new WebDriverWait(driver, 60);		 
		 WebElement signInBtn = driver.findElement(By.cssSelector(".btn.btn-primary.btn-xs-2.btn-shadow.btn-rect.btn-icon.btn-icon-left"));
		 wait.until(ExpectedConditions.visibilityOf(signInBtn));
		 signInBtn.click();
	 }
	
	 //Reg Exp:
	 //1. \"([^\"]*)\"
	 //2. \"(.*)\"
	
	 @Then("^cont user enters \"(.*)\" and \"(.*)\"$")
	 public void cont_user_enters_name_and_password(String username, String password) throws InterruptedException{
		 Thread.sleep(3000);
		 driver.findElement(By.xpath("//input[@type='text' and @name='email']")).sendKeys(username);
		 driver.findElement(By.xpath("//input[@type='password' and @name='password']")).sendKeys(password);
	 }
	
	 @Then("^cont user clicks on login$")
	 public void cont_user_clicks_on_login() {
		 WebElement loginBtn = driver.findElement(By.cssSelector(".ui.fluid.large.blue.submit.button"));
		 loginBtn.click();
	 }
	
	
	 @Then("^cont user logs in$")
	 public void cont_user_logs_in(){
		 String title = driver.getTitle();
		 System.out.println("Home Page title :"+ title);
	     Assert.assertEquals(title, "Cogmento CRM");
	 }
		
	 @Then("^cont user moves to new contact page$")
	 public void cont_user_moves_to_new_contact_page() throws InterruptedException {
		
		Actions action = new Actions(driver);
		Thread.sleep(3000);
		action.moveToElement(driver.findElement(By.cssSelector(".users.icon"))).build().perform();
		driver.findElement(By.cssSelector("div#main-nav div:nth-of-type(3) button")).click();
		action.moveByOffset(250,200).build().perform();
		Thread.sleep(2000);
		}
	 
	 
	 @Then("^cont user enters contact details \"(.*)\" and \"(.*)\"$")
	 public void cont_user_enters_contacts_details(String firstname, String lastname){
		 driver.findElement(By.xpath("//input[@type='text' and @name='first_name']")).sendKeys(firstname);
		 driver.findElement(By.xpath("//input[@type='text' and @name='last_name']")).sendKeys(lastname);
		 
		 driver.findElement(By.xpath("//div[@name='status'][1]")).click();
		 driver.findElement(By.xpath("//span[text()='New']")).click();
		 
		 driver.findElement(By.xpath("//div[@name='category' and @role='listbox']")).click();
		 driver.findElement(By.xpath("//span[text()='Customer']")).click();
		
		 
		 driver.findElement(By.cssSelector(".save.icon")).click();
	 }
	 
	 @Then("^cont user is on new contacts page \"(.*)\" and \"(.*)\"$")
	 public void cont_user_is_on_new_contacts_page(String firstname, String lastname) throws InterruptedException{
		 Thread.sleep(2000);
		 String contactInfo = driver.findElement(By.cssSelector(".ui.header.item.mb5.light-black")).getText();
		 Assert.assertEquals(contactInfo, firstname +" "+ lastname);
	 }
	 
	
	 @Then("^cont user clicks update button$")
	 public void cont_user_clicks_update_button() throws InterruptedException{
		 driver.findElement(By.xpath("//i[@class='edit icon' and @aria-hidden='true']")).click();
	 }
	 
	 @Then("^cont user updates contact details \"(.*)\" and \"(.*)\"$")
	 public void cont_user_updates_contact_details(String position, String department) throws InterruptedException{
		 Thread.sleep(2000);
		 driver.findElement(By.xpath("//input[@type='text' and @name='position']")).sendKeys(position);
		 driver.findElement(By.xpath("//input[@type='text' and @name='department']")).sendKeys(department);
	 }
	 
	 @Then("^cont user click save button$")
	 public void cont_user_click_save_button(){
		 driver.findElement(By.cssSelector(".ui.linkedin.button")).click();
	 }
	 
	 @Then("^cont user views updated info \"(.*)\" and \"(.*)\"$")
	 public void cont_user_views_updated_info(String position, String department) throws InterruptedException{
		 Thread.sleep(2000);
		 		 
		 String updatedPosition = driver.findElement(By.cssSelector("div.field:nth-child(12) div>div>span")).getText();
		 Assert.assertEquals(updatedPosition, position);
		 
		 String updatedDepartment = driver.findElement(By.cssSelector("div.field:nth-child(13) div>div>span")).getText();
		 Assert.assertEquals(updatedDepartment, department);
	 }
	 
	 @Then("^cont user delete user$")
	 public void cont_user_delete_user() throws InterruptedException{
		 Thread.sleep(2000);
		 		 
		 driver.findElement(By.xpath("//i[@class='trash icon' and @aria-hidden='true']")).click();
		 Thread.sleep(2000);
		 driver.findElement(By.xpath("//i[@class='remove icon' and @aria-hidden='true']")).click();
		 Thread.sleep(2000);
		 String contacts = driver.findElement(By.cssSelector(".ui.header.item.mb5.light-black")).getText();
		 Assert.assertEquals(contacts, "Contacts");
		 Thread.sleep(1000);
	 }
	 
	 @Then("^cont user close the browser$")
	 public void cont_user_close_the_browser() throws InterruptedException{	 		 
		 driver.quit();
	 }

}
