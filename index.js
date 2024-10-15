// Constants
const HQ_LOCATION = 42; // Example HQ location (in blocks)

// Function to calculate distance from HQ in blocks
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - HQ_LOCATION);
}

// Function to calculate distance from HQ in feet
function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264; // 1 block = 264 feet
}

// Function to calculate distance travelled in feet
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264; // 1 block = 264 feet
}

// Function to calculate fare price
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // Free for the first 400 feet
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat rate for distances over 2000 feet
    } else {
        return "cannot travel that far"; // No rides over 2500 feet
    }
}

// Exporting the functions
module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
};
