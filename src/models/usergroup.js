module.exports = (sequelize, { Model, DataTypes }) => {
  class UserGroup extends Model {
    static associate(models) {
      // define association here
    }
  }
  UserGroup.init(
    {
      user_id: DataTypes.UUID,
      group_id: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "UserGroup",
    },
  );
  return UserGroup;
};
