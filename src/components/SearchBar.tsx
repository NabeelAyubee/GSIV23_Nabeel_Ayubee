import React from "react";
import SearchIcon from "@mui/icons-material/Search";
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import HomeIcon from '@mui/icons-material/Home';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Props {
  className?: string;
  styles?: object;
  handleSearch?: any;
  placeholder?: string;
}

const SearchBar: React.FC<Props> = ({ className, styles, placeholder, handleSearch }) => {
  return (
    <div className={`search-input-container ${className}`}>
      <SearchIcon style={{ color: "grey" }} />
      <input className="search-input" type="search" placeholder={placeholder} onChange={handleSearch} />
    </div>
  );
};

export default SearchBar;
