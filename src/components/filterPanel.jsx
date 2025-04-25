// src/components/FilterPanel.jsx
import React from 'react';

export default function FilterPanel({
  mode,
  specialties,
  sort,
  onModeChange,
  onSpecialtiesChange,
  onSortChange
}) {
  const SPECIALTIES = ['General Physician', 'Dentist', 'Dermatologist', 'Cardiologist'];

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-700">Consultation Mode</h3>
      <div className="space-y-2">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="mode"
            value="Video Consult"
            checked={mode === 'Video Consult'}
            onChange={() => onModeChange('Video Consult')}
            className="text-blue-600"
          />
          <span>Video Consult</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="mode"
            value="In Clinic"
            checked={mode === 'In Clinic'}
            onChange={() => onModeChange('In Clinic')}
            className="text-blue-600"
          />
          <span>In Clinic</span>
        </label>
      </div>

      <h3 className="text-lg font-semibold text-gray-700">Specialties</h3>
      <div className="space-y-2">
        {SPECIALTIES.map(spec => (
          <label key={spec} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={spec}
              checked={specialties.includes(spec)}
              onChange={() => onSpecialtiesChange(spec)}
              className="text-blue-600"
            />
            <span>{spec}</span>
          </label>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-gray-700">Sort By</h3>
      <div className="space-y-2">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="sort"
            value="fees"
            checked={sort === 'fees'}
            onChange={() => onSortChange('fees')}
            className="text-blue-600"
          />
          <span>Price: Low to High</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="sort"
            value="experience"
            checked={sort === 'experience'}
            onChange={() => onSortChange('experience')}
            className="text-blue-600"
          />
          <span>Experience: Most First</span>
        </label>
      </div>
    </div>
  );
}
