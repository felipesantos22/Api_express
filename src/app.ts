import express from 'express';
import routerUser from './routes/user.router';

const app = express();
app.use(express.json());

// Rotas user
app.use(routerUser);

export default app;