//ここに追加したいJavaScript、jQueryを記入してください。
//このJavaScriptファイルは、親テーマのJavaScriptファイルのあとに呼び出されます。
//JavaScriptやjQueryで親テーマのjavascript.jsに加えて関数を記入したい時に使用します。

// MathJaxの設定
MathJax = {
	tex: {
			tags:'all'
	}
};

// 目次の現在位置ハイライト
const GAP     = -50;
const CLSNAME = "current" //cssと対応

class SidebarTOC{
	constructor(selector){
		this.$a = $(`${selector} a`);
	}

	getCurrentAnchor(currentTop){
		var heads = this.getHeads();
		var tops  = heads.map(x => x.offset()["top"]);
		var n_anchor = tops.length - 1;

		for(var i=0; i < n_anchor; i++){
			let first  = tops[i]     + GAP;
			let second = tops[i + 1] + GAP;
			if(first < currentTop && currentTop < second){
				return $(this.$a[i]);
			}
		}
	}

	getHeads(){
		var arr = [];
		this.$a.each(function(_, a){
			var href = $(a).attr("href");
			arr.push($(href));	
		});
		arr.push($(".article-footer"));
		return arr;
	}

	clear(){
		this.$a.removeClass(CLSNAME);
	}

	inRange(currentTop){
		var tops = this.getHeads().map(x => x.offset()["top"]);
		var min = tops.reduce((a, b) => a < b ? a: b);
		var max = tops.reduce((a, b) => a > b ? a: b);
		return min < currentTop && currentTop < max + GAP;
	}
}


$(function(){
	//引数は人によって異なるかも
	//サイドバー目次の属性をF12で確認してください
	var toc = new SidebarTOC("#sidebar-scroll .toc-content");
	$(window).on('load scroll', function() {
		toc.clear();
		var wTop = $(window).scrollTop();
		if(toc.inRange(wTop)){
			toc.getCurrentAnchor(wTop).addClass(CLSNAME);
			//console.log("ハイライト");
		}
    });
});