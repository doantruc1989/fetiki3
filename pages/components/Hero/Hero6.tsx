import { Card, Label, Modal, Radio, Rating } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import { HiCheck, HiStar } from "react-icons/hi";

const Hero6 = () => {
  const [products, setProducts] = useState([] as any);
  const [page, setPage] = useState(2);
  const [value, setValue] = useState("danhchoban");
  const [category, setCategory] = useState("dochoi");
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
      axios.get(`https://quocson.fatcatweb.top/v2/product?page=1`).then((response) => {
        setProducts(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const loadMoredata = () => {
    try {
      axios
        .get(`https://quocson.fatcatweb.top/v2/product?page=${page}`)
        .then((response) => {
          setProducts([...products, ...response.data]);
          // setIsFetching(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const danhchoban = () => {
    try {
      axios
        .get(
          `https://quocson.fatcatweb.top/product/all?search=${value}&category=${category}`
        )
        .then((res) => {
          setProducts(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 968 },
      items: 6,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 968, min: 464 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <Card className="bg-white mt-6">
        <h5 className="text-base md:text-xl font-bold text-gray-900 dark:text-white">
          Gợi ý hôm nay
        </h5>

        <div className="flex flex-wrap content-around justify-between sticky top-[62px] md:top-20 lg:top-[86px] xl:top-[86px] z-40">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={2000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            deviceType={"desktop"}
          >
            <Card
              onClick={() => {
                setPage(1);
                setCategory("dochoi");
                setValue("danhchoban");
                danhchoban();
              }}
              className={"cursor-pointer h-16 lg:h-20 hover:bg-gray-100"}
            >
              <button className="flex flex-col items-center">
                <img
                  className="h-11 w-11 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full shadow-lg"
                  src="/image/danhchoban.png"
                  alt="Bonnie image"
                />
                <p className="text-xs h-4 lg:mt-1 text-gray-500 dark:text-gray-400 hidden lg:block">
                  Dành cho bạn
                </p>
              </button>
            </Card>
            <Card
              onClick={() => {
                setPage(1);

                setCategory("dienthoai");
                setValue("dichvuso");
                danhchoban();
              }}
              className={"cursor-pointe h-16 lg:h-20 hover hover:bg-gray-100"}
            >
              <button className="flex flex-col items-center">
                <img
                  className="h-11 w-11 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full shadow-lg"
                  src="/image/dichvuso.png"
                  alt="Bonnie image"
                />
                <p className="text-xs h-4 lg:mt-1 text-gray-500 dark:text-gray-400 hidden lg:block">
                  Dịch vụ số
                </p>
              </button>
            </Card>
            <Card
              onClick={() => {
                setPage(1);
                setCategory("donu");
                setValue("dealsieuhot");
                danhchoban();
              }}
              className="cursor-pointer h-16 lg:h-20 hover:bg-gray-100"
            >
              <button className="flex flex-col items-center">
                <img
                  className="h-11 w-11 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full shadow-lg"
                  src="/image/dealsieuhot.png"
                  alt="Bonnie image"
                />
                <p className="text-xs h-4 lg:mt-1 text-gray-500 dark:text-gray-400 hidden lg:block">
                  Deal siêu hot
                </p>
              </button>
            </Card>
            <Card
              onClick={() => {
                setPage(1);
                setCategory("giaynu");
                setValue("revodoi");
                danhchoban();
              }}
              className="cursor-pointer h-16 lg:h-20 hover:bg-gray-100"
            >
              <button className="flex flex-col items-center">
                <img
                  className="h-11 w-11 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full shadow-lg"
                  src="/image/revodoi.png"
                  alt="Bonnie image"
                />
                <p className="text-xs h-4 lg:mt-1 text-gray-500 dark:text-gray-400 hidden lg:block">
                  Rẻ vô đối
                </p>
              </button>
            </Card>
            <Card
              onClick={() => {
                setPage(1);
                setCategory("donam");
                setValue("thoitrang");
                danhchoban();
              }}
              className="cursor-pointer h-16 lg:h-20 hover:bg-gray-100"
            >
              <button className="flex flex-col items-center">
                <img
                  className="h-11 w-11 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full shadow-lg"
                  src="/image/thoitrang.png"
                  alt="Bonnie image"
                />
                <p className="text-xs h-4 lg:mt-1 text-gray-500 dark:text-gray-400 hidden lg:block">
                  Thời trang
                </p>
              </button>
            </Card>
            <Card
              onClick={() => {
                setPage(1);
                setCategory("diengiadung");
                setValue("trending");
                danhchoban();
              }}
              className="cursor-pointer h-16 lg:h-20 hover:bg-gray-100"
            >
              <button className="flex flex-col items-center">
                <img
                  className="h-11 w-11 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full shadow-lg"
                  src="/image/trending.png"
                  alt="Bonnie image"
                />
                <p className="text-xs h-4 lg:mt-1 text-gray-500 dark:text-gray-400 hidden lg:block">
                  Trending
                </p>
              </button>
            </Card>
          </Carousel>
        </div>

        {/* <div className=" flex flex-wrap content-around justify-between"> */}
        <div
          className="grid lg:grid-cols-6 gap-1 grid-cols-2 md:grid-cols-4"
          id="list"
        >
          <div className="col-start-1 col-end-3 w-full h-fit">
            <Link href={"/giatotmoingay"}>
              <img
                className="rounded-lg"
                src="/image/bathangba.png"
                alt="..."
              />
            </Link>
          </div>
          {products.map((product: any) => {
            return (
              <div
                className="relative rounded-md border border-gray-200 shadow-sm hover:shadow-xl bg-white mb-1"
                key={product?.id}
              >
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
                      .get(`https://quocson.fatcatweb.top/v2/product/${product?.id}`)
                      .then((response) => {
                        setProductDetail(response.data);
                        setModals(!modals);
                      });
                  }}
                  src={product?.image}
                  className="rounded-t-md cursor-pointer w-full h-auto"
                  alt="..."
                />
                <Link href={"/products/" + product?.id}>
                  <div className="cursor-pointer text-center text-xs h-14">
                    <p className="font-medium text-gray-900 dark:text-white mx-1 mt-2 text-ellipsis">
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
                      Nhiều loại
                    </p>
                  </div>
                ) : (
                  <div className="flex border-b border-gray-200 pb-2 gap-2 text-[9px] lg:text-xs lg:font-normal font-medium text-blue-500 justify-center">
                    <p className="border border-blue-600 px-1 py-0.5 rounded-sm">
                      Nhiều loại
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
          <Modal
            show={modals}
            position="center"
            onClose={() => {
              setModals(!modals);
            }}
          >
            <Modal.Header>Chi Tiết Sản Phẩm</Modal.Header>
            <Modal.Body ref={clickref}>
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
        </div>
      </Card>
      <div className="flex justify-center my-8">
        <button
          className="w-fit border-2 bg-white border-blue-500 rounded-md py-2 px-16 hover:bg-blue-100 text-blue-700"
          onClick={() => {
            setPage(page + 1);
            loadMoredata();
          }}
        >
          Xem Thêm
        </button>
      </div>
    </>
  );
};

export default Hero6;
