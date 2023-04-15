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
export const deleteAdd = async (req, res, next) => {};
export const getAdd = async (req, res, next) => {};
export const getAdds = async (req, res, next) => {};
 