import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import { Breeds } from "@frontendmasters/pet";
import useDropDown from "./hooks/useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seatle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropDown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropDown("Breed", "", Breeds);
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            type="text"
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>

        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
