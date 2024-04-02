import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Image, Dimensions} from "react-native";

const {width, height} = Dimensions.get('window')

const Index = () => {

    const [banners, setBanners] = useState<string[]>([
        "https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg",
        "https://cdn.getir.com/misc/621784419e62143ed76eef01_banner_tr_1645969386292.jpeg",
        "https://cdn.getir.com/promos/6221aef965805c5b1e703845_banner_tr_1646723453154.jpeg",
        "https://cdn.getir.com/misc/622a6d18b2e2fe3a8e809894_banner_tr_1646947639211.jpeg"
    ])
    const flatListRef = useRef<FlatList <string> | null > (null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % banners.length;
            setCurrentIndex(nextIndex)

            flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        }, 4000);
        return () => clearInterval(interval)
    }, [currentIndex, banners.length])

    return (
        <FlatList
            ref={(ref) => (flatListRef.current = ref)}
            data={banners}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(item) => (
            <Image source={{uri: item.item}} style={{width: width, height: height * 0.25}}/>
        )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            snapToInterval={width}
            snapToAlignment="center"
            decelerationRate="fast"
            testID="banner-carousel"
        >

        </FlatList>
    );
};

export default Index;
