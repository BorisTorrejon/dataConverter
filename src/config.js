import {config as dotenv} from 'dotenv';
dotenv();

export const config = {
    port: process.env.PORT || 3000
};