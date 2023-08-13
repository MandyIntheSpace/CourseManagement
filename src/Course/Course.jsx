import React, { useState } from 'react'
import axios from 'axios'
import baseurl from '../bootAPIs/BootAPIS'
import { useNavigate } from 'react-router-dom'
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Container,
    Button,
    ButtonGroup,
} from 'reactstrap'
import './Course.css'

export default function Course({ course }) {

    const navigate = useNavigate()

    const deleteData = async (id) => {
        console.log("The function have been activated")
        await axios.delete(`${baseurl}/courses/${id}`).then(
            (response) => {
                console.log(response)
            }
            ,
            (error) => {
                console.log(error)
            }
        )
    }

    const navigateThrough = () =>{
        navigate(`/add-course?id=${course.id}&title=${course.title}&description=${course.description}`)
    }

    return (
        <div>
            <Card>
                <CardBody className='text-center'>
                    <CardSubtitle className='sub-title'>{course.title}</CardSubtitle>
                    <CardText>{course.description}</CardText>
                    <Container className='text-center'>
                        <button className="update-button"
                        onClick={navigateThrough}
                        >
                            Update
                        </button>
                        <button className="delete-button"
                            onClick={() => deleteData(course.id)}
                        >
                            Delete
                        </button>
                    </Container>
                </CardBody>
            </Card>
        </div>
    )
}
