import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dataRoutes from './routes/data.route.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('/api/v1/data', dataRoutes);
app.use(express.static(path.join(__dirname, '../../client/dist')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
