import { Breadcrumb, Carousel, Tabs } from "flowbite-react";
import React, { ReactElement, useState } from "react";
import { CartProvider } from "react-use-cart";
import Layout2 from "../components/Layout2";
import { HiHome } from "react-icons/hi";
import "react-toastify/dist/ReactToastify.css";
import Tab from "./Tab";
import TabSearch from "./TabSearch";
import HeadSeo from "../components/HeadSeo";



const Index = () => {
    const [searchs, setSearchs] = useState({});
    const [changeTab, setChangeTab] = useState(false);

    const price1 = {
      category: "donu",
      sortBy: "price",
      search: "gia1",
      fromPrice: 0,
      toPrice: 80000,
    };
    const price2 = {
      category: "donu",
      sortBy: "price",
      search: "gia2",
      fromPrice: 80000,
      toPrice: 200000,
    };
    const price3 = {
      category: "donu",
      sortBy: "price",
      search: "gia3",
      fromPrice: 200000,
      toPrice: 420000,
    };
    const price4 = {
      category: "donu",
      sortBy: "price",
      search: "gia4",
      fromPrice: 420000,
      toPrice: 10000000,
    };

    const danhmuc1 = {
      category: "donu",
      sortBy: "da",
      search: "danhmuc1",
    };

    const danhmuc2 = {
      category: "donu",
      sortBy: "dam",
      search: "danhmuc2",
    };

    const danhmuc3 = {
      category: "donu",
      sortBy: "vay",
      search: "danhmuc3",
    };

    const danhmuc4 = {
      category: "donu",
      sortBy: "quan",
      search: "danhmuc4",
    };

    const danhmuc5 = {
      category: "donu",
      sortBy: "ao",
      search: "danhmuc5",
    };

    const danhmuc6 = {
      category: "donu",
      sortBy: "doi",
      search: "danhmuc6",
    };

    const danhmuc7 = {
      category: "donu",
      sortBy: "bau",
      search: "danhmuc7",
    };

    const danhmuc8 = {
      category: "donu",
      sortBy: "lot",
      search: "danhmuc8",
    };

    const danhmuc9 = {
      category: "donu",
      sortBy: "ngu",
      search: "danhmuc9",
    };

    const prop = {
      title: "tiki th???i trang fashion ??o n??? thun cotton l???a v??y ph??ng sales off gi?? r???",
      keywords: "tiki th???i trang fashion ??o n??? thun cotton l???a v??y ph??ng sales off gi?? r???",
      description: "tiki l??m trang th???i trang fashion ??o n??? thun cotton l???a v??y ph??ng sales off gi?? r??? ????n gi???n easy",
    }

  return (
    <div className="my-5">
      <HeadSeo prop={prop}/>
      <Breadcrumb className="w-full lg:w-11/12 mx-auto pt-5">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang ch???
        </Breadcrumb.Item>
        <Breadcrumb.Item>Th???i trang n???</Breadcrumb.Item>
      </Breadcrumb>
      <div className="grid gap-6 grid-cols-4 w-full lg:w-11/12 mx-auto mt-2">
        <div className="text-xs lg:text-sm md:col-start-1 md:col-end-2 hidden md:block">
          <div className=" bg-white mt-3 rounded-xl p-4 leading-loose">
            <h2 className="font-medium text-sm mb-2">Danh m???c s???n ph???m</h2>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc1);
              }}>
              ??o n???
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc2);
              }}>
           ?????m n???
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc3);
              }}>
           Ch??n v??y
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc4);
              }}>
              Qu???n n???
            </button>

            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc5);
              }}>
              ??o li???n qu???n
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc6);
              }}>
              ????? ????i 
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc7);
              }}>
             Th???i trang b???u
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc8);
              }}>
             ????? l??t n???
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
             onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc9);
              }}>
             ????? ng???
            </button>
          </div>

          <div className="flex flex-col bg-white mt-3 rounded-xl p-4 leading-loose">
            <h2 className="font-medium text-sm mb-2">Gi??</h2>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(price1);
              }}
            >
              D?????i 80.000
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
             onClick={() => {
                setChangeTab(true);
                setSearchs(price2);
              }}
              >
              80.000 to 200.000
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(price3);
              }}
              >
              200.000 to 420.000
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(price4);
              }}
              >
              Tr??n 420.000
            </button>
          </div>
          
          <div className=" bg-white mt-3 rounded-xl p-4 leading-loose">
            <h2 className="font-medium text-sm mb-2">D???ch v???</h2>
            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Giao Si??u T???c 2H
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                // checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checked-checkbox"
                className="ml-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Th?????ng th??m Astra
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                // checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checked-checkbox"
                className="ml-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Freeship kh??ng gi???i h???n
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                // checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checked-checkbox"
                className="ml-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Tr??? g??p 0%
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                // checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checked-checkbox"
                className="ml-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Gi???m s??u
              </label>
            </div>
          </div>
        </div>
        <div className="col-start-1 md:col-start-2 col-end-5 ">
          <div className="bg-white rounded-xl p-2 mt-3">
            <div className="font-medium text-xl">
              <h1 className="mb-3 pt-3">Th???i trang n???</h1>
              <div className="h-56 gap-4 sm:h-64 xl:h-80 2xl:h-9 px-1">
                <Carousel
                  slide={true}
                  indicators={false}
                  leftControl=" "
                  rightControl=" "
                >
                  <img
                    src="image/dienthoai/banner1.png"
                    className="rounded-xl"
                    alt="banner"
                  />
                  <img
                    src="image/dienthoai/banner2.png"
                    className="rounded-xl"
                    alt="banner"
                  />
                  <img
                    src="image/dienthoai/banner3.png"
                    className="rounded-xl"
                    alt="banner"
                  />
                  <img
                    src="image/dienthoai/banner4.png"
                    className="rounded-xl"
                    alt="banner"
                  />
                </Carousel>
              </div>
            </div>
          </div>
        {!changeTab ? <Tab /> : <TabSearch prop={searchs}/>}
        </div>
      </div>
    </div>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <CartProvider>
      <Layout2>
        <>{page}</>
      </Layout2>
    </CartProvider>
  );
};

export default Index;
