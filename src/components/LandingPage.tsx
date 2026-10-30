/* eslint-disable @next/next/no-img-element */
import { CtaLink } from "@/components/CtaLink";
import { FaqList } from "@/components/FaqList";
import { AutoGallery } from "@/components/AutoGallery";
import {
  IMAGES,
  LOCALES,
  TIERS,
  type Locale,
  type Tier,
  tierPath,
} from "@/config/sales";
import type { SalesCopy } from "@/content";

function Check() {
  return (
    <svg
      className="w-6 h-6 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#16A34A"
      strokeWidth="3"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CheckSmall() {
  return (
    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--brand-orange)]/15 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-3.5 h-3.5 text-[var(--brand-orange)]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

export function LandingPage({
  copy,
  locale,
  tier,
}: {
  copy: SalesCopy;
  locale: Locale;
  tier: Tier;
}) {
  const slides = IMAGES.gallery.map((src) => ({ src, alt: copy.illustrative }));
  const materials =
    copy.materials ?? copy.categories.map((c) => ({ title: c.split(" — ")[0], text: c.split(" — ")[1] ?? "" }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-0 left-0 right-0 z-50 bg-[var(--brand-green)] text-white text-center py-2.5 px-2 font-bold text-[12px] sm:text-sm md:text-base shadow-md whitespace-nowrap overflow-hidden text-ellipsis">
        {copy.promo}
      </div>

      <section className="bg-white text-foreground pt-16 md:pt-20 pb-10 md:pb-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-[24px] sm:text-[33px] md:text-[66px] font-black leading-[1.15] md:leading-tight mb-4 tracking-tight">
            <span className="text-[#15803d]">
              <span className="text-[26px] sm:text-[33px] md:text-[66px]">
                {copy.h1Lead}
              </span>
              <br className="sm:hidden" /> {copy.h1Rest}
            </span>
          </h1>
          <p className="text-[17.6px] md:text-[19.8px] font-semibold text-foreground/70 mb-2 max-w-2xl mx-auto">
            {copy.heroSub}
          </p>
          <div className="flex justify-center mb-2 sm:overflow-visible overflow-hidden">
            <img
              src={IMAGES.hero}
              alt={copy.heroAlt}
              className="w-[100%] max-w-none sm:w-full sm:max-w-[48.3rem] rounded-3xl shadow-2xl"
            />
          </div>
          <div className="mb-4">
            <p className="text-[13.5px] md:text-[17.6px] font-medium text-foreground/70 max-w-xl mx-auto leading-relaxed">
              {copy.heroBody}
            </p>
          </div>
          <CtaLink size="xl">{copy.ctaHero}</CtaLink>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8 text-sm text-foreground/60">
            {copy.trust.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-6 pb-10 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
              <span className="bg-gradient-to-r from-[#15803d] to-[#1d4ed8] bg-clip-text text-transparent">
                {copy.benefitsTitle}
              </span>
            </h2>
            {copy.benefitsSub && (
              <p className="text-center text-foreground/70 font-semibold text-base md:text-lg mb-8">
                {copy.benefitsSub}
              </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {copy.benefits.map((benefit) => (
                <div
                  key={benefit.text}
                  className="flex items-center gap-2.5 bg-white rounded-xl px-3 py-2 border border-stone-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 hover:shadow-md transition-all"
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-orange-50 to-amber-100 flex items-center justify-center text-lg">
                    {benefit.icon}
                  </span>
                  <span className="font-medium text-[13px] md:text-sm text-stone-700 leading-snug">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <CtaLink>{copy.ctaBenefits}</CtaLink>
            </div>
          </div>
          <div className="max-w-5xl mx-auto">
            <AutoGallery slides={slides} slideLabel={copy.slideLabel} />
          </div>
        </div>
      </section>

      {copy.themes && (
        <section className="py-8 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-3 md:gap-6">
            {copy.themes.map((t, i) => (
              <div key={t.title} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-1 transition-transform flex flex-col">
                <img src={IMAGES.themes[i]} alt={copy.illustrative} className="w-full aspect-[4/3] object-cover" />
                <div className="p-2.5 md:p-4 flex flex-col items-center text-center flex-1">
                  <h3 className="font-black text-[var(--brand-green)] text-xs md:text-base mb-1.5 md:mb-2 leading-tight uppercase">{t.title}</h3>
                  <p className="text-[11px] md:text-sm text-muted-foreground leading-snug mb-2 md:mb-3">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {copy.testimonialsTitle && (
        <section className="py-8 px-4 bg-[#D9E8DC]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-center mb-7 text-[var(--brand-green)]">
              {copy.testimonialsTitle}
            </h2>
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory justify-start md:justify-center pb-2">
              {IMAGES.testimonials.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={copy.illustrative}
                  className="snap-center shrink-0 w-[70%] sm:w-[45%] md:w-[30%] rounded-2xl shadow-xl"
                />
              ))}
            </div>
            <p className="text-center text-xs text-stone-600 mt-4">{copy.illustrative}</p>
          </div>
        </section>
      )}

      <section className="py-8 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[var(--brand-green)] text-white rounded-3xl p-8 md:p-14 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-8">
              {copy.materialsTitle ?? copy.showcaseTitle}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
              {materials.map((m, i) => (
                <div key={m.title} className="flex flex-col items-center text-center">
                  <img
                    src={IMAGES.materials[i]}
                    alt={`${m.title}. ${copy.illustrative}`}
                    className="w-full aspect-[3/4] object-cover rounded-xl shadow-2xl mb-3"
                  />
                  <h3 className="font-black text-sm md:text-base leading-tight mb-1">{m.title}</h3>
                  <p className="text-[11px] md:text-xs text-white/80 leading-snug">{m.text}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <CtaLink>{copy.ctaShowcase}</CtaLink>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-6 pb-8 px-3 bg-[#D9E8DC]">
        <div className="max-w-6xl mx-auto">
          {copy.audienceTitle && (
            <h2 className="text-2xl md:text-4xl font-black text-center mb-6 md:mb-10 text-[var(--brand-green)] max-w-4xl mx-auto leading-tight">
              {copy.audienceTitle}
            </h2>
          )}
          <h2 className="text-2xl md:text-5xl font-black text-center mb-6 md:mb-12 text-[var(--brand-green)] uppercase">
            {copy.flavorsTitle}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {copy.flavors.map((flavor, index) => (
              <div
                key={flavor.title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-1 transition-transform flex flex-col"
              >
                <img
                  src={IMAGES.flavors[index]}
                  alt={`${flavor.title}. ${copy.illustrative}`}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-2.5 md:p-4 flex flex-col items-center text-center flex-1">
                  <h3 className="font-black text-[var(--brand-green)] text-xs md:text-base mb-1.5 md:mb-2 leading-tight uppercase">
                    {flavor.title}
                  </h3>
                  <p className="text-[11px] md:text-sm text-muted-foreground leading-snug mb-2 md:mb-3">
                    {flavor.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-stone-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            {copy.flavorsNote}
          </p>
          {copy.audience && (
            <div className="grid md:grid-cols-2 gap-4 mt-8 max-w-4xl mx-auto">
              {copy.audience.map((a) => (
                <div key={a.title} className="bg-white rounded-2xl shadow-lg p-4 md:p-6 text-center">
                  <h3 className="font-black text-[var(--brand-green)] text-sm md:text-lg mb-1.5 md:mb-2 leading-tight uppercase">{a.icon} {a.title}</h3>
                  <p className="text-[12px] md:text-sm text-muted-foreground leading-snug">{a.text}</p>
                </div>
              ))}
            </div>
          )}
          <div className="text-center mt-8">
            <CtaLink>{copy.ctaShowcase}</CtaLink>
          </div>
        </div>
      </section>


      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-7 text-[var(--brand-green)]">
            {copy.perfectTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-2.5">
            {copy.perfect.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 bg-gradient-to-r from-[var(--brand-cream)] to-white rounded-xl px-3.5 py-2.5 border border-stone-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 hover:shadow-md transition-all"
              >
                <CheckSmall />
                <span className="font-medium text-[13px] md:text-sm text-stone-700 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-[var(--brand-cream)]">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block bg-[var(--brand-orange)] text-white text-xs md:text-sm font-bold uppercase px-4 py-1.5 rounded-full mb-4">
            📦 {copy.bonusKicker}
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-12 text-[var(--brand-green)]">
            {copy.bonusTitleBefore}{" "}
            <br className="hidden md:block" />
            <span className="text-[var(--brand-orange)]">{copy.bonusTitleEm}</span>
          </h2>
          <div className="flex flex-col gap-4 md:gap-5 mb-10 max-w-3xl mx-auto">
            {copy.bonuses.map((bonus, index) => (
              <div
                key={bonus.title}
                className="relative bg-white rounded-2xl shadow-md overflow-hidden flex items-stretch gap-3 md:gap-5 text-left"
              >
                <div className="relative flex-shrink-0">
                  <img
                    src={IMAGES.bonuses[index]}
                    alt={`${bonus.title}. ${copy.illustrative}`}
                    className="w-24 h-full md:w-36 object-cover"
                  />
                  <span className="absolute top-0 left-0 bg-[var(--brand-orange)] text-white text-[9px] md:text-[11px] font-black uppercase px-2 py-0.5 rounded-br-lg rounded-tl-lg shadow">
                    {copy.bonusTag} {index + 1}
                  </span>
                </div>
                <div className="flex-1 min-w-0 py-3 pr-3 md:py-4 md:pr-5">
                  <h3 className="font-black text-[15px] md:text-xl text-[var(--brand-green)] leading-tight mb-1.5">
                    {bonus.title}
                  </h3>
                  <p className="text-[12px] md:text-sm text-stone-600 leading-snug mb-2.5">
                    {bonus.text}
                  </p>
                  <span className="inline-flex items-center gap-1 bg-green-100 text-[var(--brand-green)] text-[11px] md:text-sm font-black uppercase px-3 py-1 rounded-full">
                    ✓ {copy.bonusIncluded}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[var(--brand-green)] text-white font-black uppercase rounded-2xl py-5 px-6 text-lg md:text-2xl shadow-lg">
            {copy.bonusBanner}
          </div>
        </div>
      </section>

      <section id="oferta" className="py-10 px-4 bg-[var(--brand-green)] scroll-mt-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center text-white mb-3 uppercase">
            {copy.offerTitle}
          </h2>
          <p className="text-center text-white/90 text-base md:text-lg font-semibold mb-10">
            {copy.offerSub}
          </p>
          <div className="grid grid-cols-2 gap-3 md:gap-8 items-stretch">
            <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden flex flex-col border-t-[6px] md:border-t-[10px] border-[var(--brand-orange)] pt-4 px-3 pb-4 md:pt-8 md:px-8 md:pb-8">
              <div className="flex justify-center mb-3 md:mb-6">
                <span className="inline-flex items-center gap-1 md:gap-2 bg-orange-100 text-[var(--brand-orange)] font-black uppercase text-[9px] md:text-sm px-2.5 md:px-5 py-1 md:py-2 rounded-full">
                  {copy.essencialBadge}
                </span>
              </div>
              <h3 className="text-base md:text-3xl font-black text-center text-[var(--brand-orange)] mb-3 md:mb-6 leading-tight">
                {copy.essencialName}
              </h3>
              <ul className="space-y-1.5 md:space-y-3 mb-4 md:mb-6 text-left">
                {copy.essencialItems.map((item) => (
                  <li key={item} className="flex items-start gap-1.5 md:gap-2">
                    <Check />
                    <span className="font-semibold text-[11px] md:text-base leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto text-center pt-3 md:pt-6">
                <p className="text-stone-500 font-semibold text-[11px] md:text-base">
                  {copy.priceCaption}
                </p>
                <p className="text-[1.28rem] sm:text-[2.4rem] md:text-[4.3rem] font-black text-[var(--brand-green)] my-1 md:my-2 leading-none whitespace-nowrap tracking-tight">
                  {tier.essencial}
                </p>
                <div className="flex justify-center mt-2 md:mt-4">
                  <CtaLink variant="buy" soonLabel={copy.buySoon}>{copy.buy}</CtaLink>
                </div>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col border-t-[6px] md:border-t-[10px] border-[var(--brand-green)] pt-8 px-3 pb-4 md:pt-8 md:px-8 md:pb-8 md:-mt-2">
              <span className="absolute top-1.5 right-1.5 bg-red-600 text-white font-black uppercase text-[8px] leading-tight md:text-xs px-1.5 md:px-3 py-0.5 md:py-1 rounded-full shadow-lg max-w-[45%] text-center z-10">
                {copy.completoCorner}
              </span>
              <div className="flex justify-center mb-3 md:mb-6">
                <span className="inline-flex items-center gap-1 md:gap-2 bg-[var(--brand-orange)] text-white font-black uppercase text-[9px] md:text-sm px-2.5 md:px-5 py-1 md:py-2 rounded-full shadow">
                  {copy.completoBadge}
                </span>
              </div>
              <h3 className="text-base md:text-3xl font-black text-center text-[var(--brand-orange)] mb-3 md:mb-6 leading-tight">
                {copy.completoName}
              </h3>
              <ul className="space-y-1.5 md:space-y-3 mb-3 md:mb-4 text-left">
                {copy.completoItems.map((item) => (
                  <li key={item} className="flex items-start gap-1.5 md:gap-2">
                    <Check />
                    <span className="font-semibold text-[11px] md:text-base leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-center text-[var(--brand-orange)] font-black uppercase text-[11px] md:text-base mt-1 md:mt-2 mb-2 md:mb-3">
                {copy.completoExtrasLabel}
              </p>
              <ul className="space-y-1.5 md:space-y-2.5 mb-4 md:mb-6 text-left">
                {copy.completoExtras.map((item) => (
                  <li key={item} className="flex items-start gap-1.5 md:gap-2">
                    <span className="text-sm md:text-xl leading-none flex-shrink-0">
                      📄
                    </span>
                    <span className="font-semibold text-[11px] md:text-base leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto text-center pt-2">
                <p className="text-stone-500 font-semibold text-[11px] md:text-base">
                  {copy.priceCaption}
                </p>
                <p className="text-[1.28rem] sm:text-[2.4rem] md:text-[4.3rem] font-black text-[var(--brand-green)] my-1 md:my-2 leading-none whitespace-nowrap tracking-tight">
                  {tier.completo}
                </p>
                <div className="flex justify-center mt-2 md:mt-4">
                  <CtaLink variant="buy" soonLabel={copy.buySoon}>{copy.buy}</CtaLink>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-white/90 text-sm mt-8">{copy.offerFoot}</p>
        </div>
      </section>

      <section className="py-8 px-4 bg-[var(--brand-cream)]">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-100">
          <div className="flex flex-col md:flex-row items-center gap-5 p-5 md:p-7">
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 bg-[var(--brand-orange)]/10 blur-2xl rounded-full" />
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-[var(--brand-cream)] border border-orange-100 flex items-center justify-center text-5xl">
                🛡️
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 bg-[var(--brand-green)]/10 text-[var(--brand-green)] text-[11px] font-bold px-2.5 py-1 rounded-full mb-2 uppercase tracking-wide">
                <span>🛡️</span> {copy.guaranteeKicker}
              </div>
              <h2 className="text-xl md:text-2xl font-black mb-1.5 text-[var(--brand-green)]">
                {copy.guaranteeTitle}
              </h2>
              <p className="text-sm md:text-[15px] text-foreground/75 leading-relaxed mb-3">
                {copy.guaranteeBody}
              </p>
              <CtaLink>{copy.ctaGuarantee}</CtaLink>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-2 text-[var(--brand-green)]">
            {copy.receiveTitleBefore}{" "}
            <span className="text-[var(--brand-orange)]">{copy.receiveTitleEm}</span>
          </h2>
          <p className="text-center text-foreground/60 text-sm mb-7">
            {copy.receiveSub}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {copy.receive.map((item) => (
              <div
                key={item.title}
                className="group relative bg-gradient-to-br from-[var(--brand-cream)] to-white rounded-2xl p-4 text-center shadow-sm border border-stone-100 hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-sm text-2xl mb-2 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-black text-[var(--brand-green)] text-sm md:text-base">
                  {item.title}
                </h3>
                <p className="text-[11px] md:text-xs text-foreground/55 mt-0.5">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-[var(--brand-cream)]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-7">
            <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[var(--brand-orange)] mb-1.5">
              {copy.faqKicker}
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--brand-green)]">
              {copy.faqTitle}
            </h2>
          </div>
          <FaqList items={copy.faqs} />
          <div className="text-center mt-7">
            <CtaLink size="navy">{copy.ctaFaq}</CtaLink>
          </div>
        </div>
      </section>

      <footer className="bg-[var(--brand-green-deep)] text-white/80 py-10 px-4 text-center">
        <p className="font-bold text-white mb-2">{copy.footerName}</p>
        <p className="text-sm">© {new Date().getFullYear()} {copy.footerRights}</p>
        <p className="text-xs mt-3 text-white/60 max-w-xl mx-auto">{copy.footerNote}</p>
        <nav aria-label={copy.routesLabel} className="mt-6 space-y-3 text-xs text-white/70">
          <p className="uppercase tracking-wide text-white/50">{copy.routesLabel}</p>
          <p className="flex flex-wrap justify-center gap-x-3 gap-y-1">
            {LOCALES.map((code) => (
              <a
                key={code}
                href={tierPath(code, tier.slug)}
                className={
                  code === locale ? "text-white font-bold" : "underline underline-offset-2"
                }
              >
                {code.toUpperCase()}
              </a>
            ))}
          </p>
          <p className="flex flex-wrap justify-center gap-x-3 gap-y-1">
            {TIERS.map((option) => (
              <a
                key={option.slug}
                href={tierPath(locale, option.slug)}
                className={
                  option.slug === tier.slug
                    ? "text-white font-bold"
                    : "underline underline-offset-2"
                }
              >
                {option.essencial} / {option.completo}
              </a>
            ))}
          </p>
        </nav>
      </footer>
    </div>
  );
}
