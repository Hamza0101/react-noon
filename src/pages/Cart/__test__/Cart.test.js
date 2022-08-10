import { React } from "react";
import cartReducer from "../../../reducers/cartReducer";
import filterReducer from "../../../reducers/filterReducer";
import { createStore, combineReducers } from "redux";
import addressReducer from "../../../reducers/addressReducer";
import { Provider } from "react-redux";
import { screen, within } from "@testing-library/react";
import { render } from "@testing-library/react";
// import ProductItems from "../../../components/Product/ProductItems";

import Cart from "../Cart";
import userEvent from "@testing-library/user-event";

const allReducers = combineReducers({
  cartReducer: cartReducer,
  addressReducer: addressReducer,
  filterReducer: filterReducer,
});
const store = createStore(allReducers);

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
  quantity: 2,
};

it("renders without crashing", () => {
  render(
    <Provider store={store}>
      <Cart />
    </Provider>
  );
  expect(screen.getByTestId(`no-of-cart-items`)).toHaveTextContent(1);
  expect(screen.getByTestId(`pname${data.id}`)).toHaveTextContent(data.pname);
  expect(screen.getByTestId(`price${data.id}`)).toHaveTextContent(data.price);
  expect(screen.getByTestId(`quantity${data.id}`)).toHaveTextContent(
    data.quantity
  );

  expect(screen.getByTestId(`Total-Amount`)).toHaveTextContent(
    `AED ${data.quantity * data.price}`
  );
  const dropdown = screen.getByTestId(`myquantity${data.id}`);
  userEvent.selectOptions(
    dropdown,
    within(dropdown).getAllByRole("option", { name: 3 })
  );
  expect(screen.getByTestId(`Total-Amount`)).toHaveTextContent(
    `AED ${3 * data.price}`
  );
});
