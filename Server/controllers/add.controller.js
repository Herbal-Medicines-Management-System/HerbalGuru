import Add from '../models/add.model.js';
import createError from '../utils/createError.js';

//create a new add for sellers
export const createAdd = async (req, res, next) => {
  if (!req.isSeller)
    return next(createError(403, 'Only sellers can create a Adds!'));

  const newAdd = new Add({
    userId: req.userId,
    ...req.body,
  });
  try {
    const savedAdd = await newAdd.save();
    res.status(201).json(savedAdd);
  } catch (err) {
    next(err);
  }
};

//create delete function for sellers' adds
export const deleteAdd = async (req, res, next) => {
  try {
    const add = await Add.findById(req.params.id);

    if (add.userId !== req.userId)
      return next(createError(403, 'You can Delete your Adds only!'));
    await Add.findByIdAndDelete(req.params.id);
    res.request.status(200).send('Add has been deleted!');
  } catch (err) {
    next(err);
  }
};

export const getAdd = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

export const getAdds = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
