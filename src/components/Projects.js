import { useEffect } from 'react';
import {Card, Button} from 'react-bootstrap'
import { BsGithub } from "react-icons/bs";
import './assets/projects.css'

const nba = require('./assets/nba-proj-screenshot.png');
const nmn = require('./assets/nmnscreenshot.png')


const Projects = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "black";
    })
  return (
    <>
    <div className = "container-fluid row center">
        <Card className="col gap">
            <Card.Img variant="top" src={nba} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary"><BsGithub /></Button>
            </Card.Body>
        </Card>

        <Card className="col gap" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={nmn} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary"><BsGithub /></Button>
            </Card.Body>
        </Card>

        <Card className="col gap" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={nba} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary"><BsGithub /></Button>
            </Card.Body>
        </Card>

        <Card className="col gap" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={nba} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary"><BsGithub /></Button>
            </Card.Body>
        </Card>
    </div>
    </>
  )
}

export default Projects