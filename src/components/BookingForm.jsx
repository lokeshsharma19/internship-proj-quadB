// BookingForm.jsx
import React, { useState } from "react";
import styles from "./BookingForm.module.css";

const BookingForm = ({ name, setIsFormOpen, setIsBooked }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFillingDetails = () => {
    const storedData = JSON.parse(localStorage.getItem("userData")) || {};
    setFormData((prevFormData) => ({
      ...prevFormData,
      fullName: storedData.fullName || "",
      email: storedData.email || "",
      phoneNumber: storedData.phoneNumber || "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log("Form submitted with data:", formData);
    setIsBooked(true);
    setIsFormOpen(false);
  };

  return (
    <div className={styles.formContainer}>
      <h3>Booking Form</h3>
      <button className={styles.fillingBtn} onClick={handleFillingDetails}>
        Fill Previous Details
      </button>
      <p>Movie: {name}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <button className={styles.formBtn} type="submit">
          Submit
        </button>
        <button
          className={styles.formBtn}
          onClick={() => {
            setIsFormOpen(false);
          }}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
