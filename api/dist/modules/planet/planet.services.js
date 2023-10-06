"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upgradePlanet = exports.continuouslyUpdateUserBalance = exports.buyPlanets = exports.getPlanets = void 0;
const Planet_1 = require("../../db/models/Planet");
const User_1 = require("../../db/models/User");
function getPlanets() {
    return Planet_1.Planets.find().toArray();
}
exports.getPlanets = getPlanets;
async function buyPlanets(planetId, userId) {
    const userExist = await User_1.Users.findOne({ _id: userId });
    if (!userExist) {
        return { success: false, message: 'Utilisateur non existant' };
    }
    const alreadyExist = await Planet_1.Planets.findOne({ _id: planetId });
    if (!alreadyExist) {
        return { success: false, message: 'Cette planète n\'existe pas' };
    }
    if (userExist.pessinos < alreadyExist.price) {
        return { success: false, message: 'Vous n\'avez pas assez de fond' };
    }
    return Planet_1.Planets.updateOne({ _id: planetId }, { $set: { isBought: true } }).then((result) => {
        User_1.Users.updateOne({ _id: userId }, {
            $set: { pessinos: userExist.pessinos - alreadyExist.price }
        });
        if (result.matchedCount === 0) {
            return { success: false, message: "Planete non existant" };
        }
        return { success: true, message: "Planete bien achete" };
    })
        .catch((error) => {
        return { success: false, message: "Error en achetant une planete", error };
    });
}
exports.buyPlanets = buyPlanets;
async function continuouslyUpdateUserBalance(userId) {
    const user = await User_1.Users.findOne({ _id: userId });
    const boughtPlanetsCursor = Planet_1.Planets.find({ isBought: true });
    if (user) {
        const boughtPlanets = await boughtPlanetsCursor.toArray(); // Retrieve documents as an array
        let totalGain = 0;
        for (const planet of boughtPlanets) {
            totalGain += planet.gain;
        }
        const updatedBalance = user.pessinos + totalGain;
        await User_1.Users.updateOne({ _id: userId }, { $set: { pessinos: updatedBalance } });
        return { success: true, message: 'Trouver', user: user, money: updatedBalance };
    }
    else {
        return { success: false, message: "Money not added" };
    }
}
exports.continuouslyUpdateUserBalance = continuouslyUpdateUserBalance;
async function upgradePlanet(planetId, userId) {
    const user = await User_1.Users.findOne({ _id: userId });
    const planet = await Planet_1.Planets.findOne({ _id: planetId });
    if (!user) {
        return { success: false, message: 'Utilisateur non existant' };
    }
    if (!planet) {
        return { success: false, message: 'Planete non existant' };
    }
    if (user.pessinos < planet.level_ressource) {
        return { success: false, message: 'Fond insuffisant', error: 400 };
    }
    await User_1.Users.updateOne({ _id: userId }, {
        $set: {
            pessinos: user.pessinos - planet.level_ressource
        }
    });
    await Planet_1.Planets.updateOne({ _id: planetId }, {
        $set: {
            level: planet.level + 1, gain: planet.gain * (planet.level + 1), level_ressource: planet.level_ressource * 2
        }
    });
    return { success: true, message: 'planete amélioré', user: user };
}
exports.upgradePlanet = upgradePlanet;
//# sourceMappingURL=planet.services.js.map