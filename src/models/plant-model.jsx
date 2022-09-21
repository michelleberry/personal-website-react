export class Plant {
    name;
    season;
    location;
    description;
    eat;
    benefits;
    harvest;
    warnings;

    constructor(name, season, location, description, eat, benefits, harvest, warnings){
        this.name = name; 
        this.season = season; 
        this.location = location;
        this.description = description;
        this.eat = eat;
        this.benefits = benefits;
        this.harvest = harvest;
        this.warnings = warnings;
    }
    
}

export const standard_plants = [
    new Plant("Dandelion",
                "Spring", 
                "Dandelions are quite common and are one of the most found weeds in most lawns. It can be found in a myriad of environments such as the openings of deep woods, fields, rocky hillsides and even gardens and lawns.", 
                "Dandelion, weedy perennial herb of the genus Taraxacum of the family Asteraceae, native to Eurasia but widespread throughout much of temperate North America.", 
                "Every part of a dandelion is edible and can be used in an array of recipes from the roots to the leaves and the flowers. Even dandelions before they flower are a great source of food.", 
                "Dandelions are super nutritionally advantageous as they are one of the densest greens you can eat, even more so than kale and spinach. They are filled with vitamins and antioxidants such as Vitamins A, C and K, and are full of potassium. This gives them a healthy diuretic quality, making them an excellent blood detoxifier. Dandelions are also a great supplement for diabetics as they are known for their ability to stabilize blood sugar.", 
                "Make sure to harvest from locations where they are not treated with chemicals. We recommend avoiding areas near freeways or public parks because of this.",
                ["To the best of our knowledge, the information contained on this platform is accurate. Shrub Shack stresses that you do not eat any wild edible plants, herbs, weeds, trees or bushes until you have verified with your health professional that they are safe for you."]
                ),
    new Plant("Blueberry",
                "Spring", 
                "Blueberries are found in humid northern climates.", 
                "Blueberries are widely distributed, and part of a widespread group of perennial flowering plants with blue or purple berries.", 
                "Only the berry on this plant is edible.", 
                "Blueberries are low in calories but high in fiber, and vitamin C and K.", 
                "Ripe blueberries have a deep blue colour when they are ready to be harvested.",
                ["Looks similar to deadly plant Nightshade - be wary when harvesting and do not eat if you are ever unsure."])
]
