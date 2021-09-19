import './mobile-nav-modal';
import logo from "../../assets/icons/logo.svg";
import close from "../../assets/icons/icon-close.svg";

const MobileNavModal = () => {
  return (
    <>
      <div class="mobile-nav-page">
        <div class="mobile-page-header">
          <img
            src={logo}
            alt="logo"
            class="mobile-nav-logo"
          />
          <img
            src={close}
            alt="mobile icon close"
            class="mobile-close"
          />
        </div>

        <nav class="mobile-nav" aria-label="mobile navigation">
          <ul class="mobile-nav-list">
            <li>
              <a href="/" class="mobile-nav-links" data-link>
                home
              </a>
            </li>
            <li>
              <a href="/about" class="mobile-nav-links" data-link>
                about us
              </a>
            </li>
            <li>
              <a href="/plan" class="mobile-nav-links" data-link>
                create a plan
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileNavModal;
