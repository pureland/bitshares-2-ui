/**
 * Created by luoyi on 2016/3/21.
 */
var Convert = require('../src/chain/serializer_convert.coffee');
var Long = require('bytebuffer').Long;
var assert = require('assert');
var type = require('../src/chain/serializer_types');
var p = require('../src/common/precision');
var th = require('./test_helper');
var hash = require ('../src/common/hash');

 function map_s_t(){

    var mapType1 = type.map;
     var mapType=[50,15000][501,105000];

     mapType1=mapType

    console.log(mapType1);
    var buf;
     mapType1.appendByteBuffer(buf,mapType1);
    console.log("d: ", hash.sha256_hex(buf));
}
exports.map_s_t=map_s_t;