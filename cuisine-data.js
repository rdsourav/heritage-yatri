const featuredDishes = [
    {
        id: 1, // New ID for the new top item
        name: "Chaulbara",
        image: "images/food-chaulbara.webp", // Assuming you'll create this image
        description: "A popular crispy fritter made from rice flour and spices, often served as a savory snack with chutney. A unique Odia preparation."
    },
    {
        id: 2, // Re-indexed from previous 1
        name: "Pakhala Bhata",
        image: "images/food-pakhala.webp",
        description: "A refreshing and traditional dish of fermented rice, perfect for hot days and served with various side dishes like fried fish or vegetables. A staple in Odia households."
    },
    {
        id: 3, // Re-indexed from previous 2
        name: "Chhena Poda",
        image: "images/food-chenna.webp",
        description: "A classic Odia dessert made from baked fresh cheese, often called the 'Indian Cheesecake' due to its caramelized flavor and soft texture. A must-try sweet treat."
    },
    {
        id: 4, // Re-indexed from previous 3
        name: "Dalma",
        image: "images/food-dalma.webp",
        description: "A nutritious and wholesome curry made with lentils, mixed vegetables, and a unique tempering with pan-roasted spices, central to Odia cuisine."
    },
    {
        id: 5, // Re-indexed from previous 4
        name: "Kakara Pitha",
        image: "images/food-kakara.webp",
        description: "A popular deep-fried sweet cake made from semolina, coconut, and cardamom, often prepared during festivals and special occasions."
    },
    {
        id: 6, // Re-indexed from previous 5
        name: "Santula",
        image: "images/food-santula.webp",
        description: "A light and healthy mixed vegetable curry, usually prepared with minimal oil and spices, highlighting the natural flavors of the vegetables. A healthy option."
    },
    {
        id: 7, // Re-indexed from previous 6
        name: "Chingudi Tarkari",
        image: "images/food-chingudi.webp",
        description: "A delicious prawn curry, often cooked with a blend of local spices, coconut milk, or mustard paste, popular in coastal areas and full of flavor."
    },
    {
        id: 8, // Re-indexed from previous 7
        name: "Macha Besara",
        image: "images/food-machabesara.webp",
        description: "A traditional Odia fish curry prepared with a pungent mustard paste, garlic, and green chilies, offering a distinct and tangy flavor."
    },
    {
        id: 9, // Re-indexed from previous 8
        name: "Kanika",
        image: "images/food-kanika.webp",
        description: "A sweet rice dish, typically prepared during festivals and special occasions, flavored with ghee, sugar, cashews, and raisins. A festive delight."
    },
    {
        id: 10, // Re-indexed from previous 9
        name: "Gupchup (Pani Puri)",
        image: "images/food-gupchup.webp",
        description: "A popular street food snack consisting of crispy hollow balls filled with spicy mashed potatoes, chickpeas, and tangy tamarind water. A burst of flavors."
    },
    {
        id: 11, // Re-indexed from previous 10
        name: "Dahi Vada Aloo Dum",
        image: "images/food-dahivadaaloodum.webp",
        description: "A unique Odia street food where soft lentil vadas soaked in yogurt are served with a spicy potato curry (aloo dum). A must-try savory dish."
    },
    {
        id: 12, // Re-indexed from previous 11
        name: "Bara",
        image: "images/food-bara.webp",
        description: "Deep-fried lentil fritters, crispy on the outside and soft inside, often served with chutney or Dahi Vada Aloo Dum. A popular snack."
    },
    {
        id: 13, // Re-indexed from previous 12
        name: "Chakuli Pitha",
        image: "images/food-chakuli.webp",
        description: "Similar to a dosa, these are thin, soft pancakes made from a fermented rice and lentil batter, often eaten for breakfast or dinner."
    },
    {
        id: 14, // Re-indexed from previous 13
        name: "Enduri Pitha",
        image: "images/food-enduri.webp",
        description: "A traditional steamed cake made with rice flour, stuffed with a sweet coconut and jaggery filling, often wrapped in turmeric leaves for flavor."
    },
    {
        id: 15, // Re-indexed from previous 14
        name: "Khaja",
        image: "images/food-khaja.webp",
        description: "A layered, crispy sweet pastry soaked in sugar syrup, famous as a Prasad (offering) in Jagannath Temple, Puri."
    },
    {
        id: 16, // Re-indexed from previous 15
        name: "Rasagola",
        image: "images/food-rasagola.webp",
        description: "Soft, spongy cheese balls boiled in sugar syrup, prepared in the traditional Odia style with a delicate and tender texture."
    },
    {
        id: 17, // Re-indexed from previous 16
        name: "Arisa Pitha",
        image: "images/food-arisa.webp",
        description: "A traditional sweet dish made from rice flour and jaggery, deep-fried until golden brown, crunchy outside and soft inside."
    },
    {
        id: 18, // Re-indexed from previous 17
        name: "Mudhi Mansa",
        image: "images/food-mudhimansa.webp",
        description: "A popular combination of puffed rice (mudhi) served with spicy mutton curry (mansa), a beloved dish in Western Odisha."
    },
    {
        id: 19, // Re-indexed from previous 18
        name: "Chhena Jhili",
        image: "images/food-chhenajhili.webp",
        description: "Another chhena-based sweet, these are small, fried cheese patties soaked in a light sugar syrup, known for their juicy texture."
    },
    {
        id: 20, // Re-indexed from previous 19
        name: "Chhatu Tarkari",
        image: "images/food-chhatu.webp",
        description: "A flavorful mushroom curry, often prepared with wild mushrooms found locally, and a rich gravy. A popular vegetarian delicacy."
    },
    {
        id: 21, // Re-indexed from previous 20
        name: "Ghuguni",
        image: "images/food-ghuguni.webp",
        description: "A savory curry made from dried white peas, spiced with various masalas, and often served with puri, bara, or chakuli. A versatile dish."
    }
];

