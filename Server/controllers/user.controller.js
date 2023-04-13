import User from '../models/user.model.js';

export const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (req.userId != user._id.toString()) {
    return res.status(404).send('You can delete only your account!');
  }
  await User.findByIdAndDelete(req.params.id);
  req.status(200).send('Deleted successfully!');
};
