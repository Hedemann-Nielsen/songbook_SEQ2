import express from "express";
import dotenv from "dotenv";
import { InitRouter } from "./routes/init.sequelize.router.js";
import { SongRouter } from "./routes/song.router.js";
import { ArtistRouter } from "./routes/artist.router.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// Udvider app i index.js så vi kan læse form body data
app.use(express.urlencoded({ extended: true }));

// app.use(router);
app.use(InitRouter, SongRouter, ArtistRouter);

app.listen(port, () => {
	console.log(`server køre med port http://localhost:${port}`);
});
