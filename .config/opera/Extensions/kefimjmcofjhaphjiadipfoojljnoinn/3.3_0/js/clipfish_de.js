var url = document.location.toString();


function insert_clipfish() {

	var convert2mp3_btn_div = document.createElement("div");
	convert2mp3_btn_div.setAttribute("id","c2mp3-button-div-clipfish");

	var mp3_a = document.createElement("button");
	mp3_a.setAttribute("target","_blank");
	mp3_a.setAttribute("style","color: #000000;margin-left:4px;margin-right:4px;margin-top:10px;margin-bottom:10px;height:25px;");
	mp3_a.setAttribute("id","convert2mp3-button-mp3-clipfish");
	mp3_a.setAttribute("class","btn");
	mp3_a.textContent = "Download MP3";

	var mp4_a = document.createElement("button");
	mp4_a.setAttribute("target","_blank");
	mp4_a.setAttribute("style","color: #000000;margin-right:4px;margin-top:10px;margin-bottom:10px;height:25px;");
	mp4_a.setAttribute("id","convert2mp3-button-mp4-clipfish");
	mp4_a.setAttribute("class","btn");
	mp4_a.textContent = "Download MP4";

	var more_a = document.createElement("button");
	more_a.setAttribute("target","_blank");
	more_a.setAttribute("style","color: #000000;margin-top:10px;margin-bottom:10px;height:25px;");
	more_a.setAttribute("id","convert2mp3-button-more-clipfish");
	more_a.setAttribute("class","btn");
	var more_img = document.createElement("img");
	more_img.src = "data:image/png;base64,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";
	more_a.appendChild(more_img);


	convert2mp3_btn_div.appendChild(mp3_a);
	convert2mp3_btn_div.appendChild(mp4_a);
	convert2mp3_btn_div.appendChild(more_a);

	c2mp3_more_box_div =  document.createElement("div");
	c2mp3_more_box_div.setAttribute("class", "c2mp3-more-box c2mp3-more-box-cl");

	c2mp3_more_nav_div =  document.createElement("div");
	c2mp3_more_nav_div.setAttribute("class", "c2mp3-nav");

	c2mp3_more_nav_ul = document.createElement("ul");


	c2mp3_more_box_li_m4a = document.createElement("li");
	c2mp3_more_box_a_m4a = document.createElement("a");
	c2mp3_more_box_a_m4a.setAttribute("id", "convert2mp3-button-m4a-clipfish");
	c2mp3_more_box_a_m4a.textContent = "Download M4A";

	c2mp3_more_box_li_aac = document.createElement("li");
	c2mp3_more_box_a_aac = document.createElement("a");
	c2mp3_more_box_a_aac.setAttribute("id", "convert2mp3-button-aac-clipfish");
	c2mp3_more_box_a_aac.textContent = "Download AAC";

	c2mp3_more_box_li_ogg = document.createElement("li");
	c2mp3_more_box_a_ogg = document.createElement("a");
	c2mp3_more_box_a_ogg.setAttribute("id", "convert2mp3-button-ogg-clipfish");
	c2mp3_more_box_a_ogg.textContent = "Download OGG";

	c2mp3_more_box_li_wma = document.createElement("li");
	c2mp3_more_box_a_wma = document.createElement("a");
	c2mp3_more_box_a_wma.setAttribute("id", "convert2mp3-button-wma-clipfish");
	c2mp3_more_box_a_wma.textContent = "Download WMA";

	c2mp3_more_box_li_flac = document.createElement("li");
	c2mp3_more_box_a_flac = document.createElement("a");
	c2mp3_more_box_a_flac.setAttribute("id", "convert2mp3-button-flac-clipfish");
	c2mp3_more_box_a_flac.textContent = "Download FLAC";

	c2mp3_more_box_li_3gp = document.createElement("li");
	c2mp3_more_box_a_3gp = document.createElement("a");
	c2mp3_more_box_a_3gp.setAttribute("id", "convert2mp3-button-3gp-clipfish");
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


	$(convert2mp3_btn_div).insertBefore('#cf-main-player');


}

if (url.indexOf("clipfish") != -1 && url.indexOf("video") != -1) {

	insert_clipfish();


	$("#convert2mp3-button-more-clipfish").click(function() {
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


	$("#convert2mp3-button-mp3-clipfish").click(function() {
		window.open(c2mp3_url + "&format=mp3&url=" + encodeURIComponent(document.location.toString()),'_blank');
	});

	$("#convert2mp3-button-mp4-clipfish").click(function() {
		window.open(c2mp3_url + "&format=mp4&url=" + encodeURIComponent(document.location.toString()),'_blank');
	});


	$("#convert2mp3-button-m4a-clipfish").click(function() {
		window.open(c2mp3_url + "&format=m4a&url=" + encodeURIComponent(document.location.toString()),'_blank');
		c2mp3_box_deselect($('#convert2mp3-button-more-clipfish'));
	});

	$("#convert2mp3-button-aac-clipfish").click(function() {
		window.open(c2mp3_url + "&format=aac&url=" + encodeURIComponent(document.location.toString()),'_blank');
		c2mp3_box_deselect($('#convert2mp3-button-more-clipfish'));
	});

	$("#convert2mp3-button-ogg-clipfish").click(function() {
		window.open(c2mp3_url + "&format=ogg&url=" + encodeURIComponent(document.location.toString()),'_blank');
		c2mp3_box_deselect($('#convert2mp3-button-more-clipfish'));
	});

	$("#convert2mp3-button-wma-clipfish").click(function() {
		window.open(c2mp3_url + "&format=wma&url=" + encodeURIComponent(document.location.toString()),'_blank');
		c2mp3_box_deselect($('#convert2mp3-button-more-clipfish'));
	});

	$("#convert2mp3-button-flac-clipfish").click(function() {
		window.open(c2mp3_url + "&format=flac&url=" + encodeURIComponent(document.location.toString()),'_blank');
		c2mp3_box_deselect($('#convert2mp3-button-more-clipfish'));
	});

	$("#convert2mp3-button-3gp-clipfish").click(function() {
		window.open(c2mp3_url + "&format=3gp&url=" + encodeURIComponent(document.location.toString()),'_blank');
		c2mp3_box_deselect($('#convert2mp3-button-more-clipfish'));
	});


}

