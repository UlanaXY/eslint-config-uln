eslint-config-cw
================

## Installation
1. Installation


    JavaScript
    ```bash
    yarn add -D babel-eslint eslint https://gitlab.com/CommonWombat_Team/Public-Projects/cw-internal-eslintConfigCw.git
    # npm install -D babel-eslint eslint https://gitlab.com/CommonWombat_Team/Public-Projects/cw-internal-eslintConfigCw.git
    ```

    
    TypeScript only 
    ```bash
    yarn add -D babel-eslint eslint @typescript-eslint/eslint-plugin@2.8.0 @typescript-eslint/parser@2.8.0 https://gitlab.com/CommonWombat_Team/Public-Projects/cw-internal-eslintConfigCw.git
    # npm install -D babel-eslint eslint @typescript-eslint/eslint-plugin@2.8.0 @typescript-eslint/parser@2.8.0 https://gitlab.com/CommonWombat_Team/Public-Projects/cw-internal-eslintConfigCw.git

    ```
    
2. create/update .eslintrc.js
    * javascript:
    ```JSON
    {
      "extends": [
        "cw"
      ]
    };

    ```
    * typescript:
    ```JSON
    {
      "extends": [
        "cw/typescript"
      ]
    };

    ```