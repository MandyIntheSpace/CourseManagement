import React, { useState, useEffect } from 'react'
import Course from '../Course/Course'
import axios from 'axios'
import base_url from '../bootAPIs/BootAPIS'

export default function AllCourses() {
    
    useEffect(() => {
        document.title = "All Courses"
    }, [])

    const [courses, setCourses] = useState([])

    const getAllUserFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                console.log(response)
                setCourses(response.data)
                console.log("The data has been fetched from the server")
            },
            (error) => {
                console.log(`The error message : ${error}`)
            }
        )
    }

    useEffect(() => {
        getAllUserFromServer();
    }, [])
    

    return (
        <div>
            {
                courses.length > 0 ?
                courses.map((item) => <Course key={item.id} course={item}/>)
        : "There is nothing"
            }
        </div>
    )
}
