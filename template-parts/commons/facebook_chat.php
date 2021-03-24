<!-- Load Facebook SDK for JavaScript -->
<div id="fb-root"></div>
<!-- Your Chat Plugin code -->
<div class="fb-customerchat"
     attribution="setup_tool"
     page_id="100840921957725"
     theme_color="#0A7CFF"
     logged_in_greeting="Liên hệ với Aptech Việt Nam qua Messenger"
     logged_out_greeting="Liên hệ với Aptech Việt Nam qua Messenger">
</div>
<script>
    defer(function() {
        window.fbAsyncInit = function() {
            FB.init({
                xfbml            : true,
                version          : 'v5.0'
            });
        };

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }, 5000);
</script>