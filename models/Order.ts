import { Model, DataTypes, CreationOptional } from "sequelize";
import Database from "../database/Database";
import { User, Cart } from ".";
import { STATUS } from "./orderStatus";

class Order extends Model {
  declare id: number;
  declare status: STATUS;
  declare userId: number;
  declare cartId: number;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Order.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("PENDING", "COMPLETED", "DECLINED", "RETURNED"),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "carts",
        key: "id",
      },
    },
  },
  {
    modelName: "orders",
    sequelize: Database.getInstance(),
  }
);

export default Order;
