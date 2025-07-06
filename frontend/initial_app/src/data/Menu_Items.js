import Bruschetta from "../assets/Brushetta.jpeg";
import Riso from "../assets/Arancini.jpg";
import Lasagna from "../assets/lasagna.jpg";
import Spaghetti from "../assets/spaghetti-carbonara.jpg";
import Caprese from "../assets/Caprese.jpeg";
import Risotto from "../assets/risotto.jpeg";
import Pollo from "../assets/Pollo.webp";
import Alfredo from "../assets/Alfredo.jpeg";
import Margherita from "../assets/Margherita.jpeg";
import Osso from "../assets/Osso.jpg";
import Tiramisu from "../assets/Tiramisu.jpg";
import Panna from "../assets/Panna.jpg";
import Cannoli from "../assets/Cannoli.jpg";
import Affogato from "../assets/Affogato.jpg";
import Zuppa from "../assets/Zuppa.jpg";
import Carpaccio from "../assets/Carpaccio-di-Manzo.webp";
import Calamari from "../assets/Calamari-fritte.webp";
import Melanzane from "../assets/Melanzane_alla_parmigiana.webp";
import Gnocchi from "../assets/Gnocchi.jpg";
import Tagliatelle from "../assets/tagliatelle_al_ragu.webp";
import Saltimbocca from "../assets/Saltimbocca.jpg";
import Branzino from "../assets/branzino.jpg";
import Filetto from "../assets/filetto.jpg";
import Torta from "../assets/torta.jpg";
import Gelato from "../assets/gelato.jpg";
import Capresee from "../assets/Caprese.jpeg";
import Biscotti from "../assets/biscotti.jpg";
import Semi from "../assets/semifreddo.jpg";
import Angello from "../assets/angello.jpg";
import Poplet from "../assets/popletto.jpg";
import Fegato from "../assets/fegato.jpg";
import Involtini from "../assets/involtini.jpg";
import Spada from "../assets/Spada.jpg";
import Funghi from "../assets/funghi.jpg";
import Frittelle from "../assets/frittelle.jpg";
import Ravioli from "../assets/ravioli.avif";
import Squid from "../assets/squid.jpg";
import Penne from "../assets/penne.jpg";
import Orecchiette from "../assets/orecchiette.jpg";

