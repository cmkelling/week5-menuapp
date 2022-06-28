/* This is a menu application to keep track of used plants, whether for a store, for a garden, or for house plants.
This was inspired by a friend who loves to tell any guest all about each of her 50+ plants.*/



// first class
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
// second class, includes plant array.
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
// starts application and creates options for the object. Class includes second array.
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

// the two types of menus used in the app. main menu shows up first and type menu appears when viewing a type of plant.    
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
//displays the different types of plants entered and allows you to create a type of plant and view the type menu.
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
// allows the user to view specific type once index is looked up and any plants in that type.
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
//creates new plant and allows user to put in important plant info
    createPlant() {
        let commonName = prompt('Enter common name of new plant: ');
        let scientificName = prompt('Enter scientific name of new plant: ');
        let sunlight = prompt('Enter amount of sunlight new plant requires: ');
        let water = prompt('Enter amount of water new plant requires: ');
        let climate = prompt('Enter what climate the new plant lives in: ');
        this.selectedType.plant.push(new Plant(commonName, scientificName, sunlight, water, climate));

    }
//deletes plant
    deletePlant() {
        let index = prompt('Enter the index of the plant you wish to delete.');
        if (index > -1 && index < this.selectedType.plant.length) {
            this.selectedType.plant.splice(index, 1);
        }
    }
}
//runs application
let menu = new Menu;
menu.start();