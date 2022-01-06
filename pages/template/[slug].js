import LayoutTemplate from "components/LayoutTemplate";
import Tmp1 from "components/templates/tmp1";
import Tmp2 from "components/templates/tmp2";
import { useRouter } from "next/router";

export default function TemplatePage() {
  const router = useRouter();
  const slug = router.query.slug;

  function renderTemplate() {
    switch (slug) {
      case "tm-1":
        return <Tmp1 />;

      case "tm-2":
        return <Tmp2 />;
      default:
        return <div className="p-16">not found..</div>;
    }
  }

  return <LayoutTemplate>{renderTemplate()}</LayoutTemplate>;
}
