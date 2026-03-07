// Easily editable menu data for The Pastry Place

// ==================
// BAKED CHEESECAKES
// ==================
import bakedLotus from "../assets/cake/bake biscoff.jpeg";
import bakedBlueberry from "../assets/cake/bake blueberry.jpeg";
import bakedStrawberry from "../assets/cake/bake strawberry.jpeg";
import bakedNutella from "../assets/cake/bake nutella.jpeg";
import bakedKunafa from "../assets/cake/bake kunafa.jpeg";
import bakedDeath from "../assets/cake/bake death by choco.jpeg";

// ==================
// NON-BAKED CHEESECAKES
// ==================
import nonLotus from "../assets/cake/biscoff.jpeg";
import nonBlueberry from "../assets/cake/blueberry.jpeg";
import nonStrawberry from "../assets/cake/strawberry.jpeg";
import nonNutella from "../assets/cake/nutella.jpeg";
import nonKunafa from "../assets/cake/pistachio.jpeg";

// ==================
// TIRAMISU
// ==================
import tiramisu from "../assets/cake/tiramisu.jpeg";
import choctiramisu from "../assets/cake/tiramisu chocolate.jpeg";

// ==================
// BROWNIES
// ==================
import fudge from "../assets/cake/fudge.jpeg";
import millionaire from "../assets/cake/millionaire.jpeg";
import walfudge from "../assets/cake/walnut fudge.jpeg";
import bomboloni from "../assets/cake/bomboloni.jpeg";
import brookies from "../assets/cake/brookies.jpeg";
import kunafa from "../assets/cake/kunafa.jpeg";

// cookies

import nankhatai from "../assets/cookies/Nankhatai - Binjal's VEG Kitchen.jpg";
import coconutCookies from "../assets/cookies/coconutcookie.jpg";
import karachiCookies from "../assets/cookies/karachiCookies.jpg";
import butterCookies from "../assets/cookies/butter.jpg";
import ajwainCookies from "../assets/cookies/ajwainCookies.jpg";
import nutellaThumbprint from "../assets/cookies/Butter Nutella ThumbprintCookies.jpg";
import brookie from "../assets/cookies/brookie.jpg";
import pistachioCookies from "../assets/cookies/pistachio.jpg";
import oatsChocoChip from "../assets/cookies/Oatmeal Chocolate.jpg";
import attaBiscuits from "../assets/cookies/atta.jpg";
import shrewsburyBiscuits from "../assets/cookies/shrewsburyBiscuits.jpg";
import periPeriThins from "../assets/cookies/thins.jpg";
import cheeseHerbCrackers from "../assets/cookies/cheese.jpg";
import newYorkCookies from "../assets/cookies/NewYorkCookies.jpg";
import danishButterCookies from "../assets/cookies/danish.jpg";
import miniLemonCookies from "../assets/cookies/lemon.jpg";
import kajuPistaBiscuits from "../assets/cookies/pista.jpg";
import chocolateChipBiscuits from "../assets/cookies/chocolateChipBiscuits.jpg";
import ragiOatsCookies from "../assets/cookies/ragi.jpg";
import masalaCookies from "../assets/cookies/masala.jpg";

// cakes
import blueberryCake from "../assets/Cakes/Blueberry.jpg";
import blackCurrantCake from "../assets/Cakes/blackcurrent.jpg";
import tenderCoconutCake from "../assets/Cakes/CoconutCake.jpg";
import chocolateButterscotchCake from "../assets/Cakes/chocolateButterscotch Cake.jpg";
import butterscotchCake from "../assets/Cakes/Butterscotch Cake.jpg";
import kajuMalaiCake from "../assets/Cakes/kajumalai Cake.jpg";
import rasmalaiCake from "../assets/Cakes/Rasmalai Cake.jpg";
import chocolateFudgeCake from "../assets/Cakes/Chocolatefudgecake.jpg";
import redVelvetCake from "../assets/Cakes/redvelvet.jpg";
import chocolateMousseCake from "../assets/Cakes/Chocolate Mousse Cake.jpg";
import cookieCreamCake from "../assets/Cakes/CookiesCreamCake.jpg";
import mixedFruitCake from "../assets/Cakes/Mix Fruit Cake.jpg";
import chocoBerryCake from "../assets/Cakes/choco berry.jpg";
import richyRoseCake from "../assets/Cakes/Rose Cake.jpg";
import biscoffCake from "../assets/Cakes/biscoff.jpg";
import pineappleCake from "../assets/Cakes/pineapple.jpg";
import mangoCake from "../assets/Cakes/Mango Cake.jpg";
import lichiCake from "../assets/Cakes/litchicake.jpg";
import KiwiCake from "../assets/Cakes/kiwiCake.jpg";
// items

export interface MenuItem {
  name: string;
  price: string;
  image: string;
}

// ==================
// NON-BAKED MENU
// ==================
export const noBakeCheesecakeMenu: MenuItem[] = [
  { name: "Lotus Biscoff", price: "₹100", image: nonLotus },
  { name: "Blueberry", price: "₹100", image: nonBlueberry },
  { name: "Strawberry", price: "₹100", image: nonStrawberry },
  { name: "Nutella", price: "₹100", image: nonNutella },
  { name: "Kunafa Pistachio", price: "₹100", image: nonKunafa },
];

// ==================
// BAKED MENU
// ==================
export const bakedCheesecakeMenu: MenuItem[] = [
  
  { name: "Lotus Biscoff", price: "₹140", image: bakedLotus },
  { name: "Blueberry", price: "₹140", image: bakedBlueberry },
  { name: "Strawberry", price: "₹150", image: bakedStrawberry },
  { name: "Nutella", price: "₹140", image: bakedNutella },
  { name: "Kunafa Pistachio", price: "₹140", image: bakedKunafa },
  { name: "Death By Chocolate", price: "₹150", image: bakedDeath },
];

// ==================
// TIRAMISU MENU
// ==================
export const tiramisuMenu: MenuItem[] = [
  { name: "Classic Tiramisu", price: "₹140", image: tiramisu },
  { name: "Chocolate Tiramisu", price: "₹160", image: choctiramisu },
];

// ==================
// BROWNIES MENU
// ==================
export const browniesMenu: MenuItem[] = [
  { name: "Millionaire", price: "₹100", image: millionaire },
  { name: "Kunafa", price: "₹100", image: kunafa },
  { name: "Brookies", price: "₹100", image: brookies },
  { name: "Fudge", price: "₹100", image: fudge },
  { name: "Bomboloni", price: "₹100", image: bomboloni },
  { name: "Walnut Fudge", price: "₹100", image: walfudge },
];
