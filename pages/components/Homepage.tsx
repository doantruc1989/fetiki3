import axios from "axios";
import { Sidebar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Hero from "./Hero/Hero";
import Hero2 from "./Hero/Hero2";
import Hero3 from "./Hero/Hero3";
import Hero4 from "./Hero/Hero4";
import Hero5 from "./Hero/Hero5";
import Hero6 from "./Hero/Hero6";
import Footera from "./Footer";

const Homepage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      axios.get("https://quocson.fatcatweb.top/listcategory").then((response) => {
        setItems(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="flex w-full mx-auto gap-6">
      <div className="w-fit hidden xl:block xl:fixed xl:left-8 h-[500px] mt-8 rounded-xl">
        <Sidebar
          className=" bg-[#F5F5FA] rounded-xl sidehome"
          aria-label="Sidebar with logo branding example"
        >
          <Sidebar.Items>
            <Sidebar.ItemGroup className='rounded-lg'>
              {items
                ? items.map((item: any) => {
                    return (
                      <Sidebar.Item href={item.path} key={item.id}>
                        <div className="flex items-center">
                          <img
                            className="h-8 w-8 rounded-lg shadow-lg mr-2"
                            src={item.image}
                            alt={item.category}
                          />
                          <p className="capitalize text-sm font-medium">
                            {item.category}
                          </p>
                        </div>
                      </Sidebar.Item>
                    );
                  })
                : null}
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div className="w-full lg:w-11/12 mx-auto xl:w-9/12 xl:mr-6">
        <Hero />
        <Hero2 />
        <Hero3 />
        <Hero4 />
        <Hero5 />
        <Hero6 />
        <Footera />
      </div>
    </div>
  );
};

export default Homepage;
