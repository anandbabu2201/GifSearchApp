This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. This app is developed using React & Redux

     I have used Redux for state management across the app.

2. The functionality of this app is user will be able to search gif's and also user can get Random Gif based on the text entered in input box or can get any random GIF without any text . Also user can get Trending Gif's on clicking on Trending button.

3. Structure of this app
  1. I have created store folder to create the initital store.
  2. Created reducer folder to capture the actions and perfrom on the state.
  3. Action folder . It has constanst as well async calls to API's basing on the user actions the call will trigger and will dispatch actions to reducer.
  4. Component folder .The component folder has 3 components
      1. searchbar comopnent --- This is the main component to interact with the user actions like searching Gif and getting random gif, Trending gif's . I have created this thing as single component
      2. Gif component - it acts as child component to GifList Component it will take props from Girlist comonent and render the Gif's.
      3. GifList component it will list of data coming from the API /sing random object and pass it to the children component Gif. Basically Giflist is container to render the gif.
  " I have designed this way to simplify and we can resuse the componenents in other application as well."
  5. I have added test cases __test__ folder .

Highlihts :

1. I have implemented infinity scrolling for this app .
2. Added debounce technique to stop multiple calls on search. while user typing the text i am not doing calls immediately i am waiting until user stop typing then doing API call.
3. It is responsive across all the devices .
4. Finallly I have made this app as PWA .


Instructions to run the app : -

1. Download the Zip file and enter follwing commands

 ### npm install

 to install the dependencies to run the app .

 ### `npm start`

 it will run the app in development mode
 Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch

### 'npm test -- --coverage'

It will give the test coverage for the components .


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
App is ready to be deployed! on your own choice of environments.

