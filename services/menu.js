const dishesMock = require("../utils/mocks/dishes.js");
class MenuService {
  constructor() {}
  getAll() {
    return dishesMock;
  }
  getDish(id) {
    const dish = dishesMock.find((dish) => dish._id === id);
    return dish;
  }
}
module.exports = MenuService;
