import Image from 'next/image';
import Link from 'next/link';
import style from '../styles/comicCard.module.css';

export default function ComicCards({ comicsData, publisher }) {
  return (
    <>
      {comicsData
        .filter(
          (comic) =>
            comic.publisher_name === publisher.filter ||
            publisher.filter === 'all'
        )
        .map((comic) => (
          <div className={style.comicContainer} key={comic.id}>
            <Link href={`/comics/${comic.id}`}>
              <Image
                src={comic.image_path}
                width={300}
                height={425}
                alt={comic.title}
              />
            </Link>

            <p className={style.title}>
              {comic.title} {`#${comic.issue}`}
            </p>

            <p className="publisher">{comic.publisher_name}</p>
            <p className="published">
              {`${comic.published_month} ${comic.published_year}`}
            </p>
            <p className="genre">{comic.genre_name}</p>

            <p className={style.price}>{comic.PRICE}</p>
            <button className={style.button}>Add to Cart</button>
          </div>
        ))}
    </>
  );
}
