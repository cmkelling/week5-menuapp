class Plant {
    constructor (commonName, scientificName, sunlight, water, climate) {
        this.commonName = commonName;
        this.scientificName = scientificName;
        this.sunlight = sunlight;
        this.water = water;
        this.climate = climate;
    }
    describe () {
        return `${this.commonName} also known as ${this.scientificName} needs ${sunlight} and ${water} and lives in a ${climate} climate`;
    }
}

class TypeOfPlant {
    constructor (type) {
        this.type = type;
        this.plant = [];
    }
    addPlant(plant) {
        if (plant instanceof Plant) {
            this.plants.push(plant);
        } else {
            throw new Error (`Argument is not a plant: ${plant}`);
        }
    }
    describe() {
        return `${this.type} has ${this.plants.length} plants.`;
    }
}