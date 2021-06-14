import Image from "next/image"

import BaseCard from "components/cards/baseCard"

import styles from "./unchoCard.module.scss"

import heroSVG from "public/images/hero.svg"

export default function UnchoCard() {
  return (
    <BaseCard title="UNCHO" className={styles.unchoCard}>
      <Image
        role="presentation"
        alt="Blue-purple-pink layered gradient"
        src={heroSVG}
        layout="fill"
        objectFit="cover"
        quality={90}
      />
    </BaseCard>
  )
}
