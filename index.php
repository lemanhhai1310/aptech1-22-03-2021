<?php $data["title"] = "Trang chủ"; ?>
<?php $is_home = true; ?>
<?php require "template-parts/layouts/header.php"; ?>
<?php require "template-parts/layouts/block01.php"; ?>
<div>
    <div class="uk-container">
        <div class="uk-grid-219-m uk-flex-middle mb-40 mb-143-m" uk-grid>
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
        <div class="uk-padding-small uk-border-rounded mb-10-m home__block4 uk-text-center">
            <div>HỆ THỐNG ĐÀO TẠO LẬP TRÌNH VIÊN QUỐC TẾ APTECH</div>
            <div class="uk-flex-center uk-child-width-auto" uk-grid>
                <div>
                    <div class="uk-grid-10 uk-flex-middle" uk-grid>
                        <div class="uk-width-auto">
                            <span uk-icon="icon: location; ratio: 1"></span>
                            <span class="uk-text-middle">Hà Nội:</span>
                        </div>
                        <div class="uk-width-expand">
                            <ul class="uk-subnav uk-subnav-divider">
                                <li>285 Đội Cấn, Q. Ba Đình</li>
                                <li>54 Lê Thanh Nghị, Q. Hai Bà Trưng</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="uk-grid-10 uk-flex-middle" uk-grid>
                        <div class="uk-width-auto">
                            <span uk-icon="icon: location; ratio: 1"></span>
                            <span class="uk-text-middle">TP.HCM:</span>
                        </div>
                        <div class="uk-width-expand">
                            <ul class="uk-subnav uk-subnav-divider">
                                <li>212 - 214 Nguyễn Đình Chiểu, Q.3</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="uk-text-center">
                <div class="uk-display-inline-block">
                    <div class="uk-flex-center uk-flex-middle" uk-grid>
                        <div>Hotline: 1800 1141</div>
                        <div>Email: aptech1@aprotrain.com</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php require "template-parts/layouts/footer.php"; ?>