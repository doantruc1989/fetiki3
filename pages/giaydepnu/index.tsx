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
      category: "giaynu",
      sortBy: "price",
      search: "gia1",
      fromPrice: 0,
      toPrice: 100000,
    };
    const price2 = {
      category: "giaynu",
      sortBy: "price",
      search: "gia2",
      fromPrice: 100000,
      toPrice: 260000,
    };
    const price3 = {
      category: "giaynu",
      sortBy: "price",
      search: "gia3",
      fromPrice: 260000,
      toPrice: 460000,
    };
    const price4 = {
      category: "giaynu",
      sortBy: "price",
      search: "gia4",
      fromPrice: 460000,
      toPrice: 10000000,
    };

    const danhmuc1 = {
      category: "giaynu",
      sortBy: "got",
      search: "danhmuc1",
    };

    const danhmuc2 = {
      category: "giaynu",
      sortBy: "thao",
      search: "danhmuc2",
    };

    const danhmuc3 = {
      category: "giaynu",
      sortBy: "sandal",
      search: "danhmuc3",
    };

    const danhmuc4 = {
      category: "giaynu",
      sortBy: "bup",
      search: "danhmuc4",
    };

    const danhmuc5 = {
      category: "giaynu",
      sortBy: "xuong",
      search: "danhmuc5",
    };

    const danhmuc6 = {
      category: "giaynu",
      sortBy: "boot",
      search: "danhmuc6",
    };

    const danhmuc7 = {
      category: "giaynu",
      sortBy: "dep",
      search: "danhmuc7",
    };

    const danhmuc8 = {
      category: "giaynu",
      sortBy: "luoi",
      search: "danhmuc8",
    };

    const danhmuc9 = {
      category: "giaynu",
      sortBy: "phu",
      search: "danhmuc9",
    };

    const prop = {
      title: "tiki gi??y d??p n??? woman shoes sales off gi?? r???",
      keywords: "tiki gi??y d??p n??? woman shoes sales off gi?? r???",
      description: "tiki l??m trang gi??y d??p n??? woman shoes sales off gi?? r??? ????n gi???n easy",
    }

  return (
    <div className="my-5">
      <HeadSeo prop={prop}/>
      <Breadcrumb className="w-full lg:w-11/12 mx-auto pt-5">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang ch???
        </Breadcrumb.Item>
        <Breadcrumb.Item>Gi??y - D??p n???</Breadcrumb.Item>
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
              Gi??y cao g??t
            </button>
             <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc2);
              }}>
           Gi??y th??? thao
            </button>
             <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc3);
              }}>
          Gi??y sandals
            </button>
             <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc4);
              }}>
              Gi??y b??p b??
            </button>

             <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc5);
              }}>
              Gi??y ????? xu???ng
            </button>
             <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc6);
              }}>
              Gi??y boots
            </button>
             <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc7);
              }}>
             D??p - Gu???c n???
            </button>
             <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc8);
              }}>
             Gi??y l?????i n???
            </button>
             <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
             onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc9);
              }}>
             Ph??? ki???n gi??y
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
              D?????i 100.000
            </button>
             <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
             onClick={() => {
                setChangeTab(true);
                setSearchs(price2);
              }}
              >
               100.000 to 260.000
            </button>
             <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(price3);
              }}
              >
              260.000 to 460.000
            </button>
             <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(price4);
              }}
              >
              Tr??n 460.000
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
              <h1 className="mb-3 pt-3">Gi??y - D??p n???</h1>
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
