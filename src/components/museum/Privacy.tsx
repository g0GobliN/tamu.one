import { LegalPage } from "@/components/museum/LegalPage";
import { privacyPage } from "@/data/legal";

export function Privacy() {
  return <LegalPage {...privacyPage} />;
}
