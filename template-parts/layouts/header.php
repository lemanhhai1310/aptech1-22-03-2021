<?php
//echo 'My username is ' . getenv('USER_NAME') . '!';
//echo getenv('USER_NAME');
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Aptech - <?= /** @var TYPE_NAME  */
        (isset($data['title'])) ? $data['title'] : ''; ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <!--CSS-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- UIkit CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.6.18/dist/css/uikit.min.css" />
    <link rel="stylesheet" href="style.css?v=<?php echo(time()) ?>">
    <!--JS-->
    <script src="https://cdn.jsdelivr.net/npm/@shinsenter/defer.js/dist/defer_plus.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js"></script>
    <!-- UIkit JS -->
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.6.18/dist/js/uikit.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.6.18/dist/js/uikit-icons.min.js"></script>
    <script src="js/app.js"></script>
</head>
<body class="<?= ($is_home) ? 'isHome' : '' ?>">
<?php require "template-parts/commons/facebook_chat.php"; ?>
<div id="particles-js"></div>
<script src="particles.js-master/particles.js"></script>
<script src="particles.js-master/demo/js/app.js"></script>
<section id="app" class="uk-offcanvas-content uk-overflow-hidden uk-position-relative uk-background-norepeat uk-background-top-center" uk-toggle="cls: uk-background-contain; mode: media; media: @l" data-src="images/bannercopy.png" uk-img>
<div uk-sticky="top: 100vh;animation: uk-animation-slide-top;">
    <header class="header">
        <div class="uk-container uk-padding-remove">
            <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
                <div class="uk-navbar-left">
                    <a href="" class="uk-navbar-item uk-logo"><img src="images/logo.png" alt=""></a>
                </div>
                <div class="uk-navbar-right">
                    <div class="uk-navbar-item header__itemLine uk-visible@m">
                        <ul class="uk-navbar-nav" uk-scrollspy-nav="closest: li; scroll: true;offset: 60;">
                            <li><a href="#about">GIỚI THIỆU</a></li>
                            <li><a href="#hinhthucthi">HÌNH THỨC THI</a></li>
                        </ul>
                    </div>
                    <div class="uk-navbar-item header__itemLine">
                        <div class="uk-child-width-auto uk-grid-10 uk-grid-20-m uk-flex-middle" uk-grid>
                            <div><a href="https://www.facebook.com/AptechVNLearning/" target="_blank" class="header__socialLink" uk-icon="icon: facebook; ratio: 1"></a></div>
                            <div><a href="https://youtube.com/c/AprotrainAptech" target="_blank" class="header__socialLink" uk-icon="icon: youtube; ratio: 1"></a></div>
                            <div>
                                <a href="#dky" uk-scroll class="header__btnRegis uk-button uk-button-secondary uk-border-pill">Đăng ký</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</div>