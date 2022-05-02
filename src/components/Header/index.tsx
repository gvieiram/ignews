import React from 'react';
import Image from 'next/image'

import Logo from '../../../public/images/logo.svg'

import styles from './styles.module.scss'
import { SignInButton } from '../SignInButton';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={Logo} alt="ig.news" />
        <nav>
          <a href="#" className={styles.active}>Home</a>
          <a href="#">Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}