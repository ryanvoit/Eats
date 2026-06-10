import './styles.css'
import { Icon } from './Icon/Icon'
import { useRatingList } from '../hooks/useRatingList'
import { RatingList } from './RatingList/RatingList'
// import { ChangeEventHandler, useState, useEffect } from 'react'
// import { Restaurant } from './RatingList/types'
import { useStars } from '../hooks/useStars'
import { StarContext } from '../contexts'

export default function BaseLayout() {
  const { data, isLoading, restaurants, search, handleSearch } = useRatingList()

  const { isPending, starMutate } = useStars()

  if (isLoading || isPending) {
    return (
      <p className='download'>Идёт загрузка...</p>
    )
  } else {

    return (
      <>
        <header>
          <Icon role='logo' />
          <Icon role='profile' />
        </header>
        <main>
          <input
            type='text'
            placeholder='Search for restaurants'
            className="input"
            value={search}
            onChange={handleSearch}
          />
          <StarContext.Provider value={starMutate}>
            <RatingList restaurants={!restaurants ? data : restaurants} />
          </StarContext.Provider>
        </main>
        <footer>
          <p>Privacy Policy</p>
          <p className="corporation">2022 Eats</p>
          <p>Terms Of Service</p>
        </footer>
      </>
    )
  }
}