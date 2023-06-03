import express from 'express';
import routerUser from './routes/user.router';
import postRouter from './routes/post.router';

const app = express();
app.use(express.json());

// Rotas user
app.use(routerUser);

// Rotas post
app.use(postRouter);

export default app;