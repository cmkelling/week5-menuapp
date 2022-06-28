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
            this.plant.push(plant);
        } else {
            throw new Error (`Argument is not a plant: ${plant}`);
        }
    }
    describe() {
        return `${this.type} has ${this.plant.length} plants.`;
    }
}

class Menu {
    constructor() {
        this.typeOfPlant = [];
        this.selected = null;
    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch(selection) {
                case '1':
                    this.createType();
                    break;
                case '2':
                    this.viewType();
                    break;
                case '3':
                    this.deleteType();
                    break;
                case '4':
                    this.displayTypes();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye');
    }
    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new plant type
        2) view plant type
        3) delete plant type
        4) display plant types
        `);
    }

    showTypeMenuOptions(typeInfo) {
        return prompt(`
        0) exit
        1) create new plant
        2) delete plant
        ---------------------
        ${typeInfo}
        `)
    }

    displayTypes() {
        let typeString = '';
        for (let i = 0; i < this.typeOfPlant.length; i++) {
            typeString += i + ') ' + this.typeOfPlant[i].type + '\n'
        }
        alert(typeString)
    }

    createType() {
        let type = prompt('Enter name for new type of plants.');
        this.typeOfPlant.push(new TypeOfPlant(type));
    }

    viewType() {
        let index = prompt('Enter the index number of the type of plant you wish to view');
        if (index > -1 && index < this.typeOfPlant.length) {
            this.selectedType = this.typeOfPlant[index];
            let description = 'Type of Plant: ' + this.selectedType.type + '\n';

            for (let i = 0; i < this.selectedType.plant.length; i++) {
                description += i + ') ' + this.selectedType.plant[i].commonName
                + ' - ' + ' ' + this.selectedType.plant[i].scientificName + ', ' + this.selectedType.plant[i].sunlight + ', ' + this.selectedType.plant[i].water + ', ' + this.selectedType.plant[i].climate + '\n';
            }

            let selection = this.showTypeMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createPlant();
                    break;
                case '2':
                    this.deletePlant();
            }
        }
    }

    deleteType() {
        let index = prompt('Enter the index of the type you would like to delete.');
        if (index > -1 && index < this.typeOfPlant.length) {
            this.typeOfPlant.splice(index, 1)
        }

    }

    createPlant() {
        let commonName = prompt('Enter common name of new plant: ');
        let scientificName = prompt('Enter scientific name of new plant: ');
        let sunlight = prompt('Enter amount of sunlight new plant requires: ');
        let water = prompt('Enter amount of water new plant requires: ');
        let climate = prompt('Enter what climate the new plant lives in: ');
        this.selectedType.plant.push(new Plant(commonName, scientificName, sunlight, water, climate));

    }

    deletePlant() {
        let index = prompt('Enter the index of the plant you wish to delete.');
        if (index > -1 && index < this.selectedType.plant.length) {
            this.selectedType.plant.splice(index, 1);
        }
    }
}

let menu = new Menu;
menu.start();