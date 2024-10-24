import express from 'express';
import { routerImpresoras } from './routes/index.js';

const app = express();

app.use(express.json());

routerImpresoras(app)

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});


