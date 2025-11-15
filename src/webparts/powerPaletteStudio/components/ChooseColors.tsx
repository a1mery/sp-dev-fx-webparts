import * as React from "react"
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  makeStyles,
  Subtitle2,
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
    padding: "2rem",
    boxSizing: "border-box",
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
        <CardHeader header={<Subtitle2>COLOR PALETTE</Subtitle2>} />
        <Swatches colors={colors} />
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
