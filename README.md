# Golf Caddy App

## Overview

This is a React Native app designed for my local Golf Club. It provides players with helpful advice and information on how to play each hole on the course. In addition to course guidance, users can input and track their scores during a round and use the group organiser to randomly shuffle players into groups for the round. Whether you're a local member or a visiting player, this app is a convenient digital companion to enhance your round.

Here is the link to download the app for android [Link](https://expo.dev/accounts/samscarisbrick/projects/RN-golf-caddy/builds/f05f7854-fa83-4bcc-9ad0-1488314736ac)

![Download Barcode](/docs/readme-images/barcode.png)

![Homescreen Screenshot](/docs/readme-images/home-screenshot.png)

## Content

- [Golf Caddy App](#golf-caddy-app)
  - [Overview](#overview)
  - [Planning](#planning)
  - [User Experience](#user-experience)
    - [The strategy Plane](#the-strategy-plane)
      - [Ideal User](#ideal-user)
      - [Site Goals](#site-goals)
    - [Agile Planning](#agile-planning)
      - [User Stories](#user-stories)
    - [Skeleton Plane](#skeleton-plane)
      - [Wireframes](#wireframes)
    - [The Scope Plane](#the-scope-plane)
    - [The Structure Plane](#the-structure-plane)
      - [Features](#features)
    - [The Surface Plane](#the-surface-plane)
      - [Design](#design)
    - [Use Of Components](#use-of-components)
    - [Technologies Used](#technologies-used)
      - [Languages Used](#languages-used)
    - [Frameworks, Libraries and Dependencies](#frameworks-libraries-and-dependencies)
      - [React Native](#react-native)
      - [React Navigation Bottom Tabs](#react-navigation-bottom-tabs)
      - [React Navigation Native Stack](#react-navigation-native-stack)
      - [React Native Screens](#react-native-screens)
      - [React](#react)
      - [Expo](#expo)
      - [Font Awesome](#fontawesome)
      - [Prettier](#prettier)
    - [Testing](#testing)
  - [Credits](#credits)

## Planning

Planning started by using agile methodologies by delivering small features across the duration of the project. This broke down the build of the project into a lot more manageable parts and was able to select which user stories were more important to the site. The user stories were then used to help create wireframes to see how the user would navigate and use the app.

## User Experience

### The Strategy Plane

The Golf Caddy App was intended for people who play at my local golf course, who would like adivce on how to play the golf course, keep track of their scores and organise the players they have into random groups.

#### The Ideal User

- Someone who plays golf.
- Someone who is playing golf at my local golf club.

#### Site Goals

- Give golfers advice on how to play the golf course.
- Easy way for player to keep track of their scores.
- Easily place players into random groups to play with.

[back to top](#golf-caddy-app)

### Agile Planning

This project was developed using agile methodologies by delivering small features across the duration of the project. This broke down the build of the project into a lot more manageable parts and was able to select which user stories were more important for the app.

It was carried out this way to try ensuring that all core requirements were completed first to give the project a complete feel and to make sure the most important user stories were implemented. When clicked on and opened the user story, the user story was assigned a label "must have", "should have" or "could have" so I would know the importance of the user story.

The kanban board was created using GitHub projects, this helped me be able to see all my user stories and be able to keep track of which ones had been done, to do or in progress.

LINK FOR KANBAN USER STORIES HERE!!!!!!

Each User story was placed into it's own milestone iteration to help schedule the development of the project. These iterations can be set with dates but I did not do this due to fitting in around work and other commitments. In the iteration you can close a user story when finished, this will also keep track of how much is completed.

Milestones: 

MILESTONE SCREENSHOT HERE!!!!

[back to top](#golf-caddy-app)

#### User Stories

The following user stories were completed throughout the development:

LIST ALL USER STORIES HERE!!!!

[back to top](#golf-caddy-app)

### Skeleton Plane

#### Wireframes

Wireframes were used to create a prototype of the project which may change during its development.

**_Home Screen_**

![Homescreen Wireframe](/docs/readme-images/home-screen-wireframe.png)

**_Holes Screen_**

![Holes Screen Wireframe](/docs/readme-images/holes-screen-wireframe.png)

**_Hole Details Screen_**

![Hole Details Wireframe](/docs/readme-images/hole-details-screen-wireframe.png)

**_Scorecard Screen_**

![Scorecard Screen Wireframe](/docs/readme-images/scorecard-screen-wireframe.png)

**_Group Organiser Screen_**

![Groups Screen Wireframe](/docs/readme-images/groups-screen-wireframe.png)

[back to top](#golf-caddy-app)

### The Scope Plane

This project was designed for both android and IOS devices. This app is to only to be operational in portrait.

### The Structure Plane

#### Features

As a user this app has been styled for android and IOS devices but has so far only be published for android devices.

As a user I want to see a clear way of navigating around the app so that I can easily find the relative information I am looking for.

The app has a bottom tab used for navigation, the user can easily see the navigations for each screen at the bottom of the device.

The bottom tab is displayed on all screens.

Homescreen:

![Home Screen](/docs/readme-images/home-screenshot.png)

Holes Screen:

![Holes Screen](/docs/readme-images/holes-screenshot.png)

Hole Details Screen:

![Hole Details Screen](/docs/readme-images/hole-details-screenshot.png)

Scorecard Screen:

![Scorecard Screen](/docs/readme-images/scorecard-screenshot.png)

Groups Screen:

![Groups Screen](/docs/readme-images/groups-screenshot.png)

[back to top](#golf-caddy-app)

### The Surface Plane

#### Design

**_Colour Scheme_**

I opted for a very few choices of colours throughout the app. The same colours have been implemented across the site and are included in the button's styles.

This hopefully makes the site easy and clear to read / use.

The colour palette was created using the coolors website.

![Coolors Screenshot](/docs/reame-images/coolors-screenshot.png)

**_Imagery_**

Font awesome was used to for the sites icons.

[back to top](#golf-caddy-app)

### Use Of Components

**_AnimateGroups.js_**

Used to bring animation to show the user which players are in which groups.

**_EnterPlayerNames.js_**

Used to display a list of text inputs for the users to enter their names to enter into the group shuffler. The number of text inputs displayed, depends on the number players entered by user.

**_GroupedPlayers.js_**

Used to display the and style the group container for the groups being displayed.

**_GroupNumbers.js_**

Used as the text inputs for the user to slect how many players and groups there will be.

**_RandomiseAndGroupPlayer.js_**

Used as the logic which randomises the groups and players.

**_HoleItem.js_**

Used to display the each hole item on the holes screen.

**_PlayerName.js_**

Used as the text input for the user to enter the player names on the scorecard screen.

**_ScorecardHeader.js_**

Used to display the headers across the top of the scorecard.

**_ScorecardPlayerNames.js_**

Used to display and layout the player name inputs on the scorecard screen.

**_ScorecardTableCells.js_**

Used for displaying the the inputs on the scorecard for the user to enter their scores.

**_ScorecardTotal.js_**

Used to display the total scores of the players on the scorecard.

**_Button.js_**

Used to display and style custom buttons.

**_FlagLogo.js_**

Used to create, display and style a flag logo.

**_Header.js_**

Used to display the headers on different screens. 

[back to top](#golf-caddy-app)

### Technnologies Used

#### Languages Used

- React Native

- JSX

- CSS

- JavaScript

### Frameworks, Libraries and Dependencies

#### React Native

React Native is the framework used to build the app, allowing me to create a fully functional mobile app using JavaScript and React.

#### React Navigation Bottom Tabs

This library provides a tab-based navigation bar at the bottom of the screen, allowing users to easily switch between main sections of the app.

#### React NAvigation Native Stack

Used to manage screen transitions using a stack-based navigation system, similar to how pages stack in a typical mobile app.

#### React Native Screens

mproves performance by optimizing screen rendering and memory usage in navigation-heavy apps.

#### Expo

Expo simplifies the development process by providing tools and services to build, test, and deploy React Native apps more easily.

#### Fone Awesome

Google fonts was used to provide the font for the site.

#### Prettier

Prettier is used as code formatting tool which helped me structure my code in the correct way.

[back to top](#golf-caddy-app)

### Testing

I have included details of my testing during and post development in a separate file called [TESTING.md](TESTING.md)

## Credits

- React Native Framework - For being able to use React Native Framework to build my project and all the documentation to help build and set up correctly.

- React Framework - For being able to use React Framework to build my project and all the documentation to help build and set up correctly.

- Expo - For providing me the platform for the development process and helping with the build of the app.

- Font Awesome - For Providing the icons used throughout this project.

- Google - For providing images for the golf course.

[back to top](#golf-caddy-app)




