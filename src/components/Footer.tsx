import { profile } from "@/data/portfolio";

const Footer = () => (
  <footer className="relative border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
      </p>
      <p className="font-mono text-xs text-accent/70">// stay curious, stay secure</p>
    </div>
  </footer>
);

export default Footer;
