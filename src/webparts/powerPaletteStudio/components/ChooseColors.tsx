import * as React from "react"
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  makeStyles,
  Subtitle1,
  tokens,
} from "@fluentui/react-components"
import { Swatches } from "./Swatches"
import {
  ArrowSync20Filled,
  ArrowSync20Regular,
  bundleIcon,
  Code24Filled,
  Code24Regular,
} from "@fluentui/react-icons"
import { PreviewCode } from "./PreviewCode"
import { generateColors, generatePowerAppsFormula } from "../utils/color"
import { defaultColors, IColor } from "../models/IColors"

const useStyles = makeStyles({
  card: {
    padding: "1.6rem",
    borderTop: `4px solid ${tokens.colorBrandForeground1}`,
  },
  actions: {
    display: "flex",
    gap: "12px",
  },
  cardFooter: {
    marginTop: "2rem",
  },
})

const ArrowSync = bundleIcon(ArrowSync20Filled, ArrowSync20Regular)
const Code = bundleIcon(Code24Filled, Code24Regular)

export const ChooseColors: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [colors, setColors] = React.useState<IColor[]>(defaultColors)
  const [generatedCode, setGeneratedCode] = React.useState("")

  const handleGenerateColors = () => {
    const newColors = generateColors()
    console.log("Generated colors:", newColors)
    setColors(newColors)
  }

  const handleCopyCode = () => {
    const formula = generatePowerAppsFormula(colors)
    setGeneratedCode(formula)
    setIsOpen(true)
  }

  const styles = useStyles()

  return (
    <>
      <Card className={styles.card}>
        <CardHeader header={<Subtitle1>COLOR PALETTE</Subtitle1>} />
        <Swatches colors={colors} setColors={setColors} />
        <CardFooter
          className={styles.cardFooter}
          action={
            <div className={styles.actions}>
              <Button
                appearance='primary'
                icon={<ArrowSync />}
                onClick={handleGenerateColors}
              >
                Generate colors
              </Button>
              <Button
                appearance='secondary'
                icon={<Code />}
                onClick={handleCopyCode}
              >
                Copy code
              </Button>
            </div>
          }
        />
      </Card>
      <PreviewCode
        generatedCode={generatedCode}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  )
}
