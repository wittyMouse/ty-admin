<template>
  <div class="container websitePage">
    <page-header />

    <div class="mainbox clearfix">
      <breadcrumb :navList="navList" />

      <!--//LEFT=start//-->
      <div class="website-left-menu">
        <div class="website-menu-content">
          <!--网站logo=start-->
          <span class="user-logo">
            <img :src="require('../assets/images/pic1.png')" />
          </span>
          <div class="user-namedata">
            <span class="user-name">暗网中文论坛网站</span>
            <span class="attention-icon" title="关注"></span>
            <!--<span class="attention-icon already" title="已关注"></span>-->
          </div>
          <!--网站logo=end-->

          <!--信息=start-->
          <div class="website-left-data">
            <div class="website-width-inline">
              <span class="w-u-textleft">建站时间</span>
              <span class="w-u-textright">2019/09/10</span>
            </div>

            <div class="website-width-inline">
              <span class="w-u-textleft">地址</span>
              <span class="w-u-textright">https://info.elliptellipticic.con</span>
            </div>

            <div class="website-width-inline">
              <span class="w-u-textleft">语言</span>
              <span class="w-u-textright">English</span>
            </div>

            <div class="website-width-inline">
              <span class="w-u-textleft">管理员</span>
              <span class="w-u-textright">川普安妮</span>
            </div>

            <div class="website-width-inline">
              <span class="w-u-textleft">标签</span>
              <span class="w-u-textright">政治、安全</span>
            </div>
          </div>
          <!--信息=end-->

          <!--时间=start-->
          <div class="website-left-data">
            <div class="website-width-inline">
              <span class="w-u-textleft two">第一次发现时间</span>
              <span class="w-u-textright">2019/09/10</span>
            </div>

            <div class="website-width-inline">
              <span class="w-u-textleft two">最近在线时间</span>
              <span class="w-u-textright">2019-10-10</span>
            </div>
          </div>
          <!--时间=end-->

          <!--过滤=start-->
          <div class="website-left-data">
            <p class="lh32">过滤</p>
            <ul class="website-left-nav">
              <li class="current">
                <a href="">
                  <span class="name">用户</span>
                  <span class="math-txt">2121110</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span class="name">文本内容</span>
                  <span class="math-txt">110</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span class="name">图片</span>
                  <span class="math-txt">110</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span class="name">文档</span>
                  <span class="math-txt">110</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span class="name">音视频</span>
                  <span class="math-txt">110</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span class="name">虚拟身份</span>
                  <span class="math-txt">110</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span class="name">数字货币</span>
                  <span class="math-txt">110</span>
                </a>
              </li>
            </ul>
          </div>
          <!--过滤=end-->
        </div>
        <span class="website-left-bottombg"></span>
      </div>
      <!--//LEFT=end//-->

      <!--//RIGHT=start//-->
      <div class="website-main-right">
        <!--//汇总统计信息=start//-->
        <div class="height-block">
          <ul class="summary-list-box website-total">
            <li>
              <span class="content-icon icon-user"></span>
              <div class="summary-text-box">
                <p class="summary-text">用户数目</p>
                <p class="math yellow">111876544</p>
              </div>
              <span class="right-arrow"></span>
            </li>
            <li>
              <span class="content-icon icon-activeuser"></span>
              <div class="summary-text-box">
                <p class="summary-text">活跃用户数目</p>
                <p class="math yellow">111876544</p>
              </div>
              <span class="right-arrow"></span>
            </li>
            <li>
              <span class="content-icon icon-invitation"></span>
              <div class="summary-text-box">
                <p class="summary-text">帖子总数</p>
                <p class="math yellow">111876544</p>
              </div>
              <span class="right-arrow"></span>
            </li>
            <li>
              <span class="content-icon icon-invitation-day"></span>
              <div class="summary-text-box">
                <p class="summary-text">帖子数/天</p>
                <p class="math yellow">111876544</p>
              </div>
              <span class="right-arrow"></span>
            </li>

            <li>
              <span class="content-icon icon-invitation-date"></span>
              <div class="summary-text-box">
                <p class="summary-text">上一个帖子时间</p>
                <p class="math yellow">1小时前</p>
              </div>
              <span class="right-arrow"></span>
            </li>
          </ul>
        </div>
        <!--//汇总统计信息=end//-->

        <div class="width clearOver">
          <!--//主题=start//-->
          <div class="main-left percent-30">
            <div class="item-flex">
              <span class="box-left-arrow"></span>
              <span class="box-shadowbg"></span>
              <span class="box-right-arrow"></span>
              <div class="item-box height-website-level">
                <!--title=start-->
                <div class="common-title">
                  <h3>主题</h3>
                </div>
                <!--title=end-->

                <!--content=start-->
                <div class="box-content">
                  <!--统计图=start-->
                  <div class="chart-item">
                    <!-- 矩形统计图 -->
                    <pie-chart :kind="1" :source="source1" />
                  </div>
                  <!--统计图=end-->
                </div>
                <!--content=end-->
              </div>
            </div>
          </div>
          <!--//主题=end//-->

          <!--//类型=start//-->
          <div class="main-mid percent-35">
            <div class="item-flex">
              <span class="box-left-arrow"></span>
              <span class="box-shadowbg"></span>
              <span class="box-right-arrow"></span>
              <div class="item-box height-website-level">
                <!--title=start-->
                <div class="common-title">
                  <h3>类型</h3>
                </div>
                <!--title=end-->

                <!--content=start-->
                <div class="box-content">
                  <!--统计图=start-->
                  <div class="chart-item">
                    <!-- 饼图 -->
                    <pie-chart :kind="1" :source="source2" />
                  </div>
                  <!--统计图=end-->
                </div>
                <!--content=end-->
              </div>
            </div>
          </div>
          <!--//类型=end//-->

          <!--//消息数量=start//-->
          <div class="main-right percent-35">
            <div class="item-flex">
              <span class="box-left-arrow"></span>
              <span class="box-shadowbg"></span>
              <span class="box-right-arrow"></span>
              <div class="item-box height-website-level">
                <!--title=start-->
                <div class="common-title">
                  <h3>消息数量</h3>
                </div>
                <!--title=end-->

                <!--content=start-->
                <div class="box-content">
                  <!--统计图=start-->
                  <div class="chart-item">
                    <!-- 柱状图 -->
                    <bar-chart :kind="5" :source="source3" />
                  </div>
                  <!--统计图=end-->
                </div>
                <!--content=end-->
              </div>
            </div>
          </div>
          <!--//消息数量=end//-->
        </div>

        <div class="width clearOver">
          <!--//所跨地域=start//-->
          <div class="main-left percent-30">
            <div class="item-flex">
              <span class="box-left-arrow"></span>
              <span class="box-shadowbg"></span>
              <span class="box-right-arrow"></span>
              <div class="item-box height-website-warn">
                <!--title=start-->
                <div class="common-title">
                  <h3>所跨地域</h3>
                </div>
                <!--title=end-->

                <!--content=start-->
                <div class="box-content">
                  <!--球形旋转=start-->
                  <div class="circle-rotate-item">
                    <!-- 球形旋转效果 -->
                    <word-globe :list="list" />
                  </div>
                  <!--球形旋转=end-->
                </div>
                <!--content=end-->
              </div>
            </div>
          </div>
          <!--//所跨地域=end//-->

          <!--//可疑事件预警=start//-->
          <div class="main-right percent-70">
            <div class="item-flex">
              <span class="box-left-arrow"></span>
              <span class="box-shadowbg"></span>
              <span class="box-right-arrow"></span>
              <div class="item-box height-website-warn">
                <!--title=start-->
                <div class="common-title">
                  <h3>可疑事件预警</h3>
                </div>
                <!--title=end-->

                <!--content=start-->
                <div class="box-content">
                  <!--table-->
                  <div class="website-table-content">
                    <table width="100%" border="0" cellpadding="0" cellspacing="0">
                      <tbody>
                        <tr>
                          <th width="8%" height="32">序号</th>
                          <th width="20%">用户</th>
                          <th width="72%">疑似信息</th>
                        </tr>
                        <tr>
                          <td width="8%">01</td>
                          <td width="20%">高德置地</td>
                          <td width="72%">张三丰于9月20日参与犯罪嫌疑罪被捕参与犯罪嫌疑罪被捕参与犯罪嫌疑罪被捕参与。</td>
                        </tr>
                        <tr>
                          <td width="8%">02</td>
                          <td width="20%">高德置地</td>
                          <td width="72%">张三丰于9月20日参与犯罪嫌疑罪被捕参与犯罪嫌疑罪被捕参与犯罪嫌疑罪被捕参与。</td>
                        </tr>
                        <tr>
                          <td width="8%">03</td>
                          <td width="20%">高德置地</td>
                          <td width="72%">张三丰于9月20日参与犯罪嫌疑罪被捕参与犯罪嫌疑罪被捕参与犯罪嫌疑罪被捕参与。</td>
                        </tr>
                        <tr>
                          <td width="8%">04</td>
                          <td width="20%">高德置地</td>
                          <td width="72%">张三丰于9月20日参与犯罪嫌疑罪被捕参与犯罪嫌疑罪被捕参与犯罪嫌疑罪被捕参与。</td>
                        </tr>
                        <tr>
                          <td width="8%">05</td>
                          <td width="20%">高德置地</td>
                          <td width="72%">张三丰于9月20日参与犯罪嫌疑罪被捕参与犯罪嫌疑罪被捕参与犯罪嫌疑罪被捕参与。</td>
                        </tr>
                        <tr>
                          <td width="8%">06</td>
                          <td width="20%">高德置地</td>
                          <td width="72%">张三丰于9月20日参与犯罪嫌疑罪被捕参与犯罪嫌疑罪被捕参与犯罪嫌疑罪被捕参与。</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--table=end-->
                </div>
                <!--content=end-->
              </div>
            </div>
          </div>
          <!--//可疑事件预警=end//-->
        </div>

        <!--//用户列表=start//-->
        <div class="width">
          <div class="item-flex">
            <span class="box-left-arrow"></span>
            <span class="box-shadowbg"></span>
            <span class="box-right-arrow"></span>
            <span class="footer-shadow"></span>
            <div class="item-box height-website-user">
              <!--title=start-->
              <div class="common-title tt-inline">
                <h3>用户列表</h3>
                <div class="fright website-user-select">
                  <select class="select-common width150 fleft">
                    <option>按照活跃度</option>
                  </select>

                  <select class="select-common width200 fleft">
                    <option>按照注册时间排序</option>
                  </select>
                </div>
              </div>
              <!--title=end-->

              <!--content=start-->
              <div class="box-content">
                <!--内容滚动=start-->
                <div class="website-scroll-container">
                  <!--scroll=start-->
                  <div class="website-scroll-list user">
                    <a href="javascript:;" class="left-scroll-arrow">&lt;</a>
                    <div class="website-userlist-box">
                      <ul class="website-user-item clearfix">
                        <li class="show-current">
                          <div class="website-user-sp">
                            <span class="w-u-photo">
                              <img :src="require('../assets/images/default-photo.jpg')" />
                            </span>
                            <div class="w-u-namedata">
                              <p class="white">昵称：匿名用户xx</p>
                              <p>国籍：中国</p>
                            </div>
                          </div>

                          <div class="website-user-cont">
                            <p class="origin-text">来源：暗网中文论坛、@相关群组。</p>
                            <p
                              class="w-u-info-text"
                            >简介：祖籍浙江省嵊州市谷来镇， 阿里巴巴集团主要创始人阿里巴巴集团主要创始人阿里巴巴集团主要创始人，生命科学突破奖基金事。</p>

                            <div class="website-user-funicons">
                              <a href="javascript:;">
                                <i class="w-u-icon follow-icon"></i>追踪
                              </a>
                              <a href="javascript:;">
                                <i class="w-u-icon focus-icon"></i>关注
                              </a>
                              <!--<a href="javascript:;" class="current"><i class="w-u-icon follow-icon"></i>取消追踪</a>
                              <a href="javascript:;" class="current"><i class="w-u-icon focus-icon"></i>取消关注</a>-->
                            </div>
                          </div>

                          <!--数据汇总=start-->
                          <div class="website-user-totaldata">
                            <div class="tataldata-inline">
                              <span class="w-u-icon posting-icon" title="发贴量"></span>
                              <p>1200</p>
                            </div>

                            <div class="tataldata-inline">
                              <span class="w-u-icon friend-icon" title="好友数量"></span>
                              <p>45200</p>
                            </div>

                            <div class="tataldata-inline">
                              <span class="w-u-icon join-icon" title="参与的群组/网站数量"></span>
                              <p>1200</p>
                            </div>
                          </div>
                          <!--数据汇总=end-->

                          <!--//////用户信息弹窗pop=start//////-->
                          <div class="group-pop-box website-user-pop" style="display: none;">
                            <span class="group-pop-arrow bottom"></span>
                            <span class="group-pop-ltarrow"></span>
                            <span class="group-pop-rbarrow"></span>
                            <div class="group-pop-content">
                              <div class="website-user-information">
                                <p class="w-u-tt">好友</p>
                                <!--好友列表=start-->
                                <div class="website-user-friendbox clearfix">
                                  <!--1-->
                                  <div class="website-user-friend">
                                    <a href="javascript:;">
                                      <img :src="require('../assets/images/pic2.jpg')" />
                                      <!--好友hover信息=start-->
                                      <div class="user-friend-box">
                                        <p>昵称：xxxxxxxxxx</p>
                                        <p>来源：暗网中文论坛、@香港群组暗网中文论坛暗网中文论坛暗网中文论坛</p>
                                        <p>标签：政治、安全、黑灰产</p>
                                      </div>
                                      <!--好友hover信息=end-->
                                    </a>
                                  </div>

                                  <!--1-->
                                  <div class="website-user-friend">
                                    <a href="javascript:;">
                                      <img :src="require('../assets/images/pic2.jpg')" />
                                      <!--好友hover信息=start-->
                                      <div class="user-friend-box">
                                        <p>昵称：xxxxxxxxxx</p>
                                        <p>来源：暗网中文论坛、@香港群组暗网中文论坛暗网中文论坛暗网中文论坛</p>
                                        <p>标签：政治、安全、黑灰产</p>
                                      </div>
                                      <!--好友hover信息=end-->
                                    </a>
                                  </div>

                                  <!--1-->
                                  <div class="website-user-friend">
                                    <a href="javascript:;">
                                      <img :src="require('../assets/images/pic2.jpg')" />
                                      <!--好友hover信息=start-->
                                      <div class="user-friend-box">
                                        <p>昵称：xxxxxxxxxx</p>
                                        <p>来源：暗网中文论坛、@香港群组暗网中文论坛暗网中文论坛暗网中文论坛</p>
                                        <p>标签：政治、安全、黑灰产</p>
                                      </div>
                                      <!--好友hover信息=end-->
                                    </a>
                                  </div>

                                  <!--1-->
                                  <div class="website-user-friend">
                                    <a href="javascript:;">
                                      <img :src="require('../assets/images/pic2.jpg')" />
                                      <!--好友hover信息=start-->
                                      <div class="user-friend-box">
                                        <p>昵称：xxxxxxxxxx</p>
                                        <p>来源：暗网中文论坛、@香港群组暗网中文论坛暗网中文论坛暗网中文论坛</p>
                                        <p>标签：政治、安全、黑灰产</p>
                                      </div>
                                      <!--好友hover信息=end-->
                                    </a>
                                  </div>

                                  <!--1-->
                                  <div class="website-user-friend">
                                    <a href="javascript:;">
                                      <img :src="require('../assets/images/pic2.jpg')" />
                                      <!--好友hover信息=start-->
                                      <div class="user-friend-box">
                                        <p>昵称：xxxxxxxxxx</p>
                                        <p>来源：暗网中文论坛、@香港群组暗网中文论坛暗网中文论坛暗网中文论坛</p>
                                        <p>标签：政治、安全、黑灰产</p>
                                      </div>
                                      <!--好友hover信息=end-->
                                    </a>
                                  </div>
                                </div>
                                <!--好友列表=end-->

                                <!--聊天记录=start-->
                                <div class="user-chat-record">
                                  <div class="chat-record-box">
                                    <!--1=start-->
                                    <div class="chat-record-list">
                                      <span class="blue-radius-circle"></span>
                                      <div class="record-list">
                                        <p class="record-date">2017-05-10 12:00:20</p>
                                        <div class="record-text">
                                          <p>@suphier&nbsp;你也在Gopher Day？</p>
                                        </div>
                                      </div>
                                    </div>
                                    <!--1=end-->

                                    <!--1=start-->
                                    <div class="chat-record-list">
                                      <span class="blue-radius-circle"></span>
                                      <div class="record-list">
                                        <p class="record-date">2017-05-10 12:00:20</p>
                                        <div class="record-text">
                                          <p>看到讲师Ian受伤拿着片,你也在现场吗？</p>
                                        </div>
                                      </div>
                                    </div>
                                    <!--1=end-->

                                    <!--1=start-->
                                    <div class="chat-record-list">
                                      <span class="blue-radius-circle"></span>
                                      <div class="record-list">
                                        <p class="record-date">2017-05-10 12:00:20</p>
                                        <div class="record-text">
                                          <p>@suphier&nbsp;你也在Gopher Day？</p>
                                        </div>
                                      </div>
                                    </div>
                                    <!--1=end-->

                                    <!--1=start-->
                                    <div class="chat-record-list">
                                      <span class="blue-radius-circle"></span>
                                      <div class="record-list">
                                        <p class="record-date">2017-05-10 12:00:20</p>
                                        <div class="record-text">
                                          <p>看到讲师Ian受伤拿着Q涉的名,你也在现场吗？</p>
                                        </div>
                                      </div>
                                    </div>
                                    <!--1=end-->

                                    <!--1=start-->
                                    <div class="chat-record-list">
                                      <span class="blue-radius-circle"></span>
                                      <div class="record-list">
                                        <p class="record-date">2017-05-10 12:00:20</p>
                                        <div class="record-text">
                                          <p>@suphier&nbsp;你也在Gopher Day？</p>
                                        </div>
                                      </div>
                                    </div>
                                    <!--1=end-->

                                    <!--1=start-->
                                    <div class="chat-record-list">
                                      <span class="blue-radius-circle"></span>
                                      <div class="record-list">
                                        <p class="record-date">2017-05-10 12:00:20</p>
                                        <div class="record-text">
                                          <p>看到讲师Ian受伤拿着Q涉的名片,片,你也在现场吗？</p>
                                        </div>
                                      </div>
                                    </div>
                                    <!--1=end-->
                                  </div>
                                </div>
                                <!--聊天记录=end-->
                              </div>
                            </div>
                          </div>
                          <!--//////用户信息弹窗pop=end//////-->
                        </li>

                        <li>
                          <div class="website-user-sp">
                            <span class="w-u-photo">
                              <img :src="require('../assets/images/default-photo.jpg')" />
                            </span>
                            <div class="w-u-namedata">
                              <p class="white">昵称：匿名用户xx</p>
                              <p>国籍：中国</p>
                            </div>
                          </div>

                          <div class="website-user-cont">
                            <p class="origin-text">来源：暗网中文论坛、@相关群组。</p>
                            <p
                              class="w-u-info-text"
                            >简介：祖籍浙江省嵊州市谷来镇， 阿里巴巴集团主要创始人阿里巴巴集团主要创始人阿里巴巴集团主要创始人，生命科学突破奖基金事。</p>

                            <div class="website-user-funicons">
                              <a href="javascript:;">
                                <i class="w-u-icon follow-icon"></i>追踪
                              </a>
                              <a href="javascript:;" class="current">
                                <i class="w-u-icon focus-icon"></i>取消关注
                              </a>
                            </div>
                          </div>

                          <!--数据汇总=start-->
                          <div class="website-user-totaldata">
                            <div class="tataldata-inline">
                              <span class="w-u-icon posting-icon" title="发贴量"></span>
                              <p>1200</p>
                            </div>

                            <div class="tataldata-inline">
                              <span class="w-u-icon friend-icon" title="好友数量"></span>
                              <p>45200</p>
                            </div>

                            <div class="tataldata-inline">
                              <span class="w-u-icon join-icon" title="参与的群组/网站数量"></span>
                              <p>1200</p>
                            </div>
                          </div>
                          <!--数据汇总=end-->
                        </li>
                        <li>
                          <div class="website-user-sp">
                            <span class="w-u-photo">
                              <img :src="require('../assets/images/default-photo.jpg')" />
                            </span>
                            <div class="w-u-namedata">
                              <p class="white">昵称：匿名用户xx</p>
                              <p>国籍：中国</p>
                            </div>
                          </div>

                          <div class="website-user-cont">
                            <p class="origin-text">来源：暗网中文论坛、@相关群组。</p>
                            <p
                              class="w-u-info-text"
                            >简介：祖籍浙江省嵊州市谷来镇， 阿里巴巴集团主要创始人阿里巴巴集团主要创始人阿里巴巴集团主要创始人，生命科学突破奖基金事。</p>

                            <div class="website-user-funicons">
                              <a href="javascript:;">
                                <i class="w-u-icon follow-icon"></i>追踪
                              </a>
                              <a href="javascript:;">
                                <i class="w-u-icon focus-icon"></i>关注
                              </a>
                              <!--<a href="javascript:;" class="current"><i class="w-u-icon follow-icon"></i>取消追踪</a>
                              <a href="javascript:;" class="current"><i class="w-u-icon focus-icon"></i>取消关注</a>-->
                            </div>
                          </div>

                          <!--数据汇总=start-->
                          <div class="website-user-totaldata">
                            <div class="tataldata-inline">
                              <span class="w-u-icon posting-icon" title="发贴量"></span>
                              <p>1200</p>
                            </div>

                            <div class="tataldata-inline">
                              <span class="w-u-icon friend-icon" title="好友数量"></span>
                              <p>45200</p>
                            </div>

                            <div class="tataldata-inline">
                              <span class="w-u-icon join-icon" title="参与的群组/网站数量"></span>
                              <p>1200</p>
                            </div>
                          </div>
                          <!--数据汇总=end-->
                        </li>

                        <li>
                          <div class="website-user-sp">
                            <span class="w-u-photo">
                              <img :src="require('../assets/images/default-photo.jpg')" />
                            </span>
                            <div class="w-u-namedata">
                              <p class="white">昵称：匿名用户xx</p>
                              <p>国籍：中国</p>
                            </div>
                          </div>

                          <div class="website-user-cont">
                            <p class="origin-text">来源：暗网中文论坛暗网中文论坛暗网中文论坛暗网中文论坛、@相关群组。</p>
                            <p
                              class="w-u-info-text"
                            >简介：祖籍浙江省嵊州市祖籍浙江省嵊州市谷来镇祖籍浙江省嵊州市谷来镇祖籍浙江省嵊州市谷来镇祖籍浙江省嵊州市谷来镇谷来镇， 阿里巴巴集团主要创始人阿里巴巴集团主要创始人阿里巴巴集团主要创始人，生命科学突破奖基金事。</p>

                            <div class="website-user-funicons">
                              <a href="javascript:;">
                                <i class="w-u-icon follow-icon"></i>追踪
                              </a>
                              <a href="javascript:;">
                                <i class="w-u-icon focus-icon"></i>关注
                              </a>
                              <!--<a href="javascript:;" class="current"><i class="w-u-icon follow-icon"></i>取消追踪</a>
                              <a href="javascript:;" class="current"><i class="w-u-icon focus-icon"></i>取消关注</a>-->
                            </div>
                          </div>

                          <!--数据汇总=start-->
                          <div class="website-user-totaldata">
                            <div class="tataldata-inline">
                              <span class="w-u-icon posting-icon" title="发贴量"></span>
                              <p>1200</p>
                            </div>

                            <div class="tataldata-inline">
                              <span class="w-u-icon friend-icon" title="好友数量"></span>
                              <p>45200</p>
                            </div>

                            <div class="tataldata-inline">
                              <span class="w-u-icon join-icon" title="参与的群组/网站数量"></span>
                              <p>1200</p>
                            </div>
                          </div>
                          <!--数据汇总=end-->
                        </li>
                      </ul>
                    </div>
                    <a href="javascript:;" class="right-scroll-arrow">></a>
                  </div>
                  <!--scroll=end-->
                </div>
                <!--内容滚动=end-->
              </div>
              <!--content=end-->
            </div>
          </div>
        </div>
        <!--//用户列表=end//-->
      </div>
      <!--//RIGHT=end//-->
    </div>
  </div>
