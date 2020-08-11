eslint-config-wombat
================

## Installation
1. Installation

    TypeScript only 
    ```bash
    yarn add -D babel-eslint@~10.0.3 eslint@^6.6.0 @typescript-eslint/eslint-plugin@^3.9.0 @typescript-eslint/parser^3.9.0 eslint-config-wombat
    ```
    
    JavaScript
    ```bash
    yarn add -D babel-eslint@~10.0.3 eslint@^6.6.0 eslint-config-wombat
    ```
    
2. create/update .eslintrc.js
    * javascript:
    ```JS
    module.exports = {
      "extends": [
        "wombat"
      ]
    };

    ```
    * typescript:
    ```JS
    module.exports = {
      "extends": [
        "wombat/typescript"
      ]
    };

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
