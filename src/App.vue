<template>
  <div id="app">
    <div class="container-fluid">
      <!-- Menu -->
      <div class="d-none d-md-block menu">
        <div class="list-group cbp-l-filters-button js-filters-juicy-projects">
          <div data-filter="*" class="cbp-filter-item list-group-item logo">
            <!-- <img src="contents/images/logo.png" alt="img" /> -->
            <h3>RollerCoaster</h3>
          </div>
          <div id="menu-links">
            <a href="/#/" class="list-group-item hvr-underline-from-left text-uppercase">Pitches</a>
            <a href="/#/locations" class="list-group-item hvr-underline-from-left text-uppercase">Locations</a>
            <a href="/#/characters" class="list-group-item hvr-underline-from-left text-uppercase">Characters</a>
            <a href="/#/music" class="list-group-item hvr-underline-from-left text-uppercase">Music</a>
            <a href="/#/signup" class="list-group-item hvr-underline-from-left text-uppercase">Signup</a>
            <a href="/#/login" class="list-group-item hvr-underline-from-left text-uppercase">Login</a>
            <a href="/#/logout" class="list-group-item hvr-underline-from-left text-uppercase">Logout</a>
          </div>
          <!-- Contact -->
          <div class="list-group-item">
            <address>
              <strong>RollerCoaster, Inc.</strong><br />
              1234 Lorem Street, 100<br />
              Lorem Ipsum City, 10100<br />
              <abbr title="Phone">P:</abbr> (123) 456-7890 <br /><br />
              <!-- <a href="#map" data-toggle="modal"><i class="fa fa-map-o" aria-hidden="true"></i></a> -->
            </address>
            <address>
              <strong>Your Name</strong><br />
              <a href="mailto:#">your.name@email.com</a>
            </address>
          </div>
          <!-- /Contact -->
        </div>
      </div>
      <!-- /Menu -->
      <div class="main">
        <!-- Mobile Menu -->
        <div class="d-block d-md-none">
          <nav class="navbar navbar-light">
            <div class="container-fluid">
              <div id="BtnMobilMenu" class="text-center">
                <img
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false"
                  src="contents/images/logo.png"
                  alt="img2"
                />
                <button
                  type="button"
                  class="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false"
                  aria-controls="bs-example-navbar-collapse-1"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="navbar-nav js-filters-juicy-projects">
                  <li class="cbp-singlePage list-group-item text-center hvr-underline-from-center text-uppercase">
                    <a href="about-me.html" class="cbp-singlePage" data-cbp-singlePage="myCustomSinglePage1"
                      >About Me</a
                    >
                  </li>
                  <li class="cbp-singlePage list-group-item text-center hvr-underline-from-center text-uppercase">
                    <a href="typography.html" class="cbp-singlePage" data-cbp-singlePage="myCustomSinglePage2"
                      >Typography</a
                    >
                  </li>
                  <li
                    data-filter="*"
                    class="cbp-filter-item list-group-item text-center hvr-underline-from-center text-uppercase"
                  >
                    All Portfolio
                  </li>
                  <li
                    data-filter=".movie"
                    class="cbp-filter-item list-group-item text-center hvr-underline-from-center text-uppercase"
                  >
                    Movie
                  </li>
                  <li
                    data-filter=".identity"
                    class="cbp-filter-item list-group-item text-center hvr-underline-from-center text-uppercase"
                  >
                    Identity
                  </li>
                  <li
                    data-filter=".web-design"
                    class="cbp-filter-item list-group-item text-center hvr-underline-from-center text-uppercase"
                  >
                    Web Design
                  </li>
                  <li
                    data-filter=".graphic"
                    class="cbp-filter-item list-group-item text-center hvr-underline-from-center text-uppercase"
                  >
                    Graphic
                  </li>
                  <li
                    data-filter=".logos"
                    class="cbp-filter-item list-group-item text-center hvr-underline-from-center text-uppercase"
                  >
                    Logo
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <!-- /Mobile Menu -->

        <div class="portfolio-content"><router-view /></div>
      </div>
    </div>
    <!-- footer -->
    <!--
      <footer class="footer">
      <div class="container-fluid">
        <div class="row">
          <div class="d-none d-md-block col-md-5 col-lg-5">
            <small class="footer-small">2017 © &nbsp; Made with love by ThemeBang</small>
          </div>
          <div class="col-sm-12 col-md-7 col-lg-7">
            <!-- Address
    -->
    <!--
      <div class="d-block d-md-none text-center">
        <address>
          <strong>Company, Inc.</strong><br />
          1234 Lorem Street, 100<br />
          Lorem Ipsum City, 10100<br />
          <abbr title="Phone">P:</abbr> (123) 456-7890 <br /><br />
          <i aria-hidden="true" data-toggle="modal" data-target="#map" class="fa fa-map-o"></i>
        </address>
        <address>
          <strong>Your Name</strong><br />
          <a href="mailto:#">your.name@email.com</a>
        </address>
      </div>
      <!-- /Address
    -->
    <!-- Social Media -->
    <!--
      <ul class="social-icons">
        <li class="facebook"><a href="#" target="_blank">Facebook</a></li>
        <li class="twitter"><a href="#" target="_blank">Twitter</a></li>
        <li class="googleplus"><a href="#" target="_blank">Google +</a></li>
        <li class="youtube"><a href="#" target="_blank">YouTube</a></li>
        <li class="pinterest"><a href="#" target="_blank">Pinterest</a></li>
        <li class="vimeo"><a href="#" target="_blank">Vimeo</a></li>
        <li class="linkedin"><a href="#" target="_blank">LinkedIn</a></li>
        <li class="rss"><a href="#" target="_blank">RSS Feed</a></li>
      </ul>
      <div class="clearfix"></div>
      <!-- /Social Media
    -->
    <!--
      /div>
        </div>
      </div>
    -->
    <!-- /footer> -->
  </div>
</template>

<style></style>