export const Menu_Items = [
  {
    item_id: 1,
    name: "Bruschetta al Pomodoro",
    course: "Appetizer",
    price: "8.00",
    calories: "180",
    description:
      "Grilled bread rubbed with garlic and topped with fresh tomatoes, basil, and olive oil.",
    image: Bruschetta,
  },
  {
    item_id: 2,
    name: "Arancini di Riso",
    course: "Appetizer",
    price: "9.50",
    calories: "320",
    description:
      "Crispy fried rice balls filled with mozzarella and ragù, served with marinara sauce.",
    image: Riso,
  },
  {
    item_id: 3,
    name: "Insalata Caprese",
    course: "Appetizer",
    price: "10.00",
    calories: "250",
    description:
      "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze and extra virgin olive oil.",
    image: Caprese,
  },
  {
    item_id: 4,
    name: "Lasagna alla Bolognese",
    course: "Main",
    price: "18.00",
    calories: "850",
    description:
      "Layered pasta with slow-cooked meat sauce, béchamel, and Parmesan cheese.",
    image: Lasagna,
  },
  {
    item_id: 5,
    name: "Spaghetti Carbonara",
    course: "Main",
    price: "17.00",
    calories: "720",
    description:
      "Classic Roman pasta with pancetta, egg, Pecorino Romano, and black pepper.",
    image: Spaghetti,
  },
  {
    item_id: 6,
    name: "Risotto ai Funghi Porcini",
    course: "Main",
    price: "19.00",
    calories: "680",
    description:
      "Creamy Arborio rice cooked with porcini mushrooms and Parmesan cheese.",
    image: Risotto,
  },
  {
    item_id: 7,
    name: "Pollo alla Parmigiana",
    course: "Main",
    price: "20.00",
    calories: "790",
    description:
      "Breaded chicken breast topped with marinara sauce and mozzarella, served with spaghetti.",
    image: Pollo,
  },
  {
    item_id: 8,
    name: "Fettuccine Alfredo",
    course: "Main",
    price: "16.50",
    calories: "840",
    description: "Rich pasta tossed in a creamy Parmesan and butter sauce.",
    image: Alfredo,
  },
  {
    item_id: 9,
    name: "Pizza Margherita",
    course: "Main",
    price: "15.00",
    calories: "700",
    description:
      "Wood-fired pizza with tomato sauce, fresh mozzarella, and basil.",
    image: Margherita,
  },
  {
    item_id: 10,
    name: "Osso Buco alla Milanese",
    course: "Main",
    price: "24.00",
    calories: "900",
    description: "Slow-braised veal shank served with saffron risotto.",
    image: Osso,
  },
  {
    item_id: 11,
    name: "Tiramisu",
    course: "Dessert",
    price: "8.50",
    calories: "450",
    description:
      "Classic layered dessert with espresso-soaked ladyfingers, mascarpone cream, and cocoa.",
    image: Tiramisu,
  },
  {
    item_id: 12,
    name: "Cannoli Siciliani",
    course: "Dessert",
    price: "7.00",
    calories: "380",
    description:
      "Crispy pastry shells filled with sweet ricotta cream and chocolate chips.",
    image: Cannoli,
  },
  {
    item_id: 13,
    name: "Panna Cotta",
    course: "Dessert",
    price: "7.50",
    calories: "300",
    description: "Silky vanilla cream dessert served with mixed berry coulis.",
    image: Panna,
  },
  {
    item_id: 14,
    name: "Affogato al Caffè",
    course: "Dessert",
    price: "6.50",
    calories: "200",
    description: "Vanilla gelato drowned in a shot of hot espresso.",
    image: Affogato,
  },
  {
    item_id: 15,
    name: "Zuppa Toscana",
    course: "Appetizer",
    price: "9.00",
    calories: "400",
    description: "Hearty soup with Italian sausage, kale, potatoes, and cream.",
    image: Zuppa,
  },
  {
    item_id: 16,
    name: "Arancini di Riso",
    course: "Appetizer",
    price: "9.50",
    calories: "320",
    description:
      "Crispy fried rice balls filled with mozzarella and ragù, served with marinara sauce.",
    image: Riso,
  },
  {
    item_id: 17,
    name: "Carpaccio di Manzo",
    course: "Appetizer",
    price: "10.50",
    calories: "300",
    description:
      "Paper-thin slices of raw beef tenderloin, served with a garish.",
    image: Carpaccio,
  },
  {
    item_id: 18,
    name: "Calamari Fritti",
    course: "Appetizer",
    price: "12.00",
    calories: "450",
    description: "Crispy fried Squid with lemon and a side of marinara sauce.",
    image: Calamari,
  },
  {
    item_id: 19,
    name: "Melanzane alla Parmigiana",
    course: "Appetizer",
    price: "9.50",
    calories: "420",
    description:
      "Baked Eggplant with tomatoes and mozerella cheese topped with parmesean and basil.",
    image: Melanzane,
  },
  {
    item_id: 20,
    name: "Gnocchi al Pesto Genovese",
    course: "Main",
    price: "18.00",
    calories: "700",
    description:
      "Potato gnocchi tossed in basil pesto sauce with pine nuts and parmesean cheese.",
    image: Gnocchi,
  },

  {
    item_id: 21,
    name: "Tagliatelle al Ragu Bolognese",
    course: "Main",
    price: "18.50",
    calories: "750",
    description: "Fettuccine pasta with beef and pork ragu sauce.",
    image: Tagliatelle,
  },
  {
    item_id: 22,
    name: "Saltimbocca alla Romana",
    course: "Main",
    price: "24.00",
    calories: "480",
    description:
      "Veal Medallions topped with prosciutto, sage, and white wine sauce.",
    image: Saltimbocca,
  },
  {
    item_id: 23,
    name: "Branzino al Forno",
    course: "Main",
    price: "27.50",
    calories: "410",
    description:
      "A whole roasted sea bass braised with lemon, garlic, and a variety of herbs.",
    image: Branzino,
  },
  {
    item_id: 24,
    name: "Filetto di Manzo al Barolo",
    course: "Main",
    price: "29.50",
    calories: "590",
    description: "Grilled beef tenderloin topped with a Barolo wine reduction.",
    image: Filetto,
  },
  {
    item_id: 25,
    name: "Torta della Nonna",
    course: "Dessert",
    price: "8.00",
    calories: "390",
    description: "Tart custard pie with pine nuts and powdered sugar.",
    image: Torta,
  },
  {
    item_id: 26,
    name: "Gelato Artigianale",
    course: "Dessert",
    price: "7.00",
    calories: "320",
    description:
      "Housemade italian ice cream with your choice of vanilla, chocolate, pistachio, and strawberry.",
    image: Gelato,
  },
  {
    item_id: 27,
    name: "Torta Caprese",
    course: "Dessert",
    price: "9.50",
    calories: "420",
    description: "chocalate almond cake dusted with powdered sugar.",
    image: Capresee,
  },
  {
    item_id: 28,
    name: "Biscotti di Prato",
    course: "Dessert",
    price: "9.00",
    calories: "420",
    description: "Crunchy almond cookies.",
    image: Biscotti,
  },
  {
    item_id: 29,
    name: "Semifreddo alle Nocciole",
    course: "Dessert",
    price: "8.50",
    calories: "390",
    description: "Chilled hazelnut mousse.",
    image: Semi,
  },
  {
    item_id: 30,
    name: "Angello al Forno",
    course: "Main",
    price: "26.50",
    calories: "650",
    description:
      "Oven-roasted lamb chops with garlic, rosemary, and olive oil.",
    image: Angello,
  },
  {
    item_id: 31,
    name: "Polpette al Sugo",
    course: "Main",
    price: "20.50",
    calories: "520",
    description: "Classic beef and pork meatball with tomato sauce.",
    image: Poplet,
  },
  {
    item_id: 32,
    name: "Fegato alla Veneziana",
    course: "Main",
    price: "22.50",
    calories: "450",
    description: "Venetian style calf liver with sauteed onions.",
    image: Fegato,
  },
  {
    item_id: 33,
    name: "Involtini de Pollo",
    course: "Main",
    price: "23.50",
    calories: "480",
    description:
      "Prosciutto rolled chicken breast with cheese and tomato sauce.",
    image: Involtini,
  },
  {
    item_id: 34,
    name: "Pesce Spada alla Griglia",
    course: "Main",
    price: "27.50",
    calories: "420",
    description:
      "Grilled Swordfish with prosciutto and cheese topped with a baked tomato sauce.",
    image: Spada,
  },
  {
    item_id: 35,
    name: "Funghi Ripieni al Forno",
    course: "Main",
    price: "18.50",
    calories: "350",
    description:
      "Stuffed oven baked mushrooms with herbs, breadcrumbs, and cheese.",
    image: Funghi,
  },
  {
    item_id: 36,
    name: "Frittelle di Zucchine",
    course: "Appetizer",
    price: "9.00",
    calories: "310",
    description:
      "Fried zucchini fritters with herbs and grated parmesean cheese.",
    image: Frittelle,
  },
  {
    item_id: 37,
    name: "Ravioli di Ricotta e Spinaci",
    course: "Main",
    price: "19.50",
    calories: "590",
    description: "Handmade ravioli stuffed with ricotta and spinach.",
    image: Ravioli,
  },
  {
    item_id: 38,
    name: "Spaghetti al Nero di Seppia",
    course: "Main",
    price: "21.00",
    calories: "500",
    description: "Black squid ink pasta with cuttlfish, garlic, and tomatoes.",
    image: Squid,
  },
  {
    item_id: 39,
    name: "Penne all'Arrabbiata",
    course: "Main",
    price: "16.50",
    calories: "520",
    description:
      "Pasta witha spicy tomato sauce topped with garlic, chili flakes, and parsley.",
    image: Penne,
  },
  {
    item_id: 40,
    name: "Orecchiette con Cime di rapa",
    course: "Main",
    price: "17.50",
    calories: "480",
    description:
      "Ear-shaped pasta with sauteed broccoli rabe, garlic, and anchovy.",
    image: Orecchiette,
  },
];
