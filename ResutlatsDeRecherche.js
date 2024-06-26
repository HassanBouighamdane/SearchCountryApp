import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    FlatList,
    View,
    TouchableHighlight,
    Image,
} from 'react-native';

type Props = {};

export default class ResultatsDeRecherche extends Component<Props> {
    _extracteurClef = (item, index) => index.toString();

    _rendreItem = ({ item, index }) => (
        <ListItem
            item={item}
            index={index}
            onPressItem={this._itemAppuye}
        />
    );
    _itemAppuye = (index) => {
        console.log('Ligne appuyée : ' + index);
    };
    render() {
        console.log(this.props.route.params);
        const  {listings}  = this.props.route.params;
        
        return (
            <FlatList
                data={listings}
                keyExtractor={this._extracteurClef}
                renderItem={this._rendreItem}
            />
        );
    }
}
class ListItem extends React.PureComponent {
    _itemAppuye = () => {
        this.props.onPressItem(this.props.index);
    };

    render() {
        const item = this.props.item;
        return (
            <TouchableHighlight
                onPress={this._itemAppuye}
                underlayColor='#eedddd'>
                <View>
                    <View style={styles.conteneurLigne}>
                        <View style={styles.conteneurTexte}>
                            <Text style={styles.nomOfficiel}>{item.name.official}</Text>
                            <Text style={styles.autre}>{item.region}</Text>
                            <Text style={styles.autre}>{item.subregion}</Text>
                            <Text style={styles.autre}>{item.capital}</Text>
                            <Text style={styles.autre}>{item.population}</Text>
                        </View>
                    </View>
                    <View style={styles.separateur} />
                </View>
            </TouchableHighlight>
        );
    }
}
const styles = StyleSheet.create({
    conteneurTexte: {
        flex: 1,
    },
    separateur: {
        height: 1,
        backgroundColor: '#eedded',
    },
    nomOfficiel: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#58BEEC',
    },
    autre: {
        fontSize: 20,
        color: '#656565',
    },
    conteneurLigne: {
        flexDirection: 'row',
        padding: 10,
    },
});
