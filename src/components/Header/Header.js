import React from 'react';
import clsx from 'clsx';
import { Rss } from 'react-feather';

import Logo from '@/components/Logo';
import VisuallyHidden from '@/components/VisuallyHidden';
import DarkLightToggle from '@/components/DarkLightToggle';

import styles from './Header.module.css';

function Header({ theme, className, ...delegated }) {
  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <Logo />

      <div className={styles.actions}>
        {/*
          Turn the <button> into an <a>, so we can link
          to the new `/rss.xml` route.
        */}
        <a href="/rss.xml" className={styles.action}>
          <Rss
            size="1.5rem"
            style={{
              // Optical alignment
              transform: 'translate(2px, -2px)',
            }}
          />
          <VisuallyHidden>View RSS feed</VisuallyHidden>
        </a>
        <DarkLightToggle className={styles.action} initialTheme={theme} />
      </div>
    </header>
  );
}

export default Header;
