const { Given, Then, When, And } = require('cucumber');
const { protractor, browser, by, element, ExpectedConditions,to } = require('protractor');
const chai = require('chai').use(require('chai-as-promised'));
const Expect=chai.expect;
chai.use(require('chai-as-promised'));
let EC = protractor.ExpectedConditions;
//const chai= require('chai')

Given('The app is open on {string}', { timeout: 25 * 1000 }, async (string) => {
    await browser.get('http://' + string + ':4200/');
      await browser.sleep(2000);
        await chai.expect(browser.element(by.id('query')).isDisplayed()).to.eventually.be.true;
});

Then('the user selectes person radiobutton', async function () {
    await element(by.id('people')).click();
  });

Then('the user selectes planet radiobutton', async function () {
    await element(by.id('planets')).click();
  });  

Then('the user enters the {string}', async function(string) {
    await element(by.css('input#query')).sendKeys(string);
  });

When('the user hits Search', async function () {
    await browser.sleep(2000);
        await element(by.css('div:nth-child(4) > button[type="submit"]')).click();
  });


  When('the user clears the textfield', {timeout : 12*1000}, async function () {
    await browser.sleep(2000);
        await element(by.css('input#query')).clear();
            await browser.sleep(2000);
  });

  Then('the user should see the details of the person', { timeout: 25 * 1000 }, async function () {
    let expectedvalues=['Gender:', 'Birth year:', 'Eye color:', 'Skin color:'];
    var values =await element.all(by.xpath("(//div[@class='card-body'])[2]/div[@class='row']/div[1]")).count();
      console.log('++++'+values); //Code Revision - Avinandan
        for(let i=0;i<values;i++){
          var valueText=await element.all(by.xpath("(//div[@class='card-body'])[2]/div[@class='row']/div[1]")).get(i).getText();
            console.log(valueText); //Code Debug and Experimentation
            await Expect(expectedvalues).includes(valueText);
            await Expect(expectedvalues).to.include(valueText);
            await Expect(valueText).to.be.oneOf(expectedvalues);
  }
});

Then('the user should see the details of the planet', { timeout: 25 * 1000 }, async function () {
      let expectedvalues=['Population:', 'Climate:', 'Gravity:'];
        var values =await element.all(by.xpath("(//div[@class='card-body'])[2]/div[@class='row']/div[1]")).count();
          console.log('++++'+values); //Code Revision - Avinandan
            for(let i=0;i<values;i++){
              var valueText=await element.all(by.xpath("(//div[@class='card-body'])[2]/div[@class='row']/div[1]")).get(i).getText();
                console.log(valueText); //Code Debug and Experimentation
                //await Expect(expectedvalues).includes(valueText);
                //await Expect(expectedvalues).to.include(valueText);
                  await Expect(valueText).to.be.oneOf(expectedvalues);
      }
});


Then('the user enters the an incorrect name', async function() {
    await element(by.css('input#query')).sendKeys('boop');
  });

  When('the user presses Enter Key', async function(){
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
  })

  Then('the user should should not find the user', async function() {
    let countr= await element.all(by.xpath('//div[text()="Not found."]')).count();
      if(countr>0){
        await element.all(by.xpath('//div[text()="Not found."]')).getText().then(async function (text) 
          { console.log(text);
              //await Expect(text).to.equal("Not found.") //Data being parsed as an Array, hence assertion failure
              await Expect(text).includes("Not found.")
          });
              }
      else{
        console.log("not present");
          await Expect(false);
         }
});

  Then('the user should should not find the planet', async function() {
    let countr= await element.all(by.xpath('//div[text()="Not found."]')).count();
    if(countr>0){
        await element.all(by.xpath('//div[text()="Not found."]')).getText().then(async function (text) 
        { console.log(text);
        //await Expect(text).to.equal("Not found.") //Data being parsed as an Array, hence assertion failure for equal
          await Expect(text).includes("Not found.")
     });
    }
    else{
        console.log("not present");
          await Expect(false);
    }
});
