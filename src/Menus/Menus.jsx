import React from 'react'
import { ListGroup } from 'reactstrap'
import { Link } from "react-router-dom";

export default function Menus() {
    return (
        <div>
            <Link
                className='list-group-item list-group-item-action'
                tag={Link}
                to='/'
                action>
                Home
            </Link>
            <Link
                className='list-group-item list-group-item-action'
                tag={Link}
                to='/add-course'
                action>
                Add Courses
            </Link>
            <Link
                className='list-group-item list-group-item-action'
                tag={Link}
                to='/view-course'
                action>
                View Courses
            </Link>
            <Link
                className='list-group-item list-group-item-action'
                tag={Link}
                to='#'
                action>
                About
            </Link>
            <Link
                className='list-group-item list-group-item-action'
                tag={Link}
                to='#'
                action>
                Contact Us
            </Link>
        </div>
    )
}
