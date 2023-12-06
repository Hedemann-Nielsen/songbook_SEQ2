import express from "express";
import { sequelize } from "../config/db.sequelize.js";

//Modeller der skal oprettes når /init kører fra Postman
import Song from "../models/song.model.js";
import Artist from "../models/artist.model.js";

const router = express.Router();

router.get("/init", async (req, res) => {
	try {
		await sequelize.sync();
		res.sendStatus(200);
	} catch (error) {
		res.send(error);
	}
});

export { router as InitRouter };