const recommendedRestaurants = [
    {
        id: 1,
        name: "Balangir Spice",
        location: "Tikrapara, Balangir",
        specialty: "Authentic local thalis with traditional flavors and a wide range of Odia vegetarian and non-vegetarian dishes. Known for its 'Mudhi Mansa'.",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Balangir+Spice+Tikrapara+Balangir"
    },
    {
        id: 2,
        name: "The Hirakud Kitchen",
        location: "Near Hirakud Dam, Sambalpur",
        specialty: "Specializes in fresh fish dishes straight from the Mahanadi river, including local delicacies like 'Macha Ghanta' and 'Chingudi Besar'. Scenic lakeside dining.",
        mapLink: "https://www.google.com/maps/search/?api=1&query=The+Hirakud+Kitchen+Sambalpur"
    },
    {
        id: 3,
        name: "Maa Samaleswari Eatery",
        location: "Temple Road, Sambalpur",
        specialty: "Traditional vegetarian meals served in a homely atmosphere, focusing on temple-style 'Bhoga' and 'Dalma'. Perfect for a spiritual culinary experience.",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Maa+Samaleswari+Eatery+Sambalpur"
    },
    {
        id: 4,
        name: "Patneswari Hotel & Restaurant",
        location: "Main Road, Bargarh",
        specialty: "Known for its delectable 'Pakhala Bhata' and various traditional Odia curries, a local favorite for everyday meals. Good for a quick, authentic bite.",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Patneswari+Hotel+Restaurant+Bargarh"
    },
    {
        id: 5,
        name: "Nuakhai Rasoi",
        location: "Ring Road, Jharsuguda",
        specialty: "A modern restaurant offering a fusion of Odia and Indian cuisine, popular for its vibrant ambiance and innovative dishes. Great for families.",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Nuakhai+Rasoi+Jharsuguda"
    },
    {
        id: 6,
        name: "Kosal Cafe & Bites",
        location: "College Square, Sonepur",
        specialty: "A cozy spot famous for its local snacks, 'Pithas' (Odia cakes), and refreshing beverages, perfect for a quick bite or an evening snack.",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Kosal+Cafe+Bites+Sonepur"
    },
    {
        id: 7,
        name: "Devi Palace Hotel & Restaurant",
        location: "Near City Bus Stand, Bhawanipatna",
        specialty: "Offers a mix of Odia and multi-cuisine options with comfortable dining. Good for travelers looking for variety.",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Devi+Palace+Hotel+Restaurant+Bhawanipatna"
    },
    {
        id: 8,
        name: "Hotel Maharaja",
        location: "Station Road, Bolangir",
        specialty: "A well-established restaurant known for its reliable North Indian and Chinese dishes, alongside some local Odia items. Family-friendly.",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Maharaja+Bolangir"
    },
    {
        id: 9,
        name: "Odisha Bites",
        location: "Near Budharaja Temple, Sambalpur",
        specialty: "A casual eatery popular for its street food options like 'Gupchup', 'Dahi Vada Aloo Dum', and 'Bara'. Lively atmosphere.",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Odisha+Bites+Sambalpur"
    },
    {
        id: 10,
        name: "The Dhaba",
        location: "NH-53, Deogarh",
        specialty: "A highway-side eatery offering hearty Indian meals, including delicious tandoori items and curries. Great for travelers on the go.",
        mapLink: "https://www.google.com/maps/search/?api=1&query=The+Dhaba+Deogarh"
    },
    {
        id: 11,
        name: "Royal Kitchen",
        location: "Main Road, Titilagarh",
        specialty: "Serves traditional Odia food with a focus on local ingredients. Known for its authentic 'Macha Besara' and 'Chingudi Tarkari'.",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Royal+Kitchen+Titilagarh"
    },
    {
        id: 12,
        name: "Green Chilly Restaurant",
        location: "Near VSSUT, Burla",
        specialty: "Popular among students and locals for its affordable and tasty Chinese and Indian fast food, along with some Odia snacks.",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Green+Chilly+Restaurant+Burla"
    },
    {
        id: 13,
        name: "Urban Tadka",
        location: "Modipara, Sambalpur",
        specialty: "A contemporary restaurant offering a wide range of Indian and continental dishes in a stylish setting. Good for a fine dining experience.",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Urban+Tadka+Sambalpur"
    },
    {
        id: 14,
        name: "Swastik Restaurant",
        location: "Near Railway Station, Rayagada",
        specialty: "A popular spot for travelers, offering a variety of vegetarian and non-vegetarian meals. Known for its prompt service and fresh food.",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Swastik+Restaurant+Rayagada"
    },
    {
        id: 15,
        name: "Hotel Ambika",
        location: "Old Town, Jharsuguda",
        specialty: "An established hotel restaurant with a reputation for serving good quality traditional Odia thalis and South Indian breakfast items.",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Hotel+Ambika+Jharsuguda"
    },
    {
        id: 16,
        name: "The Food Plaza",
        location: "Collectorate Road, Sundargarh",
        specialty: "A multi-cuisine restaurant popular for its diverse menu, including Indian, Chinese, and some continental options. Suitable for all tastes.",
        mapLink: "https://www.google.com/maps/search/?api=1&query=The+Food+Plaza+Sundargarh"
    }
];

