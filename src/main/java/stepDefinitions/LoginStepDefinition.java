package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition{

	 WebDriver driver;
	 

	
	 @Given("^user is on CRM Page$")
	 public void user_is_on_CRM_Page(){
//		 System.setProperty("webdriver.chrome.driver","/Users/Selenium/Chrome Driver/chromedriver.exe");
//		 driver = new ChromeDriver();
		 
		 System.setProperty("webdriver.gecko.driver","C:\\Users\\Selenium\\Gecko Driver\\geckodriver.exe");
		 driver = new FirefoxDriver();
		 driver.get("https://www.freecrm.com/index.html");
	 }
	
	
	 @When("^title of login page is Free CRM customer relationship$")
	 public void title_of_login_page_is_free_CRM_customer_relationship(){
		 String title = driver.getTitle();
		 System.out.println(title);
		 Assert.assertEquals(title, "#1 Free CRM customer relationship management software cloud" );
	 }
	 
	 @When("^user clicks on sign in button$")
	 public void user_clicks_on_sign_in_button() {
		 WebDriverWait wait=new WebDriverWait(driver, 60);		 
		 WebElement signInBtn = driver.findElement(By.cssSelector(".btn.btn-primary.btn-xs-2.btn-shadow.btn-rect.btn-icon.btn-icon-left"));
		 wait.until(ExpectedConditions.visibilityOf(signInBtn));
		 signInBtn.click();
	 }
	
	 //Reg Exp:
	 //1. \"([^\"]*)\"
	 //2. \"(.*)\"
	
	 @Then("^user enters \"(.*)\" and \"(.*)\"$")
	 public void user_enters_name_and_password(String username, String password) throws InterruptedException{
		 Thread.sleep(3000);
		 driver.findElement(By.xpath("//input[@type='text' and @name='email']")).sendKeys(username);
		 driver.findElement(By.xpath("//input[@type='password' and @name='password']")).sendKeys(password);
	 }
	
	 @Then("^user clicks on login$")
	 public void user_clicks_on_login() {
		 WebElement loginBtn = driver.findElement(By.cssSelector(".ui.fluid.large.blue.submit.button"));
		 loginBtn.click();
	 }
	
	
	 @Then("^user logs in$")
	 public void user_logs_in(){
		 String title = driver.getTitle();
		 System.out.println("Home Page title :"+ title);
	     Assert.assertEquals(title, "Cogmento CRM");
	 }
	 

	 @Then("^Close the browser$")
	 public void user_close_the_browser(){
		 driver.quit();
	 }
	
	
	

}
