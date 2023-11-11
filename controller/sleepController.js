const Sleep = require("../models/Sleep");
const { Op } = require("@sequelize/core");
const Joi = require("joi");

const schema = Joi.object().keys({
  date: Joi.date().required(),
  sleep_time: Joi.string().required(),
  wakeup_time: Joi.string().required(),
  duration: Joi.number().required(),
  quality_rating: Joi.number().integer().required(),
  note: Joi.string(),
  user_id: Joi.number().integer().required(),
});

const createSleep = async (req, res) => {
  const { error } = schema.validate(req.body);
  const valid = error == null;
  if (!valid) {
    const { details } = error;
    const message = details.map((i) => i.message).join(",");
    console.log("error", message);
    res.status(422).json({ error: message });
  }

  try {
    const newSleep = await Sleep.create(req.body);
    res.status(201).json({ newSleep });
  } catch (error) {
    console.log("here");
    res.status(500).json({ mes: error });
  }
};

module.exports = { createSleep };
