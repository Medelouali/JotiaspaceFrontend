import bicycle from "./svg/transport/bicycle.svg";
import motorcycle from "./svg/transport/motorcycle.svg";
import car from "./svg/transport/car.svg";
import bus from "./svg/transport/bus.svg";
import truck from "./svg/transport/truck.svg";
import plane from "./svg/transport/plane.svg";

import pc from "./svg/electronics/pc.svg";
import mobile from "./svg/electronics/mobile.svg";

import hat from "./svg/clothings/hat.svg";
import socks from "./svg/clothings/socks.svg";
import tshirt from "./svg/clothings/tshirt.svg";

import house from "./svg/properties/house.svg";
import hotel from "./svg/properties/hotel.svg";
import restaurant from "./svg/properties/restaurant.svg";
import store from "./svg/properties/store.svg";

import cat from "./svg/animals/cat.svg";
import crow from "./svg/animals/crow.svg";
import dog from "./svg/animals/dog.svg";
import horse from "./svg/animals/horse.svg";

import mobile_ from "./svg/apps/mobile.svg";
import web from "./svg/apps/web.svg";

const collections={
    transport: [
        {name: "Bikes", logo: bicycle},
        {name: "Motorcycles", logo: motorcycle},
        {name: "Cars", logo: car},
        {name: "Buses", logo: bus},
        {name: "Trucks", logo: truck},
        {name: "Planes", logo: plane},
    ],
    electronics:[
        {name: "pcs", logo: pc},
        {name: "mobiles", logo: mobile}
    ],
    clothings:[
        {name: "Hats", logo: hat},
        {name: "Socks", logo: socks},
        {name: "Tshirts", logo: tshirt}
    ],
    properties:[
        {name: "Hotels", logo: hotel},
        {name: "Houses", logo: house},
        {name: "Restaurants", logo: restaurant},
        {name: "Stores", logo: store},
    ],
    animals:[
        {name: "Dogs", logo: dog},
        {name: "Cats", logo: cat},
        {name: "Birds", logo: crow},
        {name: "Horses", logo: horse},
    ],
    apps:[
        {name: "Mobiles", logo: mobile_},
        {name: "Webs", logo: web}
    ]
};

export default collections;