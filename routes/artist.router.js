import express from "express";
import ArtistController from "../controller/artist.controller.js";
import { sequelize } from "../config/db.sequelize.js";

const router = express.Router();
const controller = new ArtistController();

router.get("/api/artist", (req, res) => {
	controller.list(req, res);
});
router.get("/api/artist/:id([0-9]*)", (req, res) => {
	controller.get(req, res);
});

router.post("/api/artist", (req, res) => {
	controller.create(req, res);
});
router.put("/api/artist", (req, res) => {
	controller.update(req, res);
});
router.delete("/api/artist/:id([0-9]*)", (req, res) => {
	controller.delete(req, res);
});

export { router as ArtistRouter };
