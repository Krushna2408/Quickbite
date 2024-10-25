import React, { useState, useEffect } from 'react';
import Card from './Card';
import data from '../../../public/restaurants.json';

function Restaurant() {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    setInfo(data);
  }, []);

  return (
    <div>
      {info && info.map((e, i) => (
        <Card key={i} data={e} />
      ))}
    </div>
  );
}

export default Restaurant;

