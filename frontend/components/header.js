import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAccount, useConnect } from "wagmi";
import { Search } from "@web3uikit/icons";
import styles from "@/styles/Home.module.css";

import Logo from "../public/assets/blurLogo.png";

export default function Header() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (!isConnected) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isConnected]);

  const handleConnect = async (connector) => {
    try {
      await connect({ connector });
      // Dacă conectarea a fost cu succes, adresa va fi disponibilă în useAccount
      setIsLoggedIn(false); // Setează starea isLoggedIn la false pentru a ascunde butonul după conectare
    } catch (error) {
      console.error("Eroare la conectare:", error);
    }
  };

  return (
    <section className={styles.header}>
      <section className={styles.logo}>
        <Link href="/">
          <Image src={Logo} alt="Blur Logo" width="70" height="" />
        </Link>
      </section>
      <section className={styles.nav}>
        <section className={styles.nav_items}>
          <p>COLLECTIONS</p>
          <Link href="/portfolio" className={styles.link}>
            <p>PORTFOLIO</p>
          </Link>
          <p>AIRDROP</p>
        </section>
        <section className={styles.searchSection}>
          <section>
            <span>
              <Search fontSize="25px" />
            </span>
            <input
              placeholder="Search collections and wallets"
              disabled=""
              className={styles.inputField}
            />
          </section>
        </section>
        {isLoggedIn ? (
          <section>
            {connectors.map((connector) => (
              <button
                disabled={!connector.ready}
                key={connector.id}
                onClick={() => handleConnect(connector)}
                className={styles.connect_btn}
              >
                CONNECT WALLET
              </button>
            ))}
          </section>
        ) : (
          <section className={styles.loggedIn_section}>
            {address ? address.slice(0, 8) : ""}
          </section>
        )}
      </section>
    </section>
  );
}
