import { sequelize } from "../config/db.sequelize.js";
import { Sequelize, DataTypes, Model } from "sequelize";

class Song extends Model {}

Song.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: "Untitled",
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		artist_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "Song",
		underscored: true, // Brug underscores istedet for standarden CamelCase
		freezeTableName: true, // Brug denne hvis du vil undgå table names i flertal tabellen
		timestamps: false, // Undgå både createdAt og updatedAt felter
	}
);

export default Song;
