<style>
    .main-container .main-content #share-conteiner #share-block--3 {
        margin-bottom: 10px;
        margin-top: 5px;
    }
    .main-container .main-content #share-conteiner a.thumbnail.active,
    .main-container .main-content #share-conteiner a.thumbnail:focus,
    .main-container .main-content #share-conteiner a.thumbnail:hover {
        border-color: #4895a3;
    }
    .main-container .main-content #share-conteiner a.thumbnail {
        margin-right: 10px;
    }
    .main-container .main-content #share-conteiner img {
        height: 100%;
        width: 100%;
    }
    .main-container .main-content .share-left,
    .main-container .main-content .share-right {
        padding: 5px 5px 5px 10px;
    }
    .main-container .main-content #share-block--1 .share-right,
    .main-container .main-content #share-block--1 .share-left {
        padding: 5px;
    }
    .main-container .main-content #share-block--3 .share-left,
    .main-container .main-content #share-block--3 .share-right {
        padding: 0;
    }
    .main-container .main-content .block-lg-left {
        width: 48%;
        margin-top: 1px;
    }
    .main-container .main-content .block-lg-right {
        width: 48% !important;
        margin: 0px 9px;
        margin-top: 2px;
    }
    .main-container .main-content .block-sm {
        margin-right: 10px;
    }
    .main-container .main-content .block-sm:first-of-type {
        margin-bottom: 13px;
    }
    .main-container .main-content .shares-block,
    .main-container .main-content .shares-block__actions {
        position: relative;
        width: 100%; /* для IE 6 */
    }
    .main-container .main-content .shares-block__actions {
        border: 1px solid #f0f0f0;
    }
    .main-container .main-content .shares-block:hover .text-block {
        background-color: #4895a3;
    }
    .main-container .main-content .shares-block__actions:hover {
        -moz-box-shadow: 0 2px 9px rgba(19,111,202,0.49);
        -webkit-box-shadow: 0 2px 9px rgba(19,111,202,0.49);
        box-shadow: 0 2px 9px rgba(19,111,202,0.49);
    }
    .main-container .main-content .shares-block__actions:hover .name {
        color: #34A7E5;
    }
    .main-container .main-content #share-block--3 .shares-block  {
        margin-left: 10px;
        width: 593px !important;
    }
    .main-container .main-content .text-block {
        position: absolute;
        bottom: 23px;
        left: 0;
        z-index: 2;
        width: 100%;
        background: rgba(0, 0, 0, 0.52);
        opacity: 0.7;
        padding: 12px;
        text-align: left;
    }
    .main-container .main-content .text-block__actions {
        position: absolute;
        bottom: 0;
        left: 25.4%;
        z-index: 2;
        width: 74.6%;
        background: #fff;
        padding: 5px 12px;
        text-align: left;
    }
    .main-container .main-content .text-block span,
    .main-container .main-content .text-block__actions span {
        font-family: "CenturyGothic";
        color: #fff;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
    }
    .main-container .main-content .text-block__actions span {
        color: #000;
        line-height: 23px;
    }
    .main-container .main-content .text-block__actions span:last-of-type {
        color: gray;
        font-size: 13px;
    }
    .main-container .main-content .text-block__actions span:last-of-type:before {
        content: " ";
        position: absolute;
        background: url(/templates/shop/image/sprite.png) no-repeat -284px -522px;
        width: 15px;
        height: 15px;
        bottom: 10px;
        left: 10px;
    }
    .main-container .main-content .text-block span.name,
    .main-container .main-content .text-block__actions span.name {
        text-transform: uppercase;
        line-height: 27px;
        font-size: 20px;
    }
    .main-container .main-content .text-block__actions span.name {
        text-decoration: underline;
        color: #3764A5;
    }

    .main-container .main-content #commodity-name{
        background: #806890;
        text-align: left;
        color: white;
        font-size: 43px;
        padding: 18px 30px;
        margin-left: -12px;
        width: 102%;
    }

    @media screen and (max-width: 991px) {
        .main-container .main-content .block-sm:first-of-type {
            margin-bottom: 9px;
        }
        .main-container .main-content .text-block span {
            font-size: 14px;
        }
        .main-container .main-content .text-block__actions {
            padding: 5px;
        }
        .main-container .main-content .text-block__actions span {
            font-size: 12px;
            line-height: 20px;
        }
        .main-container .main-content .text-block__actions span:last-of-type:before {
            left: 4px;
        }
    }
    @media screen and (max-width: 767px) {
        .main-container .main-content .block-sm:not(:first-of-type) {
            margin-top: 14px;
        }
        .main-container .main-content .text-block span,
        .main-container .main-content .text-block__actions span {
            font-size: 16px;
        }
        .main-container .main-content .text-block__actions span {
            line-height: 25px;
        }
        .main-container .main-content .text-block__actions {
            padding: 7px 12px;
        }
        .main-container .main-content .text-block__actions span:last-of-type:before {
            bottom: 13px;
            left: 9px;
        }
    }
    @media screen and (max-width: 600px) {
        .main-container .main-content .text-block__actions {
            padding: 5px;
        }
        .main-container .main-content .text-block__actions span {
            font-size: 12px;
            line-height: 20px;
        }
        .main-container .main-content .text-block__actions span:last-of-type:before {
            left: 4px;
        }
    }
    @media screen and (max-width: 480px) {
        .main-container .main-content .text-block {
            padding: 10px;
        }
        .main-container .main-content .text-block__actions {
            padding: 5px 10px;
        }
        .main-container .main-content .text-block__actions span:last-of-type:before {
            bottom: 6px;
        }
        .main-container .main-content .brand-block {
            font-size: 14px;
        }
        .main-container .main-content .text-block span,
        .main-container .main-content .text-block__actions span {
            font-size: 13px;
            line-height: 15px;
        }
    }
    @media screen and (max-width: 520px) {
        .main-container .main-content .block-sm:not(:first-of-type) {
            margin-top: 10px;
        }
    }
