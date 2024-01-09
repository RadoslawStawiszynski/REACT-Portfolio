import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  console.log(numPizzas);

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/* zmieniamy && na ? (1=true, 2=false) */}
      {numPizzas > 0 ? (
        <>
          <p>
            Indulge in the flavors of authentic Italian cuisine. Savor a
            selection of six creatively crafted dishes, each meticulously
            prepared in our traditional stone oven. You can expect nothing but
            the finest organic ingredients, delivering mouthwatering freshness
            with every bite—experience the perfect blend of sweet and savory in
            every dish.
          </p>

          <ul className="pizzas">
            {/*{pizzaData.map((pizza) => (
          <Pizza name={pizza.name} photoName={pizza.photoName} />
        ))}*/}
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
      {/*
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={11}
      />*/}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  // if (pizzaObj.soldOut) return <h2> "SOLD OUT!" </h2>;
  // if (pizzaObj.soldOut) return <Header />;

  // Tempalte literal
  // className="pizza"  === cassName={`pizza`} // `tekst ${function}` JS template literal
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients} </p>

        {/* {pizzaObj.soldOut ? (
          <span> SOLD OUT! </span>
        ) : (
          <span> {pizzaObj.price + 3} euro </span>
        )} */}

        <span>
          {pizzaObj.soldOut ? "SOLD OUT!" : pizzaObj.price + 3 + " euro"}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 14;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour < closeHour;
  console.log(isOpen);

  // if (hour >= opneHour && hour < closeHour) alert("We're currently open!");
  // else alert("Sorry we'ar cloesd");

  // if (!isOpen) return <p>CLOSED</p>;

  return (
    <footer clasName="footter">
      {/* zmieniamy && na ? (1=true, 2=false) */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <h3>
          <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00.
          </p>
        </h3>
      )}
      {/*{new Date().toLocaleTimeString()}.We're currently open!*/}
    </footer>
  );
  //return React.createElement("footer", null, "We're currently open!");
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <h3>
        <p>
          We're open form {openHour}:00 until {closeHour}:00! Come visit us or
          order online.
        </p>
      </h3>
      <button className="btn">Order</button>{" "}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
