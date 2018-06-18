import React from "react"
import renderer from "react-test-renderer"

import { Sans, Text, Serif, Display } from "../Typography"
import { themeProps } from "../../Theme"

describe("Typography", () => {
  describe("Sans", () => {
    describe("concerning font-family", () => {
      it("uses regular by default", () => {
        const sans = renderer.create(<Sans size="3t">Hello world</Sans>).root
        const text = sans.findByType(Text as React.ComponentClass<any>)
        expect(text.props.fontFamily).toEqual(
          themeProps.fontFamily.sans.regular
        )
      })

      it("uses medium", () => {
        const sans = renderer.create(
          <Sans weight="medium" size="3t">
            Hello world
          </Sans>
        ).root
        const text = sans.findByType(Text as React.ComponentClass<any>)
        expect(text.props.fontFamily).toEqual(themeProps.fontFamily.sans.medium)
      })

      it("uses regular (default) italic", () => {
        const sans = renderer.create(
          <Sans italic size="3t">
            Hello world
          </Sans>
        ).root
        const text = sans.findByType(Text as React.ComponentClass<any>)
        expect(text.props.fontFamily).toEqual(themeProps.fontFamily.sans.italic)
      })

      it("uses regular (explicit) italic", () => {
        const sans = renderer.create(
          <Sans weight="regular" italic size="3t">
            Hello world
          </Sans>
        ).root
        const text = sans.findByType(Text as React.ComponentClass<any>)
        expect(text.props.fontFamily).toEqual(themeProps.fontFamily.sans.italic)
      })

      it("uses medium italic", () => {
        const sans = renderer.create(
          <Sans weight="medium" italic size="3t">
            Hello world
          </Sans>
        ).root
        const text = sans.findByType(Text as React.ComponentClass<any>)
        expect(text.props.fontFamily).toEqual(
          themeProps.fontFamily.sans.mediumItalic
        )
      })
    })
  })

  describe("Serif", () => {
    describe("concerning font-family", () => {
      it("uses regular by default", () => {
        const serif = renderer.create(<Serif size="3t">Hello world</Serif>).root
        const text = serif.findByType(Text as React.ComponentClass<any>)
        expect(text.props.fontFamily).toEqual(
          themeProps.fontFamily.serif.regular
        )
      })

      it("uses semibold", () => {
        const serif = renderer.create(
          <Serif weight="semibold" size="3t">
            Hello world
          </Serif>
        ).root
        const text = serif.findByType(Text as React.ComponentClass<any>)
        expect(text.props.fontFamily).toEqual(
          themeProps.fontFamily.serif.semibold
        )
      })

      it("uses regular (default) italic", () => {
        const serif = renderer.create(
          <Serif italic size="3t">
            Hello world
          </Serif>
        ).root
        const text = serif.findByType(Text as React.ComponentClass<any>)
        expect(text.props.fontFamily).toEqual(
          themeProps.fontFamily.serif.italic
        )
      })

      it("uses regular (explicit) italic", () => {
        const serif = renderer.create(
          <Serif weight="regular" italic size="3t">
            Hello world
          </Serif>
        ).root
        const text = serif.findByType(Text as React.ComponentClass<any>)
        expect(text.props.fontFamily).toEqual(
          themeProps.fontFamily.serif.italic
        )
      })
    })

    describe("Display", () => {
      describe("concerning font-family", () => {
        it("uses regular by default", () => {
          const display = renderer.create(
            <Display size="3t">Hello world</Display>
          ).root
          const text = display.findByType(Text as React.ComponentClass<any>)
          expect(text.props.fontFamily).toEqual(
            themeProps.fontFamily.display.regular
          )
        })
      })
    })
  })
})
