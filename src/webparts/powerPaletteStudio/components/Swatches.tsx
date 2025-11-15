import {
  ColorSwatch,
  makeStyles,
  SwatchPicker,
  SwatchPickerOnSelectEventHandler,
  Text,
} from "@fluentui/react-components"
import * as React from "react"

export interface SwatchesProps {
  colors: { color: string; value: string; "aria-label": string }[]
}

const useStyles = makeStyles({
  swatchPicker: {
    display: "flex",
    gap: "1.5rem",
    flexWrap: "wrap",
  },
  swatchContainer: {
    display: "grid",
    justifyItems: "center",
    rowGap: "4px",
  },
  customSwatch: {
    width: "120px",
    height: "120px",
  },
})

export const Swatches: React.FC<SwatchesProps> = ({ colors }) => {
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(
    undefined
  )

  const handleSelect: SwatchPickerOnSelectEventHandler = (_, data) => {
    setSelectedValue(data.selectedValue)
  }

  const styles = useStyles()

  return (
    <SwatchPicker
      aria-label='SwatchPicker row layout'
      selectedValue={selectedValue}
      onSelectionChange={handleSelect}
      shape='circular'
      size='large'
      spacing='medium'
      className={styles.swatchPicker}
    >
      {colors.map((color) => {
        return (
          <section className={styles.swatchContainer} key={color.value}>
            <ColorSwatch
              key={color.value}
              {...color}
              className={styles.customSwatch}
            />
            <Text weight='semibold'>{color["aria-label"]}</Text>
            <Text size={100}>{color.color}</Text>
          </section>
        )
      })}
    </SwatchPicker>
  )
}
