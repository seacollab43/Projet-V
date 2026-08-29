import { Vet24Experience } from "@/components/vet24-experience";
import { faqItems } from "@/config/content";
import { businessConfig } from "@/config/site";
import { buildFaqSchema, buildVeterinarySchema } from "@/lib/seo/schema";

const veterinarySchema = buildVeterinarySchema(businessConfig);
const faqSchema = buildFaqSchema([...faqItems]);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(veterinarySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Vet24Experience />
    </>
  );
}
