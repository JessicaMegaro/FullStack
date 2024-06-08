const mongoose = require('mongoose');
const Trip = require ('../models/travlr'); //Register Model
const Model = mongoose.model('trips');

// Get: /trips - list all trips. Include HTML status code for all outcomes and JSON message to the requesting client.

const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();

        // Uncomment the following line to show result of query on console
        // console.log(q);

    if(!q)
        { // Database returned no data
            return res
                .status(404)
                .json(err);
        } else { // Return resulting trip list
            return res
                .status(200)
                .json(q);
        }
};



// GET: /trips/:tripCode - lists a single trip. Response must include HTML status code for all outcomes and JSON
// message to the requesting client

const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripsCode}) // Return single record
        .exec();

        // Uncomment following line to show results of query on console
        // console.log(q);

    if(!q)
    { // Database returned no data
        return res  
            .status(404)
            .json(err);
    } else { // Return resulting trip list
        return res
            .status(200)
            .json(q);
        }
};

    module.exports = {
        tripsList,
        tripsFindByCode
    };
