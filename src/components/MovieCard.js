import React from 'react'
import {Link} from 'react-router'

export default class MovieCard extends React.Component {
  static propTypes = {
    movie: React.PropTypes.object
  }

  render() {
    return(
      <Link to={`/detail/${this.props.movie.id}`}
            style={{minWidth:200}}
            className='link dim grow mw4 bg-white ma2 pa3 shadow-1'>
        <img src={this.props.movie.poster} alt={this.props.movie.name} />
        <div className='gray tc'>{this.props.movie.title}</div>
      </Link>
    )
  }
}
