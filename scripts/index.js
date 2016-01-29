window.onload=function(){
	var ROW=20,
	width=Math.floor(600-ROW)/ROW+'px',
	sence=document.getElementById('sence'),
	child,el;
	for(var i=0;i<ROW;i++){
			for(j=0;j<ROW;j++){
				var els=document.createElement('div');
				els.setAttribute('class','block');
				els.setAttribute('id',i+'_'+j);
				els.style.width=width;
				els.style.height=width;
				sence.appendChild(els);
			}
		}
	for(var i=0;i<ROW;i++){
			child=document.createElement('div');
			child.style.position='absolute';
			child.style.top=(600/ROW)/2+(600/ROW)*i+'px';
			child.style.width='600px';
			child.style.height='1px';
			child.style.background='white';
			sence.appendChild(child);

			el=document.createElement('div');
			el.style.position='absolute';
			el.style.left=(600/ROW)/2+(600/ROW)*i+'px';
			el.style.width='1px';
			el.style.height='600px';
			el.style.background='white';
			sence.appendChild(el);
		}
		


	var blocks=document.getElementsByClassName('block');
	var kaiguan=true;
	var dict1={};
	var dict2={};

	var panduan=function(id,dic){
		var x=Number(id.split('_')[0]);
		console.log(x);
		var y=Number(id.split('_')[1]);
		console.log(y);

		var hang=1;
		var tx,ty;
		tx=x;ty=y;
		while(dic[tx+'_'+(ty+1)]){hang++;ty++;}
		tx=x;ty=y;
		while(dic[tx+'_'+(ty-1)]){hang++,ty--;}
		if(hang==5 )return true;

		var lie=1;
		tx=x;ty=y;
		while(dic[(tx-1)+'_'+ty]){lie++;tx--;}
		tx=x;ty=y;
		while(dic[(tx+1)+'_'+ty]){lie++;tx++;}
		if(lie==5 )return true;

		var zx=1;
		tx=x;ty=y;
		while(dic[(tx-1)+'_'+(ty+1)]){zx++;ty++;tx--;}
		tx=x;ty=y;
		while(dic[(tx+1)+'_'+(ty-1)]){zx++,tx++;ty--;}
		if(zx==5 )return true;


		var yx=1;
		tx=x;ty=y;
		while(dic[(tx-1)+'_'+(ty-1)]){yx++;ty--;tx--;}
		tx=x;ty=y;
		while(dic[(tx+1)+'_'+(ty+1)]){yx++,tx++;ty++;}
		if(yx==5 )return true;

		return false;

	}
	for(var i=0;i<blocks.length;i++){
		blocks[i].onclick=function(){
			if(this.hasAttribute('hasColor')){
				return;
			}
			var id=this.getAttribute('id');
			if(kaiguan){
				this.style.zIndex='20';			
				 this.style.backgroundImage='url(./images/1.png)';
				 kaiguan=false;

				dict1[id]=true;	 
			
				if(panduan(id,dict1)){
					owner.style.display='block';
					ok.style.display='block';
					go.style.display='block';
				}

			}else{
				this.style.zIndex='20';
				this.style.backgroundImage='url(./images/6.png)'; 
				kaiguan=true;

				dict2[id]=true;

				if(panduan(id,dict2)){
					alert('白色赢了');
				}	
			}
			 this.setAttribute('hasColor',true);				
	}
}
var font=document.getElementById('font'),
 pictures=document.getElementById('pictures'),
 banner=document.getElementById('banner');

font.onclick=function(){
	font.style.display='none';
	pictures.style.display='none';
	banner.style.display='block';
	trues.style.display='none';
}
trues.onclick=function(){
	guize.style.display='block';

}
guize.onclick=function(){
	guize.style.display='none';
}
ok.onclick=function(){
	banner.style.display='none';
	font.style.display='block';
	pictures.style.display='block';
	owner.style.display='none';
	ok.style.display='none';
	go.style.display='none';

	location.reload();
}
go.onclick=function(){
	location.reload();
}
guize.onmouseover=function(){
	tishi.style.display='block';
}
guize.onmouseout=function(){
	tishi.style.display='none';
}
	
};