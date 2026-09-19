"use client";

import { useState } from "react";
import { RENDEZ_VOUS_PAGE } from "@/lib/content/rendez-vous";
import { cn } from "@/lib/utils/cn";

// border-b-2 at rest (not border-b) so focus only ever changes color, never
// width — a visibly stronger focus state with zero layout shift.
const inputClass =
  "w-full border-0 border-b-2 border-line bg-transparent py-3.5 text-ink placeholder:text-gray/70 transition-colors duration-200 focus:border-ink focus:outline-none";
const labelClass = "font-mono text-xs uppercase tracking-[0.12em] text-gray";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  if (submitted) {
    return (
      <div className="border border-line px-8 py-12 text-center" role="status">
        <p className="text-2xl tracking-tight text-ink">
          {RENDEZ_VOUS_PAGE.writeInstead.confirmationTitle}
        </p>
        <p className="mt-3 text-sm text-gray">
          {RENDEZ_VOUS_PAGE.writeInstead.confirmationText}
        </p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-10"
      onSubmit={(e) => {
        e.preventDefault();
        // Intégration d'envoi d'email à raccorder (API RGPD, hébergée en UE)
        // conformément aux contraintes techniques du cahier des charges.
        setSubmitted(true);
      }}
    >
      {/* Honeypot anti-spam — laissé vide par les humains, sans reCAPTCHA Google */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="societe-site">Ne pas remplir</label>
        <input type="text" id="societe-site" name="societe-site" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-9 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="nom">
            Nom, prénom *
          </label>
          <input
            required
            id="nom"
            name="nom"
            type="text"
            placeholder="Ex. Jean Durand"
            className={inputClass}
            autoComplete="name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="fonction">
            Fonction
          </label>
          <input id="fonction" name="fonction" type="text" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="entreprise">
            Nom de l&rsquo;entreprise *
          </label>
          <input
            required
            id="entreprise"
            name="entreprise"
            type="text"
            placeholder="Ex. Entreprise Durand SARL"
            className={inputClass}
            autoComplete="organization"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="email">
            Email *
          </label>
          <input
            required
            id="email"
            name="email"
            type="email"
            placeholder="Ex. contact@votre-entreprise.fr"
            className={inputClass}
            autoComplete="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="telephone">
            Téléphone
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            placeholder="Ex. 06 12 34 56 78"
            className={inputClass}
            autoComplete="tel"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="objet">
            Objet de la demande *
          </label>
          <select required id="objet" name="objet" defaultValue="" className={cn(inputClass, "appearance-none")}>
            <option value="" disabled>
              Sélectionnez un objet
            </option>
            {RENDEZ_VOUS_PAGE.objectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="message">
          Message *
        </label>
        <textarea
          required
          id="message"
          name="message"
          rows={5}
          placeholder="Décrivez brièvement votre situation et ce que vous souhaitez déléguer."
          className={inputClass}
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-gray">
        <input
          required
          type="checkbox"
          name="consentement"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 border border-line accent-ink"
        />
        <span>
          J&rsquo;accepte que mes données soient utilisées pour être recontacté·e, conformément à la{" "}
          <a href="/confidentialite" className="underline underline-offset-4 hover:text-ink">
            politique de confidentialité
          </a>
          . *
        </span>
      </label>

      {/* Matches CtaButton's solid variant exactly (dotted frame, invert on
          hover, travelling arrow) — a native <button> since CtaButton itself
          renders a Link, which can't submit a form. */}
      <button
        type="submit"
        className="group relative inline-flex w-fit items-center gap-3 rounded-[var(--radius-tca)] border border-dotted border-ink bg-ink px-7 py-3.5 text-[0.9rem] font-semibold tracking-[0.01em] text-paper transition-[background-color,color,border-color] duration-[250ms] ease-out hover:bg-paper hover:text-ink active:scale-[0.98]"
      >
        <span>Envoyer ma demande</span>
        <span
          aria-hidden
          className="inline-block transition-transform duration-[250ms] ease-out group-hover:translate-x-1"
        >
          →
        </span>
      </button>
    </form>
  );
}
