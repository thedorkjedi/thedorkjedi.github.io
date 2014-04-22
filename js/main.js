core = core || {};

core.home = function(){
  var self = core;
  for(i in self){
    self[i]['init'] ? self[i]['init']() || "";
  }
}
