import React from 'react'
import Nav from '../layout/Nav'
import Dishes from '../layout/Dishes'
import Card from '../layout/Card'

function Home() {
 
  const cardsArray = Array.from({ length: 60 });

  return (
    <>
      <Nav />
      <Dishes />
      <div className="w-[90%] mx-auto mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 justify-center items-center">
        {cardsArray.map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </>
  );
}

export default Home;
