var RenderEngine=function(){return this.data=[],this};RenderEngine.prototype.setData=function(t){return this.data=t,this},RenderEngine.prototype.setTemplate=function(t){return this.template=t,this},RenderEngine.prototype.render=function(){for(var t=this.data,e=this.template,n="",r=0;r<t.length;r++){var i=t[r],a=e.replace(/\{(.*?)\}/g,function(t,e){return i[e]});n+=a}return n};