import * as React from "react"
import { makeStyles, Text, Title2, tokens } from "@fluentui/react-components"

const useStyles = makeStyles({
  header: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  gradientTitle: {
    background: `linear-gradient(90deg, ${tokens.colorBrandForeground1} 0%, ${tokens.colorBrandForeground2} 50%, ${tokens.colorPalettePurpleForeground2} 100%)`,

    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
})

export const Header: React.FC = () => {
  const styles = useStyles()

  return (
    <header className={styles.header}>
      <Title2 className={styles.gradientTitle}>Power Palette Studio</Title2>
      <Text>
        Generate beautiful, harmonious color palettes instantly. Click any color
        to copy, toggle between HEX and RGB formats.
      </Text>
    </header>
  )
}
