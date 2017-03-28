/*
	*
	*need angular
	*
	<script src="angular.js"></script>
	* 
	*need jQuery
	*
	<script src="jquery.js"></script>
	*
	*need ngEvent
	*
	<script>
		"use strict";

		angular.module("ngEvent", [])
		.directive("ngTouchstart", function () {
		    return {
		        controller: ["$scope", "$element", function ($scope, $element) {

		            $element.bind("touchstart", onTouchStart);
		            function onTouchStart(event) {
		                var method = $element.attr("ng-touchstart");
		                $scope.$event = event;
		                $scope.$apply(method);
		            }

		        }]
		    }
		})
		.directive("ngTouchmove", function () {
		    return {
		        controller: ["$scope", "$element", function ($scope, $element) {

		            $element.bind("touchstart", onTouchStart);
		            function onTouchStart(event) {
		                event.preventDefault();
		                $element.bind("touchmove", onTouchMove);
		                $element.bind("touchend", onTouchEnd);
		            }
		            function onTouchMove(event) {
		                var method = $element.attr("ng-touchmove");
		                $scope.$event = event;
		                $scope.$apply(method);
		            }
		            function onTouchEnd(event) {
		                event.preventDefault();
		                $element.unbind("touchmove", onTouchMove);
		                $element.unbind("touchend", onTouchEnd);
		            }

		        }]
		    }
		})
		.directive("ngTouchend", function () {
		    return {
		        controller: ["$scope", "$element", function ($scope, $element) {

		            $element.bind("touchend", onTouchEnd);
		            function onTouchEnd(event) {
		                var method = $element.attr("ng-touchend");
		                $scope.$event = event;
		                $scope.$apply(method);
		            }

		        }]
		    }
		})
		.directive("ngTap", function () {
		    return {
		        controller: ["$scope", "$element", function ($scope, $element) {

		            var moved = false;
		            $element.bind("touchstart", onTouchStart);
		            function onTouchStart(event) {
		                $element.bind("touchmove", onTouchMove);
		                $element.bind("touchend", onTouchEnd);
		            }
		            function onTouchMove(event) {
		                moved = true;
		            }
		            function onTouchEnd(event) {
		                $element.unbind("touchmove", onTouchMove);
		                $element.unbind("touchend", onTouchEnd);
		                if (!moved) {
		                    var method = $element.attr("ng-tap");
		                    $scope.$apply(method);
		                }
		            }

		        }]
		    }
		})
		.directive("ngLoadedmetadata", function () {
		    return {
		        controller: ["$scope", "$element", function ($scope, $element) {

		            $element.bind("loadedmetadata", onLoadedmetadata);
		            function onLoadedmetadata(event) {
		                var method = $element.attr("ng-loadedmetadata");
		                $scope.$event = event;
		                $scope.$apply(method);
		            }

		        }]
		    }
		})
		.directive("ngError", function () {
		    return {
		        controller: ["$scope", "$element", function ($scope, $element) {

		            $element.bind("error", onError);
		            function onError(event) {
		                var method = $element.attr("ng-error");
		                $scope.$event = event;
		                $scope.$apply(method);
		            }

		        }]
		    }
		})
		.directive("ngPlay", function () {
		    return {
		        controller: ["$scope", "$element", function ($scope, $element) {

		            $element.bind("play", onPlay);
		            function onPlay(event) {
		                var method = $element.attr("ng-play");
		                $scope.$event = event;
		                $scope.$apply(method);
		            }

		        }]
		    }
		})
		.directive("ngWaiting", function () {
		    return {
		        controller: ["$scope", "$element", function ($scope, $element) {

		            $element.bind("waiting", onWaiting);
		            function onWaiting(event) {
		                var method = $element.attr("ng-waiting");
		                $scope.$event = event;
		                $scope.$apply(method);
		            }

		        }]
		    }
		})
		.directive("ngCanplay", function () {
		    return {
		        controller: ["$scope", "$element", function ($scope, $element) {

		            $element.bind("canplay", onCanplay);
		            function onCanplay(event) {
		                var method = $element.attr("ng-canplay");
		                $scope.$event = event;
		                $scope.$apply(method);
		            }

		        }]
		    }
		})
		.directive("ngPause", function () {
		    return {
		        controller: ["$scope", "$element", function ($scope, $element) {

		            $element.bind("pause", onPause);
		            function onPause(event) {
		                var method = $element.attr("ng-pause");
		                $scope.$event = event;
		                $scope.$apply(method);
		            }

		        }]
		    }
		});
	</script>
	*
	*videoDetail is video message
	*
	<div ng-controller="video" class="video_wrap">
		<img class="post" ng-show="showPost" ng-tap="play()" ng-src="{{videoDetail.image1}}" alt="">
		<video 
			ng-pause="pauseVideo()"
			ng-canplay="noloading()"
			ng-waiting="loading()"
			ng-play="playVideo()" 
			ng-error="reportRequest()" 
			ng-loadedmetadata="reportRequest()"
			ng-error="reportRequest()" 
			ng-attr-productId="{{videoDetail.id}}" 
			ng-tap="shc()" 
			ng-loadedmetadata="reportRequest()"
			playsinline="isiPhoneShowPlaysinline" 
			webkit-playsinline="isiPhoneShowPlaysinline" 
			x-webkit-airplay="true"  
			webkit-playsinline="" 
			playsinline="true" 
			preload="none" 
			ng-src="{{trustAsResourceUrl(videoDetail.playStreaming)}}"
		></video>
		<div class="return_btn" ng-show="sctr"><img ng-tap="back()" src="../img/btn_return_BoFangQi.png" alt=""></div>
		<div ng-show="shouldplay" ng-tap="play()" class="state"></div>
		<div ng-show="shouldpaused" ng-tap="pause()" class="pause"></div>
		<div ng-show="sctr" class="controls"">
			<div class="progress" ng-click="jumpCurrent()">
				<div  class="duration">
					<p ng-repeat="item in kkk" style="width:{{item.width}};left:{{item.left}};position:absolute"  class="buffer"></p>
					<p style="width:{{playedRange}}" class="played"></p>
				</div>
				<div ng-touchend="play()" ng-touchmove="changeCurrent()" style="left:{{left}}" class="current"></div>
			</div>
			<p>
				<span class="currentTime">{{toTimeStr(currentTime)}}</span>
				<span>&nbsp;|&nbsp;{{toTimeStr(videoDetail.duration||duration)}}</span>
			</p>
			<div class="fullScreen" ng-tap="fullScreen()"></div>
		</div>
		<div class="loading" ng-show="isloading">loading...</div>
	</div>
 */
