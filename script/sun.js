(function active_bg() {
    $("#bg_1").animate({
        opacity: 0
      }, 5000,
      function() {
        $("#bg_2").animate({
            opacity: 0
          }, 5000,
          function() {
            $("#bg_3").animate({
                opacity: 0
              }, 5000,
              function() {
                $("#bg_4").animate({
                    opacity: 0
                  }, 5000,
                  function() {
                    $("#bg_5").animate({
                        opacity: 0
                      }, 5000,
                      function() {
                        $("#bg_6").animate({
                            opacity: 0
                          }, 5000,
                          function() {
                            $("#bg_7").animate({
                                opacity: 0
                              }, 5000,
                              function() {
                                $("#bg_8").animate({
                                    opacity: 0
                                  }, 5000,
                                  function() {
                                    $("#bg_9").animate({
                                        opacity: 0
                                      }, 5000,
                                      function() {
                                        $("#bg_10").animate({
                                            opacity: 0
                                          }, 5000,
                                          function() {
                                            $("#bg_11").animate({
                                                opacity: 0
                                              }, 5000,
                                              function() {
                                                $("#bg_1").animate({
                                                  opacity: 1
                                                }, 5000,
                                              function() {
                                                $("#bg_2, #bg_3, #bg_4, #bg_5, #bg_6, #bg_7, #bg_8, #bg_9, #bg_10, #bg_11, #bg_12").css({opacity: 1});
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
    })();
