"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const port = 3000;
//parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Running from app.ts');
});
exports.default = app;
/*
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
-->on package.json file add "build": "tsc","start:dev": "nodemon dist/server.js", in scripts objects
-->create .env file on root directory
-->import mongodb uri link and set username, password and PORT on .env file and save it
now follow index.ts, app.ts, server.ts file



*/ 
