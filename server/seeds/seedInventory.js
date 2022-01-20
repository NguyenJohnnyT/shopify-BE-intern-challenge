const { Inventory } = require('../models');

const inventoryData = require('./inventory.json');

const seedInventory = () => Inventory.bulkCreate(inventoryData);

module.exports = seedInventory;