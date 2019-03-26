/**
 * Created by USER on 2019/3/26.
 */
$(function () {
  /*手势切换轮播图*/
  /*1.自动轮播 无缝*/
  /*2.点随着变化*/
  /*3.完成手势切换*/
  var banner = $('.sn_banner');
  var width = banner.width();
  var imagesBox = banner.find('ul:first-child');
  var pointsBox = banner.find('ul:last-child');
  var points = pointsBox.find('li');
  var animation = function () {
    imagesBox.animate({transform:'translateX('+ -index*width +'px)'},200,function () {
      if(index>=9) {
        index = 1;
        imagesBox.css({transform:'translateX('+ -index*width +'px)'});
      } else if(index <= 0) {
        index =8;
        imagesBox.css({transform:'translateX('+ -index*width +'px)'});
      }
      points.removeClass('active').eq(index-1).addClass('active');
    });
  };
  var index = 1;
  var timer = setInterval(function () {
    index++;
    animation();
  },5000);
  banner.on('swipeLeft',function () {
    console.log('prev');
    index ++;
    animation();
  });
  /*右滑的手势  上一张*/
  banner.on('swipeRight',function () {
    index --;
    animation();
  });
});