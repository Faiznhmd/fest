import Image from 'next/image';
import React from 'react';
import './slide.css';

const Card = () => {
  return (
    <>
      <div class="containers">
        <div class="card__container">
          <article class="card__article">
            <Image
              src="/assets/Poster1.webp"
              alt="image"
              class="card__img"
              width={100}
              height={100}
            />

            <div class="card__data">
              <h2 class="card__title">Robo Soccer</h2>
            </div>
          </article>

          <article class="card__article">
            <Image
              src="/assets/poster-22.webp"
              alt="image"
              class="card__img"
              width={100}
              height={100}
            />

            <div class="card__data">
              <h2 class="card__title">Innovation Tank</h2>
            </div>
          </article>

          <article class="card__article">
            <Image
              src="/assets/poster-33.webp"
              alt="image"
              class="card__img"
              width={100}
              height={100}
            />

            <div class="card__data">
              <h2 class="card__title">Cyber Battleground</h2>
            </div>
          </article>
          <article class="card__article">
            <Image
              src="/assets/Poster4.png"
              alt="image"
              class="card__img"
              width={100}
              height={100}
            />

            <div class="card__data">
              <h2 class="card__title">Mine Field Rescue</h2>
            </div>
          </article>
          <article class="card__article">
            <Image
              src="/assets/Poster5.jpg"
              alt="image"
              class="card__img"
              width={100}
              height={100}
            />

            <div class="card__data">
              <h2 class="card__title">Cloak Coding</h2>
            </div>
          </article>
          <article class="card__article">
            <Image
              src="/assets/Poster6.png"
              alt="image"
              class="card__img"
              width={100}
              height={100}
            />

            <div class="card__data">
              <h2 class="card__title">Tech Trivia</h2>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Card;
