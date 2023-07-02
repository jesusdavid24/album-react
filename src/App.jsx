import { useState } from 'react'
import SongCard from './components/sogns/SongCard'
import billie_jean from './assets/billie_jean.jpg'
import './App.css'

const App = () => {
  const songs = [
    {
      id: 1,
      name: "Billie Jean",
      artist: "Michael Jackson",
      album: "Thriller",
      year: 1982,
      like: false,
      genre: "Pop",
      cover_url: billie_jean
    },
    {
      id: 2,
      name: "Sweet Child o' Mine",
      artist: "Guns N' Roses",
      album: "Appetite for Destruction",
      year: 1987,
      like: false,
      genre: "Rock",
      cover_url: "https://res.cloudinary.com/make-it-real-sj/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1687892653/album_cover_h4hipl.jpg?_s=public-apps"
    },
    {
      id: 3,
      name: "Like a Prayer",
      artist: "Madonna",
      album: "Like a Prayer",
      year: 1989,
      like: false,
      genre: "Pop",
      cover_url: "https://asset.cloudinary.com/make-it-real-sj/fb85580b6189b5023dc36712969cab0a"
    },
    {
      id: 4,
      name: "Smells Like Teen Spirit",
      artist: "Nirvana",
      album: "Nevermind",
      year: 1991,
      like: false,
      genre: "Grunge",
      cover_url: "https://asset.cloudinary.com/make-it-real-sj/fb85580b6189b5023dc36712969cab0a"
    },
    {
      id: 5,
      name: "Wonderwall",
      artist: "Oasis",
      album: "(What's the Story) Morning Glory?",
      year: 1995,
      like: false,
      genre: "Britpop",
      cover_url: "https://asset.cloudinary.com/make-it-real-sj/fb85580b6189b5023dc36712969cab0a"
    },
    {
      id: 6,
      name: "Smooth",
      artist: "Santana ft. Rob Thomas",
      album: "Supernatural",
      year: 1999,
      like: false,
      genre: "Rock",
      cover_url: "https://asset.cloudinary.com/make-it-real-sj/fb85580b6189b5023dc36712969cab0a"
    },
    {
      id: 7,
      name: "Crazy in Love",
      artist: "Beyoncé ft. Jay-Z",
      album: "Dangerously in Love",
      year: 2003,
      like: false,
      genre: "R&B",
      cover_url: "https://asset.cloudinary.com/make-it-real-sj/fb85580b6189b5023dc36712969cab0a"
    },
    {
      id: 8,
      name: "Hey There Delilah",
      artist: "Plain White T's",
      album: "All That We Needed",
      year: 2005,
      like: false,
      genre: "Pop Rock",
      cover_url: "https://asset.cloudinary.com/make-it-real-sj/fb85580b6189b5023dc36712969cab0a"
    },
    {
      id: 9,
      name: "Umbrella",
      artist: "Rihanna ft. Jay-Z",
      album: "Good Girl Gone Bad",
      year: 2007,
      like: false,
      genre: "R&B",
      cover_url: "https://asset.cloudinary.com/make-it-real-sj/fb85580b6189b5023dc36712969cab0a"
    },
    {
      id: 10,
      name: "Rolling in the Deep",
      artist: "Adele",
      album: "21",
      year: 2010,
      like: false,
      genre: "Soul",
      cover_url: "https://asset.cloudinary.com/make-it-real-sj/fb85580b6189b5023dc36712969cab0a"
    }
  ];

  return (
    <div className="cards-container">
      {songs.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </div>
  );
}

export default App
