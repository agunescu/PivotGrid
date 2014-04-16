Ext.ns('Ext.app');

Ext.app.REMOTING_API = {
  "url" : "/eds/router",
  "type" : "remoting",
  "actions" : {
    "pivotService" : [ {
      "name" : "getEconomiesData",
      "len" : 1
    } ],
    "salesAction" : [ {
      "name" : "load",
      "len" : 1
    } ]
  }
};