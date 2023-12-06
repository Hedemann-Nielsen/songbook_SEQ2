import Artist from "../models/artist.model.js";

class ArtistController {
	constructor() {}
	//hent alle sange
	list = async (req, res) => {
		const result = await Artist.findAll({
			limit: 2,
			order: ["name"],
		});
		res.json(result);
	};
	//hent sang detaljer
	get = async (req, res) => {
		const result = await Artist.findAll({
			where: { id: req.params.id },
		});
		res.json(...result);
	};
	// opret en sang
	create = async (req, res) => {
		const { name } = req.body; //destructuring

		if (name) {
			const restult = await Artist.create(req.body);
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
			const { name, id } = req.body;
			if (name && id) {
				const model = await Artist.update(req.body, { where: { id: id } });
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
			await Artist.destroy({ where: { id: req.params.id } });
			res.sendStatus(200);
		} catch (error) {
			res.send(error);
		}
	};
}

export default ArtistController;
