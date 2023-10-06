import {Planets} from "@/db/models/Planet"
import {ObjectId} from "mongodb";
import {Users} from "@/db/models/User";

export function getPlanets() {
    return Planets.find().toArray();
}

export async function buyPlanets(planetId: ObjectId, userId: ObjectId) {
    const userExist = await Users.findOne({_id: userId})
    if (!userExist) {
        return {success: false, message: 'Utilisateur non existant'}
    }
    const alreadyExist = await Planets.findOne({_id: planetId})
    if (!alreadyExist) {
        return {success: false, message: 'Cette planète n\'existe pas'}
    }
    if (userExist.pessinos < alreadyExist.price) {
        return {success: false, message: 'Vous n\'avez pas assez de fond'}
    }


    return Planets.updateOne(
        {_id: planetId},
        {$set: {isBought: true}}
    ).then((result) => {
        Users.updateOne({_id: userId}, {
            $set: {pessinos: userExist.pessinos - alreadyExist.price}
        })
        if (result.matchedCount === 0) {
            return {success: false, message: "Planete non existant"};
        }
        return {success: true, message: "Planete bien achete"};
    })
        .catch((error) => {
            return {success: false, message: "Error en achetant une planete", error};
        });
}

export async function continuouslyUpdateUserBalance(userId: ObjectId) {
    const user = await Users.findOne({_id: userId});
    const boughtPlanetsCursor = Planets.find({isBought: true});

    if (user) {
        const boughtPlanets = await boughtPlanetsCursor.toArray(); // Retrieve documents as an array

        let totalGain = 0;
        for (const planet of boughtPlanets) {
            totalGain += planet.gain;
        }

        const updatedBalance = user.pessinos + totalGain;
        await Users.updateOne({_id: userId}, {$set: {pessinos: updatedBalance}});

        return {success: true, message: 'Trouver', user: user, money: updatedBalance}
    } else {
        return {success: false, message: "Money not added"};
    }
}

export async function upgradePlanet(planetId: ObjectId, userId: ObjectId) {
    const user = await Users.findOne({_id: userId});
    const planet = await Planets.findOne({_id: planetId});


    if (!user) {
        return {success: false, message: 'Utilisateur non existant'}
    }

    if (!planet) {
        return {success: false, message: 'Planete non existant'}
    }

    if (user.pessinos < planet.level_ressource) {
        return {success: false, message: 'Fond insuffisant', error: 400}
    }

    await Users.updateOne({_id: userId}, {
        $set: {
            pessinos: user.pessinos - planet.level_ressource
        }
    })

    await Planets.updateOne({_id: planetId}, {
        $set: {
            level: planet.level + 1, gain: planet.gain * (planet.level + 1), level_ressource: planet.level_ressource * 2
        }
    })
    return {success: true, message: 'planete amélioré', user: user}
}

