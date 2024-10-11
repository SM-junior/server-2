import app from './app'
import config from './app/config';
import mongoose from 'mongoose';
const PORT = 3000;


async function main() {
    try {
        await mongoose.connect(config.database_url as string);
        app.listen(config.port, () => {
            console.log(`Running from server.ts ${config.port}`)
        })
    } catch (error) {
        console.log(error);
    }
}

main()

