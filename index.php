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
        <div class="uk-child-width-1-3@m uk-grid-small uk-grid-30-m uk-grid-match" uk-grid>
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
    </div>
</div>
<?php require "template-parts/layouts/footer.php"; ?>