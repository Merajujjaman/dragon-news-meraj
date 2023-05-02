import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInside from './EditorInside';

const NewsDetails = () => {

    const news = useLoaderData()

    const { _id, title, image_url, details, author, category_id } = news
    return (
        <>
            <Card >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary"><FaArrowLeft></FaArrowLeft> all news in this category</Button>
                        </Link>
                </Card.Body>
            </Card>

            <EditorInside></EditorInside>
        </>
    );
};

export default NewsDetails;