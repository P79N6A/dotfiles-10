var url = document.location.toString();

function insert_dailymotion() {

	var convert2mp3_btn_div = document.createElement("div");
	convert2mp3_btn_div.setAttribute("id","c2mp3-button-div-dailymotion");

	var convert2mp3_a = document.createElement("a");
	convert2mp3_a.href = "http://convert2mp3.net/";
	convert2mp3_a.setAttribute("target","_blank");
	convert2mp3_btn_div.appendChild(convert2mp3_a);

	var convert2mp3_img = document.createElement("img");
	convert2mp3_img.src = "data:image/png;base64,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";
	convert2mp3_img.setAttribute("width","51px");
	convert2mp3_img.setAttribute("height","40px");
	convert2mp3_img.setAttribute("style","float:left; padding-left: 10px; padding-right: 5px; margin-bottom:4px;");
	convert2mp3_a.appendChild(convert2mp3_img);

	var mp3_a = document.createElement("a");
	mp3_a.setAttribute("target","_blank");
	mp3_a.setAttribute("style","margin-right:4px;");
	mp3_a.setAttribute("id","convert2mp3-button-mp3-dailymotion");
	mp3_a.setAttribute("class","c2mp3button");
	mp3_a.textContent = "Download MP3";

	var mp4_a = document.createElement("a");
	mp4_a.setAttribute("target","_blank");
	mp4_a.setAttribute("style","margin-right:4px;");
	mp4_a.setAttribute("id","convert2mp3-button-mp4-dailymotion");
	mp4_a.setAttribute("class","c2mp3button");
	mp4_a.textContent = "Download MP4";

	var more_a = document.createElement("a");
	more_a.setAttribute("target","_blank");
	more_a.setAttribute("style","margin-right:4px;");
	more_a.setAttribute("class","btn");
	more_a.setAttribute("id","convert2mp3-button-more-dailymotion");
	more_a.setAttribute("class","c2mp3button");
	var more_img = document.createElement("img");
	more_img.src = "data:image/png;base64,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";
	more_a.appendChild(more_img);


	convert2mp3_btn_div.appendChild(mp3_a);
	convert2mp3_btn_div.appendChild(mp4_a);
	convert2mp3_btn_div.appendChild(more_a);

	c2mp3_more_box_div =  document.createElement("div");
	c2mp3_more_box_div.setAttribute("class", "c2mp3-more-box c2mp3-more-box-dl");

	c2mp3_more_nav_div =  document.createElement("div");
	c2mp3_more_nav_div.setAttribute("class", "c2mp3-nav");

	c2mp3_more_nav_ul = document.createElement("ul");


	c2mp3_more_box_li_m4a = document.createElement("li");
	c2mp3_more_box_a_m4a = document.createElement("a");
	c2mp3_more_box_a_m4a.setAttribute("id", "convert2mp3-button-m4a-dailymotion");
	c2mp3_more_box_a_m4a.textContent = "Download M4A";

	c2mp3_more_box_li_aac = document.createElement("li");
	c2mp3_more_box_a_aac = document.createElement("a");
	c2mp3_more_box_a_aac.setAttribute("id", "convert2mp3-button-aac-dailymotion");
	c2mp3_more_box_a_aac.textContent = "Download AAC";

	c2mp3_more_box_li_ogg = document.createElement("li");
	c2mp3_more_box_a_ogg = document.createElement("a");
	c2mp3_more_box_a_ogg.setAttribute("id", "convert2mp3-button-ogg-dailymotion");
	c2mp3_more_box_a_ogg.textContent = "Download OGG";

	c2mp3_more_box_li_wma = document.createElement("li");
	c2mp3_more_box_a_wma = document.createElement("a");
	c2mp3_more_box_a_wma.setAttribute("id", "convert2mp3-button-wma-dailymotion");
	c2mp3_more_box_a_wma.textContent = "Download WMA";

	c2mp3_more_box_li_flac = document.createElement("li");
	c2mp3_more_box_a_flac = document.createElement("a");
	c2mp3_more_box_a_flac.setAttribute("id", "convert2mp3-button-flac-dailymotion");
	c2mp3_more_box_a_flac.textContent = "Download FLAC";

	c2mp3_more_box_li_3gp = document.createElement("li");
	c2mp3_more_box_a_3gp = document.createElement("a");
	c2mp3_more_box_a_3gp.setAttribute("id", "convert2mp3-button-3gp-dailymotion");
	c2mp3_more_box_a_3gp.textContent = "Download 3GP";


	c2mp3_more_box_li_m4a.appendChild(c2mp3_more_box_a_m4a);
	c2mp3_more_box_li_aac.appendChild(c2mp3_more_box_a_aac);
	c2mp3_more_box_li_ogg.appendChild(c2mp3_more_box_a_ogg);
	c2mp3_more_box_li_wma.appendChild(c2mp3_more_box_a_wma);
	c2mp3_more_box_li_flac.appendChild(c2mp3_more_box_a_flac);
	c2mp3_more_box_li_3gp.appendChild(c2mp3_more_box_a_3gp);

	c2mp3_more_nav_ul.appendChild(c2mp3_more_box_li_m4a);
	c2mp3_more_nav_ul.appendChild(c2mp3_more_box_li_aac);
	c2mp3_more_nav_ul.appendChild(c2mp3_more_box_li_ogg);
	c2mp3_more_nav_ul.appendChild(c2mp3_more_box_li_wma);
	c2mp3_more_nav_ul.appendChild(c2mp3_more_box_li_flac);
	c2mp3_more_nav_ul.appendChild(c2mp3_more_box_li_3gp);


	c2mp3_more_nav_div.appendChild(c2mp3_more_nav_ul);
	c2mp3_more_box_div.appendChild(c2mp3_more_nav_div);

	convert2mp3_btn_div.appendChild(c2mp3_more_box_div);

	convert2mp3_btn_div.setAttribute("style","margin-top:15px;");

	$(convert2mp3_btn_div).insertAfter('.pl_video_infos');

}

