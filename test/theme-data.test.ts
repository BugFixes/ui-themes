import 'jest-extended'
import * as themes from '../src'
import type {
  Theme,
  ThemePack,
} from '../src'

const validFontDisplays = [
  'auto',
  'block',
  'swap',
  'fallback',
  'optional',
]

const validFontWeights = [
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
]

const validFontStretches = [
  'ultra-condensed',
  'extra-condensed',
  'condensed',
  'semi-condensed',
  'normal',
  'semi-expanded',
  'expanded',
  'extra-expanded',
  'ultra-expanded',
]

const validFontStyleTypes = [
  'normal',
  'italic',
  'oblique',
]

const validTextTransformTypes = [
  'none',
  'capitalize',
  'uppercase',
  'lowercase',
  'full-width',
  'full-size-kana',
]

const validFontFormats = ['woff', 'woff2']

const propertyPrefixRegEx = /^(?:boxShadow)|(?:breakpoint)|(?:color)|(?:opacity)|(?:fontFamily)|(?:fontSize)|(?:fontStyle)|(?:fontWeight)|(?:lineHeight)|(?:letterSpacing)|(?:textTransform)|(?:borderRadius)|(?:borderWidth)|(?:outlineWidth)|(?:underlineWidth)|(?:thickness)|(?:size)|(?:indent)|(?:padding)|(?:spacing)|(?:maxWidth)/
const textColorPropertyPrefixRexEx = /^colorText(?!Button)/
const backgroundColorPropertyPrefixRegEx = /^colorBackground/
const borderColorPropertyPrefixRegEx = /^colorBorder/
const textColorTypeSuffixRegEx = /(?:(?:Accent)|(?:Faded)|(?:Off)|(?:Main)|(?:Error)|(?:Success)|(?:Warning))$/
const buttonElementColorPrefixRegEx = /^color.*?(?=Button|InteractiveListItem)/
const buttonElementColorTypeSuffixRegEx = /(?:(?:Default)|(?:Active)|(?:Hover)|(?:Disabled))$/
const inputElementColorPrefixRegEx = /^color.*?(?=Input|Checkbox)/
const inputElementColorTypeSuffixRegEx = /(?:(?:Default)|(?:Active)|(?:Hover)|(?:Error)|(?:Disabled))$/
const sizeRelatedPropertyPrefixRegEx = /^(?:fontSize)|(?:lineHeight)|(?:letterSpacing)|(?:borderRadius)|(?:thickness)|(?:borderWidth)|(?:outlineWidth)|(?:underlineWidth)|(?:size)|(?:indent)|(?:padding)|(?:spacing)|(?:boxShadow)|(?:maxWidth)/
const fontWeightPropertyPrefixRegEx = /^fontWeight/
const breakpointSuffixRegEx = /(?:(?:Default)|(?:Medium)|(?:Wide)|(?:ExtraWide)|(?:UltraWide))$/
const fontWeightPropertySuffixRexEx = /Strong$/
const fontFamilyRegEx = /^("?)[A-Z0-9-]+\1(?:, ("?)[A-Z0-9-]+\2)*$/i
const remUnitRegEx = /^\d+(?:\.\d+)?rem$/
const pixelUnitRegEx = /^\d+(?:\.\d+)?px$/
const colorRegEx = /^(?:#([0-9a-f]{3}|[0-9a-f]{6})|transparent)$/

const themeKeys = Object.keys(themes)
const schemeKeys = ['primary', 'secondary']
const componentNamespaceKeys = [
  'AffordabilityDashboardHeader',
  'AffordabilityDashboardHeaderBorder',
  'AffordabilityDashboardHeaderLogo',
  'Avatar',
  'AvatarLarge',
  'AvatarRegular',
  'AvatarSmall',
  'AvatarExtraSmall',
  'BodySmall',
  'BodyRegular',
  'BodyXSmall',
  'Button',
  'ButtonDestructive',
  'ButtonDestructiveCompact',
  'ButtonPrimary',
  'ButtonPrimaryCompact',
  'ButtonSecondary',
  'ButtonSecondaryCompact',
  'Card',
  'CategoryLivingCosts',
  'CategoryGeneral',
  'CategoryChildcare',
  'CategoryBrandCredit',
  'CategoryCredit',
  'CategoryExpenses',
  'CategoryHousehold',
  'CategoryInsurance',
  'CategoryOneOff',
  'CategorySavings',
  'CategoryGambling',
  'CategoryCash',
  'CategoryOtherIncome',
  'CategoryRegularIncome',
  'CategoryShopping',
  'CategoryTransfers',
  'CategoryTransport',
  'Checkbox',
  'CheckboxChecked',
  'ColumnChartColorLegend',
  'ColumnChartItem',
  'ColumnChartItem1',
  'ColumnChartItem2',
  'Constrictor',
  'ConstrictorNarrow',
  'Default',
  'DetailList',
  'DetailListBorder',
  'DetailListDefault',
  'DetailListHeader',
  'DetailListHeaderDefault',
  'DetailListRegular',
  'DetailListRegularDefault',
  'DetailListStrong',
  'DetailListStrongDefault',
  'InputHorizontal',
  'InputVertical',
  'Medium',
  'Wide',
  'ExtraWide',
  'UltraWide',
  'Destructive',
  'Dialog',
  'Divider',
  'DividerStrong',
  'GridCol',
  'GridRow',
  'Heading1',
  'Heading2',
  'Heading3',
  'Heading4',
  'Heading5',
  'Heading6',
  'IconButton',
  'IconRoundel',
  'IconRoundelIcon',
  'Input',
  'InteractiveListItem',
  'InteractiveListItemDisabled',
  'Notification',
  'NotificationError',
  'NotificationWarning',
  'Padder',
  'PoweredByBugfixes',
  'Primary',
  'ProgressBar',
  'RoundAvatar',
  'Secondary',
  'Section',
  'SectionOff',
  'SectionBrand',
  'Spinner',
  'SquareAvatar',
  'TableRowEven',
  'TableRowOdd',
  'TableBorder',
  'TableHead',
  'TableBody',
  'TableBodyLevel2',
  'TableFooter',
  'TextButtonDestructive',
  'TextButtonPrimary',
  'XXXXSmall',
  'XXXSmall',
  'XXSmall',
  'XSmall',
  'Small',
  'Medium',
  'Large',
  'XLarge',
  'XXLarge',
  'XXXLarge',
  'XXXXLarge',
]

function extractKeyNamespace(key: string): string {
  // Font height
  if (key.startsWith('fontWeight')) {
    return key.replace(fontWeightPropertyPrefixRegEx, '').replace(fontWeightPropertySuffixRexEx, '')

    // Button colors
  } else if (buttonElementColorPrefixRegEx.test(key)) {
    return key.replace(buttonElementColorPrefixRegEx, '').replace(buttonElementColorTypeSuffixRegEx, '')

    // Input colors
  } else if (inputElementColorPrefixRegEx.test(key)) {
    return key.replace(inputElementColorPrefixRegEx, '').replace(inputElementColorTypeSuffixRegEx, '')

    // Text colors
  } else if (key.startsWith('colorText')) {
    return key.replace(textColorPropertyPrefixRexEx, '').replace(textColorTypeSuffixRegEx, '')

    // Background colors
  } else if (key.startsWith('colorBackground')) {
    return key.replace(backgroundColorPropertyPrefixRegEx, '').replace(textColorTypeSuffixRegEx, '')

    // Border colors
  } else if (key.startsWith('colorBorder')) {
    return key.replace(borderColorPropertyPrefixRegEx, '').replace(textColorTypeSuffixRegEx, '')

    // Size related properties
  } else if (sizeRelatedPropertyPrefixRegEx.test(key)) {
    return key.replace(propertyPrefixRegEx, '').replace(breakpointSuffixRegEx, '')
  }

  // All other properties
  return key.replace(propertyPrefixRegEx, '')
}

describe.each(themeKeys)('Theme `%s`', function (themeKey: keyof typeof themes) {
  const theme: ThemePack = themes[themeKey]

  describe('global styles', function () {
    test('are present', function () {
      expect(theme.global).toEqual(expect.any(Object))
    })

    test('contain valid optional font face settings', function () {
      const { fonts } = theme.global

      if (typeof fonts !== 'undefined') { // eslint-disable-line jest/no-if
        expect(fonts).toEqual(expect.any(Array)) // eslint-disable-line jest/no-conditional-expect
      }

      fonts?.forEach(function (font) {
        expect(font.name).toEqual(expect.any(String))

        if (typeof font.display !== 'undefined') {
          expect(font.display).toEqual(expect.toBeOneOf(validFontDisplays)) // eslint-disable-line jest/no-conditional-expect
        }

        expect(font.styles).toEqual(expect.any(Array))

        font.styles.forEach(function (fontStyle) {
          expect(fontStyle.src).toEqual(expect.any(Array))

          fontStyle.src.forEach(function (src) {
            expect(src.format).toEqual(expect.toBeOneOf(validFontFormats))
            expect(src.url).toEqual(expect.any(String))

            if (src.format === 'woff') {
              expect(src.url.endsWith('.woff')).toBe(true) // eslint-disable-line jest/no-conditional-expect
            } else {
              expect(src.url.endsWith('.woff2')).toBe(true) // eslint-disable-line jest/no-conditional-expect
            }
          })

          if (typeof fontStyle.stretch !== 'undefined') {
            expect(fontStyle.stretch).toEqual(expect.toBeOneOf(validFontStretches)) // eslint-disable-line jest/no-conditional-expect
          }

          if (typeof fontStyle.type !== 'undefined') {
            expect(fontStyle.type).toEqual(expect.toBeOneOf(validFontStyleTypes)) // eslint-disable-line jest/no-conditional-expect
          }

          if (typeof fontStyle.weight !== 'undefined') {
            expect(fontStyle.weight).toEqual(expect.toBeOneOf(validFontWeights)) // eslint-disable-line jest/no-conditional-expect
          }
        })
      })
    })
  })

  describe('meta data', function () {
    test('contains a display name', function () {
      expect(theme.meta.displayName).toEqual(expect.any(String))
    })
  })

  describe.each(schemeKeys)('%s scheme', function (schemeKey: keyof ThemePack) {
    const scheme: Theme = theme[schemeKey] as Theme

    test('is present', function () {
      expect(scheme).toEqual(expect.any(Object))
    })

    test('contains the scheme type', function () {
      expect(scheme.scheme).toBe(schemeKey)
    })

    test('contains only properties prefixed with their type', function () {
      const keys = Object.keys(scheme)

      keys.forEach(function (key) {
        if (key === 'scheme') {
          return
        }

        expect(key).toMatch(propertyPrefixRegEx)
      })
    })

    if (schemeKey === 'secondary') {
      test('contains only properties which are also part of the primary scheme', function () {
        const primaryScheme = theme.primary
        const keys = Object.keys(scheme)

        keys.forEach(function (key) {
          expect(primaryScheme.hasOwnProperty(key)).toBe(true)
        })
      })
    }

    test('contains only valid color values', function () {
      const keys = Object.keys(scheme)

      keys.filter(function (key) {
        return key.startsWith('color')
      }).forEach(function (key: keyof Theme) {
        const value = scheme[key]

        expect(value).toMatch(colorRegEx)
      })
    })

    test('contains only valid font family values', function () {
      const keys = Object.keys(scheme)

      keys.filter(function (key) {
        return key.startsWith('fontFamily')
      }).forEach(function (key: keyof Theme) {
        const value = scheme[key]

        expect(value).toMatch(fontFamilyRegEx)
      })
    })

    test('contains only valid font size values', function () {
      const keys = Object.keys(scheme)

      keys.filter(function (key) {
        return key.startsWith('fontSize')
      }).forEach(function (key: keyof Theme) {
        const value = scheme[key]

        expect(value).toMatch(remUnitRegEx)
      })
    })

    test('contains only valid breakpoint size values', function () {
      const keys = Object.keys(scheme)

      keys.filter(function (key) {
        return key.startsWith('breakpoint')
      }).forEach(function (key: keyof Theme) {
        const value = scheme[key]

        expect(value).toMatch(pixelUnitRegEx)
      })
    })

    test('contains only valid font weight values', function () {
      const keys = Object.keys(scheme)

      keys.filter(function (key) {
        return key.startsWith('fontWeight')
      }).forEach(function (key: keyof Theme) {
        const value = scheme[key]

        expect(value).toBeOneOf(validFontWeights)
      })
    })

    test('contains only valid line height values', function () {
      const keys = Object.keys(scheme)

      keys.filter(function (key) {
        return key.startsWith('lineHeight')
      }).forEach(function (key: keyof Theme) {
        const value = scheme[key]

        expect(value).toMatch(remUnitRegEx)
      })
    })

    test('contains only valid letter spacing values', function () {
      const keys = Object.keys(scheme)

      keys.filter(function (key) {
        return key.startsWith('letterSpacing')
      }).forEach(function (key: keyof Theme) {
        const value = scheme[key]

        expect(value).toMatch(remUnitRegEx)
      })
    })

    test('contains only valid text transform values', function () {
      const keys = Object.keys(scheme)

      keys.filter(function (key) {
        return key.startsWith('textTransform')
      }).forEach(function (key: keyof Theme) {
        const value = scheme[key]

        expect(value).toBeOneOf(validTextTransformTypes)
      })
    })

    test('contains only valid opacity values', function () {
      const keys = Object.keys(scheme)

      keys.filter(function (key) {
        return key.startsWith('opacity')
      }).forEach(function (key: keyof Theme) {
        const value = scheme[key]

        expect(value).toBeGreaterThanOrEqual(0)
        expect(value).toBeLessThanOrEqual(1)
      })
    })

    test('size related properties are suffixed with a breakpoint type', function () {
      const keys = Object.keys(scheme)

      keys.filter(function (key) {
        return sizeRelatedPropertyPrefixRegEx.test(key)
      }).forEach(function (key) {
        expect(key).toMatch(breakpointSuffixRegEx)
      })
    })

    test('text color related properties are suffixed with a style type', function () {
      const keys = Object.keys(scheme)

      keys.filter(function (key) {
        return key.startsWith('colorText') && !buttonElementColorPrefixRegEx.test(key) && !inputElementColorPrefixRegEx.test(key)
      }).forEach(function (key) {
        expect(key).toMatch(textColorTypeSuffixRegEx)
      })
    })

    test('button element color related properties are suffixed with a button state', function () {
      const keys = Object.keys(scheme)

      keys.filter(function (key) {
        return buttonElementColorPrefixRegEx.test(key)
      }).forEach(function (key) {
        expect(key).toMatch(buttonElementColorTypeSuffixRegEx)
      })
    })

    test('contains only valid component namespaces', function () {
      const keys = Object.keys(scheme)

      keys.forEach(function (key) {
        if (key === 'scheme') {
          return
        }

        const componentNamespace = extractKeyNamespace(key)

        expect(componentNamespace).toBeOneOf(componentNamespaceKeys)
      })
    })
    /* eslint-enable jest/require-top-level-describe */
  })
})
