import * as dotenv from 'dotenv';
dotenv.config();

import path  from 'node:path';
import { fileURLToPath } from 'node:url';

// https://iamwebwiz.medium.com/how-to-fix-dirname-is-not-defined-in-es-module-scope-34d94a86694d
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const env = process.env.NODE_ENV || 'development';


dotenv.config({
    path: path.resolve(__dirname, `${env}.env`)
  });


export const API_KEY_ENV = process.env.API_KEY_ENV;