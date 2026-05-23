// Module preview card — icon + title + blurb + tier badge.
// Per docs/CLAUDE_CODE_HANDOFF.md "Compliance check":
//   - NO price on the card
//   - NO lock icon ("Pro tier required" framing forbidden by Part 4)
//   - Tier shown as a soft tier badge only
//
// Used by ModulesPreview on home. Will also be used on /platform and /pricing
// when those pages get built (handoff migration order steps 4, 5).

import { IconByName, type IconName } from "../Icons";

export type ModuleTier = "Free" | "Recommended" | "Pro";

export type ModuleSummary = {
  id: string;
  icon: IconName;
  title: string;
  tier: ModuleTier;
  blurb: string;
};

const tierClass: Record<ModuleTier, string> = {
  Free: "badge--free",
  Recommended: "badge--recommended",
  Pro: "badge--pro",
};

const cardTierClass: Record<ModuleTier, string> = {
  Free: "",
  Recommended: "module-card--recommended",
  Pro: "module-card--pro",
};

export default function ModuleCard({
  module,
  compact = false,
}: {
  module: ModuleSummary;
  compact?: boolean;
}) {
  return (
    <div
      className={`module-card${compact ? " module-card--compact" : ""} ${
        cardTierClass[module.tier]
      }`.trim()}
    >
      <div className="module-card__head">
        <div className="module-card__icon">
          <IconByName name={module.icon} size={compact ? 16 : 20} />
        </div>
        <span className={`badge ${tierClass[module.tier]}`}>{module.tier}</span>
      </div>
      <h3 className="module-card__title">{module.title}</h3>
      <p className="module-card__body">{module.blurb}</p>
    </div>
  );
}
