import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div>
                <section>
                    <h1>So Fresh So Green</h1>
                        <p>Buy, Sell, Trade, and Share all the latest plants in your area. </p>
                        <Link to="/signup">
                        <a href="/signup">
                            Get started
                        </a>
                        </Link>
                        <Link to="/signup">
                        <a href="/signup">
                            SIGN UP NOW
                        </a>
                        </Link>
                        <h2>Fresh content for green thumbs.</h2>
                        <h2>Designed for plant lovers and friends</h2>
                    <p>Here at So Fresh So Green we focus on keeping you in the loop for the hottest plant world news. Grow your plants and the community along side us!</p>
                    <div>
                        <h3>Create a custom profile</h3>
                        <p class="text-white">Keep track of your plants in your virtual garden, search for plant species, and create a watering schdule with a customizable, iterative, profile made to embody your energy.</p>
                    </div>
                    <div>
                        <h3>Share posts of your favorite plants</h3>
                        <p>Share pictures and posts about your favorite plants! No more plant news through the grapevine share to the SFSG forum and branch out.</p>
                    </div>
                    <div>
                        <h3>Sell Your Plants</h3>
                        <p> Got green? Buy and sell plants in app!</p>
                    </div>
            </section>
        <Footer />
        </div>

    );
};