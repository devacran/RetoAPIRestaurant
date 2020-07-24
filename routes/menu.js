const express = require("express");
const MenuService = require("../services/menu.js");
function menu(app) {
  const router = express.Router();
  const menuService = new MenuService();

  app.use("/api/menu", router);
  router.get("/", (req, res) => {
    try {
      const dishes = menuService.getAll();
      res.status(200).json(dishes);
    } catch (err) {
      console.log(error);
    }
  });
  router.get("/dish/:id", (req, res) => {
    const dishID = req.params.id;
    try {
      const dish = menuService.getDish(dishID);
      res.status(200).json(dish);
    } catch (error) {
      console.log(error);
    }
  });
}
module.exports = menu;
