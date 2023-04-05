# TEXT-EDITOR_Progressive_Web_App

## Description

This is "Just another text editor" that runs in the browser. This app is a single-page application that meets the Progressive Web Applications (PWA) criteria. Additionally, it features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application can also function offline.To build this text editor, I started with an existing application and implemented methods for getting and storing data to an IndexedDB database. I use a package called `idb`, which is a lightweight wrapper around the IndexedDB API. It features a number of methods that are useful for storing and retrieving data, and is used by companies like Google and Mozilla.

My motivation was to practice the knowlege I've got on Progressive Web Applications(PWA), which blend the benefits of a traditional browser experience with those of a mobile application. PWAs use the Service Worker and Cache APIs to cache assets and API responses, ensuring that the application will continue to work without an internet connection.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

The application deployed to Heroku. Use this link to open the app: https://whispering-beach-05497.herokuapp.com/
The following image demonstrate the view of the app:
![Screenshot_JATE_1](https://user-images.githubusercontent.com/116528749/229957500-840461c3-6ce5-4bdd-b25b-4752eada7157.png)

When open, click on the `Install!` button to download this app as an icon to your desktop.

To install this application from repo to your machine, clone the code. You will see  a client server folder structure. Run `npm install` to install all the packages used in that app, then run `npm run start` from the root directory. You will find that the application should start up the backend and serve the client, and JavaScript files have been bundled using webpack. WHEN you open the text editor you can find that IndexedDB has immediately created a database storage, so when you enter content and subsequently click off of the DOM window, the content in the text editor is been saved with IndexedDB.

The following image shows the application's IndexedDB storage:
![Screenshot 2023-04-04 at 6 27 03 PM (2)](https://user-images.githubusercontent.com/116528749/229957868-2cfff03a-827c-4c4c-93da-57372c6f4b52.png)

## Usage

Create notes or code snippets with or without an internet connection, so you can reliably retrieve them for later use.

## Credits

To build this editor I used starter code: https://github.com/coding-boot-camp/cautious-meme


## License
  
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
  (https://opensource.org/licenses/MIT)

## Tests

N/A

## Questions

My GitHub profile: https://github.com/LenaChe2022

With additional questions contact me by email:
lenache2022@gmail.com
