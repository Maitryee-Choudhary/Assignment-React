import React, { useEffect, useState } from 'react';
import   Display  from './Display';

const Home = () => {
    let API = "https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1";
  
    const [data,setData] = useState();

    const fetchAPI = async (url) => {
        try{
          const res = await fetch(url);
          const obj = await res.json();
          setData(obj);
         // console.log(obj.texts[0]);

        }catch(error){
          console.log(error);
        }
    };

    useEffect(  () => {
         fetchAPI(API);
    });

  //  console.log(data);

    if(data){
      return <Display data = {data}  />
    }
    else{
      return <h1>Loading...</h1>
    }

}

export default Home;