import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firstPic from '../../assets/1.png';
import secondPic from '../../assets/2.png';
import thirdPic from '../../assets/3.png';

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <>
            <div>
                <h3 className='mb-4 bg-secondary p-2'>All Category</h3>
                <div>
                    {
                        categories.map(category => <p
                            key={category.id} className='ps-4 mb-2 fw-bold fs-5 '
                        >
                            <Link to={`/category/${category.id}`} className='text-decoration-none text-secondary'>{category.name}</Link>
                        </p>)
                    }
                </div>
            </div>

            {/* card elements */}
            <div className='py-2'>

                <Row xs={1} className="g-2">
                    <Col >
                        <Card>
                            <Card.Img variant="top" src={firstPic} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card>
                            <Card.Img variant="top" src={secondPic} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card>
                            <Card.Img variant="top" src={thirdPic} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </div>


        </>
    );
};

export default LeftNav;