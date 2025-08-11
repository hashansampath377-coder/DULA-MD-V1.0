# DULA-MD-V1.0
DULA Md V1 In Puverful Whatsapp Bot ⚙️ In Srilanka 🇱🇰 Button NonButton 🔢 Movie Download 🍟📂 More Download Comande 📥 And  200+ More Comande And Custumis Settings And more


![Alt text](https://github.com/PODDAe/DULA-MD-V1.0/blob/main/IMAGES/DULA-MD-LOGO.png?raw=true)






# LINK WITH PHONE NUMBER (SESON ID)
| 🌐 Get Session | [Run this project on Replit](https://replit.com/@camalkaakash2/DULA-MD-V1-WEB-PAIR?v=1) |



# WEB PAIR GITHUB PROJECT (DON'T GO THIS LINK)
| https://github.com/PODDAe/DULA-MD-V1-WEB-PAIR/tree/main |

# FOR FREE BOT DEPLOY WITH GITH HUB







This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node
For more information see: https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs

name: Node.js CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v4
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm install
    - run: npm run start
    - run: npm test

