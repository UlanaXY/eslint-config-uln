eslint-config-uln
================

## Installation
1. Installation
    ```bash
    yarn add -D eslint@^8.57.0 eslint-config-uln
    ```
2. create/update eslint.config.mjs
    ```js
    import ulnConfig from 'eslint-config-uln';
   
   
    /** @type {import('eslint').Linter.Config[]} */
    export default [
      ...ulnConfig,
      {
        languageOptions: {
          parserOptions: {
            project: true,
            tsconfigRootDir: import.meta.dirname,
          },
        },
      },
    ]
    ```
3. Add script to package.json 
    ```json
    "scripts": {
      "lint:js": "eslint ./src --max-warnings=0",
    }  
    ```
   
## Publishing
1. Be repo Maintainer.
2. Merging branch develop to master via Merge Request.
3. Switch locally to main branch
4. run `npm publish`
5. after publication is completed make sure that everything is pushed to git
6. merge main to develop
7. done
