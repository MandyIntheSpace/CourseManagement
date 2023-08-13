import React, { useState, useEffect } from 'react'
import { Form, FormGroup, Input, Container, CardTitle } from 'reactstrap'
import "./AddCourse.css"
import baseurl from '../bootAPIs/BootAPIS'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

export default function AddCourses() {

    const [courses, setCourses] = useState({
        title: "",
        description: ""
    })

    const handleForm = (event) => {
        event.preventDefault();
        postOnServer(courses)
        console.log(courses)
    }

    const postOnServer = (data) => {
        axios.post(`${baseurl}/courses`, data).then(
            (response) => {
                console.log(response)
                console.log("The data has been added successfully in the database")
            },
            (error) => {
                console.log(error)
            }
        )
    }

    useEffect(() => {
        const urlParam = new URLSearchParams(window.location.search)
        const courseId = urlParam.get('id')
        const courseTitle = urlParam.get('title')
        const courseDescription = urlParam.get('description')

        if (courseId && courseTitle && courseDescription) {
            setCourses({
                id: courseId,
                title: courseTitle,
                description: courseDescription
            })
        }

    }, [])



    return (
        <div>
            <h1 className='text-center'>Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="courseTitle">Course Title</label>
                    <Input
                        type='text'
                        placeholder='Enter the course title'
                        name='courseTitle'
                        id='courseTitle'
                        value={courses.title ? courses.title : ""}
                        onChange={(e) => { setCourses({ ...courses, title: e.target.value }) }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="courseDescription">Course Id</label>
                    <Input
                        type='text'
                        placeholder='Enter the courseDescription'
                        name='courseDescription'
                        id='courseDescription'
                        value={courses.description ? courses.description : ""}
                        onChange={(e) => {
                            setCourses({ ...courses, description: e.target.value })
                        }}
                    />
                </FormGroup>

                <Container className='text-center'>
                    <button className="Add-button">
                        Add Course
                    </button>
                    <button className="clear-button">
                        Clear Course
                    </button>
                </Container>

            </Form>
        </div>
    )
}
