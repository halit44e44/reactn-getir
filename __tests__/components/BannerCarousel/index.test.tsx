import {render} from "@testing-library/react-native";
import React from "react";
import BannerCarousel from "../../../src/components/BannerCarousel";


describe("components/BannerCoursel", () => {
    test("renders Correctly", () => {
        const {toJSON} = render(<BannerCarousel/>)
        expect(toJSON()).toMatchSnapshot()
    })
    test("renders children number correctly", () => {
        const {getByTestId} = render(<BannerCarousel />)
        const banner = getByTestId('banner-carousel')
        expect(banner.props.data.length).toBe(4)
    })
    test("renders props types correctly", () => {
        const {getByTestId} = render(<BannerCarousel />)
        const banner = getByTestId('banner-carousel')
        expect(banner.props.decelerationRate).toEqual('fast')
    })

    test("renders cdn images in banner carousel", () => {
        const {getByTestId} = render(<BannerCarousel />)
        const banner = getByTestId('banner-carousel')
        const bannerCarouselItems = banner.props.data
        bannerCarouselItems.map((item) => {
            const cdnElement:String = item
            expect(cdnElement.substring(0,11)).toEqual('https://cdn')
        })
        expect(banner.props.decelerationRate).toEqual('fast')
    })
})
