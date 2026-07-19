import { Link } from 'react-router-dom'
export default function NotFound() {
  return <section className="page-hero"><div className="container"><h1>404</h1><p>Page not found.</p><Link className="btn primary" to="/">Back Home</Link></div></section>
}
