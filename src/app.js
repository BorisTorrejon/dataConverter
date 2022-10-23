import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import excelRouters from './routes/excelRoutes';

const app = express();



//Middelwares
app.use(cors());
app.use(morgan('env'));
app.use(express.json())

app.use(excelRouters);

export default app;