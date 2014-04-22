core = core || {};

core.home = function(){
  var self = core;
  for(i in self){
    typeof self[i]['init'] != "undefined" ? self[i]['init']() || "";
  }
}
