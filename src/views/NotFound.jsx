import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <section className="pt-40 pb-20">
      <SEO noindex />
      <h1 className="text-4xl sm:text-6xl font-medium tracking-tight mb-8">Page not found</h1>
      <p className="text-neutral-400 mb-8">The page you’re looking for isn’t here.</p>
      <Link to="/" className="text-[#c9a96e] underline">Return to AVLANCE</Link>
    </section>
  );
}
