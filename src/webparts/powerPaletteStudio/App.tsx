import * as React from "react"
import { useMemo } from "react"
import {
  FluentProvider,
  IdPrefixProvider,
  Theme,
} from "@fluentui/react-components"
import { createV9Theme } from "@fluentui/react-migration-v8-v9"
import { IAppProps } from "./models/IApp"
import { Header } from "./components/Header"

export const App = (props: IAppProps) => {
  const { theme } = props

  const computedTheme = useMemo<Partial<Theme>>(() => {
    return createV9Theme(theme as never)
  }, [theme])

  return (
    <IdPrefixProvider value='react-ai-powerpalette-'>
      <FluentProvider theme={computedTheme}>
        <Header />
      </FluentProvider>
    </IdPrefixProvider>
  )
}
