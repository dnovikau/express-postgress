module.exports = (sequelize, { Model, DataTypes }) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Group, {
        through: models.UserGroup,
        foreignKey: "user_id",
        as: "groups",
      });
    }
  }
  User.init(
    {
      user_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      login: DataTypes.STRING,
      password: DataTypes.STRING,
      age: DataTypes.INTEGER,
      is_deleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    },
  );
  return User;
};
