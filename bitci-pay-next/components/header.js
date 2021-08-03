import cn from "classnames";
import Link from "next/link";
import styles from "./header.module.scss";
import Image from "next/image";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={cn("container-fluid", styles.test)}>
          <div className={styles.row}>
            <div className={styles.navbar}>
              <div className={styles.leftHeader}>
                <div className={styles.logo}>
                  <Link href="#">
                    <Image
                      src="/image/bitci-logo.svg"
                      width="135px"
                      height="36px"
                      alt="Picture of the author"
                    />
                  </Link>
                </div>
                <ul className={styles.ul}>
                  <li className={styles.list}>
                    <Link href="#">
                      <a className={styles.navLink}>Borsa</a>
                    </Link>
                  </li>
                  <li className={styles.list}>
                    <Link href="#">
                      <a>Ürünler</a>
                    </Link>
                  </li>
                  <li className={styles.list}>
                    <Link href="#">
                      <a>Şirket</a>
                    </Link>
                  </li>
                  <li className={styles.list}>
                    <Link href="#">
                      <a>Destek</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.rightHeader}>
                <ul className={styles.ul}>
                  <li className={styles.list}>
                    <Link href="#">
                      <a>Giriş Yapın</a>
                    </Link>
                  </li>
                  <li className={styles.list}>
                    <Link href="#">
                      <a className={styles.account}> Hesap Oluşturun</a>
                    </Link>
                  </li>
                  <li className={styles.list}>
                    <Link href="#">
                      <a className={styles.language}>
                        <img src="images/tr.svg" alt="" />
                        TR
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.mobileMenu}>
              <div className={styles.hamburgerMenu}>
                <input
                  id="menuToggle"
                  className={styles.menuToggle}
                  type="checkbox"
                />
                <label className={styles.menuBtn} for="menuToggle">
                  <span className={styles.toggleSpan}></span>
                </label>

                <ul className={styles.menuBox}>
                  <li className={styles.logo}>
                    <Link href="#">
                      <Image
                        src="/image/bitci-logo.svg"
                        width="100px"
                        height="40px"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link href="#">Borsa</Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link href="#">Ürünler</Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link href="#">Şirket</Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link href="#">Destek</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
