import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppProvider } from './AppContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Blog from './pages/Blog'
import Article from './pages/Article'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return <AppProvider>
   <BrowserRouter basename="/mohammed-portfolio-react">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
}
