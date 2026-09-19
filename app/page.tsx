"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { registrations, type Registration } from "./registrations";

export default function Home() {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const [imagePosition, setImagePosition] = useState({ x: 50, y: 45 });
  const people = useMemo(() => {
    const term = query.trim().toLowerCase();
    return term ? registrations.filter((person) => Object.values(person).join(" ").toLowerCase().includes(term)) : registrations;
  }, [query]);

  async function copyDetails(person: Registration) {
    await navigator.clipboard.writeText(`${person.registration}\n${person.postcode}`);
    setCopied(person.id);
    window.setTimeout(() => setCopied(null), 1600);
  }

  function shiftArtwork(event: React.MouseEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    setImagePosition({
      x: 50 + ((event.clientX - bounds.left) / bounds.width - 0.5) * 2.4,
      y: 45 + ((event.clientY - bounds.top) / bounds.height - 0.5) * 2.4,
    });
  }

  return (
    <main>
      <header className="site-header">
        <a className="site-name" href="#top" aria-label="Glastonbury registrations">
          <Image src="/Glastonbury%20-%20Registration%20Lookup_files/glastonbury-banner-2027.png" alt="Glastonbury Festival" width={600} height={209} priority />
        </a>
        <span>2026</span>
      </header>

      <section className="stage" id="top" onMouseMove={shiftArtwork} onMouseLeave={() => setImagePosition({ x: 50, y: 45 })}>
        <Image className="stage-image" src="/pyramid-stage-art.gif" alt="The Pyramid Stage at Glastonbury Festival" fill priority unoptimized sizes="(max-width: 1100px) 100vw, 1100px" style={{ objectPosition: `${imagePosition.x}% ${imagePosition.y}%` }} />
        <div className="stage-caption"><span>Pyramid Stage</span><span>Worthy Farm</span></div>
      </section>

      <section className="registry" aria-labelledby="registry-title">
        <div className="registry-heading">
          <div>
            <h1 id="registry-title">Registrations</h1>
            <p>{registrations.length} people</p>
          </div>
          <label className="search"><span className="visually-hidden">Search registrations</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search" /></label>
        </div>

        <div className="table" role="table">
          <div className="table-labels" role="row"><span>NAME</span><span>REGISTRATION NUMBER</span><span>POSTCODE</span><span /></div>
          {people.map((person, index) => (
            <div className="person-row" role="row" key={person.id}>
              <strong><span className="row-index">{String(index + 1).padStart(2, "0")}</span>{person.name}</strong>
              <code data-label="Registration">{person.registration}</code>
              <span data-label="Postcode">{person.postcode}</span>
              <button onClick={() => copyDetails(person)}>{copied === person.id ? "Copied" : "Copy"}</button>
            </div>
          ))}
          {!people.length && <p className="empty">No registrations found.</p>}
        </div>
      </section>

      <footer>Shared with the crew</footer>
    </main>
  );
}
