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

const useStyles = makeStyles({
  card: {
    padding: "2rem",
    boxSizing: "border-box",
  },
  actions: {
    display: "flex",
    gap: "12px",
  },
})

const ArrowSync = bundleIcon(ArrowSync20Filled, ArrowSync20Regular)
const Code = bundleIcon(Code24Filled, Code24Regular)

export const ChooseColors: React.FC = () => {
  // generate array of colors for each brand, secondary, accent, success, warning, error, info
  const colors = [
    {
      color: "#0078d4",
      value: "0078d4",
      "aria-label": "Primary",
    },
    {
      color: "#2b88d8",
      value: "2b88d8",
      "aria-label": "Secondary",
    },
    {
      color: "#e81123",
      value: "e81123",
      "aria-label": "Accent",
    },
    {
      color: "#107c10",
      value: "107c10",
      "aria-label": "Success",
    },
    {
      color: "#ffb900",
      value: "ffb900",
      "aria-label": "Warning",
    },
    { color: "#d13438", value: "d13438", "aria-label": "Error" },
    { color: "#005a9e", value: "005a9e", "aria-label": "Info" },
  ]

  const styles = useStyles()

  return (
    <Card className={styles.card}>
      <CardHeader header={<Subtitle2>COLOR PALETTE</Subtitle2>} />
      <Swatches colors={colors} />
      <CardFooter
        action={
          <div className={styles.actions}>
            <Button appearance='primary' icon={<ArrowSync />}>
              Generate colors
            </Button>
            <Button appearance='secondary' icon={<Code />}>
              Copy code
            </Button>
          </div>
        }
      />
    </Card>
  )
}
