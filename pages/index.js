import ComicCards from '../components/ComicCards';
import Filter from '../components/Filter';
import { getAllComics, getAllPublishers } from 'database/model';
import { useState } from 'react';
import style from '../styles/index.module.css';

export async function getServerSideProps() {
  let comicsData = await getAllComics();
  let allPublishers = await getAllPublishers();
  return {
    props: {
      comicsData,
      allPublishers,
    },
  };
}

export default function Homepage({ comicsData, allPublishers }) {
  const companyTitle = 'Crazy for Comics!';
  const companyFooter = 'For further contact, crazyforcomics@superpowers.pizza';
  const [publisher, setPublisher] = useState({filter: 'all'});

  return (
    <div className={style.background}>
      <header className={style.companyTitle}>
        <h1>{companyTitle}</h1>
      </header>
      <Filter
        allPublishers={allPublishers}
        publisher={publisher}
        setPublisher={setPublisher}
      />
      <div className={style.gridContainer}>
        <ComicCards comicsData={comicsData} publisher={publisher} />
      </div>
      <footer>{companyFooter}</footer>
    </div>
  );
}
