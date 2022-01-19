const router = require('express').Router();
const { Inventory } = require('../../models');

//URL: <homeURL>/api/inventory

const getAllItems = async (req, res) => {
  try {
    const itemData = await Inventory.findAll({});
    const items = itemData.map((item) => item.get({ plain: true }));

    res.status(200).json(items);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

const editItem = async (req, res) => {
  try {
    const itemData = await Inventory.update(
      req.body, {
        where: {
          id: req.params.id
        }
      }
    )
    
    if (!itemData) {
      res.status(404).json({ message: 'No item with that id! '})
      return
    }
    res.status(200).json( { message: "Inventory information changed!" })
  } catch (err){
    console.log(err);
    res.status(500).json(err);
  }
}

const deleteItem = async (req, res) => {
  try {
    const itemData = await Inventory.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    )
    
    if (!itemData) {
      res.status(404).json({ message: 'No item with that id! '})
      return
    }
    res.status(200).json( { message: "Item deleted!" })
  } catch (err){
    console.log(err);
    res.status(500).json(err);
  }
}

const createItem = async (req, res) => {
  try {
    const itemData = await Inventory.create(
      req.body
    )
    res.status(200).json( { message: "Item Created!" })
  } catch (err){
    console.log(err);
    res.status(500).json(err);
  }
}

router.get(   '/',    getAllItems)
router.post(  '/',    createItem)
router.put(   '/:id', editItem)
router.delete('/:id', deleteItem)

module.exports = router

