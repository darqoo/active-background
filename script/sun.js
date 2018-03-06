var a;

$('#toggle').click(function() {
  if (a == 'stop') {
    $('#toggle').text('START');
    a = 'start';
    $("#bg_1,#bg_2,#bg_3,#bg_4,#bg_5,#bg_6,#bg_7,#bg_8,#bg_9,#bg_10,#bg_11,#bg_12").stop();
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
                                                  $("#bg_2,#bg_3,#bg_4,#bg_5,#bg_6,#bg_7,#bg_8,#bg_9,#bg_10,#bg_11,#bg_12").css({
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



function calc_month(month) {
  month.forEach(function(element) {
    var w = parseInt(element.w.slice(0, 2)) * 60 + (parseInt(element.w.slice(3, 5)));
    var z = parseInt(element.z.slice(0, 2)) * 60 + (parseInt(element.z.slice(3, 5)));
    var d = z - w;
    console.log(d);
  })
}

DayLengthOfMonth = [
  [],
  [, 483, 485, 486, 487, 488, 490, 491, 493, 494, 497, 498, 500, 502, 504, 507, 508, 511, 513, 516, 518, 521, 523, 526, 529, 531, 534, 538, 540, 543, 546, 550],
  [, 552, 556, 559, 563, 565, 569, 572, 576, 579, 582, 586, 590, 593, 596, 600, 604, 607, 611, 615, 619, 622, 626, 629, 633, 636, 640, 645, 649],
  [, 652, 656, 660, 663, 667, 671, 674, 678, 683, 686, 690, 694, 697, 701, 706, 709, 713, 717, 720, 725, 728, 732, 736, 740, 744, 748, 751, 755, 759, 763, 767],
  [, 770, 775, 778, 782, 786, 789, 793, 798, 801, 805, 808, 812, 816, 820, 824, 827, 831, 835, 838, 842, 845, 849, 853, 856, 860, 863, 867, 870, 874, 878],
  [, 880, 884, 887, 891, 894, 897, 901, 904, 907, 910, 914, 916, 920, 922, 926, 928, 931, 934, 936, 940, 942, 944, 948, 950, 952, 955, 957, 959, 961, 963, 966]
]
