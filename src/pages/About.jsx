import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.page}>
      <p className={styles.label}>Sobre</p>
      <h1 className={styles.title}>Um pouco mais sobre mim</h1>

      <section className={styles.section}>
        <h2 className={styles.heading}>Trajetória</h2>
        <p className={styles.text}>
          Ingressei no CIn em 2020, completando o 1º ano do curso. Então arrumei um emprego arretado (virei professor de programação!) e me afastei da faculdade. Mas em 2025 voltei para o CIn-UFPE, quando passei pelo CITi e em seguida fui para o V-Lab. No CITi fui Desygn System Lead do Projeto CITi UI (o design system do CITi), e no V-Lab sou designer de UX/UI no projeto Siscad, da CAPES.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Interesses</h2>
        <p className={styles.text}>
          UX, UI, Produto, Design Systems
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Habilidades</h2>
        <div className={styles.skills}>
          {['Figma', 'Python', 'HTML', 'CSS', 'JavaScript', 'React', 'Git', ].map(s => (
            <span key={s} className={styles.skill}>{s}</span>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Objetivos</h2>
        <p className={styles.text}>
          Quero me tornar design engineer. Ou seja: atuar na interface (risos) entre design de produto e desenvolvimento front-end. Pretendo me aprofundar cada vez mais no projeto e na implementação de interfaces de usuário, com foco em design systems. Minhas empresas dos sonhos são a Vercel (te amo, Shadcn 🖤) e a Anthropic (te amo, Claude 🧡).
        </p>
      </section>
    </div>
  )
}