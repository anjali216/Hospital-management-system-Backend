import express from "express";
import { getAllMessages, sendMessage } from "../controller/messageController.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/getall", isAdminAuthenticated, getAllMessages);

// router.put("/update/:id", isAdminAuthenticated, updateMessage);
// router.delete("/delete/:id", isAdminAuthenticated, deleteMessage);

export default router;