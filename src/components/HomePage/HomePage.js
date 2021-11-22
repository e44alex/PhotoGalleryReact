import React from 'react'
import { PicTile } from '../PicTile/PicTile'
import getTiles from '../../redux/reducers/actions/getTiles'
import reducer from '../../reducers/'

class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = { tiles: [] }
  }

  componentDidMount () {
    // eslint-disable-next-line react/prop-types
    const { dispatch } = this.props
    this.state.tiles(dispatch(reducer(this.state.tiles, getTiles)))
  }

  render () {
    return (
        <div className="container" >
            <h1>Home Page</h1>
            <div className="d-flex flex-row row-centerized">
                {this.state.tiles.map((tile) => {
                  return (
                        // eslint-disable-next-line react/jsx-key
                        <PicTile name={tile.name} url={tile.photoUrl}/>
                  )
                })}
            </div>
        </div>)
  }
}

export default HomePage
