import React from "react";
import SearchOffIcon from "@mui/icons-material/SearchOff";

export const NoResultsFound: React.FC = () => {
  return (
    <div className="no-results-found">
      <SearchOffIcon />
      <span>No Results Found</span>
    </div>
  );
};
