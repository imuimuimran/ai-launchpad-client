import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="font-bold">
            AI LaunchPad
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Build and launch AI-powered content faster.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">
            Platform
          </h4>

          <div className="mt-3 flex flex-col gap-2">
            <Link href="/explore">Explore</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/help">Help</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold">
            Resources
          </h4>

          <div className="mt-3 flex flex-col gap-2">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold">
            Social
          </h4>

          <div className="mt-3 flex flex-col gap-2">
            <Link href="/">GitHub</Link>
            <Link href="/">LinkedIn</Link>
            <Link href="/">X</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}