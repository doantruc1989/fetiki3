import { Button, Card, Label, Modal, Radio, Rating } from "flowbite-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { HiChevronRight } from "react-icons/hi";
import { useCart } from "react-use-cart";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HiCheck, HiStar } from "react-icons/hi";

function Dongtienhero() {
  const { addItem } = useCart();
  const [products, setProducts] = useState([]);
  const [modals, setModals] = useState(false);
  const [productDetail, setProductDetail] = useState([] as any);
  const clickref: any = useRef();

  useEffect(() => {
    let handler = (e: any) => {
      if (!clickref.current?.contains(e.target)) {
        setModals(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  useEffect(() => {
    try {
      axios
        .get(`https://quocson.fatcatweb.top/product/all?search=random`)
        .then((res) => {
          setProducts(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 968 },
      items: 6,
      slidesToSlide: 6, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 968, min: 464 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };

  return (
    <React.Fragment>
      <Card className="bg-white w-full">
        <div className="flex justify-between">
          <div className="flex contents-start items-center">
            <h5 className="text-base ml-1 md:text-xl font-bold text-gray-900 dark:text-white">
              Dành cho bạn
            </h5>
          </div>

          <Link
            href="/giatotmoingay"
            className="flex text-blue-700 flex-wrap items-center"
          >
            <div className="text-xs lg:text-base font-bold tracking-tight dark:text-white">
              Xem thêm{" "}
            </div>
            <HiChevronRight className="text-xl lg:text-3xl" />
          </Link>
        </div>

        <Carousel
          swipeable={false}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={2000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          deviceType={"desktop"}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-margin-40-px"
        >
          {products?.map((product: any) => {
            return (
              <div className="rounded-lg mx-1 border border-gray-200 shadow-sm hover:shadow-lg bg-white mb-1.5" key={product?.id}>
                  {product?.brand === "official" ? (
                  <div className="flex items-center gap-1 px-1 font-medium text-white absolute border rounded-tl-md rounded-br-md border-gray-400 bg-blue-600 text-sm md:text-[10px] uppercase">
                    <HiCheck className="font-medium text-sm" />
                    <p>{product?.brand}</p>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 px-1 font-medium text-white absolute border rounded-tl-md rounded-br-md border-gray-400 bg-blue-500 text-sm md:text-[10px] uppercase">
                    <HiStar className="font-medium text-sm" />
                    <p>{product?.brand}</p>
                  </div>
                )}
                  <img
                    onClick={() => {
                      axios
                        .get(
                          `https://quocson.fatcatweb.top/v2/product/${product?.id}`
                        )
                        .then((response) => {
                          setProductDetail(response.data);
                          setModals(!modals);
                        });
                    }}
                    src={product?.image}
                    className="rounded-t-lg cursor-pointer w-full h-auto"
                    alt="..."
                  />
                  <Link href={"/products/" + product?.id}>
                  <div className="cursor-pointer text-center text-xs">
                    <p className="font-medium text-gray-900 dark:text-white mx-1 mt-2 text-ellipsis h-8">
                      {product?.productName.substring(0, 40) + "..."}
                    </p>
                    <div className="flex gap-3 items-center justify-center mt-1">
                      <div className="flex gap-1 pr-1 items-center border-r border-gray-200">
                        <p>{product?.stars}</p>
                        <Rating size="sm">
                          <Rating.Star />
                        </Rating>
                      </div>
                      <div className="flex gap-1 items-center">
                        <p>Đã bán</p>
                        <p className="font-medium">{product?.sold}</p>
                      </div>
                    </div>
                  </div>
                </Link>
                {product?.discount?.disPercent ? (
                  <div className="flex gap-2 px-2 items-center justify-center">
                    <p className="text-xl md:text-base font-medium text-red-600 dark:text-white my-1">
                      {Intl.NumberFormat().format(product?.price)} đ
                    </p>
                    <p className="text-red-500 font-bold text-xs">
                      {"-" + product?.discount?.disPercent + "%"}
                    </p>
                  </div>
                ) : (
                  <div className="flex gap-2 px-2 items-center justify-center">
                    <p className="text-xl md:text-base font-medium text-black dark:text-white my-1">
                      {Intl.NumberFormat().format(product?.price)} đ
                    </p>
                  </div>
                )}
                {product?.price > 500000 ? (
                  <div className="flex border-b border-gray-200 pb-2 gap-2 text-[9px] lg:text-xs lg:font-normal font-medium text-blue-500 justify-center">
                    <p className="border border-blue-600 px-1 py-0.5 rounded-sm">
                      Trả góp
                    </p>
                    <p className="border border-blue-600 px-1 py-0.5 rounded-sm">
                      Nhiều màu
                    </p>
                  </div>
                ) : (
                  <div className="flex border-b border-gray-200 pb-2 gap-2 text-[9px] lg:text-xs lg:font-normal font-medium text-blue-500 justify-center">
                    <p className="border border-blue-600 px-1 py-0.5 rounded-sm">
                      Nhiều màu
                    </p>
                  </div>
                )}
                {product?.category === "dienthoai" ||
                product?.category === "diengiadung" ||
                product?.category === "nhahang" ||
                product?.category === "khoahoc" ||
                product?.category === "sach" ? (
                  <div className="my-1 flex gap-1 items-center text-sm justify-center">
                    <img
                      className="h-4 w-auto"
                      src="/image/tikinow.png"
                      alt="..."
                    />
                    <p>Giao siêu tốc 2H</p>
                  </div>
                ) : (
                  <div className="my-1 flex gap-1 items-center text-sm justify-center">
                    <img
                      className="h-4 w-auto"
                      src="/image/tikifast.png"
                      alt="..."
                    />
                    <p>Giao ngày mai</p>
                  </div>
                )}
                </div>
            );
          })}
        </Carousel>

        <Modal
          show={modals}
          position="center"
          onClose={() => {
            setModals(!modals);
          }}
        >
          <Modal.Header>Chi Tiết Sản Phẩm</Modal.Header>
          <Modal.Body>
          <div className="grid relative grid-cols-1 items-center align-center md:grid-cols-2 md:items-start gap-4 mx-3">
                {productDetail[0]?.brand === "official" ? (
                  <div className="flex items-center gap-1 px-1 font-medium text-white absolute border rounded-tl-md rounded-br-md border-gray-400 bg-blue-600 text-sm md:text-[10px] uppercase">
                    <HiCheck className="font-medium text-sm" />
                    <p>{productDetail[0]?.brand}</p>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 px-1 font-medium text-white absolute border rounded-tl-md rounded-br-md border-gray-400 bg-blue-500 text-sm md:text-[10px] uppercase">
                    <HiStar className="font-medium text-sm" />
                    <p>{productDetail[0]?.brand}</p>
                  </div>
                )}
                <img
                  src={productDetail[0]?.image}
                  className="w-full h-auto rounded-lg"
                  alt="..."
                />
                <div>
                  <div className="text-xs mb-3 flex">
                    <h5>Sản phẩm: </h5>
                    <a href="#" className="text-blue-600 underline ml-2">
                      {productDetail[0]?.brand}
                    </a>
                  </div>
                  <h3 className="text-lg md:text-xl font-medium mb-3">
                    {productDetail[0]?.productName}
                  </h3>
                  <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <Rating>
                        <Rating.Star />
                        <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white mr-4">
                          {productDetail[0]?.stars}
                        </p>

                        <div className="text-sm font-medium text-gray-900  dark:text-white">
                          {productDetail[0]?.sold + " đánh giá"}
                        </div>
                      </Rating>
                    </div>
                    <h5 className="text-sm">
                      {"Đã bán: " + productDetail[0]?.sold}
                    </h5>
                  </div>

                  <div className="bg-gray-100 rounded-md p-4 my-4 flex gap-3 items-end relative">
                    <h2 className=" text-red-500 font-bold text-xl">
                      {Intl.NumberFormat().format(
                        (productDetail[0]?.price *
                          (100 -
                            (productDetail[0]?.discount?.disPercent || 0))) /
                          100
                      )}{" "}
                      đ
                    </h2>
                    <p className="line-through text-gray-500">
                      {Intl.NumberFormat().format(productDetail[0]?.price)} đ
                    </p>
                    <p className="text-red-600 lg:text-sm font-bold absolute px-2 rounded-bl-md rounded-tr-md right-0 top-0 bg-red-400 border border-gray-100">
                      {"-" +
                        (productDetail[0]?.discount?.disPercent || 0) +
                        "%"}
                    </p>
                  </div>

                  <div>
                    <p className="mb-3 font-medium">Loại:</p>
                    <div className="grid grid-cols-3 gap-1">
                      {productDetail[0]?.productvariant[0]?.id == undefined ? (
                        <div className="flex items-center py-1 justify-center gap-2 border border-gray-200 rounded-lg hover:bg-gray-200 cursor-pointer shadow-md">
                          <Radio
                            id="united-state"
                            className="cursor-pointer"
                            name="countries"
                            defaultChecked={true}
                          />
                          <Label htmlFor="united-state">Original</Label>
                        </div>
                      ) : (
                        productDetail[0]?.productvariant?.map((item: any) => {
                          return (
                            <div
                              key={item.id}
                              className="flex items-center py-1 justify-center gap-1 border border-gray-200 rounded-lg hover:bg-gray-200 cursor-pointer shadow-md"
                            >
                              <Radio
                                id="united-state"
                                name="countries"
                                className="cursor-pointer"
                                defaultChecked={true}
                              />
                              <Label htmlFor="united-state">{item.type}</Label>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-md p-3 mx-3 mt-4">
                <h2 className="font-bold text-sm md:text-base">
                  Mô tả sản phẩm:
                </h2>
                <div className="text-sm md:text-base text-justify">
                  {productDetail[0]?.content}
                </div>
              </div>
          </Modal.Body>
        </Modal>
      </Card>
    </React.Fragment>
  );
}

export default Dongtienhero;
