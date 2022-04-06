<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type="" effect="light" expand>
      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <a
            href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
          >
            <img src="img/brand/blue.png" />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        
          <a
            slot="title"
            href="#"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="ni ni-ui-04 d-lg-none"></i>
            <span class="nav-link-inner--text">Home</span>
          </a>
        
        <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
          <a
            slot="title"
            href="#"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="ni ni-ui-04 d-lg-none"></i>
            <span class="nav-link-inner--text">Deliverables</span>
          </a>
          <div class="dropdown-menu-inner">
            <a
              href="https://docs.google.com/document/d/1R2Bl1R6-Nh5dfhHHXkyvXId9p1fIShRr/edit?rtpof=true"
              class="media d-flex align-items-center"
            >
              <div
                class="icon icon-shape bg-gradient-primary rounded-circle text-white"
              >
                <i class="ni ni-spaceship"></i>
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-primary mb-md-1">Vision Document</h6>
                
              </div>
            </a>
            <a
              href="https://docs.google.com/document/d/1xh6q_W2Fe-x2d58uOLlfkCds-A_05dHDabrogzqhCno/edit"
              class="media d-flex align-items-center"
            >
              <div
                class="icon icon-shape bg-gradient-primary rounded-circle text-white"
              >
                <i class="ni ni-spaceship"></i>
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-primary mb-md-1">Use cases</h6>
                
              </div>
            </a>
            <a
              href="https://docs.google.com/document/d/1NfRKxBu5m2AmMKwFA3DMCQMrpdus6qrFKYH5EJUZ_fQ/edit"
              class="media d-flex align-items-center"
            >
              <div
                class="icon icon-shape bg-gradient-primary rounded-circle text-white"
              >
                <i class="ni ni-spaceship"></i>
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-primary mb-md-1">Glossary</h6>
                
              </div>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1PF1q6c806YQrLOb-OxqVD6zeEEAxFwvY"
              class="media d-flex align-items-center"
            >
              <div
                class="icon icon-shape bg-gradient-warning rounded-circle text-white"
              >
                <i class="ni ni-spaceship"></i>
              </div>
              <div class="media-body ml-3">
                <h5 class="heading text-warning mb-md-1">SRS Poster</h5>
                
              </div>
            </a>
          </div>
        </base-dropdown>
        
          <a
            slot="title"
            href="https://docs.google.com/spreadsheets/d/1VPMA5P1BvUtkyHk_H1A5XJSryDdRjbpnFEyMLQIvUT8/edit#gid=0"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="ni ni-collection d-lg-none"></i>
            <span class="nav-link-inner--text">WAR</span>
          </a>
          
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
  },
};
</script>
<style></style>
