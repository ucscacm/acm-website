import React from 'react';
import Banner from './Banner/Banner';
import {CardBody, Card, Button} from 'reactstrap';
import Background from '../../assets/activity_tabs.png';
import Workshops from '../../assets/workshops.png'

function getCardStyle(top){
    var style = {
    backgroundImage: `url(${Background})`, 
    backgroundSize: 'cover',
    width: '805px', 
    height: '586px', 
    margin: 'auto',
    radius: '20px',
    border: 'transparent',
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: top,
    bottom: '0%',
    align: 'center'
    }
    return style;
}


var workshopStyle = {
    position: 'absolute',
    width: '608px',
    height: '71px',
    left: '53px',
    top: '100px',
    fontFamily: 'Oswald',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '48px',
    lineHeight: '71px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: '0.01em',
    color: '#0093D0'
}

var textStyle = {
    position: 'absolute',
    width: '732px',
    height: '210px',
    left: '50px',
    right: '100px',
    top: '200px',

    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '35px',
    /* or 146% */

    display: 'flex',
    letterSpacing: '0.01em',

    color: '#000000'
}

function Home(){
    return(
        <div>
        <Banner/>
        <Card shadow={0} style={getCardStyle('100%')}>
        <CardBody>
            <div style={workshopStyle}> workshops </div>
            <div style={textStyle}>
            We know how hard it can be to learn new skills and technologies apart from those taught in classes. 
            That’s why we host a variety of workshops for different career paths in computer science. 
            In the past we’ve held workshops on preparing for coding interviews, getting familiar with machine learning, and building your own portfolio website.
            </div>
        </CardBody>
        </Card>

        <Card shadow={0} style={getCardStyle('250%')}>
        <CardBody>
            <div style={workshopStyle}> company tours & guest speakers </div>
            <div style={textStyle}>
            Our chapter has connections with people across multiple companies so we can share special networking events with our members. 
            You’ll get to hear about new opportunities straight from recruiters and get insight from engineers themselves.
            </div>
        </CardBody>
        </Card>

        <Card shadow={0} style={getCardStyle('400%')}>
        <CardBody>
            <div style={workshopStyle}> engineering project programs </div>
            <div style={textStyle}>
            One of the most important parts of being a software engineer that isn’t taught in schools is knowing how to work on a team and understanding agile methodologies. 
            In this program, we’ll custom match people with similar technical backgrounds and they’ll work on a special project throughout the quarter. 
            At the end they’ll get a chance to showcase their work, truly getting a feel of what it’s like to work as a software engineer. 
            </div>
        </CardBody>
        </Card>

        <Card shadow={0} style={getCardStyle('550%')}>
        <CardBody>
            <div style={workshopStyle}> engineering project programs </div>
            <div style={textStyle}>
            One of the most important parts of being a software engineer that isn’t taught in schools is knowing how to work on a team and understanding agile methodologies. 
            In this program, we’ll custom match people with similar technical backgrounds and they’ll work on a special project throughout the quarter. 
            At the end they’ll get a chance to showcase their work, truly getting a feel of what it’s like to work as a software engineer. 
            </div>
        </CardBody>
        </Card>
        
        <Card shadow={0} style={getCardStyle('550%')}>
        <CardBody>
            <div style={workshopStyle}> hackACM & interns </div>
            <div style={textStyle}>
            Hackathons are a great way to get started on a project, but they can be really intimidating at times, which is why we created HackACM. 
            HackACM is a beginner friendly hackathon and serves as a great introduction to hackathons. In the past, we’ve had sponsors such as Amazon and Looker and thousands of dollars in prizes. 
            This year will be our 3rd time hosting HackACM and we are looking for engineering, design, and marketing interns to make it even better than the previous years!
            </div>
        </CardBody>
        </Card>

        <Card shadow={0} style={getCardStyle('700%')}>
        <CardBody>
            <div style={workshopStyle}> code structure reviews </div>
            <div style={textStyle}>
            Code structure and cleanliness can be a huge factor in job/internship interview success as well as success in writing production-ready code as a software engineer. 
            TAs at many smaller universities go through code on each assignment with students 1-on-1 to provide feedback on purposeful modularization, clean and simplified code, testability, and writing good comments. 
            ACM is here to bridge this gap at UCSC! 
            Submit your code to get a code structure review by one of our board members today!  Please note that we will NOT debug your code for you, we will be looking only at the overall structure of the code. Limited to 1 file per month. 
            </div>
        </CardBody>
        </Card>
    

        </div>
    );  
}

export default Home;