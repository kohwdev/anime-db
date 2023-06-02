import React from "react";

function Sidebar({ topAnime }) {
 // Fetches top 5 anime from the api list and displays on the sidebar
 return (
  <aside>
   <nav>
   <h3>Top 5 Anime</h3>
   {topAnime.map(anime => (
    <><a
      href={anime.url}
      target="_blank"
      key={anime.mal_id}
      rel="noreferrer">
       <img className="side-img"
     src={anime.images.jpg.image_url}
     alt="Anime Image" />
      {anime.title}
     </a></>
   ))}

   </nav>
  </aside>
 )
}



export default Sidebar;