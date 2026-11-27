import { LegalPage } from "@/components/museum/LegalPage";
import { getLegal } from "@/i18n/content";
import { useLocale } from "@/i18n";

export function Terms() {
  return <LegalPage {...getLegal(useLocale()).terms} />;
}
