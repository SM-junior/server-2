import app from './app'
import config from './app/config';
import mongoose from 'mongoose';
const PORT = 3000;

main().catch(err => console.log(err));

async function main() {
    try {
        await mongoose.connect(config.database_url as string);
        app.listen(config.port, () => {
            console.log(`Running from server.ts ${PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
}

