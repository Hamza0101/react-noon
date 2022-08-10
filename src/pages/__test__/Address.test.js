import { React } from "react";
import cartReducer from "../../reducers/cartReducer";
import filterReducer from "../../reducers/filterReducer";
import { createStore, combineReducers } from "redux";
import addressReducer from "../../reducers/addressReducer";
import { Provider } from "react-redux";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import Address from "../Address";
import { fireEvent } from "@testing-library/react";
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
  navigate:jest.fn(),
  default: jest.fn(),
}));

jest.mock("react-router-dom", () => {
  // Require the original module to not be mocked...
  const originalModule = jest.requireActual("react-router-dom");

  return {
    __esModule: true,
    ...originalModule,
    // add your noops here
   useNavigate: () => jest.fn(),
    useRouteMatch: () => ({ url: "/address" }),
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

it("renders without crashing", async() => {
  render(
    <Provider store={store}>
      <Address />
    </Provider>
  );
  const fullAddress = screen.getByTestId("fullAddress");
  const firstName = screen.getByTestId("firstName");
  const lastName = screen.getByTestId("firstName");
  const label = screen.getByTestId("label");
  const saveBtn= screen.getByTestId("saveBtn")
  fireEvent.change(fullAddress, { target: { value: "DNT" } });
  fireEvent.change(firstName, { target: { value: "Jhon" } });
  fireEvent.change(lastName, { target: { value: "alex" } });
  userEvent.click((saveBtn));
  userEvent.click((label));
  expect(label).toBeInTheDocument(); 
  expect(fullAddress).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();  
  expect(firstName).toBeInTheDocument();

});
