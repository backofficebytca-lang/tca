"use client";

import { useState } from "react";
import { RENDEZ_VOUS_PAGE } from "@/lib/content/rendez-vous";
import { buttonClasses } from "@/components/navigation/CtaButton";
import { cn } from "@/lib/utils/cn";

// A 1px transparent border at rest, so hover/focus only change colour and
// never shift the layout.
const inputClass =
  "t-body w-full rounded-xl border border-transparent bg-paper px-4 py-3.5 text-ink placeholder:text-gray/70 transition-colors duration-300 hover:border-line focus:border-ink focus:outline-none";
const labelClass = "t-small text-gray";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-xl bg-paper px-8 py-12 text-center" role="status">
        <p className="t-h3 text-ink">{RENDEZ_VOUS_PAGE.writeInstead.confirmationTitle}</p>
        <p className="t-small mt-3 text-gray">
          {RENDEZ_VOUS_PAGE.writeInstead.confirmationText}
        </p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-6"
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

      <div className="grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-2">
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

      <label className="t-small flex items-start gap-3 text-gray">
        <input
          required
          type="checkbox"
          name="consentement"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-ink"
        />
        <span>
          J&rsquo;accepte que mes données soient utilisées pour être recontacté·e, conformément à la{" "}
          <a href="/confidentialite" className="text-ink underline underline-offset-4">
            politique de confidentialité
          </a>
          . *
        </span>
      </label>

      {/* Same classes as CtaButton's solid variant — a native <button>, since
          CtaButton renders a Link, which can't submit a form. */}
      <button type="submit" className={buttonClasses("solid", "w-full sm:w-fit sm:!px-10 sm:!py-4")}>
        Envoyer ma demande
      </button>
    </form>
  );
}
