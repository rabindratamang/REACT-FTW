import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seatle, WA");
  const [animal, setAnimal] = useState("Dog");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            type="text"
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
