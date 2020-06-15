var settings = require('ep_etherpad-lite/node/utils/Settings');

exports.clientVars = function(hook, context, callback){
  var meta_desc;
  try {
    if (settings.ep_meta_desc){
        meta_desc = settings.ep_meta_desc;
    }
  } catch (e){
    console.warn("ep_meta_desc: a ep_meta_desc can be set in settings.json");
    meta_desc = "";
  }
  //////////////////////////////////////////
  var meta_img_url;
  try {
    if (settings.ep_meta_img_url){
        meta_img_url = settings.ep_meta_img_url;
    }
  } catch (e){
    console.warn("ep_meta_img_url: a ep_meta_img_url can be set in settings.json");
    meta_img_url = "";
  }
    //////////////////////////////////////////
    var meta_default_title;
    try {
      if (settings.ep_meta_default_title){
        meta_default_title = settings.ep_meta_default_title;
      }
    } catch (e){
      console.warn("ep_meta_default_title: a ep_meta_default_title can be set in settings.json");
      meta_default_title = "";
    }


  return callback({ "meta_desc": meta_desc , "meta_img_url" : meta_img_url , "meta_default_title" : meta_default_title });
};