import Locations from "../models/location";

// Function to fetch one event by ID
async function getLocationsByRecommendedTag(numberOfLocations = 12) {
    try {
        const event = await Locations.find({ recommended: true })
            .lean()
            .limit(numberOfLocations);
        return event;
    } catch (error) {
        console.error("Error fetching locations by recommended:", error);
        throw error;
    }
}

export default getLocationsByRecommendedTag;
