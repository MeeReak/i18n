import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("Homepage");

  return (
    <>
      <h2>{t("title")}</h2>
      <p>{t("description")}</p>
    </>
  );
}
