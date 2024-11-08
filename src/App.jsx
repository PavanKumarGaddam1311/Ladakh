import "./styles.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookingFrom from "./components/BookingFrom";
import DiscoverFrom from "./components/DiscoverFrom";
import DisplayFrom from "./components/DisplayFrom";
import Services from "./components/Services";
function App() {
  return (
    <div>
      <Header />
      <DisplayFrom />
      <DiscoverFrom />
      <Services />
      <Footer />
    </div>
  );
}
export default App;
