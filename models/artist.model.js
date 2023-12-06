import { sequelize } from "../config/db.sequelize.js";
import { DataTypes, Model } from "sequelize";

class Artist extends Model {}

Artist.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: "Untitled",
		},
	},
	{
		sequelize,
		modelName: "Artist",
		underscored: true, // Brug underscores istedet for standarden CamelCase
		freezeTableName: true, // Brug denne hvis du vil undgå table names i flertal tabellen
		timestamps: false, // Undgå både createdAt og updatedAt felter
	}
);

export default Artist;
