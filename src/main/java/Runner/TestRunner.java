package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "D:\\Practise\\CucumberBDD\\src\\main\\java\\Features\\Contact.feature"
		,glue = {"stepDefinition"},
		format = {"pretty","html:test-output", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"},
		dryRun = true,
		monochrome = true,
		strict = true
		
		)


public class TestRunner 
{

}
