import { React } from "react";
import cartReducer from "../../reducers/cartReducer";
import filterReducer from "../../reducers/filterReducer";
import { createStore, combineReducers } from "redux";
import addressReducer from "../../reducers/addressReducer";
import { Provider } from "react-redux";
import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import Address from "../Address";
import ViewAddress from "../ViewAddress";
// import ProductItems from "../../../components/Product/ProductItems";

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
  id: `l5qo0m5s0.cs8jsp8wmng`,
  fullAddress: "Gulshan E lahore",
  firstName: "Test",
  lastName: "Developer",
  defaultAddress: true,
  label: "work",
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(
    <Provider store={store}>
      <ViewAddress />
    </Provider>
  );
  expect(screen.getByTestId(`label${data.id}`)).toHaveTextContent(data.label);
  expect(screen.getByTestId(`full-name${data.id}`)).toHaveTextContent(
    data.firstName + " " + data.lastName
  );
  expect(screen.getByTestId(`fulladdress${data.id}`)).toHaveTextContent(
    data.fullAddress
  );
});
