// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Autocomplete from '../components/Autocomplete';
import FilterPanel from '../components/filterPanel';
import DoctorCard from '../components/DoctorCard';
import '../styles.css';

const API_URL = 'https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json';

export default function Home() {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    let result = [...doctors];

    // Apply search filter
    const search = searchParams.get('search') || '';
    if (search) {
      result = result.filter((doc) =>
        doc.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply mode filter
    const mode = searchParams.get('mode') || '';
    if (mode) {
      result = result.filter((doc) => doc.mode === mode);
    }

    // Apply specialties filter
    const specialties = searchParams.getAll('specialty');
    if (specialties.length) {
      result = result.filter((doc) =>
        specialties.every((sp) => doc.specialties.includes(sp))
      );
    }

    // Apply sort filter
    const sort = searchParams.get('sort') || '';
    if (sort === 'fees') {
      result.sort((a, b) => a.fees - b.fees);
    } else if (sort === 'experience') {
      result.sort((a, b) => b.experience - a.experience);
    }

    setFilteredDoctors(result);
  }, [doctors, searchParams]);

  const updateParams = (key, value, multi = false) => {
    const params = new URLSearchParams(searchParams.toString());
    if (multi) {
      params.delete(key);
      value.forEach((v) => params.append(key, v));
    } else {
      if (value) params.set(key, value);
      else params.delete(key);
    }
    setSearchParams(params);
  };

  return (
    <div className="container">
      <h1>Doctor Listing</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a doctor..."
          value={searchParams.get('search') || ''}
          onChange={(e) => updateParams('search', e.target.value)}
        />
      </div>

      <div className="flex-container">
        {/* Left Sidebar for Filters and Search */}
        <div className="filter-panel">
          <FilterPanel
            mode={searchParams.get('mode') || ''}
            specialties={searchParams.getAll('specialty')}
            sort={searchParams.get('sort') || ''}
            onModeChange={(val) => updateParams('mode', val)}
            onSpecialtiesChange={(vals) => updateParams('specialty', vals, true)}
            onSortChange={(val) => updateParams('sort', val)}
          />
        </div>

        {/* Right Panel for Doctors List */}
        <div className="flex-container">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} />
            ))
          ) : (
            <p>No doctors match your filters.</p>
          )}
        </div>
      </div>
    </div>
  );
}
