import { useTranslation } from "next-i18next"

import BaseCard from "components/cards/baseCard"
import ThemeButton from "../../sugar/themeButton"

const TryItOut = () => {
  const { t } = useTranslation("homepage")

  return (
    <BaseCard
      title={t("tryItOut.title")}
      customPadding={true}
      style={{
        width: "fit-content",
        placeSelf: "center",
        padding: "1rem 2rem 2rem",
      }}
    >
      <p
        style={{
          fontSize: "calc(var(--font-size-M) * 1.1)",
          margin: "0.5rem 0 0",
          textAlign: "justify",
        }}
      >
        {t("tryItOut.encouragement")}
      </p>
      <p
        style={{
          fontSize: "calc(var(--font-size-M) * 1.1)",
          margin: 0,
          textAlign: "justify",
        }}
      >
        {t("tryItOut.label")}
      </p>
      <ThemeButton label={t("tryItOut.showInstructions")} />
    </BaseCard>
  )
}

export default TryItOut