angular.module("myApp").controller("video",function($scope,$timeout,$interval,$element,$rootScope){
	var isplay=false;
	$scope.sctr=true;
	$scope.isctr=false;
	$scope.isloading=false;
	$scope.showPost=true;
	$scope.currentTime=0;
	$scope.duration=0;
	var hideTime,t1,playTimer,bufferedTimer;
	function getCurrent(){
		$scope.currentTime = $($element).find("video")[0].currentTime;
	}
	function showCtr(){
		$scope.sctr=true;
	}
	function hideCtr(){
		$scope.sctr=false;
	}
	function showP(){
		$scope.shouldplay=true;
	}
	function hideP(){
		$scope.shouldplay=false;
	}
	function showS(){
		$scope.shouldpaused=true;
	}
	function hideS(){
		$scope.shouldpaused=false;
	}
	function play(){
		$scope.showPost=false;
		$("video").each(function(index,ele){
			ele.pause();
		});
		$($element).find("video")[0].style.display="block";
		$($element).find("video")[0].play();
		setTimeout(function(){
			$($element).find("video")[0].play();
		},0)
	}
	function pause(){
		$($element).find("video")[0].pause();
		$interval.cancel(playTimer);
	}

	showP();
	$scope.shc=function(){
		if($scope.sctr==false){
			showCtr();
			isplay?showS():showP();
			$timeout.cancel(t1);
			t1=$timeout(function(){
				hideCtr();
				hideS();
			},3000)
		}else{
			hideCtr();
			hideS();
		}
	}
	$scope.play = function(){
		hideP();
		play();
		isplay=true;
	}
	$scope.pause = function(){
		hideS();
		showP();
		pause();
		isplay=false;
	}
	$scope.playVideo = function(){
		var e = window.event;
		var v = e.target;
		$($element).find(".controls").css("display","flex");
		playTimer = $interval(function(){
			getCurrent();
			$scope.playedRange = v.currentTime*100/v.duration+"%";
			if(v.currentTime>=v.duration){
				v.currentTime = 0;
				$scope.pause();
			};
			if(v.currentTime>=v.duration-3){
				showCtr();
			};
			$scope.left = 100*v.currentTime/v.duration + "%";
		},100);
		$scope.getBuffered();
	}
	$scope.changeCurrent = function(){
		$timeout.cancel(t1);
		t1=$timeout(function(){
			hideCtr();
			hideS();
		},3000)
		var e = window.event;
		$scope.pause();
		var x = e.touches[0].clientX;
		var video = $($element).find("video")[0];
		var left_padding = $($element).find(".progress").offset().left;
		var duration_width = $($element).find(".progress").width();
		var left = (x - left_padding)*100/duration_width;
		left = left>=100?100:left;
		left = left<=0?0:left;
		$scope.left = left + "%";
		video.currentTime = left*video.duration/100;
		$scope.playedRange = video.currentTime*100/video.duration+"%";
	}
	$scope.jumpCurrent = function(){
		$timeout.cancel(t1);
		t1=$timeout(function(){
			hideCtr();
			hideS();
		},3000)
		var e = window.event;
		var x = e.clientX;
		var video = $($element).find("video")[0];
		var left_padding = $($element).find(".progress").offset().left;
		var duration_width = $($element).find(".progress").width();
		var left = (x - left_padding)*100/duration_width;
		left = left>=100?100:left;
		left = left<=0?0:left;
		$scope.left = left + "%";
		video.currentTime = left*video.duration/100;
		$scope.playedRange = video.currentTime*100/video.duration+"%";
	}
	$scope.loading = function(){
		$scope.isloading=true;
	}
	$scope.noloading = function(){
		$scope.isloading=false;
	}
	$scope.pauseVideo = function(){
		$scope.pause();
	}
	$scope.getBuffered = function(){
		var v=$($element).find("video")[0];
		$interval.cancel(bufferedTimer);
		bufferedTimer = $interval(function(){
			$scope.kkk=[];
			var sum = 0;
			for(var i = 0;i < v.buffered.length;i++){
				$scope.kkk[i] = {};
				$scope.kkk[i].start = v.buffered.start(i);
				$scope.kkk[i].end = v.buffered.end(i);
				$scope.kkk[i].width = ($scope.kkk[i].end - $scope.kkk[i].start)*100/v.duration + "%";
				$scope.kkk[i].left = $scope.kkk[i].start*100/v.duration + "%";
				sum = sum + $scope.kkk[i].end - $scope.kkk[i].start;
			};
			if(sum>=v.duration){
				$interval.cancel(bufferedTimer);
			};
		},1000)	
	}
	//全屏
	$scope.fullScreen = function(){
		v = $("video")[0];
		if(v.webkitEnterFullscreen){
			v.webkitEnterFullscreen();
		}else if(v.mozRequestFullScreen){
			v.mozRequestFullScreen();
		}else if(v.requestFullscreen){
			v.requestFullscreen();
		}else{
			alert("您的手机暂不支持全屏播放。")
		};
	};
	//滚出视口暂停
	$("#content").on("scroll",function(e){
		var top = $($element).offset().top;
		var bottom = $($element).offset().bottom;
		if(top<-150*document.documentElement.clientWidth/720 || top>$("#content").height()+ 150*document.documentElement.clientWidth/720 ){
			$scope.pause()
		};
	});
});