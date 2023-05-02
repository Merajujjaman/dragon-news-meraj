import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaBookmark, FaEye, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, image_url, details, author, rating, total_view } = news
    return (
        <>
            <Card className="mb-4">
                <Card.Header className='d-flex align-items-center '>
                    <Image style={{ height: 40 }} src={author.img} roundedCircle />
                    <div className='ps-2 flex-grow-1'>
                        <h6>{author?.name}</h6>
                        <p><small>{moment(author?.published_date).format('yyyy-MM-D')}</small></p>
                    </div>
                    <FaBookmark></FaBookmark> <FaShareAlt></FaShareAlt>
                    <div>

                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length < 250 ?
                            <>{details}</>
                            :
                            <>{details.slice(0, 150)}...
                                <Link to={`/news/${_id}`}>read more</Link>
                            </>
                        }
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1'>
                        <Rating
                            placeholderRating={rating.number}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        ></Rating>
                        <span className='px-1'>{rating.number}</span>
                    </div>
                    <div>
                        <FaEye className='mx-1'></FaEye>{total_view}

                    </div>
                </Card.Footer>
            </Card>
        </>
    );
};

export default NewsCard;