# Golf Caddy App Testing

## Testing Overview

During the development of this project, numerous testing was carried out by myself and others.

## Contents

- [Golf Caddy App Testing](#golf-caddy-app-testing)
  - [Testing Overview](#testing-overview)
  - [Manual Testing](#manual-testing)

## Manual Testing

Manual testing was carried out throughout the project, making sure user stories were working successfully and the site was functioning correctly.

| Feature | Expected Outcome | Testing Performed | Result | Pass / Fail |
| --- | --- | --- | --- | --- |
|`Homescreen`|
| When user first loads app. | When the app first loads, the user is presented with a clear homescreen displaying information about Abergavenny Golf Caddy.. | Loaded the app. | Homescreen loads and I am presented with a clear homescreen. | Pass |
| Homescreen has correct title. | When homescreen is on display, the title for that screen should say home. | Went to the homescreen. | Homescreen title is home. | Pass |
| Bottom Tabs Present on homescreen. | When on homescreen, bottom tabs are present to allow the user to navigate across app. | Went to homescreen. | Bottom tab was present. | Pass |
|`Holes Screen`|
| User able to load holes screen. | When the user clicks on the holes tab, they are redirected to the holes screen. | Loaded the app and clicked on the holes tab. | I am taken to the holes screen. | Pass |
| Holes screen has correct title. | When holes screen is on display, the title for that screen should say holes. | Went to the holes screen. | Holes screen title is holes. | Pass |
| Bottom Tabs Present on holes screen. | When on holes screen, bottom tabs are present to allow the user to navigate across app. | Went to holes screen. | Bottom tab was present. | Pass |
| Scrolling works on holes screen. | When on holes screen, I am able to scroll on the screen so I am able to see the full list of all the holes. | Went to holes screen and tried scrolling to view all holes. | I was able to scroll and view all holes easily. | Pass |
| Hole details page link. | When on the holes screen, if I click on any of the individual holes, I am navigated to that specific hole details screen where I can find more information about that hole. | Went to holes screen and clicked on different holes. | Each time I clicked on a hole, I was navigated to that particular hole details page. | Pass |
|`Hole Details Screen`|
| Hole details page link. | When on the holes screen, if I click on any of the individual holes, I am navigated to that specific hole details screen where I can find more information about that hole. | Went to holes screen and clicked on different holes. | Each time I clicked on a hole, I was navigated to that particular hole details page. | Pass |
| Hole details screen has correct title. | When hole details screen is on display, the title for that screen should say hole details. | Went to the hole details screen. | Hole detail screen title is hole details. | Pass |
| Hole details screen has back arrow. | Wehn on the hole details screen, in the title there should be a arrow back icon, which when clicked will take you back to the holes screen. | Went to hole details screen. | Back arrow was on display and when pressed took be back to the holes screen. | Pass |
| Bottom Tabs Present on hole details screen. | When on hole details screen, bottom tabs are present to allow the user to navigate across app. | Went to hole details screen. | Bottom tab was present. | Pass |
| Scrolling works on hole detail screen. | When on hole details screen, I am able to scroll on the screen so I am able to see all the information provided for that hole. | Went to hole detail screen and tried scrolling to view all information. | I was able to scroll and view all hole details easily. | Pass |
|`Scorecard Screen`|
| User able to load scorecard screen. | When the user clicks on the scorecard tab, they are redirected to the scorecard screen. | Loaded the app and clicked on the scorecard tab. | I am taken to the scorecard screen. | Pass |
| Scorecard screen has correct title. | When scorecard screen is on display, the title for that screen should say scorecard. | Went to the scorecard screen. | Scorecard screen title is scorecard. | Pass |
| Bottom Tabs Present on scorecard screen. | When on scorecard screen, bottom tabs are present to allow the user to navigate across app. | Went to scorecard screen. | Bottom tab was present. | Pass |
| Scrolling works on scorecard screen. | When on scorecard screen, I am able to scroll on the screen so I am able to see all of the screen information and scorecard. | Went to scorecard screen and tried scrolling to view all information. | I was able to scroll and view all the scorecard easily. | Pass |
| Able to type in player names | When on the scorecard screen, I am able to type in the player names that will allow the user to see who each player is on the scorecard. | Went to scorecard screen and tried typing in each of the player names. | I was successfully able to type in each players name. | Pass |
| Can't enter players score if name not provided. | On the scorecard, the user won't be able to enter that particular player numbers score if they have not entered the name in the input above. | Went to scorecard screen and tried entering scores with and without entering players names. | If I had entered the players name, I was successfully able to enter the players score. If name was not entered, the was no input to enter the scores. | Pass |
| Total scores add up. | Once all of the indiviual players scores have been entered in the scorecard, the players score will automatically be displayed in the total section of the scorecard. | Filled out all each indiviual players scores. | Once all scores for the individual player were entered, their total score was displayed. | Pass |
| Reset scorecard. | When on the scorecard screen and the user clicks the "reset scorecard" button, all players names and scores will be reset back to default. | Filled out all players names and scores, then pressed the reset button. | All names and scores were set back to the default values. | Pass |
| Reset Alert. | When a user clicks on the "reset scorecard" button, an alert will appear, asking the user if the are sure they want to reset player names and scores. If the user presses yes, the names and scores will be reset and if they press cancel, the values will remain as they were. | Filled out players names and scores and pressed the reset button. | Alert successfully appears and if i click yes, the scores and names are reset and if I click cancel, the scores and names remain as they were. | Pass |
|`Groups Screen`|
| User able to load groups screen. | When the user clicks on the groups tab, they are redirected to the groups screen. | Loaded the app and clicked on the groups tab. | I am taken to the groups screen. | Pass |
| Groups screen has correct title. | When groups screen is on display, the title for that screen should say groups. | Went to the groups screen. | Groups screen title is groups. | Pass |
| Bottom Tabs Present on groups screen. | When on groups screen, bottom tabs are present to allow the user to navigate across app. | Went to groups screen. | Bottom tab was present. | Pass |
| Scrolling works on groups screen. | When on groups screen, I am able to scroll on the screen so I am able to see all of the screen information and the groups. | Went to groups screen and tried scrolling to view all information. | I was able to scroll and view all the groups easily. | Pass |
| Able to type in player numbers | When on the groups screen, I am able to type in the player numbers. | Went to groups screen and tried typing in the number of players. | I was successfully able to type in the number of players. | Pass |
| Able to type in the number of groups | When on the groups screen, I am able to type in the number of groups. | Went to groups screen and tried typing in the number of groups. | I was successfully able to type in the number of groups. | Pass |
| Unable to type in 0 or not whole numbers. | When on the groups screen, the user is unable to use the value 0 or a non whole number went entering the number of players or number of groups. | Went to groups screen and tried typing in 0 and non whole numbers. | Each time it did not accept these values. | Pass |
| Unable to have number of groups higher than number of players. | When on the groups screen, the user is unable to use a higher number in the number groups than what is in the number of players. | Went to groups screen and tried entering a higher number for number groups than number of players. | Each time I get and alert message informing me I cannot have groups exceed total players. | Pass |
| Unable to enter values which leaves random groups to have more than four players. | When on the groups screen, the user is unable to enter values which would mean when the groups would have more than four people in a group. | Went to groups scrren and tried entering values which would make the groups have more than four players. | Each time I get and alert message informing me each group must not have no more thatn four players. | Pass |
| Player name inputs are dispalyed. | Once the number of players and number of groups are filled out correctly, inputs to enter the player names will appear and this should be the exact number of number of players entered. | Filled out number of players and groups correctly. | The correct number of player name inputs were now on display and was able to fill these out. | Pass |
| PLayers and groups are shuffled. | Once number of players, number of groups and all players names are filled out correctly. The user clicks the randomise button, the players are split into the groups at random and as evenly as possible. | Filled out all different names, different number of groups and players and clicked randomise. | Each time the groups were always displayed at random, with the correct player names and correct number of groups. | Pass |
| Unable to randomise groups if names not entered. | If a user goes to randomise the groups without entering all the players names, the app will not randomise the groups and instead display and alert message informing all players names must be entered.| Tried randomising the groups without entering all the players names. | Each time I tried to randomise the groups without entering all players names, an alert message appears, telling me to enter all of the players names. | Pass |
| Reset group information. | When on the groups screen and the user clicks the "reset" button, all players names, number of players, number of groups and the random groups will be reset back to default. | Filled out all players names number of groups, number of players and waited for groups to be shuffled. Pressed the reset button. | All information was reset back to default values. This button also worked if only some of the information was filled out. | Pass |

[back to top](#golf-caddy-app-testing)



