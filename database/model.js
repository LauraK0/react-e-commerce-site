import db from './db.js';

//Gets all comics from the database
const get_all_Comics = db.prepare(
  /*sql*/
  `SELECT
  comics.title,
  comics.id,
  comics.issue,
  comics.image_path,
  FORMAT ('£%.2f', comics.price) AS PRICE, -- soooo silly
  comics.publisher_id,
  comics.published_month,
  comics.published_year,
  genres.name AS genre_name,
  publishers.name AS publisher_name
FROM
comics
JOIN genres ON comics.genre = genres.id -- changed from WHERE to ON
JOIN publishers ON comics.publisher_id = publishers.id`
);

export function getAllComics() {
  return get_all_Comics.all();
}

//Gets one single commic by ID
const get_comic_by_ID = db.prepare(/*sql*/ `SELECT 
  comics.id,
  comics.title,
  comics.issue,
  comics.comic_desc, 
  comics.image_path, 
  FORMAT ('£%.2f', comics.price) AS PRICE, -- we universally applied 'comics.' and broke this line
  comics.publisher_id, 
  comics.published_month, 
  comics.published_year, 
  genres.name AS genre_name,
  publishers.name AS publisher_name
  FROM comics 
  JOIN genres ON comics.genre = genres.id -- changed from WHERE to ON
  JOIN publishers ON comics.publisher_id = publishers.id
  WHERE comics.id = ?`);

export function getComicByID(id) {
  return get_comic_by_ID.get(id);
}

//Gets all publishers from the database
const get_all_publishers = db.prepare(
  /*sql*/
  `SELECT
  id,
  name
FROM
publishers
`
);

export function getAllPublishers() {
  return get_all_publishers.all();
}
