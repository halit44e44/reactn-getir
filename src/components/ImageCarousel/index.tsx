import React, {useState} from 'react';
import {Dimensions, FlatList, Image, Text, View} from "react-native";
import styles from "./styles";
const {height, width} = Dimensions.get("window")


const Index = ({images}: { images: string[] }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const onViewRef = React.useRef((viewableItems) => {
        if (viewableItems.viewableItems.length > 0) {
            setActiveIndex(viewableItems.viewableItems[0].index || 0)
        }
    })
    const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold:50})

    return (
        <View style={styles.container}>
            <FlatList style={styles.flatContainer}
                      data={images}
                      renderItem={(item) => (
                          <Image source={{uri:item.item}} style={styles.image} />
                      )}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      snapToAlignment={"center"}
                      decelerationRate={"fast"}
                      snapToInterval={width * 0.5}
                      viewabilityConfig={viewConfigRef.current}
                      onViewableItemsChanged={onViewRef.current}
            />
            <View style={styles.dotContainer}>
                {
                    images.map((image,index) => (
                        <View key={index} style={[styles.dot, {backgroundColor: activeIndex == index ? "#5D3EBD" : "#F2F0FD"}]}>
                        </View>
                    ))
                }
            </View>
        </View>
    );
};

export default Index;
