import React, { useState } from 'react'
import { Card, CardBody } from 'reactstrap'

export default function Header(props) {

    return (
        <div>
            <Card className='my-2 bg-warning'>
                <CardBody>
                    <h1 className='text-center'>Welcome to Courses Application</h1>
                </CardBody>
            </Card>
        </div>
    )
}
