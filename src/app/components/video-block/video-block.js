(function () {
    'use strict';

    var videoBlock = {
        templateUrl: 'components/video-block/video-block.html',
        controller: videoController,
        bindings: {
            video: '=',
            dis: '=',
            idvideo: '='
        }
    };
    function videoController($scope, CONFIG) {
        var vm = this;
        vm.videoActiv = function () {
          if(vm.video == undefined){
              $('video').attr("poster", "/images/video-message.png");
          }else {
              $('video').attr("poster", "/images/movie-logo.png");
          }

        };
        vm.playVideo = function () {
            if(vm.video !== undefined) {
                $('video.main-video')[0].play();
                $('.z-in').hide();
            }else {
                $('video.main-video')[0].pause();
                $('.z-in').hide();

            }

        }
    };

    angular
        .module('app.components')
        .component('videoBlock', videoBlock);
}());
