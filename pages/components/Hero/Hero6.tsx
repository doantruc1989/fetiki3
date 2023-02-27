import { Button, Card, Modal, Rating, Tabs } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

const Hero6 = () => {
  const { addItem } = useCart();
  const [products, setProducts] = useState([] as any);
  const [page, setPage] = useState(2);
  const [value, setValue] = useState("danhchoban");
  const [category, setCategory] = useState("dochoi");
  const [modals, setModals] = useState(false);
  const [productDetail, setProductDetail] = useState([] as any);
  const clickref: any = useRef();
  // const [isFetching, setIsFetching] = useState(false);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // useEffect(() => {
  //   if (!isFetching) return;
  //   setPage(page + 1);
  //   loadMoredata();
  // }, [isFetching]);

  // function handleScroll() {
  //   const list = document.getElementById('list')
  //   if (window.scrollY + window.innerHeight === list?.clientHeight + list?.offsetTop || isFetching) return;
  //   setIsFetching(true);
  // }

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
      axios.get(`https://quocson.fatcatweb.top/product?page=1`).then((response) => {
        setProducts(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const loadMoredata = () => {
    try {
      axios
        .get(`https://quocson.fatcatweb.top/product?page=${page}`)
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
          <ToastContainer />
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
            <Card className={"cursor-pointer h-16 lg:h-24 hover:bg-gray-100"}>
              <button
                className="flex flex-col items-center"
                onClick={() => {
                  setPage(1);
                  setCategory("dochoi");
                  setValue("danhchoban");
                  danhchoban();
                }}
              >
                <img
                  className="h-11 w-11 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full shadow-lg"
                  src="image/danhchoban.png"
                  alt="Bonnie image"
                />
                <p className="text-xs h-4 lg:mt-3 text-gray-500 dark:text-gray-400 hidden lg:block">
                  Dành cho bạn
                </p>
              </button>
            </Card>
            <Card
              className={"cursor-pointe h-16 lg:h-24 hover hover:bg-gray-100"}
            >
              <button
                className="flex flex-col items-center"
                onClick={() => {
                  setPage(1);

                  setCategory("dienthoai");
                  setValue("dichvuso");
                  danhchoban();
                }}
              >
                <img
                  className="h-11 w-11 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full shadow-lg"
                  src="image/dichvuso.png"
                  alt="Bonnie image"
                />
                <p className="text-xs h-4 lg:mt-3 text-gray-500 dark:text-gray-400 hidden lg:block">
                  Dịch vụ số
                </p>
              </button>
            </Card>
            <Card className="cursor-pointer h-16 lg:h-24 hover:bg-gray-100">
              <button
                className="flex flex-col items-center"
                onClick={() => {
                  setPage(1);
                  setCategory("donu");
                  setValue("dealsieuhot");
                  danhchoban();
                }}
              >
                <img
                  className="h-11 w-11 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full shadow-lg"
                  src="image/dealsieuhot.png"
                  alt="Bonnie image"
                />
                <p className="text-xs h-4 lg:mt-3 text-gray-500 dark:text-gray-400 hidden lg:block">
                  Deal siêu hot
                </p>
              </button>
            </Card>
            <Card className="cursor-pointer h-16 lg:h-24 hover:bg-gray-100">
              <button
                className="flex flex-col items-center"
                onClick={() => {
                  setPage(1);
                  setCategory("giaynu");
                  setValue("revodoi");
                  danhchoban();
                }}
              >
                <img
                  className="h-11 w-11 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full shadow-lg"
                  src="image/revodoi.png"
                  alt="Bonnie image"
                />
                <p className="text-xs h-4 lg:mt-3 text-gray-500 dark:text-gray-400 hidden lg:block">
                  Rẻ vô đối
                </p>
              </button>
            </Card>
            <Card className="cursor-pointer h-16 lg:h-24 hover:bg-gray-100">
              <button
                className="flex flex-col items-center"
                onClick={() => {
                  setPage(1);
                  setCategory("donam");
                  setValue("thoitrang");
                  danhchoban();
                }}
              >
                <img
                  className="h-11 w-11 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full shadow-lg"
                  src="image/thoitrang.png"
                  alt="Bonnie image"
                />
                <p className="text-xs h-4 lg:mt-3 text-gray-500 dark:text-gray-400 hidden lg:block">
                  Thời trang
                </p>
              </button>
            </Card>
            <Card className="cursor-pointer h-16 lg:h-24 hover:bg-gray-100">
              <button
                className="flex flex-col items-center"
                onClick={() => {
                  setPage(1);
                  setCategory("diengiadung");
                  setValue("trending");
                  danhchoban();
                }}
              >
                <img
                  className="h-11 w-11 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full shadow-lg"
                  src="image/trending.png"
                  alt="Bonnie image"
                />
                <p className="text-xs h-4 lg:mt-3 text-gray-500 dark:text-gray-400 hidden lg:block">
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
          {products.map((product: any) => {
            return (
              <div
              className="rounded-md border border-gray-200 shadow-md bg-white mb-1"
                key={product?.id}
              >
                <img
                  onClick={() => {
                    axios
                      .get(`https://quocson.fatcatweb.top/product/${product?.id}`)
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
                <h5 className="cursor-pointer text-center text-xs lg:mt-3 font-medium text-gray-900 dark:text-white mx-1 mt-2 h-16 lg:h-24 text-ellipsis">
                    {product?.productName.substring(0, 70)}
                  </h5>
                </Link>
                <div className="flex items-center flex-col justify-between">
                  <p className="text-sm font-medium text-gray-800 dark:text-white my-1">
                    {Intl.NumberFormat().format(product?.price)} đ
                  </p>
                  <Button
                    color="failure"
                    size="xs"
                    className="mb-5 mt-2"
                    onClick={() => {
                      addItem(product);
                      toast("Add product successfully", {
                        position: toast.POSITION.BOTTOM_RIGHT,
                        type: toast.TYPE.SUCCESS,
                        className: "toast-message",
                      });
                    }}
                  >
                    Chọn Mua
                  </Button>
                </div>
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
              <div className="grid grid-cols-1 items-center align-center md:grid-cols-2 md:items-start gap-4 mx-3">
                <img
                  src={productDetail[0]?.image}
                  className="w-full h-auto rounded-lg"
                  alt="..."
                />
                <div>
                  <div className="text-xs mb-3 flex">
                    <h5>Thương hiệu: </h5>
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
                          4.95
                        </p>

                        <a
                          href="#"
                          className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                        >
                          73 reviews
                        </a>
                      </Rating>
                    </div>
                    <h5 className="text-sm">Đã bán 1453</h5>
                  </div>

                  <div className="bg-gray-100 font-bold rounded-md p-4 my-4 text-red-700 text-xl md:text-3xl">
                    <h2>
                      {Intl.NumberFormat().format(productDetail[0]?.price)} đ
                    </h2>
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
