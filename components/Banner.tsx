import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import { HiInformationCircle } from 'react-icons/hi'
import { baseUrl } from '../constants/movie'
import { Movie } from '../typings'
interface Props {
  netflixOriginals: Movie[]
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null)
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  }, [])
  return (
    <div className="flex flex-col space-y-2 py-16 pb-12 md:space-y-4 lg:h-[95vh] lg:justify-end">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs font-semibold text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-lg">
        {movie?.overview}
      </p>
      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-5 md:w-5" />
          Play
        </button>
        <button className="bannerButton bg-[gray]/70 text-white">
          <HiInformationCircle className="h-4 w-4 md:h-5 md:w-5" />
          More info
        </button>
      </div>
    </div>
  )
}

export default Banner
