const captainmodel = require('../models/captainModel');


module.exports.createCaptain = async({ firstname, lastname, email, password, color, plate, capacity, vehicleType }) => {
     if(!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
          throw new Error('All fields are required');
     }

     const captain = await captainmodel.create({
          fullname: { firstname, lastname },
          email,
          password,
          vehicle: { color, plate, capacity, vehicleType },
     });

     return captain;
}