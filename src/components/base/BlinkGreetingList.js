import React, {Component} from 'react';
import {Text,View} from 'react-native';

// Props
class BlinkGreeting extends Component {
    // ES6 语法
    constructor(props) {
        super(props);
        this.state = {showText: true};

        setInterval(()=> {
           this.setState(previousState => {
            return {showText: !previousState.showText};
           });
        }, 1000);
    }

    render() {
        let display = this.state.showText ? 'Welcome, '+this.props.text+' !' : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

export default class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{alignItems:'center'}}>
                <BlinkGreeting text='Rexxar'/>
                <BlinkGreeting text='Jammy'/>
                <BlinkGreeting text='Valeera'/>
            </View>
        );
    }
}