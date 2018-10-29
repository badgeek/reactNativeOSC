/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import osc from './node_modules/osc/src/osc.js'
var dgram = require('dgram')


// OR, if not shimming via package.json "browser" field:
// var dgram = require('react-native-udp')
var socket = dgram.createSocket('udp4')
socket.bind(12345)
socket.once('listening', function() {

})

socket.on('message', function(msg, rinfo) {

	var osc_msg;

try {
    osc_msg = osc.readPacket(msg,{});
    console.log(osc_msg)
} catch (error) {
    console.log("An error occurred: ", error.message);
}



  console.log('message was received xxx', msg)
})

AppRegistry.registerComponent(appName, () => App);
