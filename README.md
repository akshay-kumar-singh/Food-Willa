# Restaurant Food Application

> **Note**: This project uses Swiggy's real API to fetch live restaurant data. As Swiggy does not officially support open API access, you might encounter **CORS issues** or **blocked requests**. To resolve these:

1. **Enable CORS**: Use the [CORS Proxy](https://corsproxy.io) with Swiggy API URLs (as done in this project).
2. **Use a VPN**: Depending on your location, Swiggy may restrict access, so a VPN might be required.
3. **API Structure**: Swiggy's API structure may change without notice, potentially affecting data fetching. Please verify the API structure or adjust paths as needed.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Component Structure](#component-structure)
- [Technologies Used](#technologies-used)
- [Testing Overview](#testing-overview)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

The **Restaurant Finder Application** is designed to provide an intuitive and engaging experience for users looking to explore local dining options. This app uses **Swiggy's real API** to fetch live data, including restaurant details, ratings, menu items, and more.

---

## Features

- **Live Data Fetching**: Uses Swiggy's real API to fetch restaurant data, including live information about ratings, delivery times, cuisine types, and cost.
- **Search Functionality**: Quickly search for restaurants by name or cuisine.
- **Restaurant Details**: View detailed information about each restaurant, including ratings, location, and available menu items.
- **Responsive UI**: Fully responsive design optimized for both mobile and desktop views.
- **Favorites**: Ability to filter and view top-rated restaurants.

---

## Component Structure

The application is structured as follows:

### Header
- **Logo**: Displays the logo of the app.
- **NavItems**: Contains links to navigate to different sections of the app.

### Body
- **Search**: Input field to search for restaurants by name or cuisine.
- **RestaurantContainer**: Displays a list of restaurants based on the search.
- **RestaurantCard**: Displays each restaurant's image, name, cuisine, star rating, and delivery time.

### Footer
- **Copyright**: Displays copyright information.
- **Links**: Contains useful links (e.g., about, contact).
- **Address**: Displays the physical address of the app creator.
- **Contact**: Provides contact information.

---

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Swiggy API**: Used to fetch live restaurant data.
- **React Router**: For routing between pages.
- **Tailwind CSS**: For styling the components.
- **Jest & React Testing Library**: For unit and integration testing.
- **Parcel**: For bundling and serving the application.

---

## Testing Overview

### Types of Testing

1. **Unit Testing**: Testing individual components in isolation.
2. **Integration Testing**: Testing the interaction between components.
3. **End-to-End Testing**: Testing the application as a whole from a user’s perspective.

---

## Setup Testing in our Application

1. Install React Testing Library (RTL)
2. Install Jest
3. Install Babel Dependencies
4. Configure babel by creating a `babel.config.js` file
5. Configure Parcel by creating a `.parcelrc` file to disable default Babel Transpilation
6. Initialize Jest with `npx jest --init`
7. Install `jsdom` library
8. Install `@babel/preset-react` to support JSX in tests
9. Add `@babel/preset-react` inside Babel configuration
10. Install `@testing-library/jest-dom` for extended DOM matchers

---
