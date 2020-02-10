# TypeScript, Next.js, react.js, jest, Enzyme, React Lazy Loading, SASS, TSLint example

This is a really simple project that shows the usage of Next.js with TypeScript on top of Jest, React LazyLoad, Enzyme and React.js with context API, for simplicity used isomorphic_ufetch.

## Features

1. This project demonstrate server side redndering and client side renering of the page.
2. Used React 16 context API just to relatively to store config path to share among components. (just for demonstration).
3. Since two API end point was there does not require to store data in Context API but still I have store it to extend for future use.
4. Dynamic Routing in Next.JS
5. Imagin lazy loading with Blur effect.
6. Responsive layout using latest Grid, flex properties of CSS
7. used Sass for CSS styling.
8. Custom font from Google font.
9. used isomorphic-unfetch rather than Axios becuase this project small enough does not require heavy package like Axios.
10. TSLinting is also applied.
11. Used Husky package which can prevent bad git commit, git push, It will check TSlint bebore git commit and push

## Installation

```bash
yarn install
```

To test the project 

```bash
yarn test
```

To Run the project 

```bash
yarn dev
```




## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
