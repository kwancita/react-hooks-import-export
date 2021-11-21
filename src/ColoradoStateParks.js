import React from "react";
//import howManyParks from "./parks/howManyParks";
//import MesaVerde from "./parks/MesaVerde";

import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";

function ColoradoStateParks() {
  // howManyParks(); // => "42 parks!"

  // return <h1>Colorado State Parks!</h1>;
  return (
    <div>
      <MesaVerde />
      <howManyParks />
      <RMFunctions />
    </div>
  );
}


export default ColoradoStateParks;
