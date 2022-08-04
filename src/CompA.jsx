import React,{useEffect, useState} from 'react';
import axios from 'axios'
const CompA =()=>{
    const [num,setNum]=useState(1);
    const [name,setName]=useState();
    const [move,setMoves]=useState();
    useEffect(()=>{
        // alert("hello")
        const getData=async()=>{
           const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(res);
            setName(res.data.name);
            setMoves(res.data.moves.length);
            // Object.keys(res).map((key)=>{
            //         console.log(key);
            // })
        }   
        getData();
    })
    return(
        <>
              <h1>you choose <span style={{color:"red"}}>{num}</span> value</h1>
              <h1>My name is <span style={{color:"red"}}>{name}</span></h1>
              <h1>I have <span style={{color:"red"}}>{move}</span>moves</h1>
              <input type="text" value={name}/>
              <select value={num} onChange={(event)=>{
                // setNum num will change the value of num then num will redirect here in select
                setNum(event.target.value);
              }}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
        </>
    )
}

export default CompA;