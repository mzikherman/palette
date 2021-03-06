/* tslint:disable:completed-docs */

import styles from "styled-components"

// @ts-ignore
import { ClassAttributes, HTMLAttributes } from "react"
// @ts-ignore
import { ThemedStyledFunction } from "styled-components"

export const styled = {
  Image: styles.img,
  Text: styles.div,
  View: styles.div,
}

export const View = "div"
export const Text = "div"
export const Image = "img"

export const styledWrapper = styles as typeof styles
