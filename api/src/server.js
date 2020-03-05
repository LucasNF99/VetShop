import app from './app';
import env from './config/dotenv';

const port = env('PORT');

app.listen(port, console.log(`A aplicação está rodando na porta ${port}`));