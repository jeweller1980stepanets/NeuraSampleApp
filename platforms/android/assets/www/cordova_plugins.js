cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-neura.neura",
        "file": "plugins/cordova-plugin-neura/www/neura.js",
        "pluginId": "cordova-plugin-neura",
        "clobbers": [
            "cordova.plugins.neura"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-neura": "0.0.3"
};
// BOTTOM OF METADATA
});