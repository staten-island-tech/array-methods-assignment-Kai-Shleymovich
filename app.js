const songs = [
  {
    songname: "My Iron Lung",
    artistname: "Radiohead",
    Ratings: ["Rateyourmuisc.com:4/5", "Allmuisc.come:8/10", "IMDB:7.2/10"],
    awards: "N/A",
    Year_made: 1995,
    album: "My Iron Lung",
  },
  {
    songname: "misery",
    artistname: "Jayeds",
    Ratings: ["Rateyourmuisc.com:2.35/5", "Allmuisc.come:N/A", "IMDB:N/A"],
    awards: "N/A",
    Year_made: 2023,
    album: "Gheto Cupid",
  },
  {
    songname: "Everlong",
    artistname: "Foo Fighters",
    Ratings: ["Rateyourmuisc.com:4/5", "Allmuisc.come:6/10", "IMDB:7.8/10"],
    awards: "2009 Nominee VMA. Best Video Foo Fighters",
    Year_made: 1997,
    album: "The Colour and the Shape",
  },
];
console.log(songs)

ratings=songs.filter((songs)=>console.log(songs.Year_made>2000))

songs.forEach((item) => {
  item.Ratings.forEach((Rating) => {
    console.log(Rating);
  });
}); 
