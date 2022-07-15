import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AddSong from "../Components/Pages/AddSong";
import EditSong from "../Components/Pages/EditSong";
import SongsLandingPage from "../Components/Pages/SongsLandingPage";
import {Song} from "../Components/Song";
import axios from 'axios';
import { url } from "../Config/ConfigApi";


export default function ApiConnections() {
  
  const [songsArr, setSongsArr] = useState([]);
  let response;

  const getSongs = async () => {
    try{
         response = await axios.get(url);
        setSongsArr(response.data);
    }
    catch(err){ 
      console.log('error', err);
      return;
    }
  };

  const getSongById = async (id:String) => {
    try{
      response = await axios.get(url+`${id}`);
      return response.data;
    }
    catch(err){
      console.log('error', err);
      return;
    }
    
  }

  const getSongsByArtist = async (artist:String) => {
    try{
      response = await axios.get(url+`artist/${artist}`);
      setSongsArr(response.data);
      return;
    }
    catch(err){
      console.log('error', err);
      return;
    }
  }

  const deleteSong = async (id:String) => {
    try{
        response = await axios.delete(url+`delete/${id}`);
        setSongsArr(response.data);
        return;
    }
    catch(err){ 
      console.log('error', err);
      return;
    }
  };

  const addNewSong = async (song:Song) => {
    try{
        response = await axios.put(url+`addSong`, song);
        setSongsArr(response.data);
    }
    catch(err){ 
      console.log('error', err);
      return;
    }
  };

  const editSong = async (id:String, song:Song) => {
    try{
        response = await axios.post(url+`edit/${id}`, song);
        console.log(response.data);
        setSongsArr(response.data);
    }
    catch(err){ 
      console.log('error', err);
      return;
    }
  };

    useEffect(() => {
      getSongs();
    },[]);

    return (
      <>
          <Routes>
            <Route path="/" element={<SongsLandingPage getSongsByArtist = {getSongsByArtist} deleteSong = {deleteSong} songsArr = {songsArr} getSongs={getSongs}/>} />
            <Route path="/songs/toAdd" element={<AddSong addNewSong={addNewSong} songsArr = {songsArr}/>} />
            <Route path="/songs/toEdit/:title" element={<EditSong getSongById={getSongById} editSong={editSong} deleteSong = {deleteSong} songsArr = {songsArr}/>}/>
          </Routes>
      </>
    );
  }