</style>

<!--<div class="row" id="share-block--1">
    <div class="col-md-6 col-sm-6 col-xs-12 share-left {$visibl12}">
        <div class="shares-block__actions">
            <a href="{$blockLink12}">
                <img src="{$photoDomain}banners/action-a1.jpg" alt="" class="img-responsive">
                <div class="text-block__actions">
                    <span class="name">{$blockName12}</span>
                    <span>{$blockTitle12}</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;Осталось: {$blockDay12}  {$blockHour12}</span>
                </div>
            </a>
        </div>
    </div>

    <div class="col-md-6 col-sm-6 col-xs-12 share-left {$visibl14}">
        <div class="shares-block__actions">
            <a href="{$blockLink14}">
                <img src="{$photoDomain}banners/actions5.jpg" alt="" class="img-responsive">
                <div class="text-block__actions">
                    <span class="name">{$blockName14}</span>
                    <span>{$blockTitle14}</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;Осталось: {$blockDay14}  {$blockHour14}</span>
                </div>
            </a>
        </div>
    </div>

    <div class="col-md-6 col-sm-6 col-xs-12 share-left {$visibl10}">
        <div class="shares-block__actions">
            <a href="{$blockLink10}">
                <img src="{$photoDomain}banners/action-t.jpg" alt="" class="img-responsive">
                <div class="text-block__actions">
                    <span class="name">{$blockName10}</span>
                    <span>{$blockTitle10}</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;Осталось: {$blockDay10}  {$blockHour10}</span>
                </div>
            </a>
        </div>
    </div>

    <div class="col-md-6 col-sm-6 col-xs-12 share-left {$visibl17}">
        <div class="shares-block__actions">
            <a href="{$blockLink17}">
                <img src="{$photoDomain}banners/action-ol.jpg" alt="" class="img-responsive">
                <div class="text-block__actions">
                    <span class="name">{$blockName17}</span>
                    <span>{$blockTitle17}</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;Осталось: {$blockDay17}  {$blockHour17}</span>
                </div>
            </a>
        </div>
    </div>

    <!--  <div class="col-md-6 col-sm-6 col-xs-12 share-left {$visibl11}">
        <div class="shares-block__actions">
            <a href="{$blockLink11}">
                <img src="{$photoDomain}banners/actions10.jpg" alt="" class="img-responsive">
                <div class="text-block__actions">
                    <span class="name">{$blockName11}</span>
                    <span>{$blockTitle11}</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;Осталось: {$blockDay11}  {$blockHour11}</span>
                </div>
            </a>
        </div>
    </div>

    <div class="col-md-6 col-sm-6 col-xs-12 share-left {$visibl15}">
        <div class="shares-block__actions">
            <a href="{$blockLink15}">
                <img src="{$photoDomain}banners/actions6.jpg" alt="" class="img-responsive">
                <div class="text-block__actions">
                    <span class="name">{$blockName15}</span>
                    <span>{$blockTitle15}</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;Осталось: {$blockDay15}  {$blockHour15}</span>
                </div>
            </a>
        </div>
    </div>

    <div class="col-md-6 col-sm-6 col-xs-12 share-left {$visibl15}">
        <div class="shares-block__actions">
            <a href="{$blockLink15}">
                <img src="{$photoDomain}banners/actions6.jpg" alt="" class="img-responsive">
                <div class="text-block__actions">
                    <span class="name">{$blockName15}</span>
                    <span>{$blockTitle15}</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;Осталось: {$blockDay15}  {$blockHour15}</span>
                </div>
            </a>
        </div>
    </div>

    <div class="col-md-6 col-sm-6 col-xs-12 share-left {$visibl13}">
        <div class="shares-block__actions">
            <a href="{$blockLink13}">
                <img src="{$photoDomain}banners/action-v1.jpg" alt="" class="img-responsive">
                <div class="text-block__actions">
                    <span class="name">{$blockName13}</span>
                    <span>{$blockTitle13}</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;Осталось: {$blockDay13}  {$blockHour13}</span>
                </div>
            </a>
        </div>
    </div>


</div>-->

