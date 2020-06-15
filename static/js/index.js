exports.handleClientMessage_CUSTOM = function(hook, context, cb){
  if(context.payload.action == "recieveTitleMessage"){
    var message = context.payload.message;
    if(message){
      $('head').append('<meta property="og:title" content="'+message+'" />');
    }else{
      if(clientVars.meta_default_title){
        $('head').append('<meta property="og:title" content="'+clientVars.meta_default_title+'" />');
      }else{
        $('head').append('<meta property="og:title" content="Untitle Document" />');
      }
    }
  }
}

exports.documentReady = function(){
  if (clientVars.meta_desc){
    $('head').append('  <meta property="og:description" content="'+clientVars.meta_desc+'" />');
  }else{
    $('head').append('  <meta property="og:description" content="Untitle Document" />');
  }
  if(clientVars.meta_img_url){
    $('head').append('  <meta property="og:image" content="'+clientVars.meta_img_url+'" />');

  }
  
}