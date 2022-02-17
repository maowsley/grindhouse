import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReviewsCreate from './CreateReviews';
import { Component } from 'react';
import APIURL from '../../helpers/enviorment';
import ReviewCard from './ReviewsCards';
import SiteBar from '../NavBar/NavBar';


interface InReviewsIndex {
  reviews: Array<any>,
  updateActive: boolean,
  reviewToUpdate: Object,
  reviewToDelete: Object,
  deleteActive: boolean
}

interface IProps {
  token: string;
}



export default class ReviewIndex extends React.Component<IProps, InReviewsIndex> {
  state: InReviewsIndex = {
      reviews: [],
      updateActive: false,
      reviewToUpdate: {},
      reviewToDelete: {},
      deleteActive: false
  }

  fetchReviews = (): void => {
 
    fetch(`${APIURL}/reviews/`, {
      method: 'GET',
 
    })
      .then((res) => res.json())
      .then((reviewData) => {
        console.log(reviewData.reviews);
        this.setState({ reviews: reviewData.review})
      })
  };

  fetchRating = (): void => {

    fetch(`${APIURL}/reviews/rating/:rating`, {
       method: 'GET',
       
     })
     .then((res) => res.json())
     .then((ratingData) => {
       console.log(ratingData.review);
       this.setState({ reviews: ratingData.review })
     })
}

deleteReview = (): void => {
    let requestHeaders: any = {
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      }

    fetch(`${APIURL}/reviews/delete/:review_id`, {
        method: "DELETE",
        headers: requestHeaders
       
     })
     .then((res) => res.json())
     .then((deleteData) => {
       console.log(deleteData.review);
       this.setState({ reviews: deleteData.reviews })
     })
}

  componentDidMount(): void {
    this.fetchReviews();
  }
  componentWillUnmount(): void {
      this.deleteReview();
  }
  reviewToDelete = (reviews:any) : void => {
  console.log(reviews);
  this.setState({reviewToDelete: reviews})
  }
  editUpdateReviews = (reviews: any): void => {
    console.log(reviews);
    this.setState({ reviewToUpdate: reviews })
  };

  updateToggle = (): void => {
    this.setState({ updateActive: !this.state.updateActive })
  };

  deleteToggle = (): void => {
      this.setState({deleteActive: !this.state.deleteActive })
  }


  render() {
    return (
      
      <Container>
       
        <Row>
         
          <Col md="3">
            <ReviewsCreate fetchReviews={this.fetchReviews} token={this.props.token}  />
          </Col>
          <Col md="9">
            {this.state.reviews.length > 0 ? 
                this.state.reviews.map(review => {
                  return <ReviewCard key={review.id} review={review} />
                }) 
              : <h1>Create and special Coffee Note</h1>
            }
          </Col>
        </Row>
      </Container>
    )
  }
}