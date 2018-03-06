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

var timelaps = 4000;


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

var styczen = [{
    w: '07:26',
    z: '15:29'
  },
  {
    w: '07:25',
    z: '15:30'
  },
  {
    w: '07:25',
    z: '15:31'
  },
  {
    w: '07:25',
    z: '15:32'
  },
  {
    w: '07:25',
    z: '15:33'
  },
  {
    w: '07:25',
    z: '15:35'
  },
  {
    w: '07:25',
    z: '15:36'
  },
  {
    w: '07:24',
    z: '15:37'
  },
  {
    w: '07:24',
    z: '15:38'
  },
  {
    w: '07:23',
    z: '15:40'
  },
  {
    w: '07:23',
    z: '15:41'
  },
  {
    w: '07:22',
    z: '15:42'
  },
  {
    w: '07:22',
    z: '15:44'
  },
  {
    w: '07:21',
    z: '15:45'
  },
  {
    w: '07:20',
    z: '15:47'
  },
  {
    w: '07:20',
    z: '15:48'
  },
  {
    w: '07:19',
    z: '15:50'
  },
  {
    w: '07:18',
    z: '15:51'
  },
  {
    w: '07:17',
    z: '15:53'
  },
  {
    w: '07:16',
    z: '15:54'
  },
  {
    w: '07:15',
    z: '15:56'
  },
  {
    w: '07:14',
    z: '15:57'
  },
  {
    w: '07:13',
    z: '15:59'
  },
  {
    w: '07:12',
    z: '16:01'
  },
  {
    w: '07:11',
    z: '16:02'
  },
  {
    w: '07:10',
    z: '16:04'
  },
  {
    w: '07:08',
    z: '16:06'
  },
  {
    w: '07:07',
    z: '16:07'
  },
  {
    w: '07:06',
    z: '16:09'
  },
  {
    w: '07:05',
    z: '16:11'
  },
  {
    w: '07:03',
    z: '16:13'
  }
]

var luty = {

  d1: {
    w: '07:02',
    z: '16:14'
  },
  d2: {
    w: '07:00',
    z: '16:16'
  },
  d3: {
    w: '06:59',
    z: '16:18'
  },
  d4: {
    w: '06:57',
    z: '16:20'
  },
  d5: {
    w: '06:56',
    z: '16:21'
  },
  d6: {
    w: '06:54',
    z: '16:23'
  },
  d7: {
    w: '06:53',
    z: '16:25'
  },
  d8: {
    w: '06:51',
    z: '16:27'
  },
  d9: {
    w: '06:49',
    z: '16:28'
  },
  d10: {
    w: '06:48',
    z: '16:30'
  },
  d11: {
    w: '06:46',
    z: '16:32'
  },
  d12: {
    w: '06:44',
    z: '16:34'
  },
  d13: {
    w: '06:42',
    z: '16:35'
  },
  d14: {
    w: '06:41',
    z: '16:37'
  },
  d15: {
    w: '06:39',
    z: '16:39'
  },
  d16: {
    w: '06:37',
    z: '16:41'
  },
  d17: {
    w: '06:35',
    z: '16:42'
  },
  d18: {
    w: '06:33',
    z: '16:44'
  },
  d19: {
    w: '06:31',
    z: '16:46'
  },
  d20: {
    w: '06:29',
    z: '16:48'
  },
  d21: {
    w: '06:27',
    z: '16:49'
  },
  d22: {
    w: '06:25',
    z: '16:51'
  },
  d23: {
    w: '06:24',
    z: '16:53'
  },
  d24: {
    w: '06:22',
    z: '16:55'
  },
  d25: {
    w: '06:20',
    z: '16:56'
  },
  d26: {
    w: '06:18',
    z: '16:58'
  },
  d27: {
    w: '06:15',
    z: '17:00'
  },
  d28: {
    w: '06:13',
    z: '17:02'
  }
}

var w = parseInt(luty.d1.w.slice(0, 2)) * 60 + (parseInt(luty.d1.w.slice(3, 5)));
var z = parseInt(luty.d1.z.slice(0, 2)) * 60 + (parseInt(luty.d1.z.slice(3, 5)));

var d = z - w;

function calc_day(month) {
  month.forEach(function(element) {
    var w = parseInt(element.w.slice(0, 2)) * 60 + (parseInt(element.w.slice(3, 5)));
    var z = parseInt(element.z.slice(0, 2)) * 60 + (parseInt(element.z.slice(3, 5)));
    var d = z - w;
    console.log(d);
  })
}

DayLengthOfMonth = [
  ['nothing'],
  [483, 485, 486, 487, 488, 490, 491, 493, 494, 497, 498, 500, 502, 504, 507, 508, 511, 513, 516, 518, 521, 523, 526, 529, 531, 534, 538, 540, 543, 546, 550]
]
