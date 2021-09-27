const express = require("express");
const registroRoute = express.Router();

// Student model
let RegistroModel = require("../models/Registro");

registroRoute.route("/").get((req, res) => {
  RegistroModel.find((error, data, next) => {
    if (error) {
      return next(error);
    } else {
      console.log(error);
      res.json(data);
    }
  });
});

registroRoute.route("/create-registro").post((req, res, next) => {
  RegistroModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

registroRoute.route("/edit-registro/:id").get((req, res) => {
  RegistroModel.findById(req.params.id, (error, data, next) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update student
registroRoute.route("/update-registro/:id").put((req, res, next) => {
  RegistroModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Registro successfully updated!");
      }
    }
  );
});

// Delete student
registroRoute.route("/delete-registro/:id").delete((req, res, next) => {
  RegistroModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = registroRoute;
