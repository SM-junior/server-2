import express, { Application, Request, Response } from "express"
const app: Application = express()
import cors from 'cors'

//parser
app.use(express.json());
app.use(cors())


app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a)
})

export default app;


/*
server creation is typescript with express, typescript(as dependency), mongoose, cors, dotenv

installation and folder structure
-->create a folder
-->open with vs code
-->npm init -y (create server)
-->create src and dist folder in root directory
-->create app.ts and server.ts file under src folder
-->create app folder under src folder
-->create config folder under app folder
-->create index.ts file under config folder
-->install express, typescript(as dependency), mongoose, cors, dotenv
-->tsc --init (create tsconfig.json file)
-->open tsconfig.json file
-->"rootDir":"./src"
-->"outDir":"./dist" and save
-->npm i nodemon
-->on package.json file, add
"build": "tsc",
"start:dev": "nodemon ./dist/server.js", in scripts objects
-->create .env file on root directory
-->import mongodb uri link and set username, password and PORT on .env file and save it
now follow index.ts, app.ts, server.ts file

to run server on local machine
1.npm run build
2.npm run start:dev




explain script object in package.json file
"scripts": {
    "build": "tsc",                                       -->npm run build OR tsc
    "start:dev": "nodemon ./dist/server.js",              -->npm run start:dev OR nodemon ./dist/server.js
    "lint": "eslint src --ignore-pattern .eslintignore",  -->npm run lint OR npx eslint src
    "lint:fix": "npx eslint src --fix",                     -->npm run lint:fix OR npx eslint src --fix
    "test": "echo \"Error: no test specified\" && exit 1" 
  },



*/