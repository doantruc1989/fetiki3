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
      category: "sach",
      sortBy: "price",
      search: "gia1",
      fromPrice: 0,
      toPrice: 20000,
    };
    const price2 = {
      category: "sach",
      sortBy: "price",
      search: "gia2",
      fromPrice: 20000,
      toPrice: 60000,
    };
    const price3 = {
      category: "sach",
      sortBy: "price",
      search: "gia3",
      fromPrice: 60000,
      toPrice: 210000,
    };
    const price4 = {
      category: "sach",
      sortBy: "price",
      search: "gia4",
      fromPrice: 210000,
      toPrice: 10000000,
    };
 const danhmuc1 = {
      category: "sach",
      sortBy: "anh",
      search: "danhmuc1",
    };
    const danhmuc2 = {
      category: "sach",
      sortBy: "viet",
      search: "danhmuc2",
    };
    const danhmuc3 = {
      category: "sach",
      sortBy: "van",
      search: "danhmuc3",
    };
    const danhmuc4 = {
      category: "sach",
      sortBy: "niem",
      search: "danhmuc4",
    };

    const prop = {
      title: "tiki book sách làm giàu đắc nhân tâm trinh thám sales off giá rẻ",
      keywords: "tiki book sách làm giàu đắc nhân tâm trinh thám sales off giá rẻ",
      description: "tiki làm trang book sách làm giàu đắc nhân tâm trinh thám sales off giá rẻ đơn giản easy",
    }

  return (
    <div>
       <HeadSeo prop={prop}/>
      <Breadcrumb className="w-full lg:w-11/12 mx-auto pt-5">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item>Nhà Sách Tiki</Breadcrumb.Item>
      </Breadcrumb>
      <div className="grid gap-6 grid-cols-4 w-full lg:w-11/12 mx-auto mt-2">
        <div className="text-xs lg:text-sm md:col-start-1 md:col-end-2 hidden md:block">
          <div className=" bg-white mt-3 rounded-xl p-4 leading-loose">
            <h2 className="font-medium text-sm mb-2">Danh mục sản phẩm</h2>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc1);
              }}>
              English Books
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc2);
              }}>
              Sách tiếng Việt
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc3);
              }}>
              Văn phòng phẩm
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(danhmuc4);
              }}>
              Quà lưu niệm
            </button>

            
          </div>

          <div className="flex flex-col bg-white mt-3 rounded-xl p-4 leading-loose">
            <h2 className="font-medium text-sm mb-2">Giá</h2>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(price1);
              }}
            >
              Dưới 20.000
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
             onClick={() => {
                setChangeTab(true);
                setSearchs(price2);
              }}
              >
              20.000 to 60.000
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(price3);
              }}
              >
              60.000 to 210.000
            </button>
            <button className="ml-2 mb-2 px-2 rounded-xl border border-gray-200 hover:bg-gray-200 bg-white w-fit"
            onClick={() => {
                setChangeTab(true);
                setSearchs(price4);
              }}
              >
              Trên 210.000
            </button>
          </div>

          <div className=" bg-white mt-3 rounded-xl p-4 leading-loose">
            <h2 className="font-medium text-sm mb-2">Dịch vụ</h2>
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
                Giao Siêu Tốc 2H
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
                Thưởng thêm Astra
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
                Freeship không giới hạn
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
                Trả góp 0%
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
                Giảm sâu
              </label>
            </div>
          </div>
        </div>
        <div className="col-start-1 md:col-start-2 col-end-5 ">
          <div className="bg-white rounded-xl p-2 mt-3">
            <div className="font-medium text-xl">
              <h1 className="ml-1">Nhà Sách Tiki</h1>
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
