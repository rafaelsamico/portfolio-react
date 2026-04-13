import projects from '../data/projects.js'
import Project from '../components/Project.jsx'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Portfólio</h1>
      <div className={styles.grid}>
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio