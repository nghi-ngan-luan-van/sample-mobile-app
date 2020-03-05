import React from 'react';
import { TouchableOpacity, Image,Text } from 'react-native';

export default class NavigationButton extends React.Component {
    renderItem = () => {
        const {
            title, titleStyle, icon, iconStyle, tintColor
        } = this.props;
        if (title) {
            return (
                <Text style={[{ fontSize: 16, color: tintColor || '#fff' }, titleStyle]}>
                    {title}
                </Text>
            );
        }
        if (icon) {
            return <Image source={icon} style={{ ...iconStyle, tintColor }} tintColor={tintColor} />;
        }
        return null;
    }

    render() {
        const { style, onPress } = this.props;
        return (
            <TouchableOpacity
                style={[style, { justifyContent: 'center' }]}
                onPress={onPress}
            >
                {this.renderItem()}
            </TouchableOpacity>
        );
    }
}
