import React from 'react';
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'
import variables from '../../../styles/variables.module.scss'

interface SignInButtonProps {
  text?: string
}

export function SignInButton({text = 'Gustavo Vieira'}: SignInButtonProps) {
  const isUserLoggedIn = true;
  const txtButton = !isUserLoggedIn ? 'Sign in with GitHub' : text

  return (
    <button
      type="button"
      className={`
          ${styles.signInButton} 
          ${isUserLoggedIn ? styles.isLogged : styles.notLogged}
        `}
    >
      <FaGithub />
      {txtButton}
      {isUserLoggedIn && <FiX className={styles.closeIcon} />}
    </button>
  );
}