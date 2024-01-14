# Star Wars Character Explorer

Deployment link: [GitHub Pages](https://nikmaunt.github.io/StarWarsCharactersExplorer/)

## URL Routing Explanation

The '#' symbol in the URL is utilized because of the use of `HashRouter` for GitHub Pages deployment. The '#' in the URL helps in maintaining client-side routing without triggering a full page reload.

## Objective

Build a React application that allows users to explore Star Wars characters using React, Redux, and React Router. The application should have a main page with a list of characters that can be filtered based on various criteria. Additionally, each character should have a clickable link that navigates to a separate page with detailed information.

## Requirements

### Main Page:

- Display a list of all Star Wars characters fetched from the Star Wars API [SWAPI Documentation](https://swapi.dev/documentation).
- Include filter options for:
    - Movies (Select box with movie names)
    - Name (Text input for filtering by name)
    - Gender (Radio buttons for male, female, and other)
    - Mass (Two min/max text inputs for filtering characters within a certain mass range)
- Whenever the user adjusts the filter settings, the character list should instantly update to show characters that meet the selected filters.
- Display clear/reset button to reset all filters.

### Character Details Page:

- Each character in the main list should be clickable.
- Clicking on a character should navigate to a separate page with detailed information about the character.
- Utilize URL-based routing for character details (e.g., /characters/5 for the character with ID 5).
- Integrate additional details into the character details page:
    - Species: [Character Species]
    - Movies: [List of Movies the Character Appeared In]
    - Spaceships: [List of Spaceships Associated with the Character]

### UI/UX:

- Use Redux for state management.
- Employ React Router for navigation between the main page and character details page.
- Choose a UI library of your choice to enhance the visual appeal and ensure a consistent design.
- Ensure that the UI is responsive and works well on both desktop and mobile devices.

## External Libraries

You are allowed to use any external libraries to complete the assignment. 

## Documentation

### Setup Instructions

1. Clone the repository: `git clone https://github.com/Nikmaunt/StarWarsCharactersExplorer`
2. Navigate to the project folder: `cd star-wars-explorer`
3. Install dependencies: `npm install`
4. Run the application: `npm start`


