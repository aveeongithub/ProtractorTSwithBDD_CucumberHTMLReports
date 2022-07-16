Feature: Check the Characters in Starwars
    
    Scenario Outline: Search a valid character
       Given The app is open on "localhost"
       Then the user selectes person radiobutton
       And the user enters the "<Name>"
       When the user hits Search
       Then the user should see the details of the person
        Examples:
        |Name          |
        |Luke Skywalker|
        |Leia Organa   |
        |r2            |

    Scenario: Search for an invalid character
        Given The app is open on "localhost"
        Then the user selectes person radiobutton
        And the user enters the an incorrect name
        When the user hits Search
        Then the user should should not find the user