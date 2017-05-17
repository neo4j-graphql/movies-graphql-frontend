import React from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

import MovieCard from './MovieCard'

const Title = styled.div`
  color: #7F7F7F;
  font-size: 32px;
  font-weight: 300;
`

class MovieIndex extends React.Component {
  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
    }).isRequired
  }

  render() {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<div>Error occurred</div>)
    }

    return (
      <div className='w-100 bg-light-gray min-vh-100'>
        <Title className='tc pa5'>
          There are {this.props.data.Movie.length} movies in your movie list
        </Title>


        <div className='flex flex-wrap justiy-center center w-75'>
          {
            this.props.data.Movie.slice(1,50).map((movie) =>
            <MovieCard key={movie.id} movie={movie} />
          )}
        </div>
      </div>
    )
  }
}

const MoviesQuery = gql`query movies {
  Movie {
    title
    poster
    plot
    id
  }
}`;

const MovieIndexWithData = graphql(MoviesQuery)(MovieIndex)

export default MovieIndexWithData
