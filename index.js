class Plant {
    constructor (commonName, scientificName, sunlight, water, climate) {
        this.commonName = commonName;
        this.scientificName = scientificName;
        this.sunlight = sunlight;
        this.water = water;
        this.climate = climate;
    }
    describe () {
        return ' $(this.commonName) also known as ${this.scientificName} needs ${sunlight} and ${water} and lives in a ${climate} climate';
    }
}