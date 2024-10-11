import * as express from "express";
import * as router from "./router.js";
const app = express();
const port = 3000;


app.use('/aaa', router);


app.listen(port, () => {
    console.log(`Слушаем http://localhost:${port}`); 
});