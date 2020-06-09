const products = [
    {
        sku: "sku_GXsJNNUiWrM2y0",
        price: 1530,
        displayPrice: "$15.30",
        name: "Tsuki no Wa - 720ml",
        brewery: "Tsuki no Wa Shuzou",
        breweryProfile: {
            breweryName: "Kamotsuru Shuzou",
            prefecture: "Hiroshima",
            region: "Chugoku",
            founded: 1873,
            photos: [
                {
                    building: "https://alljapantours.com/acp15/attraction15/img15/pF16226207.jpg",
                    products: "https://miyage-guide.jp/images/2019/04/DSC_0100-1024x768.jpg",
                    toji: "https://cdn.asagei.com/syokuraku/uploads/2017/08/20170818-hiroshimanishiki13.jpg"
                }
            ],
            extraInfo: [
                {
                    id: "blurb1",
                    title: "Part of Japan's Saijo sake town",
                    body: "Kamotsuru Shuzou is one of nine breweries nestled in a quiet town called Saijo, just outside Hiroshima City. Grab your map and a sake cup from the Saijo Station tourist info center and stroll through the town. Each brewery has a visitor center, where you can taste a sample of their products as well as buy bottles and other souvenirs. For more information, visit ",
                    infoLink: "http://saijosake.com/",
                    photo: "https://planetyze.com/uploads/2017/01/5894/th/lg.jpg",
                    photoCaption: "Photo of Saijo Sake Town"
                }
            ]
        },
        toji: "Sugawara",
        founded: 1832,
        prefecture: "Iwate",
        type: "Junmai",
        abv: 15,
        polishRatio: 80,
        reviewList: [
            { postedBy: "user1", postedAt: 12345, title: "Cool", body: "This sake is cool", stars: 4 },
            { postedBy: "user2", postedAt: 67890, title: "Awesome", body: "This sake is awesome", stars: 5 },
            { postedBy: "user3", postedAt: 67890, title: "Meh", body: "This sake is meh", stars: 3 },
        ],
        relatedProducts: ["sku_GzuIdeuSmWqKKm", "sku_GXsSkMyd52Fnkj"]
    },
    {
        sku: "sku_GXsQnW5LzFRrc6",
        price: 1580,
        displayPrice: "$15.80",
        name: "Nanbu Bijin - 720ml",
        brewery: "Nanbu Bijin Matsushima Shuzou",
        breweryProfile: {
            breweryName: "Kamotsuru Shuzou",
            prefecture: "Hiroshima",
            region: "Chugoku",
            founded: 1873,
            photos: [
                {
                    building: "https://alljapantours.com/acp15/attraction15/img15/pF16226207.jpg",
                    products: "https://miyage-guide.jp/images/2019/04/DSC_0100-1024x768.jpg",
                    toji: "https://cdn.asagei.com/syokuraku/uploads/2017/08/20170818-hiroshimanishiki13.jpg"
                }
            ],
            extraInfo: [
                {
                    id: "blurb1",
                    title: "Part of Japan's Saijo sake town",
                    body: "Kamotsuru Shuzou is one of nine breweries nestled in a quiet town called Saijo, just outside Hiroshima City. Grab your map and a sake cup from the Saijo Station tourist info center and stroll through the town. Each brewery has a visitor center, where you can taste a sample of their products as well as buy bottles and other souvenirs. For more information, visit ",
                    infoLink: "http://saijosake.com/",
                    photo: "https://planetyze.com/uploads/2017/01/5894/th/lg.jpg",
                    photoCaption: "Photo of Saijo Sake Town"
                }
            ]
        },
        toji: "Sugawara",
        founded: 1832,
        prefecture: "Iwate",
        type: "Junmai",
        abv: 15,
        polishRatio: 80,
        reviewList: [
            { postedBy: "user1", postedAt: 12345, title: "Cool", body: "This sake is cool", stars: 4 },
            { postedBy: "user2", postedAt: 67890, title: "Awesome", body: "This sake is awesome", stars: 5 },
            { postedBy: "user3", postedAt: 67890, title: "Awesome", body: "This sake is awesome", stars: 5 },
        ],
        relatedProducts: ["sku_GXsQnW5LzFRrc6", "sku_GXsSkMyd52Fnkj"]
    },
    {
        sku: "sku_GXsSkMyd52Fnkj",
        price: 1210,
        displayPrice: "$12.10",
        name: "Yuki no Matsushima - 720ml",
        brewery: "Yuki no Matsushima Shuzou",
        breweryProfile: {
            breweryName: "Kamotsuru Shuzou",
            prefecture: "Hiroshima",
            region: "Chugoku",
            founded: 1873,
            photos: [
                {
                    building: "https://alljapantours.com/acp15/attraction15/img15/pF16226207.jpg",
                    products: "https://miyage-guide.jp/images/2019/04/DSC_0100-1024x768.jpg",
                    toji: "https://cdn.asagei.com/syokuraku/uploads/2017/08/20170818-hiroshimanishiki13.jpg"
                }
            ],
            extraInfo: [
                {
                    id: "blurb1",
                    title: "Part of Japan's Saijo sake town",
                    body: "Kamotsuru Shuzou is one of nine breweries nestled in a quiet town called Saijo, just outside Hiroshima City. Grab your map and a sake cup from the Saijo Station tourist info center and stroll through the town. Each brewery has a visitor center, where you can taste a sample of their products as well as buy bottles and other souvenirs. For more information, visit ",
                    infoLink: "http://saijosake.com/",
                    photo: "https://planetyze.com/uploads/2017/01/5894/th/lg.jpg",
                    photoCaption: "Photo of Saijo Sake Town"
                }
            ]
        },
        toji: "Sugawara",
        founded: 1832,
        prefecture: "Miyagi",
        type: "Junmai",
        abv: 15,
        polishRatio: 80,
        reviewList: [
            { postedBy: "user1", postedAt: 12345, title: "Cool", body: "This sake is cool", stars: 4 },
            { postedBy: "user2", postedAt: 67890, title: "Great", body: "This sake is awesome", stars: 4 },
            { postedBy: "user3", postedAt: 67890, title: "Not good", body: "This sake is not good", stars: 2 },
            { postedBy: "user4", postedAt: 67890, title: "Awesome", body: "This sake is awesome", stars: 5 },
        ],
        relatedProducts: ["sku_GXsQnW5LzFRrc6", "sku_GzuHOw5f8a6UKs"]
    },
    {
        sku: "sku_GXsV1k1tZuf15m",
        price: 1110,
        displayPrice: "$11.10",
        name: "Kamotsuru - 720ml",
        brewery: "Kamotsuru Shuzou",
        breweryProfile: {
            breweryName: "Kamotsuru Shuzou",
            prefecture: "Hiroshima",
            region: "Chugoku",
            founded: 1873,
            photos: [
                {
                    building: "https://alljapantours.com/acp15/attraction15/img15/pF16226207.jpg",
                    products: "https://miyage-guide.jp/images/2019/04/DSC_0100-1024x768.jpg",
                    toji: "https://cdn.asagei.com/syokuraku/uploads/2017/08/20170818-hiroshimanishiki13.jpg"
                }
            ],
            extraInfo: [
                {
                    id: "blurb1",
                    title: "Part of Japan's Saijo sake town",
                    body: "Kamotsuru Shuzou is one of nine breweries nestled in a quiet town called Saijo, just outside Hiroshima City. Grab your map and a sake cup from the Saijo Station tourist info center and stroll through the town. Each brewery has a visitor center, where you can taste a sample of their products as well as buy bottles and other souvenirs. For more information, visit ",
                    infoLink: "http://saijosake.com/",
                    photo: "https://planetyze.com/uploads/2017/01/5894/th/lg.jpg",
                    photoCaption: "Photo of Saijo Sake Town"
                }
            ]
        },
        toji: "Sugawara",
        founded: 1832,
        prefecture: "Hiroshima",
        type: "Junmai",
        abv: 15,
        bottleSize: 720,
        polishRatio: 80,
        reviewList: [
            { postedBy: "user1", postedAt: 12345, title: "Cool", body: "This sake is cool", stars: 4 },
            { postedBy: "user2", postedAt: 67890, title: "Awesome", body: "This sake is awesome", stars: 5 },
        ],
        relatedProducts: ["sku_GzuGRZG97lj4Q4", "sku_GzuIdeuSmWqKKm"],
        stars: 3,
        descLead: "The keyword for this sake is: ",
        descKeyword: "Smooth",
        descFull: "This daiginjo is as solid as they come, with a purring nose of soft ripe fruits and twinge of citrus. From the first pass on the tip of the tongue it is apparent that this brew is built around a perfect blend of fruit tones such as lychee and has a gentle acidity play. Ripe cantaloupe and tropical fruit flavors and a semi citrus tingle dance through the mouth and end in a smooth and creamy aftertaste. A perfect example of a 'round' sake that shows amazingly well built qualities from start to finish.",
        foodPairings: [
            "Sushi & Sashimi", "Grilled Fish", "Light Pasta", "Shellfish", "Salads", "Fruit Salad", "Assorted Cheeses", "Fruit (Parfaits, Pies",
        ],
        tasteProfileWine: "Big and bold reds/fat and fruity whites",
        tasteProfileBeer: "Heffenwiesen and Light Beers",
        ingredients: { rice: "Aichonohikari", water: "On-site well water", yeast: "Shizuoka HD-1", sulfites: false, preservatives: false },
        sakeMeterValue: "0",
        sweetOrDry: "Sweet",
        body: "Full",
        acidity: 1.5,
        aminoAcids: 1.2,
        servingTemp: "Chilled"
    },
    {
        sku: "sku_GzuGRZG97lj4Q4",
        price: 1600,
        displayPrice: "$16.00",
        name: "Izumofuji Cho-karakuchi 720 ml",
        brewery: "Izumofuji Shuzou",
        breweryProfile: {
            breweryName: "Izumofuji Shuzou",
            prefecture: "Shimane",
            region: "Chugoku",
            founded: 1873,
            photos: [
                {
                    building: "https://alljapantours.com/acp15/attraction15/img15/pF16226207.jpg",
                    products: "https://miyage-guide.jp/images/2019/04/DSC_0100-1024x768.jpg",
                    toji: "https://cdn.asagei.com/syokuraku/uploads/2017/08/20170818-hiroshimanishiki13.jpg"
                }
            ],
            extraInfo: [
                {
                    id: "blurb1",
                    title: "Part of Japan's Saijo sake town",
                    body: "Kamotsuru Shuzou is one of nine breweries nestled in a quiet town called Saijo, just outside Hiroshima City. Grab your map and a sake cup from the Saijo Station tourist info center and stroll through the town. Each brewery has a visitor center, where you can taste a sample of their products as well as buy bottles and other souvenirs. For more information, visit ",
                    infoLink: "http://saijosake.com/",
                    photo: "https://planetyze.com/uploads/2017/01/5894/th/lg.jpg",
                    photoCaption: "Photo of Saijo Sake Town"
                }
            ]
        },
        toji: "Sugawara",
        founded: 1832,
        prefecture: "Shimane",
        type: "Junmai",
        abv: 15,
        bottleSize: 720,
        polishRatio: 80,
        reviewList: [
            { postedBy: "user1", postedAt: 12345, title: "Cool", body: "This sake is cool", stars: 4 },
            { postedBy: "user2", postedAt: 67890, title: "Awesome", body: "This sake is awesome", stars: 5 },
        ],
        relatedProducts: ["sku_GXsQnW5LzFRrc6", "sku_GXsSkMyd52Fnkj"],
        stars: 3,
        descLead: "The keyword for this sake is: ",
        descKeyword: "Smooth",
        descFull: "This daiginjo is as solid as they come, with a purring nose of soft ripe fruits and twinge of citrus. From the first pass on the tip of the tongue it is apparent that this brew is built around a perfect blend of fruit tones such as lychee and has a gentle acidity play. Ripe cantaloupe and tropical fruit flavors and a semi citrus tingle dance through the mouth and end in a smooth and creamy aftertaste. A perfect example of a 'round' sake that shows amazingly well built qualities from start to finish.",
        foodPairings: [
            "Sushi & Sashimi", "Grilled Fish", "Light Pasta", "Shellfish", "Salads", "Fruit Salad", "Assorted Cheeses", "Fruit (Parfaits, Pies",
        ],
        tasteProfileWine: "Big and bold reds/fat and fruity whites",
        tasteProfileBeer: "Heffenwiesen and Light Beers",
        ingredients: { rice: "Aichonohikari", water: "On-site well water", yeast: "Shizuoka HD-1", sulfites: false, preservatives: false },
        sakeMeterValue: "0",
        sweetOrDry: "Sweet",
        body: "Full",
        acidity: 1.5,
        aminoAcids: 1.2,
        servingTemp: "Chilled"
    },
    {
        sku: "sku_GzuHOw5f8a6UKs",
        price: 1900,
        displayPrice: "$19.00",
        name: "Kamonishiki Shiboritate Unpasteurized - 720 ml",
        brewery: "Kamonishiki Shuzou",
        breweryProfile: {
            breweryName: "Kamonishiki Shuzou",
            prefecture: "Niigata",
            region: "Tohoku",
            founded: 1873,
            photos: [
                {
                    building: "https://alljapantours.com/acp15/attraction15/img15/pF16226207.jpg",
                    products: "https://miyage-guide.jp/images/2019/04/DSC_0100-1024x768.jpg",
                    toji: "https://cdn.asagei.com/syokuraku/uploads/2017/08/20170818-hiroshimanishiki13.jpg"
                }
            ],
            extraInfo: [
                {
                    id: "blurb1",
                    title: "Part of Japan's Saijo sake town",
                    body: "Kamotsuru Shuzou is one of nine breweries nestled in a quiet town called Saijo, just outside Hiroshima City. Grab your map and a sake cup from the Saijo Station tourist info center and stroll through the town. Each brewery has a visitor center, where you can taste a sample of their products as well as buy bottles and other souvenirs. For more information, visit ",
                    infoLink: "http://saijosake.com/",
                    photo: "https://planetyze.com/uploads/2017/01/5894/th/lg.jpg",
                    photoCaption: "Photo of Saijo Sake Town"
                }
            ]
        },
        toji: "Sugawara",
        founded: 1832,
        prefecture: "Niigata",
        type: "Junmai",
        abv: 15,
        bottleSize: 720,
        polishRatio: 80,
        reviewList: [
            { postedBy: "user1", postedAt: 12345, title: "Cool", body: "This sake is cool", stars: 4 },
            { postedBy: "user2", postedAt: 67890, title: "Awesome", body: "This sake is awesome", stars: 5 },
        ], relatedProducts: ["sku_GXsQnW5LzFRrc6", "sku_GXsSkMyd52Fnkj"],
        stars: 3,
        descLead: "The keyword for this sake is: ",
        descKeyword: "Smooth",
        descFull: "This daiginjo is as solid as they come, with a purring nose of soft ripe fruits and twinge of citrus. From the first pass on the tip of the tongue it is apparent that this brew is built around a perfect blend of fruit tones such as lychee and has a gentle acidity play. Ripe cantaloupe and tropical fruit flavors and a semi citrus tingle dance through the mouth and end in a smooth and creamy aftertaste. A perfect example of a 'round' sake that shows amazingly well built qualities from start to finish.",
        foodPairings: [
            "Sushi & Sashimi", "Grilled Fish", "Light Pasta", "Shellfish", "Salads", "Fruit Salad", "Assorted Cheeses", "Fruit (Parfaits, Pies",
        ],
        tasteProfileWine: "Big and bold reds/fat and fruity whites",
        tasteProfileBeer: "Heffenwiesen and Light Beers",
        ingredients: { rice: "Aichonohikari", water: "On-site well water", yeast: "Shizuoka HD-1", sulfites: false, preservatives: false },
        sakeMeterValue: "0",
        sweetOrDry: "Sweet",
        body: "Full",
        acidity: 1.5,
        aminoAcids: 1.2,
        servingTemp: "Chilled"
    },
    {
        sku: "sku_GzuIdeuSmWqKKm",
        price: 1500,
        displayPrice: "$15.00",
        name: "Wild-Side Fukuroshibori - 720 ml",
        brewery: "Miyoshikiku Shuzou",
        breweryProfile: {
            breweryName: "Miyoshikiku Shuzou",
            prefecture: "Tokushima",
            region: "Shikoku",
            founded: 1873,
            photos: [
                {
                    building: "https://alljapantours.com/acp15/attraction15/img15/pF16226207.jpg",
                    products: "https://miyage-guide.jp/images/2019/04/DSC_0100-1024x768.jpg",
                    toji: "https://cdn.asagei.com/syokuraku/uploads/2017/08/20170818-hiroshimanishiki13.jpg"
                }
            ],
            extraInfo: [
                {
                    id: "blurb1",
                    title: "Part of Japan's Saijo sake town",
                    body: "Kamotsuru Shuzou is one of nine breweries nestled in a quiet town called Saijo, just outside Hiroshima City. Grab your map and a sake cup from the Saijo Station tourist info center and stroll through the town. Each brewery has a visitor center, where you can taste a sample of their products as well as buy bottles and other souvenirs. For more information, visit ",
                    infoLink: "http://saijosake.com/",
                    photo: "https://planetyze.com/uploads/2017/01/5894/th/lg.jpg",
                    photoCaption: "Photo of Saijo Sake Town"
                }
            ]
        },
        toji: "Sugawara",
        founded: 1832,
        prefecture: "Tokushima",
        type: "Junmai",
        abv: 15,
        bottleSize: 720,
        polishRatio: 80,
        reviewList: [
            { postedBy: "user1", postedAt: 12345, title: "Cool", body: "This sake is cool", stars: 4 },
            { postedBy: "user2", postedAt: 67890, title: "Awesome", body: "This sake is awesome", stars: 5 },
        ],
        relatedProducts: ["sku_GXsQnW5LzFRrc6", "sku_GXsSkMyd52Fnkj"],
        stars: 3,
        descLead: "The keyword for this sake is: ",
        descKeyword: "Smooth",
        descFull: "This daiginjo is as solid as they come, with a purring nose of soft ripe fruits and twinge of citrus. From the first pass on the tip of the tongue it is apparent that this brew is built around a perfect blend of fruit tones such as lychee and has a gentle acidity play. Ripe cantaloupe and tropical fruit flavors and a semi citrus tingle dance through the mouth and end in a smooth and creamy aftertaste. A perfect example of a 'round' sake that shows amazingly well built qualities from start to finish.",
        foodPairings: [
            "Sushi & Sashimi", "Grilled Fish", "Light Pasta", "Shellfish", "Salads", "Fruit Salad", "Assorted Cheeses", "Fruit (Parfaits, Pies",
        ],
        tasteProfileWine: "Big and bold reds/fat and fruity whites",
        tasteProfileBeer: "Heffenwiesen and Light Beers",
        ingredients: { rice: "Aichonohikari", water: "On-site well water", yeast: "Shizuoka HD-1", sulfites: false, preservatives: false },
        sakeMeterValue: "0",
        sweetOrDry: "Sweet",
        body: "Full",
        acidity: 1.5,
        aminoAcids: 1.2,
        servingTemp: "Chilled"
    },
    {
        sku: "sku_GzuJn3T4ciqA2T",
        price: 250,
        displayPrice: "$2.50",
        name: "Onikoroshi - 180 ml",
        brewery: "Nihon Sakari",
        breweryProfile: {
            breweryName: "Nihon Sakari",
            prefecture: "Hyogo",
            region: "Chugoku",
            founded: 1873,
            photos: [
                {
                    building: "https://alljapantours.com/acp15/attraction15/img15/pF16226207.jpg",
                    products: "https://miyage-guide.jp/images/2019/04/DSC_0100-1024x768.jpg",
                    toji: "https://cdn.asagei.com/syokuraku/uploads/2017/08/20170818-hiroshimanishiki13.jpg"
                }
            ],
            extraInfo: [
                {
                    id: "blurb1",
                    title: "Part of Japan's Saijo sake town",
                    body: "Kamotsuru Shuzou is one of nine breweries nestled in a quiet town called Saijo, just outside Hiroshima City. Grab your map and a sake cup from the Saijo Station tourist info center and stroll through the town. Each brewery has a visitor center, where you can taste a sample of their products as well as buy bottles and other souvenirs. For more information, visit ",
                    infoLink: "http://saijosake.com/",
                    photo: "https://planetyze.com/uploads/2017/01/5894/th/lg.jpg",
                    photoCaption: "Photo of Saijo Sake Town"
                }
            ]
        },
        toji: "Sugawara",
        founded: 1832,
        prefecture: "Hyogo",
        type: "Junmai",
        abv: 15,
        bottleSize: 720,
        polishRatio: 80,
        reviewList: [
            { postedBy: "user1", postedAt: 12345, title: "Cool", body: "This sake is cool", stars: 4 },
            { postedBy: "user2", postedAt: 67890, title: "Awesome", body: "This sake is awesome", stars: 5 },
        ],
        relatedProducts: ["sku_GXsQnW5LzFRrc6", "sku_GXsSkMyd52Fnkj"],
        stars: 3,
        descLead: "The keyword for this sake is: ",
        descKeyword: "Smooth",
        descFull: "This daiginjo is as solid as they come, with a purring nose of soft ripe fruits and twinge of citrus. From the first pass on the tip of the tongue it is apparent that this brew is built around a perfect blend of fruit tones such as lychee and has a gentle acidity play. Ripe cantaloupe and tropical fruit flavors and a semi citrus tingle dance through the mouth and end in a smooth and creamy aftertaste. A perfect example of a 'round' sake that shows amazingly well built qualities from start to finish.",
        foodPairings: [
            "Sushi & Sashimi", "Grilled Fish", "Light Pasta", "Shellfish", "Salads", "Fruit Salad", "Assorted Cheeses", "Fruit (Parfaits, Pies",
        ],
        tasteProfileWine: "Big and bold reds/fat and fruity whites",
        tasteProfileBeer: "Heffenwiesen and Light Beers",
        ingredients: { rice: "Aichonohikari", water: "On-site well water", yeast: "Shizuoka HD-1", sulfites: false, preservatives: false },
        sakeMeterValue: "0",
        sweetOrDry: "Sweet",
        body: "Full",
        acidity: 1.5,
        aminoAcids: 1.2,
        servingTemp: "Chilled"
    },
]

export default products;