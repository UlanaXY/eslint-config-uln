eslint-config-wombat
================

## Installation
1. Installation


    JavaScript
    ```bash
    yarn add -D babel-eslint eslint eslint-config-wombat
    # npm install -D babel-eslint eslint eslint-config-wombat
    ```

    
    TypeScript only 
    ```bash
    yarn add -D babel-eslint eslint @typescript-eslint/eslint-plugin@2.8.0 @typescript-eslint/parser@2.8.0 eslint-config-wombat
    # npm install -D babel-eslint eslint @typescript-eslint/eslint-plugin@2.8.0 @typescript-eslint/parser@2.8.0 eslint-config-wombat

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
