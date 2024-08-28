import React from "react";

type Props = {
  filter: string,
  setFilter: (filter:string) => void,
};

const Filter:React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)}/>
  );
}

export default Filter;
