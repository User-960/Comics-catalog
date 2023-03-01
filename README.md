# Comics-catalog
The main purpose of the project is to write the logic for sending a GET request to Marvel API by using library axios. The project itself is a Marvel comic book catalog. When you click on a comic, a modal window appears showing the characters from that comic.
The Comics-catalog is built on the Webpack.

What is used:

- Programming languages: HTML, CSS, JavaScript;
- Bundler: Webpack;
- Preprocessor: SCSS;
- Libraries: axios, CSS-modules, Babel, ESLint;

To install packages, use the command
```shell
npm install
```
***
\* Before start project you need to make file `.env` in root of project and copy from file `.env.example` variables with meanings in new file. Or you can write your own meanings for variables in new file `.env`.

## Commands

### Launching a development server
```shell
npm run start
```

### Building a project without optimization
```shell
npm run build-dev
```

### Building a project with optimization
```shell
npm run build-prod
```

### Cleaning up the dist folder
```shell
npm run clear
```

### Checking the src folder for an error according to the set of rules
```shell
npm run eslint
```