var a;

$('#toggle').click(function() {
  if (a == 'stop') {
    $('#toggle').text('START');
    a = 'start';
    $("#bg_1, #bg_2, #bg_3, #bg_4, #bg_5, #bg_6, #bg_7, #bg_8, #bg_9, #bg_10, #bg_11, #bg_12").stop();
  } else {
    $('#toggle').text('STOP');
    a = 'stop';
    active_bg();
  }
})

var timelaps = 5000;


function active_bg() {
  $("#bg_1").animate({
      opacity: 0
    }, timelaps,
    function() {
      $("#bg_2").animate({
          opacity: 0
        }, 4000,
        function() {
          $("#bg_3").animate({
              opacity: 0
            }, 4000,
            function() {
              $("#bg_4").animate({
                  opacity: 0
                }, 4000,
                function() {
                  $("#bg_5").animate({
                      opacity: 0
                    }, 4000,
                    function() {
                      $("#bg_6").animate({
                          opacity: 0
                        }, 4000,
                        function() {
                          $("#bg_7").animate({
                              opacity: 0
                            }, 4000,
                            function() {
                              $("#bg_8").animate({
                                  opacity: 0
                                }, 4000,
                                function() {
                                  $("#bg_9").animate({
                                      opacity: 0
                                    }, 4000,
                                    function() {
                                      $("#bg_10").animate({
                                          opacity: 0
                                        }, 4000,
                                        function() {
                                          $("#bg_11").animate({
                                              opacity: 0
                                            }, 5000,
                                            function() {
                                              $("#bg_1").animate({
                                                  opacity: 1
                                                }, 15000,
                                                function() {
                                                  $("#bg_2, #bg_3, #bg_4, #bg_5, #bg_6, #bg_7, #bg_8, #bg_9, #bg_10, #bg_11, #bg_12").css({
                                                    opacity: 1
                                                  });
                                                });
                                              active_bg();
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
};

var styczen = {
  var d1 = {
    w: '07:26',
    z: '15:29'
  }
  var d2 = {
    w: '07:25',
    z: '15:30'
  }
  var d3 = {
    w: '07:25',
    z: '15:31'
  }
  var d4 = {
    w: '07:25',
    z: '15:32'
  }
  var d5 = {
    w: '07:25',
    z: '15:33'
  }
  var d6 = {
    w: '07:25',
    z: '15:35'
  }
  var d7 = {
    w: '07:25',
    z: '15:36'
  }
  var d8 = {
    w: '07:24',
    z: '15:37'
  }
  var d9 = {
    w: '07:24',
    z: '15:38'
  }
  var d10 = {
    w: '07:23',
    z: '15:40'
  }
  var d11 = {
    w: '07:23',
    z: '15:41'
  }
  var d12 = {
    w: '07:22',
    z: '15:42'
  }
  var d13 = {
    w: '07:22',
    z: '15:44'
  }
  var d14 = {
    w: '07:21',
    z: '15:45'
  }
  var d15 = {
    w: '07:20',
    z: '15:47'
  }
  var d16 = {
    w: '07:20',
    z: '15:48'
  }
  var d17 = {
    w: '07:19',
    z: '15:50'
  }
  var d18 = {
    w: '07:18',
    z: '15:51'
  }
  var d19 = {
    w: '07:17',
    z: '15:53'
  }
  var d20 = {
    w: '07:16',
    z: '15:54'
  }
  var d21 = {
    w: '07:15',
    z: '15:56'
  }
  var d22 = {
    w: '07:14',
    z: '15:57'
  }
  var d23 = {
    w: '07:13',
    z: '15:59'
  }
  var d24 = {
    w: '07:12',
    z: '16:01'
  }
  var d25 = {
    w: '07:11',
    z: '16:02'
  }
  var d26 = {
    w: '07:10',
    z: '16:04'
  }
  var d27 = {
    w: '07:08',
    z: '16:06'
  }
  var d28 = {
    w: '07:07',
    z: '16:07'
  }
  var d29 = {
    w: '07:06',
    z: '16:09'
  }
  var d30 = {
    w: '07:05',
    z: '16:11'
  }
  var d31 = {
    w: '07:03',
    z: '16:13'
  }

}
