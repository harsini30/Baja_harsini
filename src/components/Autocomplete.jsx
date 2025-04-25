// src/components/Autocomplete.jsx
import React from 'react';

const Autocomplete = ({ doctors, value, onSelect }) => {
  const filteredDoctors = doctors.filter(doc =>
    doc.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className="mb-4">
      <input
        type="text"
        className="w-full px-4 py-2 border rounded-md"
        placeholder="Search for a doctor..."
        value={value}
        onChange={(e) => onSelect(e.target.value)}
      />
      {filteredDoctors.length > 0 && (
        <ul className="absolute bg-white border w-full mt-2 rounded-md shadow-md z-10">
          {filteredDoctors.map((doctor) => (
            <li
              key={doctor.id}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => onSelect(doctor.name)}
            >
              {doctor.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
