import React from 'react'
import {Card,Button} from 'react-bootstrap'
const CardAcordeon = (props) => (
    <div className="mt-2">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title dangerouslySetInnerHTML= {{__html: props.title}} />
        <Card.Text dangerouslySetInnerHTML= {{__html: props.excerpt}} />
        <Button variant="primary" href={props.readMore}>Saiba Mais</Button>
      </Card.Body>
    </Card>
    </div>
)

export default CardAcordeon;