var $tickerWrapper2 = $(".tickerwrapper-2");
var $list2 = $tickerWrapper2.find("ul.list-2");
var $clonedList2 = $list2.clone();
var listWidth2 = 150;

$list2.find("li").each(function (i) {
           listWidth2 += $(this, i).outerWidth(true);
});

var endPos2 = $tickerWrapper2.width() - listWidth2;

$list2.add($clonedList2).css({
   "width" : listWidth2 + "px"
});

$clonedList2.addClass("cloned").appendTo($tickerWrapper2);

//TimelineMax
var infinite = new TimelineMax({repeat: -1, paused: true});
var time = 40;

infinite
 .fromTo($list2, time, {rotation:0.01,x:0}, {force3D:true, x: -listWidth2, ease: Linear.easeNone}, 0)
 .fromTo($clonedList2, time, {rotation:0.01, x:listWidth2}, {force3D:true, x:0, ease: Linear.easeNone}, 0)
 .set($list2, {force3D:true, rotation:0.01, x: listWidth2})
 .to($clonedList2, time, {force3D:true, rotation:0.01, x: -listWidth2, ease: Linear.easeNone}, time)
 .to($list2, time, {force3D:true, rotation:0.01, x: 0, ease: Linear.easeNone}, time)
 .progress(1).progress(0)
 .play();