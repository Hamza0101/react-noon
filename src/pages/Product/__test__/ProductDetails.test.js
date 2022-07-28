import { React } from "react";
import cartReducer from "../../../reducers/cartReducer";
import filterReducer from "../../../reducers/filterReducer";
import { createStore, combineReducers } from "redux";
import addressReducer from "../../../reducers/addressReducer";
import { useDispatch } from "react-redux";
// import ProfileCard from "../ProfileCard";
// import data from "../../../components/Home/product.json";
import { screen, fireEvent } from "@testing-library/react";
import { render } from "@testing-library/react";
import ProductDetails from "../ProductDetails";
import { Provider } from "react-redux";
import { PanoramaSharp } from "@mui/icons-material";
// import ProductItems from "../../../components/Product/ProductItems";
// import.meta.jest.useFakeTimers();
// import { Swiper, SwiperSlide } from "swiper/react";
import { add_to_cart } from "../../../actions/actionCart";

// import swiper from "./swiper/react";
const allReducers = combineReducers({
  cartReducer: cartReducer,
  addressReducer: addressReducer,
  filterReducer: filterReducer,
});
const store = createStore(allReducers);

const addToCart = () => {
  const myCart = {
    id: Date.now().toString(36) + Math.random().toString(36),
    pname: "Oneplus",
    pdetail:
      "Nord CE 2 Lite Dual Sim Black 8GB RAM 128GB 5G - International Version ",
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
  // useDispatch(add_to_cart(myCart));
};
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
jest.mock("swiper/react", () => ({
  __esModule: true,
  Swiper: jest.fn(),
  Swiperslide: jest.fn(),
}));

jest.mock("react-router-dom", () => {
  // Require the original module to not be mocked...
  const originalModule = jest.requireActual("react-router-dom");

  return {
    __esModule: true,
    ...originalModule,
    // add your noops here
    useNavigate: jest.fn(() => "bar"),
    useParams: () => ({
      id: 1,
    }),
    useRouteMatch: () => ({ url: "/product/1" }),
  };
});

const data = {
  id: 1,
  pname: "Oneplus",
  pdetail:
    "Nord CE 2 Lite Dual Sim Black 8GB RAM 128GB 5G - International Version ",
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
const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

it("renders without crashing", () => {
  // const div = document.createElement("div");
  render(
    <Provider store={store}>
      <ProductDetails ProductData={data} />
    </Provider>
  );
  screen.getByRole("button", {
    name: /Add to Cart/i,
  });
  expect(screen.getByTestId(`bname${data.id}`)).toHaveTextContent(data.bname);
  expect(screen.getByTestId(`currency${data.id}`)).toHaveTextContent(
    data.currency
  );
  expect(screen.getByTestId(`rating${data.id}`)).toHaveTextContent(data.rating);
});
export default ProductDetails;
