import React, {Component} from "react"
import './Home.css';
import {FaCoffee} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import blackRec from './blacrec.png';
import coffeePour from './coffeepour.jpeg';
import {Button, ThemeProvider} from 'react-bootstrap';
import topgraph from "./coffehousetophome.svg";
import square from "./blacksquare.png";
import coffeeGif from "./coffeegifh.gif";
import Auth from "../Auth/Auth";
import NavBar from "../NavBar/NavBar";
import DrinkNotes from '../DrinkNotes/coffeeNotes';
import DrinkReviews from "../Reviews/reviews";
import Footer from "../Footer/footer";
class Home extends React.Component<{}, {}> {
  
    render() {
        return (
            <div>
            <div className="Home">
            < NavBar />
            <div className="homemuglogo">
                < FaCoffee size={'800px'} />
            </div>
            <text 
            className="Hometitle">
            Premium Taste{"\n"}
            Luxury Service
            </text>
            <p className="hometextpassage">
            It's finally here! Premium roasted coffee is now{"\n"}
            available in your hometown. No need to drive out of{"\n"}
            town to get your luxury coffee fix. Our coffee{"\n"}
            beans are imported from the South American continent.{"\n"}
            GRIND HOUSE also offers specialty teas, ice coffee{"\n"}
            and other non caffeinated drinks such as luxury hot{"\n"}
            chocolate.
            </p>
            <Button variant="secondary" size="lg" className="custom-btn">Home</Button>{" "}
            <div className="CoffeeMenuHome">
            <p className="menuHTitle">
            Coffee Menu @{"\n"}
            Your Finger Tips
            </p>
           
            <p className="menuHomeText">
              We offer a varity of different luxury{"\n"}
              beverages to quench your everlasting{"\n"}  
              thrist. We offer iced and hot coffee,{"\n"}
              specialze teas and custom hot{"\n"}
              chocolate for the kiddios. Not really{"\n"}
              a coffee drinker? No problem, we also{"\n"}
              offer Coca-Cola and Pespi products!{"\n"}
            </p>
            <img src={blackRec} className="blackRec"></img>
            <img src={coffeePour} className="coffeePour"></img>
            <Button variant="secondary" size="lg" id="custom-btn">Menu</Button>
            <img src={topgraph} className="top"></img>
            
           
            <div className="ReviewsHome">
            <img src={square} className="squareHome"></img>
            <img src={coffeeGif} className="gif"></img>
            <text className="reviewsH"> 
            5 Star Reviews +{"\n"}
            Coffee Notes
            </text>
            <text className="notesText">
                The GRINDHOUSE has become eveyone's{"\n"}
                favorite luxury coffee shop. In 2021{"\n"}
                the GRINDHOUSE won the "Best Coffee{"\n"}
                Design award for best unique ice coffee{"\n"}
                notes, post and view reviews from happy{"\n"}
                GRINDHOUSE customers!{"\n"}
            </text>
            < DrinkNotes />
            <Button variant="primary">Reviews</Button>
            <Auth />
            <Button variant="primary" className="notesbutton">Coffee Notes</Button>
            <DrinkReviews />
          
            <Footer />              
            </div>
            </div>
                </div>
            </div>
        )
    }
};



export default Home;