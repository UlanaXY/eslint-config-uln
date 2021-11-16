eslint-config-uln
================

## Installation
1. Installation

    TypeScript only 
    ```bash
    yarn add -D babel-eslint@~10.1.0 eslint@^7.5.0 eslint-config-uln
    ```
    
    JavaScript
    ```bash
    yarn add -D babel-eslint@~10.1.0 eslint@^7.5.0 eslint-config-uln
    ```
    
2. create/update .eslintrc.js
    * javascript:
    ```js
    module.exports = {
      "extends": [
        "uln"
      ],
      "ignorePatterns": [
      ]
    };

    ```
    * typescript:
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
3. Switch locally to master branch
4. run `yarn run createNewVersion`
5. Select new version
6. after publication is completed make sure that everything is pushed to gitlab
7. merge master to develop(without creating Merge Request)
8. done
