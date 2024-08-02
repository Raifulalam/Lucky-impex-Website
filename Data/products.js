export function getProduct(productId) {
    let matchingProducts;
    products.forEach((product) => {
        if (product.id === productId) {
            matchingProducts = product;
        }
    });
    return matchingProducts;
}
class Product {
    id;
    image;
    name;
    link;
    details;
    rating;
    mrp;
    price;
    keywords;

    constructor(productDetails) {
        this.id = productDetails.id;
        this.image = productDetails.image;
        this.name = productDetails.name;
        this.link = productDetails.link;
        this.details = productDetails.details;
        this.rating = productDetails.rating;
        this.mrp = productDetails.mrp;
        this.price = productDetails.price;
        this.keywords = productDetails.keywords;
    }
    getStarsUrl() {
        return ` images/ratings/rating-${this.rating.stars * 10}.png`;
    }
    getPrice() {
        return ` Rs.${this.price}`;

    }
    getMrp() {
        return ` Rs.${this.mrp}`
    }
    getDiscount() {
        return `Rs ${this.mrp - this.price}`
    }
    getKeywords() {
        return this.keywords.join(', ')
    }
    // extraInfoHTML() {
    //     return ``;
    // }

}

// class Lothing extends Product {
//     sizeChartLink;
//     constructor(productDetails) {
//         super(productDetails);
//         this.sizeChartLink = productDetails.sizeChartLink;
//     }

//     extraInfoHTML() {

//         return `
//         <a href="${this.sizeChartLink}" target="_blank">
//         Sizechat
//         </a>
//         `

