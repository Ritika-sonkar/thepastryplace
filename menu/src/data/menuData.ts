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

export interface MenuItem {
  name: string;
  price: string;
  image: string;
}

// ==================
// NON-BAKED MENU
// ==================
export const noBakeCheesecakeMenu: MenuItem[] = [
  { name: "Lotus Biscoff", price: "₹149", image: nonLotus },
  { name: "Blueberry", price: "₹139", image: nonBlueberry },
  { name: "Strawberry", price: "₹139", image: nonStrawberry },
  { name: "Nutella", price: "₹149", image: nonNutella },
  { name: "Kunafa Pistachio", price: "₹149", image: nonKunafa },
];

// ==================
// BAKED MENU
// ==================
export const bakedCheesecakeMenu: MenuItem[] = [
  
  { name: "Lotus Biscoff", price: "₹180", image: bakedLotus },
  { name: "Blueberry", price: "₹180", image: bakedBlueberry },
  { name: "Strawberry", price: "₹180", image: bakedStrawberry },
  { name: "Nutella", price: "₹180", image: bakedNutella },
  { name: "Kunafa Pistachio", price: "₹180", image: bakedKunafa },
  { name: "Death By Chocolate", price: "₹190", image: bakedDeath },
];

// ==================
// TIRAMISU MENU
// ==================
export const tiramisuMenu: MenuItem[] = [
  { name: "Classic Tiramisu", price: "₹249/170", image: tiramisu },
  { name: "Chocolate Tiramisu", price: "₹289/190", image: choctiramisu },
];

// ==================
// BROWNIES MENU
// ==================
export const browniesMenu: MenuItem[] = [
  { name: "Millionaire", price: "₹110", image: millionaire },
  { name: "Kunafa", price: "₹110", image: kunafa },
  { name: "Brookies", price: "₹110", image: brookies },
  { name: "Fudge", price: "₹110", image: fudge },
  { name: "Bomboloni", price: "₹80", image: bomboloni },
  { name: "Walnut Fudge", price: "₹110", image: walfudge },
];
