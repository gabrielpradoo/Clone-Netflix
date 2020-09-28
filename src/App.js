import React, { useEffect, useState } from "react";
import "./App.css";
import Tmdb from "./Tmdb";
import Header from "./components/Header";
import FeaturedMovie from "./components/FeaturedMovie";
import MovieRow from "./components/MovieRow";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista TOTAL
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando o Featured
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListner = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListner);

    return () => {
      window.removeEventListener("scroll", scrollListner);
    };
  }, []);

  return (
    <div className="page">
      {/* Header
      Destaque
      As Listas
      Footer */}

      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito com por{" "}
        <a href="mailto:gdeoliveira.1999@gmail.com">Gabriel do Prado</a>
        <br />
        Direitos de Imagem para Netflix <br />
        Dados pegos do site Themoviedb.org
      </footer>

      {movieList.length <= 0 && featuredData === null && (
        <div className="loading">
          <img
            src="https://www.filmelier.com/pt/br/news/wp-content/uploads/2020/03/netflix-loading.gif"
            alt="Carregando"
          />
        </div>
      )}
    </div>
  );
}

export default App;
