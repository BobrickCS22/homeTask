import { useState } from 'react'
import './App.css'

function App() {
  const title = 'Dune: Part Two'
  const year = 2024
  const studio = 'Legendary Pictures'
  const genre = ['Action', 'Adventure', 'Sci-Fi']
  const director = 'Denis Villeneuve'
  const runtime = 166
  const imdbRating = 8.5
  const posterUrl = 'https://upload.wikimedia.org/wikipedia/en/5/51/Dune_Part_Two_poster.jpeg'
  const isTopMovie = true
  const [showMore, setShowMore] = useState(false)

  const summary =
    'Пол Атрі́д об’єднується з Чані та фрименами Арракіса, щоб помститися зловмисникам, які знищили його родину.'
  const extra =
    ' Стоячи перед вибором між коханням і долею всесвіту, він мусить запобігти жахливому майбутньому, яке бачить лише він.'

  return (
    <>
      <main className="page">
        <section className="film-card">
          {isTopMovie && <span className="badge">TOP-1</span>}

          <div className="film-card__header">
            <div className="film-card__banner">
              <div className="film-card__tagline">SCI-FI EPIC · {year}</div>
              <h1>{title}</h1>
              <div className="film-card__labels">
                <span>{director}</span>
                <span>{imdbRating} / 10</span>
              </div>
            </div>

            <div className="film-card__info">
              <ul>
                <li>Жанр: {genre.join(', ')}</li>
                <li>Рік: {year}</li>
                <li>Студія: {studio}</li>
              </ul>

              <div className="film-card__meta">
                <div>
                  <strong>Хронометраж</strong>
                  <p>{runtime} хвилин</p>
                </div>
                <div>
                  <strong>Режисер</strong>
                  <p>{director}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="film-card__content">
            <img className="film-card__poster" src={posterUrl} alt={`${title} poster`} />

            <div className="film-card__description">
              <p>
                {summary}
                {showMore ? extra : ''}
              </p>

              <button
                className="film-card__button"
                type="button"
                onClick={() => setShowMore((prev) => !prev)}
              >
                {showMore ? 'Показати менше' : 'Докладніше'}
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
