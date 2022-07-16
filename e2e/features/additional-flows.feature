Feature: Additional flow for the Assessment

Scenario Outline: Search a valid character then clear text field and hit search
       Given The app is open on "localhost"
       Then the user selectes person radiobutton
       And the user enters the "<Name>"
       When the user hits Search
       Then the user should see the details of the person
       When the user clears the textfield
       And the user hits Search
       Then the user should should not find the user
        Examples:
        |Name | 
        |Darth|

Scenario Outline: Searching by pressing the "Enter" Key
       Given The app is open on "localhost"
       Then the user selectes person radiobutton
       And the user enters the "<Name>"
       When the user presses Enter Key
       Then the user should see the details of the person
       Examples:
        |Name | 
        |Darth|

Scenario Outline: Validation for a persons' name in planet section
       Given The app is open on "localhost"
       Then the user selectes person radiobutton
       And the user enters the "<Name>"
       When the user presses Enter Key
       Then the user should see the details of the person
       Then the user selectes planet radiobutton
       And the user hits Search
       Then the user should should not find the user
       Examples:
        |Name | 
        |Luke |

Scenario Outline: Search result for multiple finds
       Given The app is open on "localhost"
       Then the user selectes person radiobutton
       And the user enters the "<Name>"
       When the user presses Enter Key
       Then the user should see the details of the person
       Then the user selectes planet radiobutton
       And the user hits Search
       Then the user should see the details of the planet
       Examples:
        |Name | 
        |LU   |