</template>

<script>
import pageHeader from '@/components/common/pageHeader.vue'
import breadcrumb from '@/components/common/breadcrumb.vue'
import barChart from '@/components/common/barChart.vue'
import pieChart from '@/components/common/pieChart.vue'
import wordGlobe from '@/components/common/wordGlobe.vue'

export default {
  name: 'websitePage',
  components: {
    pageHeader,
    breadcrumb,
    barChart,
    pieChart,
    wordGlobe
  },
  data () {
    return {
      navList: [
        { label: '情报检索', pathName: 'search' }
      ],
      source1: [],
      source2: [],
      source3: [],
      list: []
    }
  },
  methods: {
    mock () {
      setTimeout(() => {
        this.source1 = [
          ['product', ''],
          ['香港', 10],
          ['黑灰产', 20],
          ['泄露库', 30],
          ['数字货币', 20],
          ['台湾', 10]
        ]
        this.source2 = [
          ['product', '数量'],
          ['文本', 30],
          ['音视频', 30],
          ['图片', 30]
        ]
        this.source3 = [
          ['product', ''],
          ['12/09', 21],
          ['14/09', 8],
          ['17/09', 16],
          ['19/09', 23],
          ['21/09', 19],
          ['24/09', 14],
          ['30/09', 3]
        ]
        this.list = [
          { name: '支那', value: 1462 },
          { name: '共匪', value: 930 },
          { name: '数据', value: 556 },
          { name: '美国', value: 324 },
          { name: '支付', value: 310 },
          { name: '提供', value: 309 },
          { name: 'tg', value: 307 },
          { name: '聯合國', value: 305 },
          { name: '飞机', value: 298 },
          { name: '支那人', value: 295 },
          { name: '精准', value: 283 },
          { name: '香港', value: 248 },
          { name: '出售', value: 242 },
          { name: '手机', value: 238 },
          { name: '实力', value: 233 },
          { name: 'joinchat', value: 231 },
          { name: 'qp', value: 229 },
          { name: '合作', value: 221 },
          { name: '诚信', value: 219 },
          { name: '引流', value: 202 },
          { name: '微信', value: 198 },
          { name: 'bc', value: 198 },
          { name: 'cp', value: 196 },
          { name: '资源', value: 195 },
          { name: 'odam', value: 193 },
          { name: '没有', value: 187 },
          { name: '限制', value: 186 },
          { name: '渗透', value: 185 },
          { name: '六合', value: 182 },
          { name: '联系', value: 175 },
          { name: '技术', value: 173 },
          { name: '彩票', value: 167 },
          { name: '劫持', value: 162 },
          { name: '企业', value: 160 },
          { name: '需要', value: 160 },
          { name: '棋牌', value: 159 },
          { name: '要求', value: 159 },
          { name: '老板', value: 157 },
          { name: 'fs', value: 157 },
          { name: 'app', value: 154 },
          { name: '扫码', value: 152 },
          { name: '卡发', value: 151 },
          { name: '中国', value: 151 },
          { name: '视频', value: 151 },
          { name: '短信', value: 149 },
          { name: '渠道', value: 145 },
          { name: 'berama', value: 145 },
          { name: '支持', value: 145 },
          { name: '计划生育', value: 144 },
          { name: 'qq', value: 142 }
        ]
      }, 1000)
    }
  },
  mounted () {
    this.mock()
    if (this.$route.query.type) {
      const type = this.$route.query.type
      switch (type) {
        case 'event':
          this.navList.push({ label: '事件', pathName: type })
          this.navList.push({ label: '网站主页', pathName: 'websitePage' })
          break
        case 'people':
          this.navList.push({ label: '人物', pathName: type })
          this.navList.push({ label: '网站主页', pathName: 'websitePage' })
          break
        case 'group':
          this.navList.push({ label: '群组', pathName: type })
          this.navList.push({ label: '网站主页', pathName: 'websitePage' })
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-item,
.circle-rotate-item {
  width: 100%;
  height: 200px;
}
</style>
