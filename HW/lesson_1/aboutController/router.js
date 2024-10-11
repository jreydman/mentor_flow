import * as express from "express";
import * as homeController from "./controllers.js";
const router = express.Router();


router.get("/", homeController.getHomeData);
router.post("/", homeController.addHomeData);
router.put("/", homeController.updateHomeData);
router.delete("/", homeController.deleteHomeData);

export {router};

