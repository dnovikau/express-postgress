const User = require("../models").User;
const Group = require("../models").Group;
const Service = require("../services").UserService;
const debug = require("debug")("app:handler");

module.exports = {
  findAll(req, res) {
    debug(`Method name "GET": ${req.params}`);
    return User.findAll({
      include: [
        {
          model: Group,
          as: "groups",
        },
      ],
      order: [["createdAt", "DESC"]],
    })
      .then((users) => res.status(200).send(users))
      .catch((error) => {
        res.status(400).send(error);
      });
  },

  findOne(req, res) {
    return Service.findOne(req, res);
  },

  create(req, res) {
    const { name, password, age } = req.body.user;
    return User.create({
      login: name,
      password: password,
      age: age,
      is_deleted: false,
    })
      .then((user) => res.status(201).send(user))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return User.findByPk(req.params.id)
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: "User Not Found",
          });
        }
        const { id, name, password, age, isDeleted } = req.body.user;
        return user
          .update({
            user_id: id,
            login: name,
            password: password,
            age: age,
            is_deleted: isDeleted,
          })
          .then((user) => res.status(200).send(user))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return User.findByPk(req.params.id)
      .then((user) => {
        if (!user) {
          return res.status(400).send({
            message: "User Not Found",
          });
        }
        return user
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
