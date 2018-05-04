/**
 *
 *
 *
 **/
export default {

	/**
	 * 设置 Cookie
	 *
	 *
	 **/
	setCookie(name, value, time) {
		let exdate = new Date();
		exdate.setTime( exdate.getTime() + this.getSec(time)*1);
		document.cookie = name + "=" + escape(value) + ";expires="+exdate.toGMTString();
	},

	/**
	 * 获取 Cookie
	 *
	 *
	 **/
	getCookie(name) {
		if(document.cookie.length > 0) {
			let start = document.cookie.indexOf(name + "="),
				end   = '';
			if(start != -1) {
				start = start + name.length + 1;
				end = document.cookie.indexOf(";", start);
				if(end == -1)
					end = document.cookie.length;
				return unescape(document.cookie.substring(start,end));
			}
		}
		return null;
	},

	/**
	 * 删除 Cookie
	 *
	 *
	 **/
	delCookie(name) {
		let exdate = new Date();
		exdate.setTime(exdate.getTime() - 1);
		let cookieVal = this.getCookie(name);
		if(cookieVal != null) {
			document.cookie = name + "=" + cookieVal + ";expires=" + exdate.toGMTString();
		}
	},

	/**
	 * 设置 Cookie 时间
	 * @params  String    res   设置 Cookie 过期时间字符串
	 * @example
	 * res = s20 (20秒)
	 * res = h12 (12小时)
	 * res = d20 (20天)
	 **/
	getSec(res) {
		let time = res.substring(1, res.length)*1,
			str = res.substring(0,1);
		if (str == 's') {
			return time * 1000;
		} else if (str == 'h') {
			return time * 60 * 60 * 1000;
		} else if (str == 'd') {
			return time * 24 * 60 * 60 * 1000;
		}
	}

}
