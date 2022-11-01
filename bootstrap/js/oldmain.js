    // Google Analytics: change UA-XXXXX-X to be your sites ID. -->
        (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
        function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
        e=o.createElement(i);r=o.getElementsByTagName(i)[0];
        e.src='//www.google-analytics.com/analytics.js';
        r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
        ga('create','UA-XXXXX-X','auto');ga('send','pageview');

    //Script to Activate the Carousel
    //    $('.carousel').carousel({
    //        interval: 5000 //changes the speed
    //    })
    
    // Script to load sidebars
        function loadsidebar1() {            
            $.post("rssfeed.php",
            {
                xml: "http://del.icio.us/v2/rss/blbauer/E-Commerce",
            },
            function(data, status){
                document.getElementById("sidebar1").innerHTML = data;
            });
        }

        function loadsidebar2() {
            $.post("rssfeed.php",
            {
                xml: "http://del.icio.us/v2/rss/blbauer/webdesign",
            },
            function(data, status){
                document.getElementById("sidebar2").innerHTML = data;
            });
        }

        function loadsidebar3() {
            $.post("rssfeed.php",
            {
                xml: "http://del.icio.us/v2/rss/blbauer/web programming",
            },
            function(data, status){
                document.getElementById("sidebar3").innerHTML = data;
            });
        }

        function loadsidebar4() {
            $.post("rssfeed.php",
            {
                xml: "http://del.icio.us/v2/rss/blbauer/privacy",
            },
            function(data, status){
                document.getElementById("sidebar4").innerHTML = data;
            });
        }


        document.addEventListener("load", loadsidebar1(), true);
        document.addEventListener("load", loadsidebar2(), true);
        document.addEventListener("load", loadsidebar3(), true);
        document.addEventListener("load", loadsidebar4(), true);
