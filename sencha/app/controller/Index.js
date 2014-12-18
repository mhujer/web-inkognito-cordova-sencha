Ext.define('InkognitoChristmas.controller.Index', {
    extend: 'Ext.app.Controller',
    requires: [
        'InkognitoChristmas.view.Main'
    ],

    config: {
        refs: {
            christmasButton: 'component[cls=christmas]'
        },
        control: {
            christmasButton: {
                tap: 'buttonTapped'
            }
        }
    },

    launch: function () {
        console.log('Index Controller launched');
    },

    buttonTapped: function (eventSrc) {
        var btn = eventSrc;

        Ext.Msg.show({message: 'Stisknuto: ' + btn.getText()});
    },

});
