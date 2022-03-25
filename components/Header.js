import headerStyles from '../styles/Header.module.css'
export default function Header() {
    //conditional style 
    const x = 5
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>Web Dev</span> news
        </h1>
      <p className={headerStyles.description}>Keep up with the latest web dev news</p>
    </div>
  )
}
