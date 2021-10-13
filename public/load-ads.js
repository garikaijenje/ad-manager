var fumigationsolutionsads = fumigationsolutionsads || {};

var baseUrl = window.location.origin;



if (typeof jQuery === "undefined") {


  var jqueryScript = document.createElement('script');
  jqueryScript.setAttribute("type", "text/javascript");
  jqueryScript.setAttribute("src", baseUrl + "/jquery-3.4.1.min.js");

  var this_script = document.currentScript;

  document.body.insertBefore(jqueryScript, this_script);

}



var isFirstLoad = function (namesp, jsFile) {
  var isFirst = namesp.firstLoad === undefined;
  namesp.firstLoad = false;

  if (!isFirst) {
    console.log(
      "Warning: (fumigationsolutions.com) javascript file is included more than once: " + jsFile);
  }

  return isFirst;
};


window.onload = function () {



  if (isFirstLoad(fumigationsolutionsads, "load-ads.js")) {


    var ad_spots = document.getElementsByClassName('fumigationsolutionsads');

    let ids = [1, 2, 3];

    var adsToDisplay = [];

    for (var i = 0; i < ad_spots.length; i++) {

      var target = ad_spots[i];

      var slot = target.getAttribute('data-ad-slot');

      var url = baseUrl + '/load-ads/' + slot;

      $(target).load(url);

    }

  }


}
