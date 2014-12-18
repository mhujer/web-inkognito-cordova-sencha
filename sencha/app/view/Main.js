Ext.define('InkognitoChristmas.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Christmas',
                iconCls: 'home',

                styleHtmlContent: true,
              // scrollable: true,
                layout: {
                    type: 'vbox',
                    align: 'center',
                    pack: 'center'
                },
                items: [
                    {
                        xtype : 'toolbar',
                        docked: 'top',
                        title: 'WebInkognito Christmas Simulator'
                    },
                    {
                        xtype: 'panel',
                        layout: {
                            type: 'hbox',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'button',
                                cls: 'christmas',
                                text: '1'
                            },
                        ]
                    },
                    {
                        xtype: 'panel',
                        layout: {
                            type: 'hbox',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'button',
                                cls: 'christmas',
                                text: '2'
                            },
                            {
                                xtype: 'button',
                                cls: 'christmas',
                                text: '3'
                            },
                        ]
                    },
                    {
                        xtype: 'panel',
                        layout: {
                            type: 'hbox',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'button',
                                cls: 'christmas',
                                text: '4'
                            },
                            {
                                xtype: 'button',
                                cls: 'christmas',
                                text: '5'
                            },
                            {
                                xtype: 'button',
                                cls: 'christmas',
                                text: '6'
                            },
                        ]
                    }

                ],

            },
            {
                title: 'is coming',
                iconCls: 'attachment',
                items: [
                    {
                        xtype : 'toolbar',
                        docked: 'top',
                        title: 'WebInkognito Christmas Simulator'
                    },
                ]
            }
        ]
    }
});
