import {render} from "@testing-library/react-native";
import React from "react";
import MainCategories from "../../../src/components/MainCategories";
import BannerCarousel from "../../../src/components/BannerCarousel";

const mockedNavigate = jest.fn()
jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native')
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: mockedNavigate
        }),
    }
})
describe("components/MainCategories", () => {

    test("renders Correctly", () => {
        const {toJSON} = render(<MainCategories />)
        expect(toJSON()).toMatchSnapshot()
    })

    test("render 18 categoryItem is rendered", () => {
        const {getAllByTestId} = render(<MainCategories />)
        const categoryItem = getAllByTestId("category-item")
        expect(categoryItem.length).toBe(18)
    })

})
