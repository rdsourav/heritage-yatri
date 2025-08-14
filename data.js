const destinationsData = [
    {
        id: 1,
        name: "Harishankar Temple",
        category: "Temple",
        shortDescription: "A serene temple nestled between two hills, with a picturesque stream.",
        longDescription: "The Harishankar Temple is a unique shrine located on the southern slope of the Gandhamardan Hills. It is dedicated to the dual deities of Hari (Lord Vishnu) and Shankar (Lord Shiva). A perennial stream flows down the granite bed, creating a beautiful environment that attracts pilgrims and nature lovers alike.",
        images: ["images/dest-harishankar.webp"],
        quickFacts: {
            bestTime: "October to March",
            entryFee: "None",
            timeRequired: "3 - 4 hours",
            activities: "Pilgrimage, Trekking, Picnic"
        },
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15024.4984252199!2d82.8598716248386!3d20.887208249821616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a251c6555555555%3A0x89793185341c2c2e!2sHarishankar%20Temple!5e0!3m2!1sen!2sin!4v1668273824512!5m2!1sen!2sin"
    },
    {
        id: 2,
        name: "Hirakud Dam",
        category: "Historical Site",
        shortDescription: "One of the longest earthen dams in the world, offering breathtaking views.",
        longDescription: "Built across the Mahanadi River, Hirakud Dam is an engineering marvel and a major tourist attraction. The vast reservoir forms the largest artificial lake in Asia. Visitors can enjoy panoramic views from the revolving tower, Gandhi Minar, and witness the spectacular release of water during the monsoon.",
        images: ["images/dest-hirakud.webp"],
        quickFacts: {
            bestTime: "September to March",
            entryFee: "Free (charges for tower)",
            timeRequired: "2 - 3 hours",
            activities: "Sightseeing, Boating, Photography"
        },
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.684179426372!2d83.8569996149429!3d21.5975567856926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a213b38234a9b6d%3A0x2c64e5651b279603!2sHirakud%20Dam!5e0!3m2!1sen!2sin!4v1668274000000!5m2!1sen!2sin"
    },
    {
        id: 3,
        name: "64 Yoginis Temple",
        category: "Historical Site",
        shortDescription: "A unique circular temple with ancient tantric heritage and stunning carvings.",
        longDescription: "Located in Ranipur-Jharial, this hypaethral (roofless) temple is one of the few surviving temples of its kind in India. It is dedicated to the 64 Yoginis, manifestations of the divine feminine. The site holds immense archaeological and historical importance.",
        images: ["images/dest-yogini.webp"],
        quickFacts: {
            bestTime: "November to February",
            entryFee: "None",
            timeRequired: "1 - 2 hours",
            activities: "History, Architecture, Spirituality"
        },
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.648386345638!2d83.3361111149432!3d20.29416668638198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a23a8d1e9d1a38b%3A0x6a0e698188182f5b!2sChausath%20Yogini%20Temple!5e0!3m2!1sen!2sin!4v1668274100000!5m2!1sen!2sin"
    },
    {
        id: 4,
        name: "Pradhanpat Waterfalls",
        category: "Nature",
        shortDescription: "A spectacular waterfall surrounded by a forest, perfect for a day trip.",
        longDescription: "Located near Deogarh, the Pradhanpat waterfall is a scenic spot known for its natural beauty. The water cascades down a series of steps, creating a mesmerizing effect. It's an ideal location for picnics and relaxation.",
        images: ["images/dest-pradhanpat.webp"],
        quickFacts: {
            bestTime: "Monsoon & Post-Monsoon",
            entryFee: "None",
            timeRequired: "2 hours",
            activities: "Picnic, Nature Walk"
        },
        mapUrl: ""
    },
    {
        id: 5,
        name: "Samaleswari Temple",
        category: "Temple",
        shortDescription: "A major Hindu shrine dedicated to the goddess Maa Samaleswari.",
        longDescription: "Situated on the banks of the river Mahanadi in Sambalpur, this temple is a significant pilgrimage center. The goddess is the presiding deity of Western Odisha, and the temple architecture reflects the local style.",
        images: ["images/dest-samaleswari.webp"],
        quickFacts: {
            bestTime: "All year",
            entryFee: "None",
            timeRequired: "1-2 hours",
            activities: "Pilgrimage, Spirituality"
        },
        mapUrl: ""
    },
    {
        id: 6,
        name: "Debrigarh Wildlife Sanctuary",
        category: "Nature",
        shortDescription: "Home to diverse flora and fauna, ideal for wildlife enthusiasts.",
        longDescription: "Adjacent to the Hirakud Dam, this sanctuary is home to a rich variety of wildlife, including Indian bison, sambar, and numerous bird species. It's a fantastic destination for safaris and bird watching.",
        images: ["images/dest-debrigarh.webp"],
        quickFacts: {
            bestTime: "November to April",
            entryFee: "Varies",
            timeRequired: "Half-day",
            activities: "Jungle Safari, Bird Watching"
        },
        mapUrl: ""
    },
    {
        id: 7,
        name: "Nrusinghanath Temple",
        category: "Temple",
        shortDescription: "A revered 14th-century temple at the foothills of the Gandhamardan Hills.",
        longDescription: "Located on the northern slope of the Gandhamardan hills, this temple forms a pair with Harishankar on the southern slope. It is dedicated to Lord Nrusinghanath, an avatar of Lord Vishnu.",
        images: ["images/dest-nrusinghanath.webp"],
        quickFacts: {
            bestTime: "October to March",
            entryFee: "None",
            timeRequired: "2-3 hours",
            activities: "Pilgrimage, Trekking"
        },
        mapUrl: ""
    },
    {
        id: 8,
        name: "Huma's Leaning Temple",
        category: "Temple",
        shortDescription: "One of the only two leaning temples in the world.",
        longDescription: "Dedicated to Lord Shiva, the Leaning Temple of Huma, located near Sambalpur, is an architectural curiosity. While the main temple leans, the smaller temples within the complex are upright. The reason for the lean remains a mystery.",
        images: ["images/dest-huma.webp"],
        quickFacts: {
            bestTime: "All year",
            entryFee: "None",
            timeRequired: "1 hour",
            activities: "Architecture, Spirituality"
        },
        mapUrl: ""
    },
    {
        id: 9,
        name: "Patora Dam",
        category: "Nature",
        shortDescription: "A scenic dam and picnic spot surrounded by lush greenery.",
        longDescription: "Located in the Nuapada district, Patora Dam is built on the Jonk River. The surrounding Yogeswar Temple and lush forests make it a popular spot for locals and tourists looking for a tranquil getaway.",
        images: ["images/dest-patora.webp"],
        quickFacts: {
            bestTime: "Winter",
            entryFee: "None",
            timeRequired: "2-3 hours",
            activities: "Picnic, Boating"
        },
        mapUrl: ""
    },
    {
        id: 10,
        name: "Gudguda Waterfall",
        category: "Nature",
        shortDescription: "A multi-tiered waterfall hidden inside a dense forest.",
        longDescription: "Gudguda, one of the most beautiful waterfalls in the Sambalpur district, offers a stunning sight with water falling from a great height in multiple steps. It's a perfect spot for adventure seekers and trekkers.",
        images: ["images/dest-gudguda.webp"],
        quickFacts: {
            bestTime: "Post-Monsoon",
            entryFee: "None",
            timeRequired: "3-4 hours",
            activities: "Trekking, Adventure"
        },
        mapUrl: ""
    }
];
