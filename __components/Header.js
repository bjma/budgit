import * as React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Header = ({ customStyles }) => {
    return (
        <View styles={customStyles}>
            <View style={{ backgroundColor: '#7DCCBE', height: 160 }}>
                <Svg
                    height='90%'
                    width='120%'
                    viewBox='0 0 1440 320'
                    style={{ position: 'absolute', top: 120 }}
                >
                    <Path 
                        fill='#7DCCBE'
                        d='M0,192L60,165.3C120,139,240,85,360,90.7C480,96,600,160,720,197.3C840,235,960,245,1080,224C1200,203,1320,149,1380,122.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
                    />
                </Svg>
            </View>
        </View>
    )
}

export default Header;