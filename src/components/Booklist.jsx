import '../App.css';
import { useState,useEffect } from 'react';
import React from 'react'
import { API_URL } from '../API';
import axios from 'axios';

export default function BookList() {

 const[books,setBooks]=useState([]);

 useEffect(()=>{
  axios.get(API_URL).then(res=>{
    // console.log(res.data)
    setBooks(res.data);
  })
  .catch(err=>console.log(err));
  console.log(books);
   },[]);


  return (
    <>
    {
    <div className="posts d-flex flex-wrap">
    {books.map((book) => (
      <div key={book.id}>
     <div>{book.title}</div>
     
     </div>
    ))}
    
  </div> 
   }
</>
);
};
