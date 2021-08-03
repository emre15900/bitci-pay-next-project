import cn from "classnames";
import Link from "next/link";
import styles from "./footer.module.scss";
import Image from "next/image";

function Header() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={cn("container")}>
          <div className={cn("row", styles.footerTop)}>
            <div className={cn("col-12 col-xl-4")}>
              <Link href="/">
                <a>
                  <Image
                    src="/image/bitci-logo.svg"
                    width="135px"
                    height="36px"
                    alt="Picture of the author"
                  />
                </a>
              </Link>
              <p className={styles.info}>Bitci Teknoloji A.Ş.</p>
              <address>
                Ortakent Yahşi Mah. Hortma Cad. <br></br>
                No: 9 48400 Bodrum / Muğla
              </address>
            </div>

            <div className={cn("col-12 col-xl-8 d-none d-xl-block")}>
              <div className={cn("row")}>
                <div className={cn("col-6 col-xl-3")}>
                  <div className={styles.navT}>Hakkımızda</div>
                  <ul className={cn("flex-column", styles.nav)}>
                    <li className={styles.navItem}>
                      <Link href="https://www.bitci.com/hakkimizda">
                        <a className={styles.navLink}>Hakkımızda</a>
                      </Link>
                    </li>
                    <li className={styles.navItem}>
                      <Link href="https://www.bitci.com/akademi/kategori/basinda-biz/">
                        <a className={styles.navLink}>Basında Biz</a>
                      </Link>
                    </li>
                    <li className={styles.navItem}>
                      <Link href="https://www.bitci.com/akademi/kategori/basinda-biz/">
                        <a className={styles.navLink}>Akademi</a>
                      </Link>
                    </li>
                    <li className={styles.navItem}>
                      <Link href="https://www.bitci.com/akademi/kategori/basinda-biz/">
                        <a className={styles.navLink}>Kariyer</a>
                      </Link>
                    </li>
                    <li className={styles.navItem}>
                      <Link href="https://www.bitci.com/akademi/kategori/basinda-biz/">
                        <a className={styles.navLink}>İletişim</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-xl-3">
                  <div className={styles.navT}>Destek</div>
                  <ul className={cn("flex-column", styles.nav)}>
                    <li className={styles.navItem}>
                      <Link href="https://www.bitci.com/hakkimizda">
                        <a className={styles.navLink}>Hakkımızda</a>
                      </Link>
                    </li>
                    <li className={styles.navItem}>
                      <Link href="https://www.bitci.com/akademi/kategori/basinda-biz/">
                        <a className={styles.navLink}>Basında Biz</a>
                      </Link>
                    </li>
                    <li className={styles.navItem}>
                      <Link href="https://www.bitci.com/akademi/kategori/basinda-biz/">
                        <a className={styles.navLink}>Akademi</a>
                      </Link>
                    </li>
                    <li className={styles.navItem}>
                      <Link href="https://www.bitci.com/akademi/kategori/basinda-biz/">
                        <a className={styles.navLink}>Kariyer</a>
                      </Link>
                    </li>
                    <li className={styles.navItem}>
                      <Link href="https://www.bitci.com/akademi/kategori/basinda-biz/">
                        <a className={styles.navLink}>İletişim</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-xl-3">
                  <div className={styles.navT}>Nedir?</div>
                  <ul className={cn("flex-column", styles.nav)}>
                    <li className={styles.navItem}>
                      <Link href="https://www.bitci.com/hakkimizda">
                        <a className={styles.navLink}>Hakkımızda</a>
                      </Link>
                    </li>
                    <li className={styles.navItem}>
                      <Link href="https://www.bitci.com/akademi/kategori/basinda-biz/">
                        <a className={styles.navLink}>Basında Biz</a>
                      </Link>
                    </li>
                    <li className={styles.navItem}>
                      <Link href="https://www.bitci.com/akademi/kategori/basinda-biz/">
                        <a className={styles.navLink}>Akademi</a>
                      </Link>
                    </li>
                    <li className={styles.navItem}>
                      <Link href="https://www.bitci.com/akademi/kategori/basinda-biz/">
                        <a className={styles.navLink}>Kariyer</a>
                      </Link>
                    </li>
                    <li className={styles.navItem}>
                      <Link href="https://www.bitci.com/akademi/kategori/basinda-biz/">
                        <a className={styles.navLink}>İletişim</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-xl-3">
                  <div className={styles.navT}>Satın Al</div>
                  <ul className={cn("flex-column", styles.nav)}>
                    <li className={styles.navItem}>
                      <Link href="https://www.bitci.com/hakkimizda">
                        <a className={styles.navLink}>Hakkımızda</a>
                      </Link>
                    </li>
                    <li className={styles.navItem}>
                      <Link href="https://www.bitci.com/akademi/kategori/basinda-biz/">
                        <a className={styles.navLink}>Basında Biz</a>
                      </Link>
                    </li>
                    <li className={styles.navItem}>
                      <Link href="https://www.bitci.com/akademi/kategori/basinda-biz/">
                        <a className={styles.navLink}>Akademi</a>
                      </Link>
                    </li>
                    <li className={styles.navItem}>
                      <Link href="https://www.bitci.com/akademi/kategori/basinda-biz/">
                        <a className={styles.navLink}>Kariyer</a>
                      </Link>
                    </li>
                    <li className={styles.navItem}>
                      <Link href="https://www.bitci.com/akademi/kategori/basinda-biz/">
                        <a className={styles.navLink}>İletişim</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Header;
