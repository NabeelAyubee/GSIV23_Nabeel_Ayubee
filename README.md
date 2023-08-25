
# Project GSIV23_Nabeel_Ayubee  

A react typescript demo project based on movies webapp for all upcoming movies.
Implemented 

## Project Technicalities

- ### Redux Implementation

The project utilizes Redux to efficiently manage the state of the application.

- ### Throttling Search

To enhance user experience and prevent excessive API requests, the search functionality is equipped with throttling. This ensures that API calls for searching movies are made at a controlled rate, avoiding overloading the server and optimizing performance.

- ### Infinite Scrolling

The project employs an infinite scrolling mechanism for an improved user interface. When the user reaches the end of the current list of movies, the application dynamically loads additional content, creating a seamless browsing experience without the need for manual pagination.

- ### Storybook for Common Components

The project has incorporated Storybook, a development environment for UI components. This allows for isolating and testing common components independently, facilitating efficient development and ensuring component reusability and consistency.

- ## ℹ️ Test Cases

Currently, the project does not have test cases implemented as I am not very familiar of the test cases at this point of time.
## Installation

Install the project with yarn.

#### ℹ️ Node Version should be >v18

Clone the project

```bash
    git clone https://github.com/NabeelAyubee/GSIV23_Nabeel_Ayubee.git  
```

Go to the project directory

```bash
    cd GSIV_Nabeel_Ayubee
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn start
```
To run the storybook

```bash
  yarn storybook
```


    
# Documentation

Source code is present under /src folder

### Project Structure

#### Navigate to `/src` folder for code source :

- **components:** This directory contains common components used in the application.

- **components/stories** The file responsible for rendering the Storybook.

- **css:** The global CSS file `index.css` is located here for styling.

- **hooks:** All custom hooks and API function implementations can be found in this directory.

- **pages:** This directory contains the various screens of the application.

- **redux:** Contains the Redux store and reducer implementations for state management.

- **App.tsx:** The main component that acts as the entry point to your application.

- **index.tsx:** The file responsible for rendering the React app.

## API Reference
Took all API reference from https://developer.themoviedb.org/docs/getting-started

Login to the above link and take API KEY which can be used as a factor of Authorization.
 
#### Get all Movie List

```http
  GET /api.themoviedb.org/3/movie/upcoming
```

| Parameter  | Type      | Description          |
| :--------  | :-------  | :--------------------|
| `language` | `string` | **Optional**. en-US |

| Headers           | Type     | Description                         |
| :--------         | :------- | :-------------------------          |
| `Authorization`   | `string` | **Required**. Bearer `YOUR_API_KEY` |

#### Get Movie Details

```http
  GET /api.themoviedb.org/3/movie/{id}
```

| Parameter  | Type      | Description          |
| :--------  | :-------  | :--------------------|
| `language` | `string` | **Optional**. en-US |

| Headers           | Type     | Description                         |
| :--------         | :------- | :-------------------------          |
| `Authorization`   | `string` | **Required**. Bearer `YOUR_API_KEY` |


#### Search Movie

```http
  GET /api.themoviedb.org/3/search/movie
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `query`      | `string` | **Required**. Name of movie |

| Headers           | Type     | Description                         |
| :--------         | :------- | :-------------------------          |
| `Authorization`   | `string` | **Required**. Bearer `YOUR_API_KEY` |

## Demo

https://gsiv23-nabeel-demo.web.app/movies

## Roadmap

- Additional browser support

- Add more integrations


## Tech Stack

React, Redux, Typescript, CSS, Storybook


## Author

- [@NabeelAyubee](https://www.github.com/NabeelAyubee)

