import React from "react";
import SectionTitle from "../components/text/SectionTitle";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Team() {
  const team = [
    {
      url: "src/assets/images/person.jpg",
      name: "Dianne Russell",
      job: "Founder and CEO",
    },
    {
      url: "src/assets/images/person.jpg",
      name: "Jerome Bell",
      job: "Founder and Program Director",
    },
    {
      url: "src/assets/images/person.jpg",
      name: "Kristin Watson",
      job: "Marketer, Curator of Marketing Course",
    },
    {
      url: "src/assets/images/person.jpg",
      name: "Marvin McKinney",
      job: "Founder and CEO",
    },
  ];

  return (
    <div className="px-20 py-10">
      <p className="font-bold">Best tutors are all here</p>
      <div className="flex justify-between">
        <SectionTitle title="Meet our team" />
      </div>

      <div className="grid grid-cols-12 p-14 gap-8">
        {team.map((person) => (
          <div className="col-span-3">
            <div className="h-full group relative top-0 left-0">
              <img
                className="w-full h-full object-cover"
                src={person.url}
                alt=""
              />
              <div className="group-hover:flex hidden absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black items-end transition duration-300">
                <div className="flex justify-end text-white w-full pb-2 pr-2">
                    <FaFacebookF />
                    <FaInstagram />
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-xl font-bold">{person.name}</p>
              <p className="text-gray-400">{person.job}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
