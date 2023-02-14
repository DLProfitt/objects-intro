const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
};

console.log(wardrobe.height, wardrobe.manufacturer, wardrobe.contents, wardrobe.depth, wardrobe.width);

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

const address = empireStateBuilding['address'];
const constructionDate = empireStateBuilding['constructionDate'];
const cost = empireStateBuilding['cost'];
const owner = empireStateBuilding['owner'];
const architect = empireStateBuilding['architect'];

const empireStateBuildingDimensions = [empireStateBuilding.stories, empireStateBuilding.height, empireStateBuilding.squareFeet, empireStateBuilding.eastWestLength, empireStateBuilding.northSouthLength];

console.log(empireStateBuildingDimensions, address, constructionDate, cost, owner, architect);

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

console.log(nashvilleSoftwareSchool.instructors.fullTime[4], nashvilleSoftwareSchool.instructors. partTime[0]);