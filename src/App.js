import './App.css';
import Header from './Header/Header';
import { Badge, Container, Row, Col } from "reactstrap"
import { ToastContainer, toast } from 'react-toastify'
import Home from './Home/Home';
import Course from './Course/Course';
import AllCourses from './AllCourses/AllCourses';
import AddCourses from './AddCourses/AddCourses';
import Menus from './Menus/Menus';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const btnHandler = () => {
    toast.error("done", {
      position: "top-center"
    })
  }
  return (
    <>
      <BrowserRouter>
        <div>
          <Container>
            <Header />
            <Row>
              <Col md={2} className='mx-4'>
                <Menus />
              </Col>
              <Col md={8}>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/add-course' element={<AddCourses />} />
                  <Route path='/view-course' element={<AllCourses />} />
                </Routes>
              </Col>
            </Row>
          </Container>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;