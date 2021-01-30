$(function () {
    const $vision = $(".vision");
    const $core_value = $(".core_value");
    const $jcorep = $(".jcorep");
  
    var waypoints1 = $vision.waypoint(
      function () {
        $vision.find(".vision_vision").addClass("animate");
      },
      {
        offset: "50%",
      }
    );

    var waypoints2 = $core_value.waypoint(
      function () {
        $core_value.find("img").addClass("grow-img");
        $core_value.find("h4").addClass("animate");
      },
      {
        offset: "65%",
      }
    );
    var waypoints3 = $jcorep.waypoint(
      function () {
        $jcorep.find(".stripe").addClass("animate_down");
      },
      {
        offset: "60%",
      }
    );
  });