<div class="col-md-12 col-sm-12 col-xs-12" id="gift-slider" dir='rtl'>
    <div>
        <img src="{$photoDomain}banners/shock-2.jpg" alt="shock">
    </div>
    <!--<div><img src="{$photoDomain}banners/base3.jpg" alt="main-page-banner-3"></div>-->
    <div>
        <a href="/akcionnie-predlojeniya/#150gr/">
            <img src="{$photoDomain}banners/base4-c.jpg" alt="main-page-banner-4">
        </a>
        <button type="submit" id="click-regestration" class="btn btn-lg btn-block btn-primary">Оформить заказ</button>
    </div>
    <div>
        <a href="/akcionnie-predlojeniya/#discount/">
            <img src="{$photoDomain}banners/base1-c1.jpg" alt="main-page-banner-1">
        </a>
    </div>
    <div>
        <a href="/akcionnie-predlojeniya/">
            <img src="{$photoDomain}banners/base2-c.jpg" alt="main-page-banner-2">
        </a>
        <button type="submit" id="click-podarok" class="btn btn-lg btn-block btn-primary">Оформить заказ</button>
    </div>
    <!--<div><img src="{$photoDomain}banners/base5.jpg" alt="main-page-banner-5"></div>-->
</div>

<div class="col-md-12 col-sm-12 col-xs-12" style="padding: 0 0px;">
    <a href="/organizer-sp/">
        <img style="width: 100%;" src="http://makewear-images.azureedge.net/assets/sp-special.jpg">
    </a>
</div>

<div class="row" id="share-block--2">
    <div class="col-md-6 col-sm-6 col-xs-12 share-left">
        <div class="shares-block">
            <a href="{$blockLink1}">
                <img src="{$photoDomain}banners/new-block-1.png" alt="" class="img-responsive">
                <div class="text-block">
                    <span class="name">{$blockName1}</span><br/>
                    <span>{$blockTitle1}</span>
                </div>
            </a>
        </div>
    </div>
    <div class="col-md-6 col-sm-6 col-xs-12 share-right">
        <div class="block-lg-left pull-left">
            <div class="block-sm shares-block">
                <a href="{$blockLink4}">
                    <img src="{$photoDomain}banners/new-block-2.png" alt="" class="img-responsive">
                    <div class="text-block">
                        <span class="name">{$blockName4}</span><br/>
                        <span>{$blockTitle4}</span>
                    </div>
                </a>
            </div>
            <div class="block-lg-left shares-block">
                <a href="{$blockLink3}">
                    <img src="{$photoDomain}banners/new-block-4.png" alt="" class="img-responsive">
                    <div class="text-block">
                        <span class="name">{$blockName3}</span><br/>
                        <span>{$blockTitle3}</span>
                    </div>
                </a>
            </div>
        </div>
        <div class="block-lg-right shares-block pull-right">
            <div class="block-sm shares-block">
                <a href="{$blockLink8}">
                    <img src="{$photoDomain}banners/new-block-3.png" alt="" class="img-responsive">
                    <div class="text-block">
                        <span class="name">{$blockName8}</span><br/>
                        <span>{$blockTitle8}</span>
                    </div>
                </a>
            </div>
            <div class="block-sm shares-block">
                <a href="{$blockLink5}">
                    <img src="{$photoDomain}banners/new-block-5.png" alt="" class="img-responsive">
                    <div class="text-block">
                        <span class="name">{$blockName5}</span><br/>
                        <span>{$blockTitle5}</span>
                    </div>
                </a>
            </div> 
        </div>
    </div>
</div>

<div class="row" id="share-block--3">
    <div class="col-md-6 col-sm-6 col-xs-12 share-left">
        <!--<div class="block-lg-right shares-block pull-left">
            <a href="{$blockLink5}">
                <img src="{$photoDomain}banners/block-5.jpg" alt="" class="img-responsive">
                <div class="text-block">
                    <span class="name">{$blockName5}</span><br/>
                    <span>{$blockTitle5}</span>
                </div>
            </a>
        </div>-->
     
        <div class="block-lg-right shares-block pull-left" style="width: 47% !important;    margin: 2px 0px 0px 11px;">
            <a href="{$blockLink6}">
                <img src="{$photoDomain}banners/new-block-6.png" alt="" class="img-responsive">
                <div class="text-block">
                    <span class="name">{$blockName6}</span><br/>
                    <span>{$blockTitle6}</span>
                </div>
            </a>
        </div>
        <div class="block-lg-right shares-block pull-left" style="width:48% !important;    margin: 1px 0px 0px 15px;">
            <a href="{$blockLink7}">
                <img src="{$photoDomain}banners/new-block-7.png" alt="" class="img-responsive">
                <div class="text-block">
                    <span class="name">{$blockName7}</span><br/>
                    <span>{$blockTitle7}</span>
                </div>
            </a>
        </div>
    </div>

    <div class="col-md-6 col-sm-6 col-xs-12 share-right">
        <div class="block-lg-right shares-block pull-left">
            <a href="{$blockLink2}">
                <img src="{$photoDomain}banners/new-block-8.png" alt="" class="img-responsive">
                <div class="text-block">
                    <span class="name">{$blockName2}</span><br/>
                    <span>{$blockTitle2}</span>
                </div>
            </a>
        </div>
    </div>
</div> 