import React from 'react';
import Alec from "../assets/Alec.jpg";
import Mahri from "../assets/mahri.jpg";

const people = [
  {
    name: "Alec Ferchen",
    netID: "aferchen",
    email: "aferchen@iastate.edu",
    bio: "Hello, I am Alec Ferchen, a sophomore computer science major here at Iowa State University. My previous coursework has prepared me for creating detailed and interactive webpages from scratch. A couple main classes that will help being COMS 3090 (Software Development Practices) and COMS 3210 (Computer Architecture and Machine Level Programming)",
    pic: Alec,
  },
  {
    name: "Mahri Antongiovanni",
    netID: "manton13",
    email: "manton13@iastate.edu",
    bio: "Hello, I am Mahri Antongiovanni. I am currently a sophomore majoring in software engineering at Iowa State University. Before taking this class I had some experience working with websites in SE 186 (now SE 1860) where you get to make a project of your choosing in a team. In this class we built a quiz game website to explore some basics of html, js, css, and more.",
    pic: Mahri,
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-blue-200 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">About Us</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        {people.map((person, index) => (
          <div key={index} className="bg-gray-200 shadow-lg rounded-lg p-6 text-center">
            <img
              src={person.pic}
              alt={person.name}
              className="w-40 h-40 object-cover rounded-full mx-auto mb-4 border-4 border-purple-400"
            />
            <h2 className="text-2xl font-semibold">{person.name}</h2>
            <p className="text-gray-600">{person.email}</p>
            <p className="text-black">{person.netID}</p>
            <p className="mt-4 text-gray-700 text-sm">{person.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;