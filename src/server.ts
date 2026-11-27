import app from "./app";
import config from "./config";
const port = config.port


const startServer = () => {

    app.listen(port, () => {
        console.log(`The Server is running on port ${port} !!`);
    })
}

startServer()

