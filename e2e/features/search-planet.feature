Feature: Check the Planet in Starwars
    
    Scenario Outline: Search a valid Planet
       Given The app is open on "localhost"
       Then the user selectes planet radiobutton
       And the user enters the "<Name>"
       When the user hits Search
       Then the user should see the details of the planet
        Examples:
        |Name          |
        |Hoth          |
        |Alderaan      |

    Scenario: Search for an invalid character
        Given The app is open on "localhost"
        Then the user selectes planet radiobutton
        And the user enters the an incorrect name
        When the user hits Search
        Then the user should should not find the planet