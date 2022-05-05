import { useEffect } from 'react';
import Header from './Header'
import {Card, Button} from 'react-bootstrap'
import { BsGithub } from "react-icons/bs";
import './assets/projects.css'

const nba = require('./assets/nba-proj-screenshot.png');
const nmn = require('./assets/nmn-screenshot.png');
const calendar = require('./assets/calendar-screenshot.png');
const weather = require('./assets/weather-dash.png');


const Projects = () => {

    useEffect(() => {
        document.body.style.backgroundColor = "black";
    })

  return (
    <>
        <Header title={'Projects'}/>
        <div className = "container-fluid row center">
            <Card className="col gap">
                <Card.Img className='image' variant="top" src={nba} />
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
                <Card.Img className='image' variant="top" src={nmn} />
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
                <Card.Img className='image' variant="top" src={calendar} />
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
                <Card.Img className='image' variant="top" src={weather} />
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