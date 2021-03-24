<?php $data["title"] = "Kỳ thi đánh giá CNTT 2021"; ?>
<?php $is_home = true; ?>
<?php require "template-parts/layouts/header.php"; ?>
<?php require "template-parts/layouts/block01.php"; ?>
<div>
    <div class="uk-container">
        <div id="about" class="uk-grid-219-m uk-flex-middle mb-40 mb-143-m" uk-grid>
            <div class="uk-width-expand">
                <div class="mb-15 mb-25-m">
                    <h2 class="uk-h2 home__block1__title uk-margin-remove">Đang đứng giữa
                        ngưỡng cửa quyết định
                        mình là ai trong tương lai
                        Vậy bạn có biết</h2>
                </div>
                <p class="home__block1__desc">CNTT đã, đang và sẽ giữ vững ngôi “vua” của mọi nghề trong kỷ nguyên số, là nghề “khát nhân lực” và đáng mơ ước nhất của các bạn trẻ.</p>
                <div class="home__block1__title1">Vậy thì đây chính là kỳ thi dành cho bạn</div>
            </div>
            <div class="uk-width-2-5@m">
                <div class="uk-grid-small" uk-grid>
                    <?php
                    $data = array(
                        'Bạn đang gấp rút chuẩn bị cho kỳ thi tốt nghiệp THPT?',
                        'Bạn có đam mê với ngành CNTT hay chỉ đơn giản muốn chinh phục ngành nghề cực hot với mức lương “khủng”?',
                        'Bạn muốn gia nhập vào hàng ngũ những công dân IT – lực lượng chính của thời đại chuyển đổi số toàn cầu?',
                    );
                    foreach ($data as $k => $v): ?>
                    <div class="uk-width-1-1">
                        <div class="uk-padding-small home__block1__box uk-border-rounded">
                            <span><?= $v ?></span>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
        <div class="mb-20 mb-51-m">
            <h2 class="uk-h2 home__block1__title uk-margin-remove uk-text-center">Học CNTT - Gia nhập vào lực lượng
                nòng cốt của Kỷ nguyên số</h2>
        </div>
        <div class="uk-child-width-1-3@m uk-grid-small uk-grid-30-m uk-grid-match mb-40 mb-133-m" uk-grid uk-scrollspy="cls: uk-animation-scale-up; target: .home__block2__box; delay: 150; repeat: true">
            <?php
            $data = array(
                array(
                    'src' => 'images/box1/img1.png',
                    'txt' => 'Kỹ sư lập trình Web, Game, Ứng dụng, Di động,...',
                ),
                array(
                    'src' => 'images/box1/img2.png',
                    'txt' => 'Hacker Mũ trắng/Chuyên gia an ninh mạng',
                ),
                array(
                    'src' => 'images/box1/img3.png',
                    'txt' => 'Kỹ sư Mật mã học',
                ),
                array(
                    'src' => 'images/box1/img4.png',
                    'txt' => 'Chuyên gia phân tích dữ liệu',
                ),
                array(
                    'src' => 'images/box1/img5.png',
                    'txt' => 'Chuyên gia nghiên cứu IOT/AI/Machine Learning',
                ),
                array(
                    'src' => 'images/box1/img6.png',
                    'txt' => 'Cố vấn Công nghệ cho các Doanh nghiệp',
                ),
            );
            foreach ($data as $k => $v): ?>
            <div>
                <div class="uk-padding-small home__block2__box uk-border-rounded">
                    <div class="uk-flex-middle uk-grid-small uk-grid-23-m" uk-grid>
                        <div class="uk-width-auto">
                            <div class="home__block2__box__bg">
                                <img class="uk-responsive-width uk-responsive-height" src="<?= $v['src'] ?>" alt="">
                            </div>
                        </div>
                        <div class="uk-width-expand">
                            <span class="home__block2__box__txt"><?= $v['txt'] ?></span>
                        </div>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
        <div class="uk-flex-middle uk-grid-15 uk-grid-0-m mb-40 mb-119-m" uk-grid uk-scrollspy="cls: uk-animation-slide-right-small; target: .animation; delay: 300; repeat: true">
            <div class="uk-width-2-5@m">
                <div uk-scrollspy-class="uk-animation-slide-left-small" class="animation uk-background-norepeat uk-background-center-right uk-background-contain uk-position-relative" style="padding-top: 100%;" data-src="images/Ellipse.png" uk-img>
                    <div class="uk-position-center uk-border-circle home__block3__box2">
                        <div class="home__block3__box2__c1 uk-position-center uk-border-circle uk-flex uk-flex-middle uk-flex-center uk-text-center">
                            <div class="uk-flex-center" uk-grid>
                                <div class="uk-width-5-6@s">
                                    <span>5 Lý do bạn nên tham gia kỳ thi này?</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="uk-width-expand">
                <?php
                $data = array(
                    'Đề thi năng lực học CNTT chuẩn quốc tế, được Tập đoàn Aptech áp dụng trên toàn cầu',
                    'Đánh giá chính xác năng lực và mức độ phù hợp của bản thân với ngành CNTT',
                    'Nắm cơ hội trúng tuyển sớm ngành học hot nhất hiện nay.',
                    'Học tập Lập trình với chương trình chuẩn Quốc tế, cam kết đầu ra, liên thông, du học tại các trường Đại học hàng đầu',
                    'Nhận học bổng lên tới 50 triệu từ tập đoàn Aptech',
                );
                foreach ($data as $k => $v): ?>
                <div class="home__block3__item animation uk-padding-small uk-border-pill">
                    <div class="uk-grid-small uk-flex-middle" uk-grid>
                        <div class="uk-width-auto">
                            <div class="home__block3__box1 uk-border-circle uk-flex uk-flex-middle uk-flex-center">
                                <span><?= $k+1 ?></span>
                            </div>
                        </div>
                        <div class="uk-width-expand">
                            <span class="home__block3__txt1"><?= $v ?></span>
                        </div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
        <!--4 bước đơn giản để trở thành Lập trình viên Quốc tế-->
        <div id="hinhthucthi" class="mb-15 mb-22-m">
            <h2 class="uk-h2 home__block1__title uk-margin-remove uk-text-center">4 bước đơn giản để trở thành
                Lập trình viên Quốc tế</h2>
        </div>
        <div class="uk-text-center mb-30 mb-50-m">
            <div class="uk-display-inline-block home__block7__box1 uk-border-pill">
                <span>Hình thức thi: Thi trực tuyến, trắc nghiệm</span>
            </div>
        </div>
        <div class="mb-40 mb-93-m uk-child-width-1-4@m" uk-grid>
            <?php
            $data = array(
                array(
                    'title' => 'Đăng ký trực tuyến',
                    'txt' => 'Bằng cách điền thông tin đăng ký dự thi',
                    'src' => 'images/ico_01.png',
                ),
                array(
                    'title' => 'Nhận số báo danh',
                    'txt' => 'Thời gian và tài khoản thi qua thông báo Email',
                    'src' => 'images/ico_02.png',
                ),
                array(
                    'title' => 'Tham gia thi trực tuyến',
                    'txt' => 'Trên máy tính, thiết bị di động tại bất kỳ điểm nào có kết nối Internet',
                    'src' => 'images/ico_03.png',
                ),
                array(
                    'title' => 'Kết quả thi',
                    'txt' => 'Được gửi tới thí sinh trong vòng 48h sau khi hoàn thành bài thi',
                    'src' => 'images/ico_04.png',
                ),
            );
            foreach ($data as $k => $v): ?>
            <div class="column1">
                <div class="home__block7__item uk-flex uk-flex-column" <?= ($k%2==0) ? '' : 'uk-toggle="cls: uk-flex-column-reverse; mode: media; media: @m"' ?>>
                    <div class="uk-flex-1 uk-flex uk-flex-middle uk-flex-center">
                        <div class="uk-text-center">
                            <div class="home__block7__item__txt1"><?= $v['title'] ?></div>
                            <div class="home__block7__item__txt2"><?= $v['txt'] ?></div>
                        </div>
                    </div>
                    <div class="" uk-toggle="cls: uk-flex-first; mode: media; media: (max-width: 959px)">
                        <div class="uk-text-center">
                            <span class="home__block7__item__number uk-border-circle"><span><?= $k+1 ?></span></span>
                        </div>
                    </div>
                    <div class="uk-flex-1 uk-flex uk-flex-middle uk-flex-center">
                        <div class="home__block7__item__img uk-border-circle uk-flex uk-flex-middle uk-flex-center">
                            <img src="<?= $v['src'] ?>" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
        <!--/4 bước đơn giản để trở thành Lập trình viên Quốc tế-->

        <!--Cấu trúc đề thi-->
        <div class="uk-child-width-1-2@m uk-grid-small uk-grid-0-m mb-40 mb-99-m" uk-grid>
            <div>
                <div>
                    <img src="images/cautrucdethi.png" alt="">
                </div>
            </div>
            <div>
                <div class="mb-20 mb-37-m">
                    <h2 class="uk-h2 home__block1__title uk-margin-remove">Cấu trúc đề thi</h2>
                </div>
                <ul class="uk-list home__block6__list">
                    <li class="home__block6__list__li uk-active">
                        <div class="home__block6__txt1">Môn thi</div>
                        <div class="home__block6__txt2">Toán GMAT và tiếng Anh (kiểm tra về khả năng tư duy logic)</div>
                    </li>
                    <li class="home__block6__list__li uk-active">
                        <div class="home__block6__txt1">Thời lượng thi</div>
                        <div class="home__block6__txt2">60 phút (toán GMAT 30 phút - tiếng Anh 30 phút)</div>
                        <!--
                        <div class="home__block6__txt2">60 phút (toán GMAT 30 phút - tiếng Anh 30 phút)</div>
                        -->
                    </li>
                    <li class="home__block6__list__li uk-active">
                        <div class="home__block6__txt1">Điểm trúng tuyển</div>
                        <div class="home__block6__txt2">Tổng điểm >=18/45 (tiếng Anh*2,25 + GMAT*2,7)/2,5</div>
                    </li>
                    <li class="home__block6__list__li">
                        <div class="home__block6__txt1">Đơn vị tổ chức</div>
                        <div class="home__block6__txt2">Tập đoàn Aptech toàn cầu</div>
                    </li>
                </ul>
            </div>
        </div>
        <!--/Cấu trúc đề thi-->

        <!--Chính sách hỗ trợ-->
        <div class="uk-child-width-1-2@m mb-30 mb-93-m uk-grid-match" uk-grid>
            <div>
                <div class="uk-flex-column uk-flex">
                    <div class="uk-flex-1">
                        <div class="mb-15 mb-27-m">
                            <h2 class="uk-h2 home__block1__title uk-margin-remove">Chính sách hỗ trợ</h2>
                        </div>
                        <ul class="uk-list uk-list-bullet home__block5__list mb-16 uk-margin-remove-top">
                            <li>Học bổng Lập trình tiên phong trị giá <span>50.000.000VNĐ</span></li>
                            <li>Tặng Bí kíp luyện thi “thần tốc” (Áp dụng cho 100 thí sinh đăng ký đầu tiên)</li>
                            <li>Tài khoản thi thử 2021</li>
                        </ul>
                    </div>
                    <div>
                        <img src="images/x3.png" alt="">
                    </div>
                </div>
            </div>
            <div>
                <div class="uk-flex-column uk-flex">
                    <div class="uk-flex-1">
                        <div class="uk-flex-center mb-30 mb-63-m" uk-grid>
                            <div class="uk-width-4-5@m">
                                <div class="uk-text-center home__block5__title2">
                                    Aptech - ngôi trường
                                    ươm mầm thế hệ Lập trình vàng
                                    cho làng Công nghệ Việt Nam
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="home__block5__box1 uk-position-relative">
                            <iframe class="uk-position-z-index uk-position-relative" src="https://www.youtube-nocookie.com/embed/gc0z5oXOyPI?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1" width="1920" height="1080" frameborder="0" allowfullscreen uk-responsive uk-video="automute: true;autoplay: false;"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--/Chính sách hỗ trợ-->

        <!--Footer-->
        <div class="uk-padding-small uk-border-rounded mb-10-m home__block4 uk-text-center">
            <div class="home__block4__title">HỆ THỐNG ĐÀO TẠO LẬP TRÌNH VIÊN QUỐC TẾ APTECH</div>
            <div class="uk-flex-center uk-child-width-auto mb-20 uk-grid-small" uk-grid>
                <div>
                    <div class="uk-grid-10 uk-flex-bottom" uk-grid>
                        <div class="uk-width-auto">
                            <div>
                                <span uk-icon="icon: location; ratio: 1"></span>
                                <span class="uk-text-middle home__block4__txt1">Hà Nội:</span>
                            </div>
                        </div>
                        <div class="uk-width-expand">
                            <ul class="uk-subnav uk-subnav-divider home__block4__ul1">
                                <li class="home__block4__ul1__li">285 Đội Cấn, Q. Ba Đình</li>
                                <li class="home__block4__ul1__li">54 Lê Thanh Nghị, Q. Hai Bà Trưng</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="uk-grid-10 uk-flex-bottom" uk-grid>
                        <div class="uk-width-auto">
                            <div>
                                <span uk-icon="icon: location; ratio: 1"></span>
                                <span class="uk-text-middle home__block4__txt1">TP.HCM:</span>
                            </div>
                        </div>
                        <div class="uk-width-expand">
                            <ul class="uk-subnav uk-subnav-divider home__block4__ul1">
                                <li class="home__block4__ul1__li">212 - 214 Nguyễn Đình Chiểu, Q.3</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="uk-text-center">
                <div class="uk-display-inline-block home__block4__box1 uk-border-rounded">
                    <div class="uk-flex-center uk-flex-middle uk-grid-small" uk-grid>
                        <div><span class="home__block4__box1__txt1">Hotline: 1800 1141</span></div>
                        <div><span class="home__block4__box1__txt2">Email: aptech1@aprotrain.com</span></div>
                    </div>
                </div>
            </div>
        </div>
        <!--/Footer-->
    </div>
</div>
<?php require "template-parts/layouts/footer.php"; ?>