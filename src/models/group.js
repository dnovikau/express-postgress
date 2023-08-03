module.exports = (sequelize, { Model, DataTypes }) => {
  class Group extends Model {
    static associate(models) {
      Group.belongsToMany(models.User, {
        through: models.UserGroup,
        foreignKey: "group_id",
        as: "users",
      });
    }
  }
  Group.init(
    {
      group_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: DataTypes.STRING,
      permissions: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Group",
    },
  );
  return Group;
};
