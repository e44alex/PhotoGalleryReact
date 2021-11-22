import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

export class PicTile extends React.Component {
  render () {
    return (
        <Link to={'/Work/' + this.props.name} style={{ textDecoration: 'none' }}>
            <Card style={{ width: '18rem', margin: '10px' }} >
                <Card.Img variant="top" src={this.props.url} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
  }
}

export default withRouter(PicTile)
