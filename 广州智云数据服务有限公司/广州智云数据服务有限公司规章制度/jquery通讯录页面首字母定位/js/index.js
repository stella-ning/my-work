function reset() { //重置
	$('.searchAll input').val('');
	$('.input-keyword-item span').html('');
	$('.input-tips').css('display', 'block');
	$('.input-tips').siblings('span').hide()
}

function search() { //查询

}

function mallList() {
	var jsons = [{
			"name": "安桂清",
			"url": "aaaaa",
			"nick": "an",
			phone: "1334534434",
			telephone: '0554-213030',
			department: '研发部',
			email: "222@qq.com",
			superior: 'loya',
			jobNo: '001'
		},
		{
			"name": "朱瑞",
			"url": "aaaaaa",
			"nick": "zhu"
		},
		{
			"name": "安2桂清",
			"url": "aaaaa",
			"nick": "a2n",
			phone: "1334",
			telephone: '0554-213030',
			department: '研发部',
			email: "222@qq.com",
			superior: 'loya',
			jobNo: '001'
		},
		{
			"name": "静瑞",
			"url": "aaaaaa",
			"nick": "jing",
			phone: "1334",
			telephone: '0554-213030',
			department: '研发部',
			email: "222@qq.com",
			superior: 'loya',
			jobNo: '001'
		}
	]
	for(var i in jsons) {
		jsons[i].initial = jsons[i].nick.charAt(0).toUpperCase()
		for(var j in directories) {
			if(directories[j].uppercase == jsons[i].initial) {
				var list = jsons[i]
				directories[j].data.push(jsons[i])
			}
		}
	}

	for(var i = 0; i < directories.length; i++) {
		if(directories[i].data.length == 0) {
			directories.splice(i, 1);
			i--;
		}
	}
	directories.sort((a, b) => a.lowercase.charCodeAt(0) - b.lowercase.charCodeAt(0)); //a~z 排序
}

