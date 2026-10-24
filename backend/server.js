import express from 'express';
import jwt from 'jsonwebtoken';
import bcryt from 'bcrypt';
import cors from 'cors';

const app= express();

app.use(cors()); //supports cross origin request
app.use(express.json());  //support json body parsing


//fallback secret key (use an environment variable in production)
