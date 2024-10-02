import express from 'express';
import baseRoutes from './routes/index';

const app = express();
const PORT = 1245;

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.use('', baseRoutes);
app.use('/students', studentRoutes);

app.listen(PORT, () => {
    process.stdout.write('...');
});

export default app;
