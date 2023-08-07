import React from 'react';
import { useGlobalContext } from '../context/global';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Popular = () => {
  const { popularAnime, isSearch } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch) {
      return popularAnime.map((anime) => {
        return (
          <div className="post-of-anime" key={anime.mal_id}>
            <Link to={`/anime/${anime.mal_id}`}>
              <img className="poster" src={anime.images.jpg.large_image_url} alt="" />
            </Link>
            <div className="anime-info">
                <h3 className='anime-title'>{anime.title}</h3>
                <p className='anime-episode'>Episode: {anime.episodes}</p>
              </div>
          </div>
        );
      });
    }
  };

  return (
    <PopularStyled>
      <div className="popular-anime">{conditionalRender()}</div>
    </PopularStyled>
  );
};

const PopularStyled = styled.div`
  display: flex;
  .popular-anime {
    margin-top: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 7rem;
    padding-right: 0;
    width: 100%;
    display: inline-flex; /* Change from grid to inline-flex */
    flex-wrap: wrap; /* Add flex-wrap property */
    gap: 2rem;
    .post-of-anime {
      align-items: flex-start;
      display: inline-flex;
      flex-direction: column;
      gap: 8px;
      position: relative;
      .poster {
        height: 280px;
        object-fit: cover;
        position: relative;
        width: 210px;
        border-radius: 7px; /* Added border-radius for the .poster */
      }
      .anime-info {
        width: 100%;
      }
      .anime-title {
        font-size: 1.2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 210px;
        white-space: nowrap;
      }
      .anime-episode {
        font-size: 1rem;
        color: #666;
      }
    }
  }
`;

export default Popular;
