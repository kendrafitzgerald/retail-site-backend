const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//gets all tags and includes its associated product data through the ProductTag model
router.get('/', async (req, res) => {
  try { 
    const tagData = await Tag.findAll({
      include: [{model: Product, through: ProductTag}],
  });
    res.status(200).json(tagData)
   } catch (error) {
    res.status(500).json(err)
   }
});

//gets one tag and includes its associated product data through the ProductTag model
router.get('/:id', async (req, res) => {
  try {

    const tagData = await Tag.findByPk(req.params.id,  {
      include: [{model: Product, through: ProductTag}],

    });

    if (!tagData) {
      res.status(404).json({message: 'No tag found with that id!'});
      return;
    }
    res.status(200).json(tagData)

  } catch (error) {
    res.status(500).json(err);
  }
});

//creates a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

//updates a tag through its id 
router.put('/:id', async (req, res) => {
  try { 
    const updatedTag = await Tag.update(
    {
     tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
      res.status(200).json(updatedTag);
 
    
  } catch (error) {
    res.status(400).json(err)
  }
});

//deletes a tag by its id
router.delete('/:id', async (req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!deleteTag) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(deleteTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
