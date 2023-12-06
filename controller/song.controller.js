import Song from "../models/song.model.js";

class SongController {
	constructor() {}
	//hent alle sange
	list = async (req, res) => {
		const result = await Song.findAll({
			limit: 2,
			order: ["title"],
		});
		res.json(result);
	};
	//hent sang detaljer
	get = async (req, res) => {
		const result = await Song.findAll({
			where: { id: req.params.id },
		});
		res.json(...result);
	};
	// opret en sang
	create = async (req, res) => {
		const { title, content, artist_id } = req.body; //destructuring

		if (title && content && artist_id) {
			const restult = await Song.create(req.body);
			res.status(200).send({
				messeage: "Record created successfully",
				newid: restult.id,
			});
		} else {
			res.status(403).send({
				messeage: "wrong parameter values",
			});
		}
	};

	//Opdater sang
	update = async (req, res) => {
		try {
			const { title, content, artist_id, id } = req.body;
			if (title && content && artist_id && id) {
				const model = await Song.update(req.body, { where: { id: id } });
				return res.json({ status: true });
			} else {
				res.status(418).send({
					messeage: "ikke opdateret",
				});
			}
		} catch (error) {
			console.log(error);
			res.status(500).send({
				messeage: "error",
			});
		}
	};

	delete = async (req, res) => {
		try {
			await Song.destroy({ where: { id: req.params.id } });
			res.sendStatus(200);
		} catch (error) {
			res.send(error);
		}
	};
}

export default SongController;
