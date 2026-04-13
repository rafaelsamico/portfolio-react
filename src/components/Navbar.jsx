import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.brand}>Samico</span>
      <div className={styles.links}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Início
        </NavLink>
        <NavLink
          to="/sobre"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Sobre
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Portfólio
        </NavLink>
      </div>
    </nav>
  )
}