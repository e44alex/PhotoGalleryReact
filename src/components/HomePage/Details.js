import React from 'react'
import { Card } from 'react-bootstrap'

export default class Details extends React.Component {
  render () {
    return (
        <div className="container">
            <Card >
                {/* eslint-disable-next-line react/prop-types */}
                <Card.Img variant="top" src={this.props.url} />
                <Card.Body>
                    {/* eslint-disable-next-line react/prop-types */}
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
  }
}
