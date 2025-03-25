import React from "react";

const Home = () => {
  return (
    <section
      style={{
        backgroundImage: "url(/img/hero-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Hauteur de la section à la taille de la fenêtre
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Hello</h1>
    </section>
  );
};

export default Home;
