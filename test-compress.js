var Tester=function(a){this.N=a;this.cnt=Array(a);this.cnt.fill(0);this.p=Array(a);this.p.fill(0);this.idealEntropy=-Math.log2(a)};Tester.prototype.loadData=function(a,b,c){this.max=b;this.min=c;this.data=a.map(function(a){return a-c});this.size=a.length;this.e=1/this.N*this.size;this._countEntry();this._calcEntropy();this._calcChiSquare()};
Tester.prototype.test=function(){console.log("Calculated entropy = "+this.entropy);console.log("Ideal entropy for N="+this.N+" is "+this.idealEntropy);console.log();console.log("Chi Square = "+this.chiSquare)};Tester.prototype._calcEntropy=function(){var a=this,b=this.cnt.map(function(b){return b/a.size}),c=b.map(function(a){return 0<a?-1*a*Math.log2(a):0}).reduce(function(a,b){return a+b});this.p=b;this.entropy=c};
Tester.prototype._calcChiSquare=function(){var a=this.e;this.chiSquare=this.cnt.map(function(b){return Math.pow(b-a,2)/a}).reduce(function(a,c){return a+c})};Tester.prototype._countEntry=function(){for(var a=0;a<this.data.length;a++)this.cnt[this.data[a]]+=1};var dataStr=$("#lblRandomNumbers").clone().children().remove().end().text().trim(),data=dataStr.split(" ").map(Number),max=parseInt($("#txtMax").val()),min=parseInt($("#txtMin").val()),N=max-min+1,t=new Tester(N);t.loadData(data,max,min);t.test();
