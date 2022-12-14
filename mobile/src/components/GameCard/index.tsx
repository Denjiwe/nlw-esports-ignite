import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import { THEME } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';

export interface GameCarsProps {
    id: string;
    title: string;
    _count: {
        ads: number
    };
    bannerUrl: string ;
}

interface Props extends TouchableOpacityProps {
    data: GameCarsProps;
}

export function GameCard({ data, ...rest } : Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
        <ImageBackground 
            style={styles.cover}
            source={{uri: data.bannerUrl}}
        >

            <LinearGradient
                colors={THEME.COLORS.FOOTER}
                style={styles.footer}
            >
                <Text style={styles.name}>
                    {data.title}
                </Text>

                <Text style={styles.ads}>
                    {data._count.ads}
                </Text>

            </LinearGradient>
        </ImageBackground>    

    </TouchableOpacity>
  );
}