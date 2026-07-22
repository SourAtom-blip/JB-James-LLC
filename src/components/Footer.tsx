export default function Footer() {
  return (
    <footer className="bg-base-deep border-t hairline py-12 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-display text-lg tracking-widest2 text-white">
            JB JAMES CONSTRUCTION, LLC
          </span>
          <span className="text-xs text-slate-light mt-1">
            &copy; {new Date().getFullYear()} JB James Construction, LLC. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-8 text-xs tracking-wide text-slate-light">
          <a href="#about" className="hover:text-gold transition-colors">About</a>
          <a href="#services" className="hover:text-gold transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-gold transition-colors">Portfolio</a>
          <a href="#careers" className="hover:text-gold transition-colors">Careers</a>
          <a href="tel:2257470877" className="hover:text-gold transition-colors">(225) 747-0877</a>
        </div>
      </div>
    </footer>
  );
}
