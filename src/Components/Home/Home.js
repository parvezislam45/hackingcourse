import React from 'react';
import { Link } from 'react-router-dom';
import AllCourse from './AllCourse';
import Banner from './Banner';
import Count from './Count';
import Facility from './Facility';
import Slide from './Slider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="mt-5">
                <h1 className="text-center text-4xl font-bold heading text-white">Learn Ethical Hacking</h1>
            </div>
            <div className="mt-5">
            <Slide></Slide>
            </div>
            <div className="mt-4">
            <h1 className="text-center text-4xl font-bold heading text-white">Our Course</h1>
            </div>
            <div className="mt-5">
                <AllCourse></AllCourse>
            </div>
            <div className="mt-6 justify-center items-center text-center">
                <Link to='/allitem'><button class="btn btn-outline btn-secondary btn-wide">See All Courses</button></Link>
           </div>
           <div className="mt-5">
                <h1 className="text-center text-4xl font-bold heading text-white">Our Facility</h1>
            </div>
            <div className="mt-1">
                <Facility></Facility>
            </div>
            <div className="mt-5">
                <h1 className="text-center text-4xl font-bold heading text-white">Social Activity</h1>
            </div>
            <div className="mt-1">
                <Count></Count>
            </div>

        </div>
    );
};

export default Home;