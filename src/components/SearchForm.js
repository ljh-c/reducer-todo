import React from 'react';
import { Input } from 'reactstrap';

const SearchForm = ({ query, handleQuery }) => {

  return (
      <Input
        type="text"
        placeholder="Search tasks"
        value={query}
        onChange={handleQuery}
        className="search"
      />
  );
};

export default SearchForm;