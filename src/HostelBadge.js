
import React from "react";

function HostelBadge({ needsHostel }) {
  if (!needsHostel) {
    return null;
  }

  return (
    <span style={{
      backgroundColor: "lightgreen",
      padding: "4px 8px",
      borderRadius: "5px",
      marginLeft: "10px"
    }}>
      Hostel
    </span>
  );
}

export default HostelBadge;
