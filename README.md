# Dashboard with Table and Pie Chart Views

## Overview

This project is a single dashboard page built using React, Redux, and Redux-Saga. The dashboard fetches data from a dummy API and displays the data in both table and pie chart formats. Users can switch between the table and pie chart views and filter the data by user and category. The project uses Material UI and Pure CSS  for the UI components and a charting library for data visualization.

## Features

- **Data Fetching**: Uses Redux-Saga to handle side effects and fetch data from the API.
- **Table View**: Displays data in a structured table format.
- **Pie Chart View**: Visualizes data in a pie chart format.
- **View Switching**: Allows users to toggle between table and pie chart views.
- **Filtering**: Filters data by user and category, affecting both views.
- **Responsive Design**: The dashboard is designed to be responsive across various devices.

## Technology Stack

- **React**: Frontend library for building the user interface.
- **Redux**: State management library.
- **Redux-Saga**: Middleware for handling side effects in Redux.
- **Material UI**: UI component library.
- **Charting Library**: Used for creating pie charts (e.g., Recharts, Chart.js, etc.).
- **Axios**: For making API requests.
- **other features**: added light/dark toogle, profile image upload, theme, used Typescript to ensure typesafety

## API

Data is fetched from the following API endpoint: http://52.168.1.54:8080/api/v1/userActivities


Check once the URL I am getting CORS Error(Internal Server Error - 500), so I mocked the JsonData, which given the response in the Postman

