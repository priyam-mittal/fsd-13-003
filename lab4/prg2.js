import express from 'express';
import path from 'path';
import{ fileURLToPath } from 'node:url';


const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);




app.get('/', (req, res) => {
    res.sendFile(path.join(dirname,"htmlpages", 'index.html'))
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(dirname,"htmlpages", 'about.html'))
});
app.use((req, res) => {
    res.status(404).send("Page not found");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

