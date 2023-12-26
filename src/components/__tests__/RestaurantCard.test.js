const { render , screen } = require("@testing-library/react")
import RestaurentCard from "../../components/RestaurantCard";
import MOCK_DATA from "../mocks/restaurant.json";
import "@testing-library/jest-dom";

test('should render restaurant card', () => { 
    render(<RestaurentCard resData={MOCK_DATA} / >);

    const name = screen.getByText("Domino's Pizza");

    expect(name).toBeInTheDocument();
});