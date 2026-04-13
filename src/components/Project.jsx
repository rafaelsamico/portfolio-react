import styles from './Project.module.css'

function Project({ project }) {
  return (
    <div className={styles.card}>
      <p className={styles.discipline}>{project.discipline}</p>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.text}>{project.description}</p>
      <p className={styles.text}>{project.objective}</p>
      <p className={styles.text}>{project.learnings}</p>

      <div className={styles.stack}>
        {project.stack.map(tech => (
          <span key={tech} className={styles.tech}>{tech}</span>
        ))}
      </div>

      <div className={styles.links}>
        <a href={project.repoUrl} className={styles.link}>Repositório</a>
        <a href={project.protoUrl} className={styles.link}>Protótipo</a>
      </div>
    </div>
  )
}

export default Project