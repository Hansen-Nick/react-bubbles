import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { AxiosWithAuth } from "../utils/AxioswithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [newColorList, setNewColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect( () => {
    AxiosWithAuth().get('/api/colors')
      .then(res => setColorList(res.data))
      .catch(err => console.log(err))
  },[newColorList])

  return (
    <>
      <ColorList colors={colorList} updateColors={setNewColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
