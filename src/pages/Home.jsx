import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <p className={styles.label}>Início</p>
      <h1 className={styles.name}>SAMICO, Rafael</h1>
      <p className={styles.bio}>
        Hello, World! Meu nome é Rafael (vulgo Sami). Sou estudante de Sistemas de Informação no CIn-UFPE. Trabalho como bolsista na Coordenação de Extensão e Cultura, e como designer de UX/UI no V-Lab. Sou apaixonado por UI, deslumbrado por IA, e entusiasta de Design Systems. Estou estudando para ser um design engineer.
      </p>
      <p className={styles.bio}>
        Este portfólio faz parte de uma atividade prática de React para a disciplina CIN0136- Desenvolvimento de Software.
      </p>

      <hr className={styles.divider} />

      <section className={styles.section}>
        <p className={styles.label}>Interesses</p>
        <p className={styles.text}>
          UX, UI, Produto, Design Systems
        </p>
      </section>

      <section className={styles.section}>
        <p className={styles.label}>Contato</p>
        <div className={styles.contacts}>
          <span className={styles.chip}>rsd2@cin.ufpe.br</span>
          <span className={styles.chip}>github.com/rafaelsamico</span>
          <span className={styles.chip}>linkedin.com/in/rafael-samico</span>
        </div>
      </section>
    </div>
  )
}