//     }
// }
/*
const date = new Date();
console.log(date)
console.log(date.toLocaleDateString())

*/
export const products = [
    {
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        image: "image/doubledoor/1ECB5DF2089DD3E-RT28A32216R.png",
        name: "RT28A32216R Samsung Double Door Refrigerator with Digital Inverter Technology, 253L",
        link: "details.html",
        details: "refrigerator of 100l samsung 22452",
        rating: {
            stars: 4.5,
            count: 87
        },
        mrp: 60990,
        price: 51000,
        keywords: [
            "doubledoor",
            "rt28a32216r",
            "253",
            "refrigerator",
            "samsung",
        ]
    },
    {
        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        image: "image/doubledoor/9D5A8F698D4550F-RT28A32216U.png",
        name: "RT28A32216U Samsung Double Door Refrigerator with Digital Inverter Technology, 253L",
        rating: {
            stars: 4,
            count: 127
        },
        mrp: 60990,
        price: 51000,
        keywords: [
            "doubledoor",
            "rt28a32216u",
            "253",
            "refrigerator",
            "samsung",
        ]
    },
    {
        id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        image: "image/doubledoor/11D12E847973D5A-RT28C3221CR.png",
        name: "RT28C3221CR Samsung Double Door Refrigerator, 253L",
        rating: {
            stars: 4.5,
            count: 56
        },
        mrp: 61990,
        price: 51500,
        keywords: [
            "doubledoor",
            "rt28a3221cr",
            "253",
            "refrigerator",
            "samsung",
        ],

    },
    {
        id: "54e0eccd-8f36-462b-b68a-8182611d9add",
        image: "image/doubledoor/11DEAB55E1C3117-RT37C4521S8.png",
        name: "RT37C4521S8 Samsung Double Door Refrigerator, 345L",
        rating: {
            stars: 5,
            count: 219
        },
        mrp: 84990,
        price: 71000,
        keywords: [
            "doubledoor",
            "rt37c4521s8",
            "345",
            "refrigerator",
            "samsung",
        ]
    },
    {
        id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
        image: "image/doubledoor/A99F06C790B076B-RT28A3022GS.png",
        name: "RT28A3022GS Samsung Double Door Refrigerator with Digital Inverter Technology, 253L",
        rating: {
            stars: 4,
            count: 37
        },
        mrp: 56490,
        price: 46500,
        keywords: [
            "doubledoor",
            "rt28a3022gs",
            "253",
            "refrigerator",
            "samsung",
        ]
    },
    {
        id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
        image: "image/doubledoor/AF918959F338CE2-RT28C3221CU.png",
        name: "RT28C3221CU Samsung Double Door Refrigerator, 253L",
        rating: {
            stars: 4.5,
            count: 175
        },
        mrp: 61990,
        price: 51500,
        keywords: [
            "doubledoor",
            "rt28c3221cu",
            "253",
            "refrigerator",
            "samsung",
        ]
    },
    {
        id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
        image: "image/doubledoor/F889302D3166DF5-RT30K3342S8.png",
        name: "RT30K3342S8 Samsung Double Door Refrigerator, 275L",
        rating: {
            stars: 4.5,
            count: 317
        },
        mrp: 67990,
        price: 55500,
        keywords: [
            "doubledoor",
            "rt30k3342s8",
            "275",
            "refrigerator",
            "samsung",

        ]
    },
    //single door
    {
        id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
        image: "image/Single-door/1DA2BEA520BC02C-RR20C20C2RH.png",
        name: "RR20C20C2RH Samsung Single Door Refrigerator, 192L",
        rating: {
            stars: 4.5,
            count: 144
        },
        mrp: 32990,
        price: 27500,
        keywords: [
            "singledoor",
            "192",
            "refrigerator",
            "rr20c20c2rh",
            "samsung",

        ]
    },
    {
        id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
        image: "image/Single-door/2A2CA29862D7AB6-RR20T282ZR8.png",
        name: "RR20T282ZR8 Samsung Single Door Refrigerator with Digital Inverter Compressor, 192L",
        rating: {
            stars: 4.5,
            count: 305
        },
        mrp: 41990,
        price: 36000,
        keywords: [
            "singledoor",
            "192",
            "refrigerator",
            "rr20t282zr8",
            "samsung",
        ]
    },
    {
        id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
        image: "image/Single-door/7F470F4B6BA5539-RR20C2Z226U.png",
        name: "RR20C2Z226U Samsung Single Door Refrigerator, 192L",
        rating: {
            stars: 4,
            count: 89
        },
        mrp: 39590,
        price: 33500,
        keywords: [
            "singledoor",
            "192",
            "refrigerator",
            "rr20c2z226u",
            "samsung",
        ]
    },
    {
        id: "5968897c-4d27-4872-89f6-5bcb052746d7",
        image: "image/Single-door/8E7A9442734E2F4-RR20C2Z226R.png",
        name: "RR20C2Z226R Samsung Single Door Refrigerator, 192L",
        rating: {
            stars: 4.5,
            count: 235
        },
        mrp: 39590,
        price: 33500,
        keywords: [
            "singledoor",
            "192",
            "refrigerator",
            "rr20c2z226r",
            "samsung",
        ],

    },
    {
        id: "aad29d11-ea98-41ee-9285-b916638cac4a",
        image: "image/Single-door/563F7C13FC6004D-RR20M282ZS8.png",
        name: "RR20M282ZS8 Samsung Single Door Refrigerator with Digital Inverter Technology, 192L",
        rating: {
            stars: 4.5,
            count: 30
        },
        mrp: 38990,
        price: 33000,
        keywords: [
            "singledoor",
            "192",
            "refrigerator",
            "rr20m282zs8",
            "samsung",
        ]
    },
    {
        id: "04701903-bc79-49c6-bc11-1af7e3651358",
        image: "image/Single-door/757D53379073106-RR20C2412S8.png",
        name: "RR20C2412S8 Samsung Single Door Refrigerator, 192L",
        rating: {
            stars: 4.5,
            count: 562
        },
        mrp: 36990,
        price: 31500,
        keywords: [
            "singledoor",
            "192",
            "refrigerator",
            "rr20c2412s8",
            "samsung",
        ]
    },
    {
        id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
        image: "image/Single-door/857BCE683515D79-RR20C2722CR.png",
        name: "RR20C2722CR Samsung Single Door Refrigerator, 192L",
        rating: {
            stars: 4.5,
            count: 232
        },
        mrp: 37990,
        price: 32500,
        keywords: [
            "singledoor",
            "192",
            "refrigerator",
            "rr20c2722cr",
            "samsung",
        ]
    },
    {
        id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
        image: "image/Single-door/5744E605DA3F99D-RR20C2722CU.png",
        name: "RR20C2722CU Samsung Single Door Refrigerator, 192L",
        rating: {
            stars: 4,
            count: 160
        },
        mrp: 37990,
        price: 32500,
        keywords: [
            "singledoor",
            "192",
            "refrigerator",
            "rr20c2722cu",
            "samsung",
        ]
    },

    {
        id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
        image: "image/Single-door/8071322C7EC07CC-RR20C20C2GS.png",
        name: "RR20C20C2GS Samsung Single Door Refrigerator, 192L",
        rating: {
            stars: 4,
            count: 99
        },
        mrp: 33490,
        price: 28500,
        keywords: [
            "singledoor",
            "192",
            "refrigerator",
            "rr20c20c2gs",
            "samsung",
        ]
    },
    {
        id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
        image: "image/Single-door/E3EAF0181A3C8AB-RR20T282ZU8.png",
        name: "RR20T282ZU8 Samsung Single Door Refrigerator with Digital Inverter Compressor, 192L",
        rating: {
            stars: 4.5,
            count: 52
        },
        mrp: 41990,
        price: 36000,
        keywords: [
            "singledoor",
            "192",
            "refrigerator",
            "rr20t282zu8",
            "samsung",
        ]
    },
    {
        id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
        image: "images/products/women-stretch-popover-hoodie-black.jpg",
        name: "Women's Stretch Popover Hoodie",
        rating: {
            stars: 4.5,
            count: 2465
        },
        priceCents: 1374,
        keywords: [
            "hooded",
            "hoodies",
            "sweaters",
            "womens",
            "apparel"
        ],
    },
    {
        id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
        image: "images/products/bathroom-rug.jpg",
        name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
        rating: {
            stars: 4.5,
            count: 119
        },
        priceCents: 1250,
        keywords: [
            "bathmat",
            "bathroom",
            "home"
        ]
    },
    {
        id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
        image: "images/products/women-knit-ballet-flat-black.jpg",
        name: "Women's Knit Ballet Flat",
        rating: {
            stars: 4,
            count: 326
        },
        priceCents: 2640,
        keywords: [
            "shoes",
            "flats",
            "womens",
            "footwear"
        ]
    },
    {
        id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
        image: "images/products/men-golf-polo-t-shirt-blue.jpg",
        name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
        rating: {
            stars: 4.5,
            count: 2556
        },
        priceCents: 1599,
        keywords: [
            "tshirts",
            "shirts",
            "apparel",
            "mens"
        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
    },
    {
        id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
        image: "images/products/trash-can-with-foot-pedal-50-liter.jpg",
        name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
        rating: {
            stars: 4.5,
            count: 2286
        },
        priceCents: 8300,
        keywords: [
            "garbage",
            "bins",
            "cans",
            "kitchen"
        ]
    },
    {
        id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
        image: "images/products/duvet-cover-set-blue-twin.jpg",
        name: "Duvet Cover Set with Zipper Closure",
        rating: {
            stars: 4,
            count: 456
        },
        priceCents: 2399,
        keywords: [
            "bedroom",
            "bed sheets",
            "sheets",
            "covers",
            "home"
        ]
    },
    {
        id: "d2785924-743d-49b3-8f03-ec258e640503",
        image: "images/products/women-chunky-beanie-gray.webp",
        name: "Women's Chunky Cable Beanie - Gray",
        rating: {
            stars: 5,
            count: 83
        },
        priceCents: 1250,
        keywords: [
            "hats",
            "winter hats",
            "beanies",
            "tuques",
            "apparel",
            "womens"
        ]
    },
    {
        id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
        image: "images/products/men-chino-pants-beige.jpg",
        name: "Men's Classic-fit Pleated Chino Pants",
        rating: {
            stars: 4.5,
            count: 9017
        },
        priceCents: 2290,
        keywords: [
            "pants",
            "apparel",
            "mens"
        ]
    },
    {
        id: "1c079479-8586-494f-ab53-219325432536",
        image: "images/products/men-athletic-shoes-green.jpg",
        name: "Men's Athletic Sneaker",
        rating: {
            stars: 4,
            count: 229
        },
        priceCents: 3890,
        keywords: [
            "shoes",
            "running shoes",
            "footwear",
            "mens"
        ]
    },
    {
        id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
        image: "images/products/men-navigator-sunglasses-brown.jpg",
        name: "Men's Navigator Sunglasses Pilot",
        rating: {
            stars: 3.5,
            count: 42
        },
        priceCents: 1690,
        keywords: [
            "sunglasses",
            "glasses",
            "accessories",
            "shades"
        ]
    },
    {
        id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
        image: "images/products/non-stick-cooking-set-15-pieces.webp",
        name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
        rating: {
            stars: 4.5,
            count: 511
        },
        priceCents: 6797,
        keywords: [
            "cooking set",
            "kitchen"
        ]
    },
    {
        id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
        image: "images/products/vanity-mirror-silver.jpg",
        name: "Vanity Mirror with Heavy Base - Chrome",
        rating: {
            stars: 4.5,
            count: 130
        },
        priceCents: 1649,
        keywords: [
            "bathroom",
            "washroom",
            "mirrors",
            "home"
        ]
    },
    {
        id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
        image: "images/products/women-french-terry-fleece-jogger-camo.jpg",
        name: "Women's Fleece Jogger Sweatpant",
        rating: {
            stars: 4.5,
            count: 248
        },
        priceCents: 2400,
        keywords: [
            "pants",
            "sweatpants",
            "jogging",
            "apparel",
            "womens"
        ]
    },
    {
        id: "d339adf3-e004-4c20-a120-40e8874c66cb",
        image: "images/products/double-elongated-twist-french-wire-earrings.webp",
        name: "Double Oval Twist French Wire Earrings - Gold",
        rating: {
            stars: 4.5,
            count: 117
        },
        priceCents: 2400,
        keywords: [
            "accessories",
            "womens"
        ]
    },
    {
        id: "d37a651a-d501-483b-aae6-a9659b0757a0",
        image: "images/products/round-airtight-food-storage-containers.jpg",
        name: "Round Airtight Food Storage Containers - 5 Piece",
        rating: {
            stars: 4,
            count: 126
        },
        priceCents: 2899,
        keywords: [
            "boxes",
            "food containers",
            "kitchen"
        ]
    },
    {
        id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
        image: "images/products/coffeemaker-with-glass-carafe-black.jpg",
        name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
        rating: {
            stars: 4.5,
            count: 1211
        },
        priceCents: 2250,
        keywords: [
            "coffeemakers",
            "kitchen",
            "appliances"
        ]
    },
    {
        id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
        image: "images/products/blackout-curtains-black.jpg",
        name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
        rating: {
            stars: 4.5,
            count: 363
        },
        priceCents: 3099,
        keywords: [
            "bedroom",
            "home"
        ]
    },
    {
        id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
        image: "images/products/cotton-bath-towels-teal.webp",
        name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
        rating: {
            stars: 4.5,
            count: 93
        },
        priceCents: 2110,
        keywords: [
            "bathroom",
            "home",
            "towels"
        ]
    },
    {
        id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
        image: "images/products/knit-athletic-sneakers-pink.webp",
        name: "Waterproof Knit Athletic Sneakers - Pink",
        rating: {
            stars: 4,
            count: 89
        },
        priceCents: 3390,
        keywords: [
            "shoes",
            "running shoes",
            "footwear",
            "womens"
        ]
    },
    {
        id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
        image: "images/products/countertop-blender-64-oz.jpg",
        name: "Countertop Blender - 64oz, 1400 Watts",
        rating: {
            stars: 4,
            count: 3
        },
        priceCents: 10747,
        keywords: [
            "food blenders",
            "kitchen",
            "appliances"
        ]
    },
    {
        id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
        image: "images/products/floral-mixing-bowl-set.jpg",
        name: "10-Piece Mixing Bowl Set with Lids - Floral",
        rating: {
            stars: 5,
            count: 679
        },
        priceCents: 3899,
        keywords: [
            "mixing bowls",
            "baking",
            "cookware",
            "kitchen"
        ]
    },
    {
        id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
        image: "images/products/kitchen-paper-towels-30-pack.jpg",
        name: "2-Ply Kitchen Paper Towels - 30 Pack",
        rating: {
            stars: 4.5,
            count: 1045
        },
        priceCents: 5799,
        keywords: [
            "kitchen",
            "kitchen towels",
            "tissues"
        ]
    },
    {
        id: "bc2847e9-5323-403f-b7cf-57fde044a955",
        image: "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
        name: "Men's Full-Zip Hooded Fleece Sweatshirt",
        rating: {
            stars: 4.5,
            count: 3157
        },
        priceCents: 2400,
        keywords: [
            "sweaters",
            "hoodies",
            "apparel",
            "mens"
        ]
    }
].map((productDetails) => {
    // if (productDetails.type === 'clothing') {
    //     return new Lothing(productDetails);

    // }
    return new Product(productDetails);
});

