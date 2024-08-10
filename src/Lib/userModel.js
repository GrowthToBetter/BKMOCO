import { Sequelize } from "sequelize";
import db from "./database";

const { DataTypes } = Sequelize;
const User = db.define(
  "data_siswa",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Nama: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    Kelas: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    NoAbsen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Laporan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    BuktiLaporan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Keterangan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    NoTelepon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default User(async () => {
  await db.sync();
})();
