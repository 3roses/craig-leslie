import { useEffect } from 'react';
import Header from './Header'
import { Card, Button } from 'react-bootstrap'
import { BsGithub } from "react-icons/bs";
import { Link } from 'react-router-dom'
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
        <div className = "row cards">
            <Card className="col gap" style={{ width: '18rem' }}>
                <Card.Img className='image' variant="top" src={nba} />
                <Card.Body>
                    <Card.Title>NBA Fandom</Card.Title>
                    <Card.Text>
                    A one-stop-shop for NBA schedules and statistics.
                    </Card.Text>
                    <a as={Link} href='https://github.com/eugene125/project-1'><Button variant="primary"><BsGithub /></Button></a>
                </Card.Body>
            </Card>

            <Card className="col gap" style={{ width: '18rem' }}>
                <Card.Img className='image' variant="top" src={nmn} />
                <Card.Body>
                    <Card.Title>Nerds Meet Nerds</Card.Title>
                    <Card.Text>
                    A dating app designed specifically for 'nerds' of any type.
                    </Card.Text>
                    <a as={Link} href='https://github.com/Nerds-Meet-Nerds/Nerds-Meet-Nerds'><Button variant="primary"><BsGithub /></Button></a>
                </Card.Body>
            </Card>

            <Card className="col gap" style={{ width: '18rem' }}>
                <Card.Img className='image' variant="top" src={calendar} />
                <Card.Body>
                    <Card.Title>Workday Calendar</Card.Title>
                    <Card.Text>
                    A convenient calendar app.
                    </Card.Text>
                    <a as={Link} href='https://github.com/3roses/Calendar'><Button variant="primary"><BsGithub /></Button></a>
                </Card.Body>
            </Card>

            <Card className="col gap" style={{ width: '18rem' }}>
                <Card.Img className='image' variant="top" src={weather} />
                <Card.Body>
                    <Card.Title>Weather Dashboard</Card.Title>
                    <Card.Text>
                    An app that provides current weather and a future forecast.
                    </Card.Text>
                    <a as={Link} href='https://github.com/3roses/weather_dashboard'><Button variant="primary"><BsGithub /></Button></a>
                </Card.Body>
            </Card>
        </div>
    </>
  )
}

export default Projects