if (url.indexOf("dailymotion") != -1) {

	insert_dailymotion();


	$("#convert2mp3-button-more-dailymotion").click(function() {
		if($(this).hasClass('selected')) {
	      c2mp3_box_deselect($(this));
	    } else {
	      $(this).addClass('selected');
	      $('.c2mp3-more-box').slideFadeToggle();
	    }
	    return false;
	});


	c2mp3_box_deselect = function(e) {
		$('.c2mp3-more-box').slideFadeToggle(function() {
			e.removeClass('selected');
		});
	};


	$.fn.slideFadeToggle = function(easing, callback) {
	  return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
	};


	var c2mp3_url = "http://convert2mp3.net/addon_call.php?browser=opera&version=3-2";


	$("#convert2mp3-button-mp3-dailymotion").click(function() {
		window.open(c2mp3_url + "&format=mp3&url=" + encodeURIComponent(document.location.toString()),'_blank');
	});

	$("#convert2mp3-button-mp4-dailymotion").click(function() {
		window.open(c2mp3_url + "&format=mp4&url=" + encodeURIComponent(document.location.toString()),'_blank');
	});


	$("#convert2mp3-button-m4a-dailymotion").click(function() {
		window.open(c2mp3_url + "&format=m4a&url=" + encodeURIComponent(document.location.toString()),'_blank');
		c2mp3_box_deselect($('#convert2mp3-button-more-dailymotion'));
	});

	$("#convert2mp3-button-aac-dailymotion").click(function() {
		window.open(c2mp3_url + "&format=aac&url=" + encodeURIComponent(document.location.toString()),'_blank');
		c2mp3_box_deselect($('#convert2mp3-button-more-dailymotion'));
	});

	$("#convert2mp3-button-ogg-dailymotion").click(function() {
		window.open(c2mp3_url + "&format=ogg&url=" + encodeURIComponent(document.location.toString()),'_blank');
		c2mp3_box_deselect($('#convert2mp3-button-more-dailymotion'));
	});

	$("#convert2mp3-button-wma-dailymotion").click(function() {
		window.open(c2mp3_url + "&format=wma&url=" + encodeURIComponent(document.location.toString()),'_blank');
		c2mp3_box_deselect($('#convert2mp3-button-more-dailymotion'));
	});

	$("#convert2mp3-button-flac-dailymotion").click(function() {
		window.open(c2mp3_url + "&format=flac&url=" + encodeURIComponent(document.location.toString()),'_blank');
		c2mp3_box_deselect($('#convert2mp3-button-more-dailymotion'));
	});

	$("#convert2mp3-button-3gp-dailymotion").click(function() {
		window.open(c2mp3_url + "&format=3gp&url=" + encodeURIComponent(document.location.toString()),'_blank');
		c2mp3_box_deselect($('#convert2mp3-button-more-dailymotion'));
	});



}
