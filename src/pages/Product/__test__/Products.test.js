import { React } from "react";
// import ProfileCard from "../ProfileCard";
// import data from "../../../components/Home/product.json";
import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";
// import ProductItems from "../../../components/Product/ProductItems";
import Products from "../Products.jsx";
// import.meta.jest.useFakeTimers();
// import { Swiper, SwiperSlide } from "swiper/react";
// import swiper from "./swiper/react";

jest.mock("swiper", () => ({
  __esModule: true,
  Swiper: jest.fn(),
  Navigation: jest.fn(),
  Mousewheel: jest.fn(),
  Keyboard: jest.fn(),
  Autoplay: jest.fn(),
  Pagination: jest.fn(),
  default: jest.fn(),
}));

jest.mock("react-router-dom", () => {
  // Require the original module to not be mocked...
  const originalModule = jest.requireActual("react-router-dom");

  return {
    __esModule: true,
    ...originalModule,
    // add your noops here
    useNavigate: jest.fn(() => "bar"),
  };
});

const data = {
  id: 1,
  pname: "Oneplus",
  pdetail:
    "Nord CE 2 Lite Dual Sim Blue 8GB RAM 128GB 5G - International Version",
  url: "https://z.nooncdn.com/products/tr:n-t_240/v1623661623/N48128174A_1.jpg",
  price: 1339,
  currency: "SAR",
  arival: "Mon, Jun 20",
  bname: "Oppo",
  rating: 4,
  category: "Mobiles",
  bid: 9,
  quantity: 1,
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Products />, div);
  expect(screen.getByTestId(`pdetail${data.id}`)).toHaveTextContent(
    data.pdetail
  );
  expect(screen.getByTestId(`currency${data.id}`)).toHaveTextContent(
    data.currency
  );
  expect(screen.getByTestId(`price${data.id}`)).toHaveTextContent(data.price);
  expect(screen.getByTestId(`rating${data.id}`)).toHaveTextContent(data.rating);
  expect(screen.getByTestId(`brand${data.id}`)).toHaveTextContent("Apple");
});
