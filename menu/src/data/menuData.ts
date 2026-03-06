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

import nankhatai from "../assets/cookies/nankhatai.jpg";
import coconutCookies from "../assets/cookies/coconutcookies.jpg";
import karachiCookies from "../assets/cookies/karachiCookies.jpg";
import butterCookies from "../assets/cookies/buttercookies.jpg";
import ajwainCookies from "../assets/cookies/ajwainCookies.jpg";
import nutellaThumbprint from "../assets/cookies/nutellaThumbprint.jpg";
import brookie from "../assets/cookies/brookie.jpg";
import pistachioCookies from "../assets/cookies/pistachioCookies.jpg";
import oatsChocoChip from "../assets/cookies/oatsChocoChip.jpg";
import attaBiscuits from "../assets/cookies/attaBiscuits.jpg";
import shrewsburyBiscuits from "../assets/cookies/shrewsburyBiscuits.jpg";
import periPeriThins from "../assets/cookies/periPeriThins.jpg";
import cheeseHerbCrackers from "../assets/cookies/cheeseHerbCrackers.jpg";
import newYorkCookies from "../assets/cookies/NewYorkCookies.jpg";
import danishButterCookies from "../assets/cookies/danishButterCookies.jpg";
import miniLemonCookies from "../assets/cookies/miniLemonCookies.jpg";
import kajuPistaBiscuits from "../assets/cookies/kajuPistaBiscuits.jpg";
import chocolateChipBiscuits from "../assets/cookies/chocolateChipBiscuits.jpg";
import ragiOatsCookies from "../assets/cookies/ragiOatsCookies.jpg";
import masalaCookies from "../assets/cookies/masalaCookies.jpg";

// cakes
import blueberryCake from "../assets/cakes/blueberryCake.jpg";
import blackCurrantCake from "../assets/cakes/blackCurrantCake.jpg";
import tenderCoconutCake from "../assets/cakes/tenderCoconutCake.jpg";
import chocolateButterscotchCake from "../assets/cakes/chocolateButterscotchCake.jpg";
import butterscotchCake from "../assets/cakes/butterscotchCake.jpg";
import kajuMalaiCake from "../assets/cakes/kajuMalaiCake.jpg";
import rasmalaiCake from "../assets/cakes/rasmalaiCake.jpg";
import chocolateFudgeCake from "../assets/cakes/chocolateFudgeCake.jpg";
import redVelvetCake from "../assets/cakes/redVelvetCake.jpg";
import chocolateMousseCake from "../assets/cakes/chocolateMousseCake.jpg";
import cookieCreamCake from "../assets/cakes/cookieCreamCake.jpg";
import mixedFruitCake from "../assets/cakes/mixedFruitCake.jpg";
import chocoBerryCake from "../assets/cakes/chocoBerryCake.jpg";
import richyRoseCake from "../assets/cakes/richyRoseCake.jpg";
import biscoffCake from "../assets/cakes/biscoffCake.jpg";
import pineappleCake from "../assets/cakes/pineappleCake.jpg";
import mangoCake from "../assets/cakes/mangoCake.jpg";
import lichiCake from "../assets/cakes/litchiCake.jpg";
import KiwiCake from "../assets/cakes/KiwiCake.jpg";

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
