eslint-config-uln
================

## Installation
1. Installation
    ```bash
    yarn add -D babel-eslint@~10.1.0 eslint@^7.5.0 eslint-config-uln
    ```
2. create/update .eslintrc.js
    ```js
    module.exports = {
      "extends": [
        "uln/typescript"
      ],
      "parserOptions": {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      "ignorePatterns": [
      ]
    };
    ```
3. Add script to package.json 
    ```json
    "scripts": {
      "lint:js": "eslint ./src --ext .js,.jsx,.ts,.tsx --max-warnings=0",
    }  
    ```
   
## Publishing
1. Be repo Maintainer.
2. Merging branch develop to master via Merge Request.
3. Switch locally to main branch
4. run `npm publish`
6. after publication is completed make sure that everything is pushed to git
8. merge main to develop
9. done
