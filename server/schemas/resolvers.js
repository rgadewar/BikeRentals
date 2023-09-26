const  Bike  = require('../models/bike'); // Import the Bike model
const resolvers = {
  Query: {
    bikes: async () => {
      try {
        const allBikes = await Bike.find();
        return allBikes;
      } catch (error) {
        console.error('Error fetching bikes:', error);
        throw new Error('Failed to fetch bikes');
      }
    },
    bike: async (_, { _id }) => {
      try {
        const bike = await Bike.findById(_id);
        if (!bike) {
          throw new Error(`Bike with _id ${_id} not found`);
        }
        return bike;
      } catch (error) {
        console.error(`Error fetching bike with _id ${_id}:`, error);
        throw new Error(`Failed to fetch bike with _id ${_id}`);
      }
    },
    // Other resolvers...
  },
  // Other resolver categories...
};

module.exports = resolvers;
