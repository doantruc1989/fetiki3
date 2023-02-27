import { Breadcrumb, Button, Table } from "flowbite-react";
import React, { ReactElement } from "react";
import { CartProvider, useCart } from "react-use-cart";
import Layout from "../components/Layout";
import { HiChevronLeft, HiChevronRight, HiHome } from "react-icons/hi";
import Link from "next/link";
import HeadSeo from "../components/HeadSeo";

const Index = () => {
  const { totalUniqueItems, items, updateItemQuantity, removeItem, cartTotal } =
    useCart();
  const prop = {
    title: "tiki cart giỏ hàng",
    keywords: "cart tiki giỏ hàng",
    description: "làm trang giỏ hàng cart đơn giản easy",
  };
  return (
    <div className="w-full lg:w-11/12 mx-auto pb-6">
      <HeadSeo prop={prop} />
      <Breadcrumb aria-label="Default breadcrumb example" className="py-6">
        <Breadcrumb.Item href="/" icon={HiHome}>
          Trang chủ
        </Breadcrumb.Item>
        <Breadcrumb.Item>Giỏ hàng</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className="text-2xl font-medium flex justify-center mb-6">
        Giỏ hàng của bạn
      </h1>
      {totalUniqueItems > 0 ? (
        <div className="grid lg:grid-cols-4 w-full gap-4 mb-10">
          <div className="lg:col-start-1 lg:col-end-4 w-full rounded-lg mx-auto mb-6">
            <Table striped={true}>
              <Table.Head>
                <Table.HeadCell>Tất cả</Table.HeadCell>
                <Table.HeadCell className="hidden lg:block">
                  Tên sản phẩm
                </Table.HeadCell>
                <Table.HeadCell>Đơn giá</Table.HeadCell>
                <Table.HeadCell>Số lượng</Table.HeadCell>
                <Table.HeadCell>
                  <p className="sr-only">Edit</p>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {items.map((item: any) => {
                  return (
                    <Table.Row
                      className="bg-gray-100 dark:border-gray-700 dark:bg-gray-800"
                      key={item.id}
                    >
                      <Table.Cell className="py-0 pl-0">
                        <div className="pl-4 flex justify-start items-center mx-auto">

                        <img src={item.image} className="w-14 h-14" alt=".." />
                        </div>
                      </Table.Cell>
                      <Table.Cell className="hidden lg:flex">
                        <div className="text-xs font-medium text-gray-900 dark:text-white">
                          {item.productName}
                        </div>
                      </Table.Cell>
                      <Table.Cell>
                        <div className="font-medium text-xs">
                          {Intl.NumberFormat().format(item.price)}đ
                        </div>
                      </Table.Cell>
                      <Table.Cell>
                        <div className="flex items-center content-start justify-start">
                          <button
                            className="font-medium text-xl px-1"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity! - 1)
                            }
                          >
                            <HiChevronLeft />
                          </button>
                          <input
                            value={item.quantity}
                            className="w-5 flex content-center pl-1 justify-center"
                          />
                          <button
                            className="font-medium text-xl px-1"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity! + 1)
                            }
                          >
                            <HiChevronRight />
                          </button>
                        </div>
                      </Table.Cell>
                      <Table.Cell>
                        <div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-lg rounded-full bg-red-500 px-2 text-white"
                        >
                          &times;
                        </button>

                        </div>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </div>
          <div className="rounded-lg lg:fixed lg:right-14 lg:top-21 lg:w-1/5 lg:z-50 w-full">
            <div className="rounded-xl h-fit p-4 bg-white">
              <div className="flex justify-between mb-4">
                <h3>Tạm tính</h3>
                <div>{Intl.NumberFormat().format(cartTotal)} đ</div>
              </div>
              <div className="flex justify-between border-b border-solid border-black pb-4">
                <h3>Giảm giá</h3>
                <div>0 đ</div>
              </div>
              <div className="flex justify-between mt-4 items-center">
                <h3 className="font-medium">Tổng tiền</h3>
                <div className="text-red-700 text-xl md:text-2xl font-medium">
                  {Intl.NumberFormat().format(cartTotal)} đ
                </div>
              </div>
            </div>
            <Link href="/diachigiaohang">
              <Button className="justify-self-center mt-4 w-full">
                Thanh toán ({totalUniqueItems})
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-center font-medium text-lg mb-8 pt-8">
          Bạn chưa chọn sản phẩm nào
        </div>
      )}
    </div>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <CartProvider>
      <Layout>
        <>{page}</>
      </Layout>
    </CartProvider>
  );
};
export default Index;
