import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    checkin: "",
    checkout: "",
    rooms: "",
    adults: "",
    children: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission

    console.log(formData);
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <label>
          Check-in:
          <input
            type="date"
            name="checkin"
            value={formData.checkin}
            onChange={handleChange}
          />
        </label>
        <label>
          Check-out:
          <input
            type="date"
            name="checkout"
            value={formData.checkout}
            onChange={handleChange}
          />
        </label>
        <label>
          Rooms:
          <input
            type="number"
            name="rooms"
            value={formData.rooms}
            onChange={handleChange}
          />
        </label>
        <label>
          Adults:
          <input
            type="number"
            name="adults"
            value={formData.adults}
            onChange={handleChange}
          />
        </label>
        <label>
          Children:
          <input
            type="number"
            name="children"
            value={formData.children}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Book Now</button>
      </form>
      <Footer />
    </>
  );
};
export default BookingForm;
