import React from 'react'
import { withRouter } from 'react-router'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import MovieCard from '../components/MovieCard'
// TODO: IMPORT EMBEDDED COMPONENT

class MovieDetails extends React.Component {
  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      movie: React.PropTypes.array,
    }).isRequired,
    router: React.PropTypes.object.isRequired,
    params: React.PropTypes.object.isRequired,
  }

  render() {
    console.log(this);
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<div>An unexpected error occured</div>)
    }

    return (
      <div>
      <div>
        <img src={this.props.data.Movie[0].poster}/>
      </div>
      <div className='flex flex-wrap justify-center center w-75'>
        {
          this.props.data.Movie[0].similar.map((movie) =>
          <MovieCard key={movie.title} movie={movie} />
        )}
      </div>
      </div>
    )
  }

    goBack = () => {
      this.props.router.replace('/')
    }
}

  const MovieRecQuery = gql`query Movie($id: Long){
    Movie(id: $id) {
      id
      title
      year
      plot
      poster
      imdbRating
      similar {
        id
        title
        year
        plot
        poster
        imdbRating

      }
    }
  }
`

const MovieDetailsWithData = graphql(MovieRecQuery, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.params.movieId
    }
  })
}
)(withRouter(MovieDetails))

export default MovieDetailsWithData
