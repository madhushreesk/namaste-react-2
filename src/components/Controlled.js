import React, { useState } from "react";

const Controlled = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <form>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Controlled;
