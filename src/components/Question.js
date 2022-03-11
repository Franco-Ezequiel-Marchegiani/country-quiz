import React from 'react';
import LogoWorld from '../images/logoWorld.svg'
function Question() {
  return (
      <section>
        <h2>Kuala Lumpur is the capital of</h2>
        <img src={LogoWorld} alt="" />
        <button>A Texto 1</button>
        <button>B Texto 2</button>
        <button>C Texto 3</button>
        <button>D Texto 4</button>
        {/* Si el usuario falla */}
        <p>Results</p>
      </section>
  );
}

export default Question;