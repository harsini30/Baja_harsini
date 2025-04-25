// src/components/DoctorCard.jsx
import React from 'react';

export default function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">
      <h2>{doctor.name}</h2>
      <p><strong>Specialties:</strong> {doctor.specialties.join(', ')}</p>
      <p><strong>Experience:</strong> {doctor.experience} years</p>
      <p><strong>Fees:</strong> ₹{doctor.fees}</p>
      <p><strong>Mode:</strong> {doctor.mode}</p>
      <button>Book Appointment</button>
    </div>
  );
}