! function() {
	mallList()
	var a = "@charset \"utf-8\";html{color:#000;background:#fff;overflow-y:scroll;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}html *{outline:0;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}html,body{font-family:sans-serif}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section,::before,::after{margin:0;padding:0;-webkit-tap-highlight-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box}input,select,textarea{font-size:100%;border:none;outline:none;-webkit-appearance:none}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}abbr,acronym{border:0;font-variant:normal}del{text-decoration:line-through}address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:500}ol,ul,dl,dd,dt,li{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:500}q:before,q:after{content:''}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}a:hover{text-decoration: none}a:link{text-decoration: none}a:visited{text-decoration: none}a:active{text-decoration: none}a:ins,a{text-decoration:none}button{border:none}.clearfix::before,.clearfix::after{content:'';height:0;line-height:0;display:block;visibility:hidden;clear:both}",
		b = document.createElement("style");
	if(document.getElementsByTagName("head")[0].appendChild(b), b.styleSheet) b.styleSheet.disabled || (b.styleSheet.cssText = a);
	else try {
		b.innerHTML = a
	} catch(c) {
		b.innerText = a
	}
}();
//右侧字母相关事件
$(function() {
	let tipDom = document.querySelector(".tip")
	// 获取右侧字母DOM
	let letterDom = document.querySelector("#letters")

	// 右侧字母触摸判断逻辑
	letterDom.addEventListener('touchmove', function(e) {
		e.preventDefault()
		//坐标（获取当前触控点的坐标）
		let y = e.touches[0].clientY
		let x = e.touches[0].clientX
		//根据当前纵向坐标控制内容的位置
		let MaxL = letterDom.getBoundingClientRect().left;
		let MaxR = letterDom.getBoundingClientRect().right;
		let MaxT = letterDom.getBoundingClientRect().top
		let MaxB = letterDom.getBoundingClientRect().top + letterDom.getBoundingClientRect().height;
		// 判断是否从一个字母到另一个字母
		if((x >= MaxL && x <= MaxR) && (y >= MaxT && y <= MaxB) && x && y) {
			let ele = document.elementFromPoint(x, y)
			let eleContent = ele.innerHTML
			clickLetter(eleContent)
			tipDom.innerHTML = eleContent
			tipDom.style.display = 'block'
			letterDom.style.background = "#B2B2B2"
			letterDom.style.color = "#fff"
		}
		letterDom.removeEventListener("touchend", this, false)
	})

	letterDom.addEventListener("touchend", function(e) {
		tipDom.style.display = "none"
		letterDom.style.background = ""
		letterDom.style.color = "#B2B2B2"
		letterDom.removeEventListener("touchmove", this, false)
	})

	let letterDoms = document.querySelectorAll('#letters>.letter-item')

	for(let i = 0; i < letterDoms.length; i++) {
		const letterDom = letterDoms[i];
		let letterTmp = letterDom.innerHTML
		letterDom.addEventListener('click', function() {
			clickLetter(letterTmp)
		})
	}
	// 右侧字母点击事件
	function clickLetter(letter) {
		let tmpLetter = letter.toLowerCase()
		let element = window.document.getElementById(tmpLetter)
		element.scrollIntoView()
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}
	//	handlebars模版渲染页面
	var template = Handlebars.compile($("#people-template").html());
	var data = {
		directories: directories
	};

	$('#namesList').html(template(data));

	//})

	var _people = [{
		name: '朱瑞',
		url: 'aaaaaa',
		nick: 'zhu'
	}, {
		name: '安桂清',
		url: 'aaaaa',
		nick: 'an'
	}];

	function SortByGroup(arr, option) {
		this.option = option;
		this.arr = arr || [];
	}
	SortByGroup.prototype = {
		init: function() {
			this.sort();
			return this.sortByGroup(this.group());
		},
		sort: function() {
			var tag = this.option.tag;
			this.arr = this.arr.sort(function compareFunction(param1, param2) {
				return param1[tag].localeCompare(param2[tag]);
			});
		},
		group: function() {
			var arr = [],
				count = 0,
				def;
			var charTemp = "-1",
				temp;
			for(var i in this.arr) {
				temp = this.arr[i];
				if(charTemp !== temp[this.option.tag].charAt(0)) {
					var one = [];
					one.push(temp);
					arr[count] = one;
					charTemp = temp[this.option.tag].charAt(0);
					count++;
				} else {
					arr[count - 1].push(temp);
				}
			}
			return arr;
		},
		sortByGroup: function(arr) {
			var temp;
			for(var i = 0; i < arr.length; i++) {
				temp = arr[i];
				temp.sort(function compareFunction(param1, param2) {
					return param1['name'].localeCompare(param2['name']);
				});
			};
			return arr;
		}
	};

	function RenderPage(arr) {
		this.model = arr;
		this.index = [];
		this.lastIndex = "-1";
	}
	RenderPage.prototype = {
		init: function() {

			$("#container").html(this.render());
			$("#index").html(this.renderIndex());
			this.bindEvent();
		},
		getIndex: function(nick) {
			this.index.push(nick.charAt(0).toUpperCase());

		},
		bindEvent: function() {
			$("#index a").mouseover(function() {

				var tag = $(this).attr("data");
				if(tag != "more") {
					$("#container .block").css("display", "none");
					$("#container ." + tag).css("display", "block");
				} else {
					$("#container .block").css("display", "block");
				}

			});

		},
		render: function() {
			var str = "";
			for(var i = 0; i < this.model.length; i++) {
				str += this.renderGroup(this.model[i], i);
			}

			return str;
		},
		renderGroup: function(arr, num) {
			var str = "",
				temp;

			for(var i = 0; i < arr.length; i++) {
				if(i == 0) {
					this.getIndex(arr[i].nick);
					temp = this.index[num];

					str = '<div class="block ' + temp + '"><h3>' + temp + '</h3><ul>'
				}
				str += this.renderOne(arr[i]);
			}
			if(str) str += "<div class='clear'></div></ul></div>";
			return str;
		},
		renderOne: function(one) {
			return '<li><a href="' + one.url + '" target="_blank">' + one.name + '</a></li>';
		},
		renderIndex: function() {
			var str = "";

			for(var i = 0; i < this.index.length; i++) {
				str = str + "<a data='" + this.index[i] + "'>" + this.index[i] + "</a>";
			}
			str += "<a data='more'>MORE</a>";
			return str;
		}
	};
	new RenderPage(new SortByGroup(_people, {
		tag: 'nick'
	}).init()).init();
	// }
})