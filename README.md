# Redux Travel Game
A game using redux to manage state. There will be frequent updtes to project. The aim is to have a fully functional game with animation and visuals.

## Technologies
React, TypeScript,React-toastify, TailwindCSS and Redux


## Steps to download app
1. `Fork` or `clone` repository
2. Enter `npm install` to install all dependencies

## Steps to make a pull request
1. **Fork the Repository**: Click the "Fork" button at the top right of the repository page to create a copy of the repository under your GitHub account.

2. **Clone Your Fork**: Clone the forked repository to your local machine:
```
   git clone <your-fork-url>
```

3. **Create a New Branch**: Navigate to the repository directory and create a new branch for your feature or bug fix:
```
git checkout -b feature-branch
```

4. **Make Changes**: Implement your changes in the codebase.

5. **Commit Your Changes**: Stage and commit your changes with a descriptive message:
```
git add .
git commit -m "Add feature or fix bug"
```

6. **Push to Your Fork**: Push the changes to your forked repository:
```
git push origin feature-branch
```

7. **Create a Pull Request**: Go to the original repository on GitHub, and you should see a prompt to create a pull request. Click “Compare & pull request” and fill out the necessary details.

8. Submit the Pull Request: Review your changes and submit the pull request for review.


Happy coding !!!!!!

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
