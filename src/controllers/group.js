const { Group, User, UserGroup } = require("../models");

module.exports = {
  findAll(req, res) {
    return Group.findAll({
      order: [["createdAt", "DESC"]],
    })
      .then((groups) => res.status(200).send(groups))
      .catch((error) => {
        res.status(400).send(error);
      });
  },

  findOne(req, res) {
    return Group.findByPk(req.params.id)
      .then((group) => {
        if (!group) {
          return res.status(404).send({
            message: "Group Not Found",
          });
        }
        return res.status(200).send(group);
      })
      .catch((error) => res.status(400).send(error));
  },

  create(req, res) {
    const { name, permissions } = req.body.group;
    return Group.create({
      name: name,
      permissions: permissions,
    })
      .then((group) => res.status(201).send(group))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Group.findByPk(req.params.id)
      .then((group) => {
        if (!group) {
          return res.status(404).send({
            message: "Group Not Found",
          });
        }
        const { name, permissions } = req.body.group;
        return group
          .update({
            login: req.body.group.name,
          })
          .then((group) => res.status(200).send(group))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  async add(req, res) {
    const { name, permissions, userId } = req.body.group;

    try {
      const group = await Group.create({
        name: name,
        permissions: permissions,
      });
      const user = await User.findByPk(userId);
      const userGroup = await UserGroup.create({
        user_id: user.id,
        group_id: group.id,
      });
      return res.status(200).send(userGroup);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  delete(req, res) {
    return Group.findByPk(req.params.id)
      .then((group) => {
        if (!group) {
          return res.status(400).send({
            message: "Group Not Found",
          });
        }
        return group
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
