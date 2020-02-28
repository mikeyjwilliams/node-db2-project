module.exports = carData => {
  return (req, res, next) => {
    const { vin, make, model, mileage } = req.body;

    if (!vin) {
      //! check for no vin
      return res.status(400).json({ message: 'car vin is required' });
    }
    if (vin) {
      //! check for if vin does not have 17 nums or characters.
      if (vin.length !== 17) {
        return res
          .status(400)
          .json({ message: 'vin must be 17 letters and numbers long' });
      }
    }
    if (!make) {
      //! check no make
      return res.status(400).json({ message: 'car make is required' });
    }
    if (!model) {
      //! check for no model
      return res.status(400).json({ message: 'car model is required' });
    }
    if (!mileage) {
      //! check for no mileage
      return res.status(400).json({ message: 'car milage is required' });
    }
    next();
  };
};
