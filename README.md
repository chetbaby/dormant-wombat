This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

### The usual:

`yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

*NOTE:* for this exercise I've included the `.env` file with the API key, but this would not usually be in the repo.

## Stack
- Create React App w/ Redux Toolkit
- Styled Components
- Axios
- Redux Saga
- React Infinite Scroll Component
- React Rating Stars Component
- Eslint/Prettier

## Challenges + Solutions

### Debouncing the request

Since there's no submit button and the search is expected to return while typing. I decided to use `Redux Saga` to implement a `delay` while using the `takeLatest` function for the watcher. Sagas were already setup so this was easy to implement.

### Incomplete data

The API returned some records without a `poster_path` and that led to broken image links. I found a suitable placeholder image and modified my `Image` component to default to the placeholder `url` in the event that there was no `poster_path`. Initially I also used `date-fns` to format the date, but this would occasionally return an `invalid date object` error. Since what was being returned was a simple string, I resorted to using string manipulation to display the year instead.

### Paginated Requests

I had some issues implementing the `infinite scroll` component, because my function wasn't delivering the right payload. I initially had a separate function for sending requests after the first one was sent. This overcommplicated things. I refactored my search movies function instead by separating out a `setQuery` function to handle the input separately. I then just used a `handleSearch` function declared in the `app` component to use them both in the `onChange`.

## Known Issues
- There is a bug that occurs when the user hits space in the input field and nothing else. The request is made with an empty query param and sends back an error. Should implement a minimum character length to gate requests.
- The layout is a bit large on purpose for the sake of seeing the images better, but I would probably shrink this down in production.

## Future Improvements

- Include more tests and implement `propTypes` in each component.
- User testing and bugfixing cycles.
- Graceful error handling. Right now I just display `error` on the screen.
- Focus the `input` field on mount.
- Better layout design & desktop view.
- Run an accessibility and lighthouse audit.
- Pruning code/dirs/libs and refactoring components.
- More features! Hover state for the image, details view, submit rating, animation effects, better loader...etc.
