import {Router} from "express";
import {index} from "../controllers/index_controller.mjs";


const router = Router();

router.get("/",index)


export default router;