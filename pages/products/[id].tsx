import {
  Breadcrumb,
  Button,
  Label,
  Radio,
  Rating,
  Textarea,
} from "flowbite-react";
import React, {
  Fragment,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { CartProvider, useCart } from "react-use-cart";
import Layout2 from "../components/Layout2";
import {
  HiHome,
  HiOutlineShoppingBag,
  HiOutlineChatAlt,
  HiCheckCircle,
} from "react-icons/hi";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import Cothebancungquantam from "../components/Cothebancungquantam";
import Hero6 from "../components/Hero/Hero6";
import { Dialog, Transition } from "@headlessui/react";

const Index = () => {
  const [productDetail, setProductDetail] = useState([] as any);
  const [stars, setStars] = useState([] as any);
  // const [prodQty, setProdQty] = useState(1);
  const [totalRating, setTotalRating] = useState(0);
  const [initialCartPro, setInitialCartPro] = useState([] as any);
  const [newPrice, setNewPrice] = useState(1);
  const [productVariant, setProductVariant] = useState([] as any);
  const [isComment, setIsComment] = useState(false);
  const [cartProduct, setCartProduct] = useState(productDetail);
  const [commentId, setCommentId] = useState(0);
  const router = useRouter();
  const productId = router.query;
  const [comment, setComment] = useState("");
  const { addItem } = useCart();

  console.log(stars);

  const [props, setProps] = useState({
    category: "random",
    sortBy: "price",
    search: "random",
  });

  useEffect(() => {
    setNewPrice(
      ((productVariant.typePrice || productDetail[0]?.price) *
        (100 - (productDetail[0]?.discount?.disPercent || 0))) /
        100
    );
  }, [productDetail, productVariant]);

  useEffect(() => {
    try {
      axios
        .get(`https://quocson.fatcatweb.top/v2/product/comment/${productId.id}`)
        .then((res: any) => {
          setStars(res.data);
          setTotalRating(
            (res.data[1] * 5 +
              res.data[2] * 4 +
              res.data[3] * 3 +
              res.data[4] * 2 +
              res.data[5]) /
              res.data[0] || 5
          );
          // setTimeout(() => {
          //   axios
          //     .patch(`https://quocson.fatcatweb.top/v2/product/${productId.id}`, {
          //       stars: (
          //         (res.data[1] * 5 +
          //           res.data[2] * 4 +
          //           res.data[3] * 3 +
          //           res.data[4] * 2 +
          //           res.data[5]) /
          //           res.data[0] || 5
          //       ).toFixed(2),
          //       sold: res.data[0],
          //     })
          //     .then((res: any) => {
          //       console.log(res.data);
          //     });
          // }, 5000);
        });
    } catch (error) {
      console.log(error);
    }
  }, [productId.id]);

  useEffect(() => {
    try {
      axios
        .get(`https://quocson.fatcatweb.top/v2/product/${productId.id}`)
        .then((res) => {
          setProductDetail(res.data);
          setInitialCartPro({
            id: res.data[0]?.id,
            productName: res.data[0]?.productName,
            image: res.data[0]?.image,
            price:
              (res.data[0]?.price *
                (100 - (res.data[0]?.discount?.disPercent || 0))) /
              100,
            initialPrice: res.data[0]?.initialPrice,
            quantity: res.data[0]?.quantity,
            category: res.data[0]?.category,
            discount: res.data[0]?.discount?.disPercent || 0,
          });
        });
    } catch (error) {
      console.log(error);
    }
  }, [productId.id, isComment]);

  return (
    <div className="pb-6 pt-3">
      <ToastContainer />
      <Breadcrumb className="w-full lg:w-11/12 mx-auto pt-5">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item
          href={"/" + productDetail[0]?.categoryID.path}
          icon={HiOutlineShoppingBag}
          className="capitalize"
        >
          {productDetail[0]?.categoryID.category}
        </Breadcrumb.Item>
        <Breadcrumb.Item className="hidden lg:flex">
          {productDetail[0]?.productName}
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="my-6 w-full lg:w-11/12 mx-auto">
        <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 md:items-start gap-1 bg-white rounded-lg">
          <div className="bg-white h-auto py-4 md:border-r md:border-gray-200 rounded-tl-lg rounded-bl-lg">
            <img
              src={productDetail[0]?.image}
              className="w-11/12 h-auto mx-auto rounded-lg"
              alt="..."
            />
          </div>
          <div className="bg-white p-4 h-auto rounded-tr-lg rounded-br-lg">
            <div className="text-xs mb-3 flex">
              <h5>Thương hiệu: </h5>
              <a href="#goiyhomnay" className="text-blue-600 underline ml-2">
                {productDetail[0]?.brand}
              </a>
            </div>
            <h1 className="text-lg md:text-2xl font-medium mb-3">
              {productDetail[0]?.productName}
            </h1>
            <div className="flex md:flex-col gap-2 items-center justify-between">
              <div>
                <Rating>
                  <Rating.Star />
                  <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white mr-4">
                    {totalRating === 0 ? 5 : totalRating.toFixed(2)}
                  </p>

                  <a
                    href="#review"
                    className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                  >
                    {stars[0] + " đánh giá"}
                  </a>
                </Rating>
              </div>
              <h5 className="text-sm">{"Đã bán " + stars[0]}</h5>
            </div>

            <div className="bg-gray-100 rounded-md p-4 my-4 flex gap-3 items-end">
              <h2 className=" text-red-500 font-bold text-xl md:text-3xl">
                {Intl.NumberFormat().format(newPrice)} đ
              </h2>
              <p className="line-through text-gray-500">
                {Intl.NumberFormat().format(
                  productVariant.typePrice || productDetail[0]?.price
                )}{" "}
                đ
              </p>
              <p className="text-red-700 font-bold">
                {"-" + (productDetail[0]?.discount?.disPercent || 0) + "%"}
              </p>
            </div>

            <div className="my-5">
              <p className="mb-3 font-medium">Loại:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {productDetail[0]?.productvariant[0]?.id == undefined ? (
                  <div className="flex items-center justify-start gap-2 border border-gray-200 p-2 px-2 rounded-lg hover:bg-gray-200 cursor-pointer shadow-md">
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
                        className="flex items-center justify-start gap-2 border border-gray-200 p-2 px-2 rounded-lg hover:bg-gray-200 cursor-pointer shadow-md"
                      >
                        <Radio
                          id="united-state"
                          name="countries"
                          className="cursor-pointer"
                          defaultChecked={true}
                          onClick={() => {
                            setProductVariant(item);

                            setCartProduct({
                              id:
                                productDetail[0]?.id + "." + item.id ||
                                productId.id + "." + item.id,
                              image: productDetail[0]?.image,
                              productName: productDetail[0]?.productName,
                              type: item.type || "",
                              discount:
                                productDetail[0]?.discount?.disPercent || 0,
                              initialPrice: productDetail[0]?.initialPrice,
                              price:
                                (item.typePrice *
                                  (100 -
                                    (productDetail[0]?.discount?.disPercent ||
                                      0))) /
                                100,
                              quantity: productDetail[0]?.quantity,
                            });
                          }}
                        />
                        <Label htmlFor="united-state">{item.type}</Label>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            <div className="flex gap-2  font-medium">
              <p className="mb-2">Số Lượng:</p>
              <p className="text-blue-500">{productDetail[0]?.quantity}</p>
            </div>

            <div className="flex flex-col md:flex-row gap-3 justify-between my-5">
              <div className="border border-gray-200 rounded-lg w-full shadow-md p-3">
                <div className="flex gap-2 items-center mb-2">
                  <img
                    className="h-5 md:h-6 w-auto"
                    src="/image/tikinow.png"
                    alt="now"
                  />
                  <p className="text-green-500 text-base md:text-sm lg:text-base font-medium">
                    Trước 18:00 hôm nay
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <h2 className="font-medium">Vận chuyển :</h2>
                  <p>30k</p>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg w-full shadow-md p-3">
                <div className="flex gap-2 items-center mb-2">
                  <img
                    className="h-5 md:h-6 w-auto"
                    src="/image/tikifast.png"
                    alt="now"
                  />
                  <p className="text-green-500 text-base md:text-sm lg:text-base font-medium">
                    Ngày mai, trước 23:00
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <h2 className="font-medium">Vận chuyển :</h2>
                  <p>Miễn phí</p>
                </div>
              </div>
            </div>

            <div className="flex gap-1 items-center mb-3">
              <HiCheckCircle className="text-2xl text-blue-700" />
              <p>Chúc mừng! Bạn được freeship 100%.</p>
            </div>

            {/* <div className="flex items-center border rounded-xl border-gray-200 w-fit mb-3">
                  <HiChevronLeft
                  onClick={() => {
                    if (prodQty <= 1) {
                      setProdQty(1)
                     
                    } else
                    setProdQty(prodQty - 1)
                  
                  } }
                  className="text-blue-700 rounded-tl-lg rounded-bl-lg hover:bg-blue-200 cursor-pointer text-5xl border-r border-gray-200" />
                  <input
                  value={prodQty}
                  className="border border-white w-12 text-lg font-medium text-center"
                  
                  onChange={(e:any) => {
                    setProdQty((e.target.value)*1)
                  
                  }}
                  />
                  <HiChevronRight
                  onClick={() => setProdQty(prodQty +1) }
                  className="text-blue-700 rounded-tr-lg rounded-br-lg hover:bg-blue-200 cursor-pointer text-5xl border-l border-gray-200"/>
            </div> */}

            <div className=" flex items-center justify-center gap-5">
              <Button
                color="failure"
                size="sm"
                className="mb-5 mt-2 px-8 pt-3 pb-3"
                onClick={() => {
                  addItem(
                    cartProduct?.id === undefined ? initialCartPro : cartProduct
                  );
                  toast("Add product successfully", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    type: toast.TYPE.SUCCESS,
                    className: "toast-message",
                  });
                }}
              >
                <div className="text-xs">Chọn Mua</div>
              </Button>
              <Button
                color="gray"
                size="sm"
                className="mb-5 mt-2 px-4 border-blue-500"
              >
                <div className="flex flex-col items-center text-blue-600">
                  <p>Trả Góp</p>
                  <p className="text-xs">2.354.166 ₫/tháng</p>
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md p-3 mt-4 shadow-md">
          <h2 className="font-medium text-xl">Mô tả sản phẩm:</h2>
          <div className="text-sm md:text-base text-justify mt-3">
            {productDetail[0]?.content}
          </div>
        </div>
      </div>
      <Cothebancungquantam prop={props} />

      <div
        className="bg-white rounded-lg w-full lg:w-11/12 mx-auto p-3 mt-6 shadow-md"
        id="review"
      >
        <div className="flex flex-col mx-auto pl-3">
          <h2 className="font-medium text-xl mb-3">
            Đánh Giá - Nhận Xét Từ Khách Hàng
          </h2>
          <div className="grid md:grid-cols-3">
            <div className="col-start-1 col-end-4">
              <div className="border-b border-gray-200 pb-3 w-full">
                <div className="w-full mx-auto">
                  <Rating size="sm" className="mt-2 flex justify-center">
                    {Math.ceil(totalRating) === 5 ? (
                      <>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                      </>
                    ) : Math.ceil(totalRating) === 4 ? (
                      <>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                      </>
                    ) : Math.ceil(totalRating) === 3 ? (
                      <>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                        <Rating.Star filled={false} />
                      </>
                    ) : Math.ceil(totalRating) === 2 ? (
                      <>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                        <Rating.Star filled={false} />
                        <Rating.Star filled={false} />
                      </>
                    ) : (
                      <>
                        <Rating.Star />
                        <Rating.Star filled={false} />
                        <Rating.Star filled={false} />
                        <Rating.Star filled={false} />
                        <Rating.Star filled={false} />
                      </>
                    )}
                    <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                      {totalRating.toFixed(2) + " out of 5"}
                    </p>
                  </Rating>
                </div>
                <p className="w-full text-center text-sm font-medium text-gray-500 dark:text-gray-400 my-2">
                  {stars[0] + " đánh giá"}
                </p>
                <div className="flex flex-col items-end w-full">
                  <Rating.Advanced
                    className="mb-2 w-3/4"
                    percentFilled={Math.floor((stars[1] / stars[0]) * 100) || 0}
                  >
                    5 star
                  </Rating.Advanced>

                  <Rating.Advanced
                    className="mb-2 w-3/4"
                    percentFilled={Math.floor((stars[2] / stars[0]) * 100) || 0}
                  >
                    4 star
                  </Rating.Advanced>
                  <Rating.Advanced
                    className="mb-2 w-3/4"
                    percentFilled={Math.floor((stars[3] / stars[0]) * 100) || 0}
                  >
                    3 star
                  </Rating.Advanced>
                  <Rating.Advanced
                    className="mb-2 w-3/4"
                    percentFilled={Math.floor((stars[4] / stars[0]) * 100) || 0}
                  >
                    2 star
                  </Rating.Advanced>
                  <Rating.Advanced
                    className="mb-2 w-3/4"
                    percentFilled={Math.floor((stars[5] / stars[0]) * 100) || 0}
                  >
                    1 star
                  </Rating.Advanced>
                </div>
              </div>
            </div>
          </div>
        </div>
        {productDetail[0]?.review
          ? productDetail[0]?.review?.map((item: any) => {
              return (
                <div
                  key={item.id}
                  className="grid md:grid-cols-3 gap-3 my-6 pb-4 border-b border-gray-200"
                >
                  <div className="col-start-1 col-end-2 hidden md:block">
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex gap-4 justify-center items-center">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={item.user?.image}
                          alt=""
                        />
                        <div className=" flex flex-col items-start gap-1">
                          <p className="font-medium">{item.user?.username}</p>
                          <div className="text-xs flex items-center gap-2">
                            <span>
                              {item.user?.createdAt.substring(11, 16)}
                            </span>
                            <span>{item.user?.createdAt.substring(0, 10)}</span>
                          </div>
                        </div>
                      </div>
                      {/* <div>
                        <div className="flex items-center gap-3 mb-2">
                          <HiOutlineChatAlt />
                          <div>
                            <span className="font-medium">Đã viết</span>: 27
                            Đánh giá
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <HiOutlineChatAlt />
                          <div>
                            <span className="font-medium">Đã nhận</span>: 5 lượt
                            cảm ơn
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="md:col-start-2 md:col-end-4">
                    <div className="flex flex-col items-start gap-2">
                      <Rating>
                        {item.stars === 5 ? (
                          <>
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                          </>
                        ) : item.stars === 4 ? (
                          <>
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star filled={false} />
                          </>
                        ) : item.stars === 3 ? (
                          <>
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star filled={false} />
                            <Rating.Star filled={false} />
                          </>
                        ) : item.stars === 2 ? (
                          <>
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star filled={false} />
                            <Rating.Star filled={false} />
                            <Rating.Star filled={false} />
                          </>
                        ) : (
                          <>
                            <Rating.Star />
                            <Rating.Star filled={false} />
                            <Rating.Star filled={false} />
                            <Rating.Star filled={false} />
                            <Rating.Star filled={false} />
                          </>
                        )}

                        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                          {item.stars === 5
                            ? "Cực kỳ hài lòng"
                            : item.stars === 4
                            ? "Hài lòng"
                            : item.stars === 3
                            ? "Bình thường"
                            : item.stars === 2
                            ? "Tạm chấp nhận"
                            : "Không thể chấp nhận được"}
                        </p>
                      </Rating>
                      <div className="md:hidden block">
                        <p className="font-medium">{item.user?.username}</p>
                      </div>

                      <div className="flex gap-2 items-center">
                        <HiCheckCircle className="text-green-500" />
                        <p>Đã mua hàng</p>
                      </div>
                      <div>
                        <p className="text-justify">{item.comment}</p>
                      </div>
                      <div className="flex gap-5 my-1">
                        <div className="flex gap-2">
                          <p className="font-medium">Loại:</p>
                          <p>{item.type || "original"}</p>
                        </div>
                      </div>
                      <div className="text-xs flex items-center gap-2">
                        <span>{item.createdAt.substring(11, 16)}</span>
                        <span>{item.createdAt.substring(0, 10)}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-end mt-5 gap-1">
                      {/* <button className="w-fit hover:border px-2 hover:border-blue-500 hover:rounded-md hover:bg-blue-100 text-blue-700">
                        Thích
                      </button> */}

                      <button
                        onClick={() => {
                          setIsComment(!isComment);
                          setCommentId(item.id);
                        }}
                        className="w-fit hover:border px-2 hover:border-blue-500 hover:rounded-md hover:bg-blue-100 text-blue-700"
                      >
                        Bình Luận
                      </button>

                      <button className="w-fit hover:border px-2 hover:border-blue-500 hover:rounded-md hover:bg-blue-100 text-blue-700">
                        Chia sẻ
                      </button>
                    </div>
                    {item.nestedreview
                      ? item.nestedreview?.map((nest: any) => {
                          return (
                            <div
                              className="flex gap-3 items-center my-5"
                              key={nest.id}
                            >
                              <img
                                className="rounded-full w-10 h-10"
                                src="/image/danhchoban.png"
                                alt=""
                              />
                              <div className="border boder-gray-200 rounded-xl p-2 w-full shadow-md">
                                <div className="flex gap-2 items-center justify-between mb-2">
                                  <h1 className="font-medium">Guest</h1>
                                  <div className="text-xs flex items-center gap-2">
                                    <span>
                                      {nest.createdAt.substring(11, 16)}
                                    </span>
                                    <span>
                                      {nest.createdAt.substring(0, 10)}
                                    </span>
                                  </div>
                                </div>

                                <div className="text-justify">
                                  {nest.comment}
                                </div>
                              </div>
                            </div>
                          );
                        })
                      : null}
                  </div>
                </div>
              );
            })
          : null}
      </div>

      <Transition appear show={isComment} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsComment(!isComment)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <h1>Bình Luận</h1>
                  <div className="mt-3 flex flex-col items-center gap-1">
                    <Textarea
                      value={comment}
                      rows={3}
                      onChange={(e: any) => {
                        setComment(e.target.value);
                      }}
                    />
                    <Button
                      size="xs"
                      color="info"
                      onClick={() => {
                        axios
                          .post(
                            `https://quocson.fatcatweb.top/v2/product/guestcomment/${commentId}`,
                            {
                              comment: comment,
                              review: commentId,
                            }
                          )
                          .then((res: any) => {
                            setComment("");
                            setIsComment(false);
                            console.log(res.data);
                          });
                      }}
                    >
                      Gửi
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className="w-full lg:w-11/12 mx-auto" id="goiyhomnay">
        <Hero6 />
      </div>
    </div>
  );
};

// export async function getStaticProps({ params }: any) {
//   // const router = useRouter();
//   // const { id } = router.query;
//   const productId = params.id;
//   const res = await axios.get(
//     `https://quocson.fatcatweb.top/product/${productId}`
//   );
//   const productDetail = res.data;
//   return {
//     props: {
//       productDetail,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const res = await axios.get(`https://quocson.fatcatweb.top/product/`);
//   const data = res.data;
//   const paths = data.map((product: any) => {
//     return {
//       params: {
//         id: product.id,
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: true,
//   };
// }

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
