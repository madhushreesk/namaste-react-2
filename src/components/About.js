import React from "react";
import { Link } from "react-router-dom";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Parent render");
    return (
      <div className="flex justify-center items-center">
        {/* <UserClass name={"Madhushri about class"} location={"Belgaum, India"} /> */}
        <div className="w-[600px] ml-6 mt-5 bg-gray-100 p-3 rounded-lg h-[500px] hover:bg-red-100 shadow-md m-3">
          <div className="flex justify-center text-3xl font-bold">
            Twiggito!
          </div>
          <p className="m-4">
            Welcome to Twiggito, your ultimate destination for a delightful and
            hassle-free food delivery experience! At Twiggito, we believe that
            great food should be enjoyed at your convenience, and we've crafted
            a seamless online platform to bring culinary delights right to your
            doorstep. <br /> <br />
            Twiggito brings you a top-tier dining experience with features
            designed for your convenience. Easily sort through top-rated
            restaurants, explore their menus, and find your favorite dishes
            effortlessly. It's a seamless way to discover, order, and indulge in
            the best culinary delights at your fingertips! <br /> <br />
            Twiggito is here to make every meal a memorable and flavorful
            occasion. Experience the future of food delivery – welcome to
            Twiggito, where taste meets convenience!
          </p>
          <Link to="/home">
            <div className="flex justify-center items-center">
              <button className="p-3 mt-3 bg-red-500 text-white rounded-lg hover:bg-red-600">
                Start Ordering
              </button>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default About;
