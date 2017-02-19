/**
 * <plusmancn@gmail.com> created at 2017
 *
 * Copyright (c) 2017 Souche.com, all rights
 * reserved.
 *
 * Tab 点击元素
 *
 * @flow
 */

import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';

import Badge from './Badge.js';

export default class Tab extends Component {
    render() {
        let {
            title,
            color,
            tintColor,
            icon,
            tintIcon,
            onPress,
            selected,
            badge
        } = this.props;

        let textColorStyle = {
            color: selected ? tintColor : color
        };

        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={this._onPress}
            >
                <View
                    style={styles.container}
                >
                    <Image
                        source={{
                            uri: selected ? tintIcon : icon
                        }}
                        style={styles.icon}
                    />
                    <Text
                        style={[
                            styles.text,
                            textColorStyle
                        ]}
                    >
                        {title}
                    </Text>

                    <Badge
                        unReadMessageCount={this.props.badge}
                        style={styles.badge}
                    />
                </View>
            </TouchableOpacity>
        );
    }

    _onPress= (event) => {
        this.props.onPress(event);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingVertical: 2,
        width: 75
    },
    icon: {
        width: 25,
        height: 25
    },
    text: {
        marginTop: 4,
        fontSize: 12
    },
    badge: {
        position: 'absolute',
        top:  2
    }
});
