import {
  rem,
} from 'polished'
import type {
  ThemeGlobalStyles,
  ThemePack,
} from './types'

type ColorScheme = {
  colorBrand01: string,
  colorBrand02: string,
  colorBrand03: string,
  colorBrand04: string,
  colorBrand05: string,
  colorBrand06: string,
  colorBrand07: string,

  colorUi01: string,
  colorUi02: string,
  colorUi03: string,
  colorUi04: string,
  colorUi05: string,
  colorUi06: string,
  colorUi07: string,
}

// Colors
const colorTransparent = 'transparent'

const primaryColorAction01A = '#c80019'
const primaryColorAction01B = '#e3808c'
const primaryColorAction01C = '#5c000c'
const primaryColorAction01D = '#850011'
const primaryColorAction02A = '#268500'

const primaryColorSuccess = '#3cd002'
const primaryColorWarning = '#f5a623'
const primaryColorWarningText = '#a36600'
const primaryColorError = '#ea021e'

const primaryColorCategoryLivingCosts = '#26c6da'
const primaryColorCategoryGeneral = '#e3412c'
const primaryColorCategoryChildcare = '#00a1c9'
const primaryColorCategoryCredit = '#ff4081'
const primaryColorCategoryExpenses = '#c16b3b'
const primaryColorCategoryHousehold = '#f66900'
const primaryColorCategoryInsurance = '#2193f0'
const primaryColorCategoryOneOff = '#b79000'
const primaryColorCategorySavings = '#5d4bc8'
const primaryColorCategoryGambling = '#7b1fa2'
const primaryColorCategoryCash = '#009875'
const primaryColorCategoryOtherIncome = '#006895'
const primaryColorCategoryRegularIncome = '#6451d6'
const primaryColorCategoryShopping = '#a74ab7'
const primaryColorCategoryTransfers = '#6d6d71'
const primaryColorCategoryTransport = '#62a600'

// Border radii
const borderRadiusCommonDefault = rem(8)
const borderRadiusSmallDefault = rem(4)

// Border widths
const borderWidthCommonDefault = rem(1)

// Fonts weights
const fontWeightLight = 300
const fontWeightRegular = 400
const fontWeightMedium = 500
const fontWeightBold = 700

// Font sizes
const fontSizeXSmall = rem(12)
const fontSizeSmall = rem(14)
const fontSizeRegular = rem(16)
const fontSizeLarge = rem(20)
const fontSizeXLarge = rem(26)
const fontSizeXXLarge = rem(32)
const fontSizeXXXLarge = rem(36)
const fontSizeXXXXLarge = rem(48)

// Letter spacings
const letterSpacingCommon = rem(0)
const letterSpacingSmall = rem(0.15)
const letterSpacingMedium = rem(1.25)
const letterSpacingLarge = rem(2)

// Line heights
const lineHeightSmall = rem(16)
const lineHeightRegular = rem(24)
const lineHeightLarge = rem(26)
const lineHeightXLarge = rem(36)
const lineHeightXXLarge = rem(40)
const lineHeightXXXLarge = rem(48)

// Box shadows
const boxShadowCommonDefault = `0 ${rem(2)} ${rem(15)} rgba(0, 0, 0, 0.12)`

// Font families
const fontFamilyPrimary = 'Roboto, Helvetica, Arial, sans-serif'

// Outline widths
const outlineWidthCommonDefault = rem(2)

// Paddings
const paddingCommonDefault = `${rem(32)} ${rem(20)}`
const paddingCommonWide = `${rem(48)} ${rem(56)}`
const paddingButtonDefault = rem(16)
const paddingButtonCompactDefault = `${rem(10)} ${rem(16)}`
const paddingIconButtonDefault = rem(4)
const paddingInteractiveListItemDefault = `${rem(0)} ${rem(12)}`
const paddingInputHorizontalDefault = `${rem(16)}`
const paddingInputVerticalDefault = `${rem(12)}`
const paddingTableHeadDefault = `${rem(8)} ${rem(16)}`
const paddingTableBodyDefault = rem(16)
const paddingTableBodyLevel2Default = `${rem(12)} ${rem(16)}`
const paddingTableFooterDefault = rem(16)
const paddingNotificationDefault = rem(16)

// Spacings
const spacingXXXXSmallDefault = rem(4)
const spacingXXXSmallDefault = rem(8)
const spacingXXSmallDefault = rem(16)
const spacingXSmallDefault = rem(20)
const spacingSmallDefault = rem(24)
const spacingMediumDefault = rem(28)
const spacingLargeDefault = rem(32)
const spacingXLargeDefault = rem(40)
const spacingXXLargeDefault = rem(48)
const spacingXXXLargeDefault = rem(56)
const spacingXXXXLargeDefault = rem(80)

// Text transforms
const textTransformUppercase = 'uppercase'

const global: ThemeGlobalStyles = {
  fonts: [
    {
      name: 'Roboto',
      styles: [
        {
          src: [
            { format: 'woff2', url: 'https://static.bugfix.es/webfonts/roboto/light.woff2' },
            { format: 'woff', url: 'https://static.bugfix.es/webfonts/roboto/light.woff' },
          ],
          type: 'normal',
          weight: fontWeightLight,
        },
        {
          src: [
            { format: 'woff2', url: 'https://static.bugfix.es/webfonts/roboto/regular.woff2' },
            { format: 'woff', url: 'https://static.bugfix.es/webfonts/roboto/regular.woff' },
          ],
          type: 'normal',
          weight: fontWeightRegular,
        },
        {
          src: [
            { format: 'woff2', url: 'https://static.bugfix.es/webfonts/roboto/medium.woff2' },
            { format: 'woff', url: 'https://static.bugfix.es/webfonts/roboto/medium.woff' },
          ],
          type: 'normal',
          weight: fontWeightMedium,
        },
        {
          src: [
            { format: 'woff2', url: 'https://static.bugfix.es/webfonts/roboto/bold.woff2' },
            { format: 'woff', url: 'https://static.bugfix.es/webfonts/roboto/bold.woff' },
          ],
          type: 'normal',
          weight: fontWeightBold,
        },
      ],
    },
  ],
}

/**
 * Create a theme with the given color scheme.
 *
 * @param displayName - The display name of the theme
 * @param colorScheme - The color scheme of the theme
 * @returns A theme pack object
 */
export function createTheme(displayName: string, colorScheme: ColorScheme): ThemePack { // eslint-disable-line max-lines-per-function
  const {
    colorBrand01,
    colorBrand02,
    colorBrand03,
    colorBrand04,
    colorBrand05,
    colorBrand06,
    colorBrand07,

    colorUi01,
    colorUi02,
    colorUi03,
    colorUi04,
    colorUi05,
    colorUi06,
    colorUi07,
  } = colorScheme

  /* eslint-disable sort-keys */
  /* eslint max-lines: ["error", 700] */
  return {
    global: global,
    meta: {
      displayName,
    },
    primary: {
      scheme: 'primary',

      // Breakpoints
      breakpointDefault: '360px',
      breakpointMedium: '768px',
      breakpointWide: '1080px',
      breakpointExtraWide: '1440px',
      breakpointUltraWide: '1920px',

      // Colors
      colorTextPrimaryAccent: colorBrand01,
      colorTextPrimaryError: primaryColorAction01A,
      colorTextPrimaryMain: colorUi06,
      colorTextPrimaryOff: colorUi05,
      colorTextPrimaryFaded: colorUi04,
      colorTextPrimarySuccess: primaryColorAction02A,
      colorTextPrimaryWarning: primaryColorWarningText,
      colorCategoryLivingCosts: primaryColorCategoryLivingCosts,
      colorCategoryGeneral: primaryColorCategoryGeneral,
      colorCategoryChildcare: primaryColorCategoryChildcare,
      colorCategoryBrandCredit: colorBrand03,
      colorCategoryCredit: primaryColorCategoryCredit,
      colorCategoryExpenses: primaryColorCategoryExpenses,
      colorCategoryHousehold: primaryColorCategoryHousehold,
      colorCategoryInsurance: primaryColorCategoryInsurance,
      colorCategoryOneOff: primaryColorCategoryOneOff,
      colorCategoryOtherIncome: primaryColorCategoryOtherIncome,
      colorCategorySavings: primaryColorCategorySavings,
      colorCategoryGambling: primaryColorCategoryGambling,
      colorCategoryCash: primaryColorCategoryCash,
      colorCategoryRegularIncome: primaryColorCategoryRegularIncome,
      colorCategoryShopping: primaryColorCategoryShopping,
      colorCategoryTransfers: primaryColorCategoryTransfers,
      colorCategoryTransport: primaryColorCategoryTransport,
      colorNotificationWarning: primaryColorWarning,
      colorNotificationError: primaryColorError,

      // Font families
      fontFamilyBodyXSmall: fontFamilyPrimary,
      fontFamilyBodySmall: fontFamilyPrimary,
      fontFamilyBodyRegular: fontFamilyPrimary,
      fontFamilyHeading1: fontFamilyPrimary,
      fontFamilyHeading2: fontFamilyPrimary,
      fontFamilyHeading3: fontFamilyPrimary,
      fontFamilyHeading4: fontFamilyPrimary,
      fontFamilyHeading5: fontFamilyPrimary,

      // Font sizes
      fontSizeBodyXSmallDefault: fontSizeXSmall,
      fontSizeBodySmallDefault: fontSizeSmall,
      fontSizeBodyRegularDefault: fontSizeRegular,
      fontSizeHeading1Default: fontSizeXXXLarge,
      fontSizeHeading2Default: fontSizeXXLarge,
      fontSizeHeading3Default: fontSizeXLarge,
      fontSizeHeading4Default: fontSizeLarge,
      fontSizeHeading5Default: fontSizeXSmall,

      // Font weights
      fontWeightBodyXSmall: fontWeightRegular,
      fontWeightBodyXSmallStrong: fontWeightBold,
      fontWeightBodySmall: fontWeightRegular,
      fontWeightBodySmallStrong: fontWeightBold,
      fontWeightBodyRegular: fontWeightRegular,
      fontWeightBodyRegularStrong: fontWeightMedium,
      fontWeightHeading1: fontWeightLight,
      fontWeightHeading2: fontWeightMedium,
      fontWeightHeading3: fontWeightMedium,
      fontWeightHeading4: fontWeightMedium,
      fontWeightHeading5: fontWeightMedium,

      // Letter spacings
      letterSpacingHeading1Default: letterSpacingCommon,
      letterSpacingHeading2Default: letterSpacingCommon,
      letterSpacingHeading3Default: letterSpacingCommon,
      letterSpacingHeading4Default: letterSpacingCommon,
      letterSpacingHeading5Default: letterSpacingLarge,

      // Line heights
      lineHeightBodyXSmallDefault: lineHeightSmall,
      lineHeightBodySmallDefault: lineHeightRegular,
      lineHeightBodyRegularDefault: lineHeightRegular,
      lineHeightHeading1Default: lineHeightXXXLarge,
      lineHeightHeading2Default: lineHeightXXLarge,
      lineHeightHeading3Default: lineHeightXLarge,
      lineHeightHeading4Default: lineHeightLarge,
      lineHeightHeading5Default: lineHeightSmall,

      // Spacings
      spacingXXXXSmallDefault: spacingXXXXSmallDefault,
      spacingXXXSmallDefault: spacingXXXSmallDefault,
      spacingXXSmallDefault: spacingXXSmallDefault,
      spacingXSmallDefault: spacingXSmallDefault,
      spacingSmallDefault: spacingSmallDefault,
      spacingMediumDefault: spacingMediumDefault,
      spacingLargeDefault: spacingLargeDefault,
      spacingXLargeDefault: spacingXLargeDefault,
      spacingXXLargeDefault: spacingXXLargeDefault,
      spacingXXXLargeDefault: spacingXXXLargeDefault,
      spacingXXXXLargeDefault: spacingXXXXLargeDefault,

      // Text transforms
      textTransformHeading5: textTransformUppercase,

      // AffordabilityDashboardHeader
      colorBackgroundAffordabilityDashboardHeader: colorUi01,
      colorAffordabilityDashboardHeaderBorder: colorUi03,
      fontSizeAffordabilityDashboardHeaderLogoDefault: rem(28),
      thicknessAffordabilityDashboardHeaderBorderDefault: borderWidthCommonDefault, // eslint-disable-line id-length

      // Avatar
      colorBackgroundAvatar: colorUi03,
      colorBorderAvatar: colorUi03,
      borderRadiusRoundAvatarDefault: '50%',
      borderRadiusSquareAvatarDefault: '20%',
      borderWidthAvatarDefault: borderWidthCommonDefault,
      sizeAvatarExtraSmallDefault: rem(22),
      sizeAvatarSmallDefault: rem(32),
      sizeAvatarRegularDefault: rem(40),
      sizeAvatarLargeDefault: rem(60),

      // ButtonPrimary
      colorBackgroundButtonPrimaryDefault: colorBrand01,
      colorBackgroundButtonPrimaryHover: colorBrand02,
      colorBackgroundButtonPrimaryActive: colorBrand03,
      colorBackgroundButtonPrimaryDisabled: colorBrand06,
      colorTextButtonPrimaryDefault: colorUi01,
      colorTextButtonPrimaryHover: colorUi01,
      colorTextButtonPrimaryActive: colorUi01,
      colorTextButtonPrimaryDisabled: colorUi01,
      colorBorderButtonPrimaryDefault: colorBrand01,
      colorBorderButtonPrimaryHover: colorBrand02,
      colorBorderButtonPrimaryActive: colorBrand03,
      colorBorderButtonPrimaryDisabled: colorBrand06,
      borderRadiusButtonPrimaryDefault: borderRadiusCommonDefault,
      borderWidthButtonPrimaryDefault: borderWidthCommonDefault,
      outlineWidthButtonPrimaryDefault: outlineWidthCommonDefault,
      fontFamilyButtonPrimary: fontFamilyPrimary,
      fontSizeButtonPrimaryDefault: fontSizeSmall,
      fontWeightButtonPrimary: fontWeightBold,
      letterSpacingButtonPrimaryDefault: letterSpacingMedium,
      lineHeightButtonPrimaryDefault: lineHeightSmall,
      paddingButtonPrimaryCompactDefault: paddingButtonCompactDefault,
      paddingButtonPrimaryDefault: paddingButtonDefault,
      textTransformButtonPrimary: textTransformUppercase,

      // TextButtonPrimary
      colorTextTextButtonPrimaryDefault: colorBrand01,
      colorTextTextButtonPrimaryHover: colorBrand02,
      colorTextTextButtonPrimaryActive: colorBrand03,
      colorTextTextButtonPrimaryDisabled: colorBrand06,
      fontFamilyTextButtonPrimary: fontFamilyPrimary,
      fontSizeTextButtonPrimaryDefault: fontSizeSmall,
      fontWeightTextButtonPrimary: fontWeightBold,
      letterSpacingTextButtonPrimaryDefault: letterSpacingMedium,
      lineHeightTextButtonPrimaryDefault: lineHeightSmall,
      textTransformTextButtonPrimary: textTransformUppercase,
      underlineWidthTextButtonPrimaryDefault: outlineWidthCommonDefault,

      // ButtonSecondary
      colorBackgroundButtonSecondaryDefault: colorUi01,
      colorBackgroundButtonSecondaryHover: colorBrand04,
      colorBackgroundButtonSecondaryActive: colorBrand05,
      colorBackgroundButtonSecondaryDisabled: colorUi01,
      colorTextButtonSecondaryDefault: colorBrand01,
      colorTextButtonSecondaryHover: colorBrand01,
      colorTextButtonSecondaryActive: colorBrand01,
      colorTextButtonSecondaryDisabled: colorBrand06,
      colorBorderButtonSecondaryDefault: colorBrand01,
      colorBorderButtonSecondaryHover: colorBrand01,
      colorBorderButtonSecondaryActive: colorBrand01,
      colorBorderButtonSecondaryDisabled: colorBrand06,
      borderRadiusButtonSecondaryDefault: borderRadiusCommonDefault,
      borderWidthButtonSecondaryDefault: borderWidthCommonDefault,
      outlineWidthButtonSecondaryDefault: outlineWidthCommonDefault,
      fontFamilyButtonSecondary: fontFamilyPrimary,
      fontSizeButtonSecondaryDefault: fontSizeSmall,
      fontWeightButtonSecondary: fontWeightBold,
      letterSpacingButtonSecondaryDefault: letterSpacingMedium,
      lineHeightButtonSecondaryDefault: lineHeightSmall,
      paddingButtonSecondaryCompactDefault: paddingButtonCompactDefault,
      paddingButtonSecondaryDefault: paddingButtonDefault,
      textTransformButtonSecondary: textTransformUppercase,

      // ButtonDestructive
      colorBackgroundButtonDestructiveDefault: colorUi01,
      colorBackgroundButtonDestructiveHover: colorUi03,
      colorBackgroundButtonDestructiveActive: colorUi04,
      colorBackgroundButtonDestructiveDisabled: colorUi01,
      colorTextButtonDestructiveDefault: primaryColorAction01A,
      colorTextButtonDestructiveHover: primaryColorAction01A,
      colorTextButtonDestructiveActive: primaryColorAction01A,
      colorTextButtonDestructiveDisabled: primaryColorAction01B,
      colorBorderButtonDestructiveDefault: colorUi04,
      colorBorderButtonDestructiveHover: colorUi04,
      colorBorderButtonDestructiveActive: colorUi04,
      colorBorderButtonDestructiveDisabled: colorUi03,
      borderRadiusButtonDestructiveDefault: borderRadiusCommonDefault,
      borderWidthButtonDestructiveDefault: borderWidthCommonDefault,
      outlineWidthButtonDestructiveDefault: outlineWidthCommonDefault,
      fontFamilyButtonDestructive: fontFamilyPrimary,
      fontSizeButtonDestructiveDefault: fontSizeSmall,
      fontWeightButtonDestructive: fontWeightBold,
      letterSpacingButtonDestructiveDefault: letterSpacingMedium,
      lineHeightButtonDestructiveDefault: lineHeightSmall,
      paddingButtonDestructiveCompactDefault: paddingButtonCompactDefault,
      paddingButtonDestructiveDefault: paddingButtonDefault,
      textTransformButtonDestructive: textTransformUppercase,

      // TextButtonDestructive
      colorTextTextButtonDestructiveDefault: primaryColorAction01A,
      colorTextTextButtonDestructiveHover: primaryColorAction01C,
      colorTextTextButtonDestructiveActive: primaryColorAction01D,
      colorTextTextButtonDestructiveDisabled: primaryColorAction01B,
      fontFamilyTextButtonDestructive: fontFamilyPrimary,
      fontSizeTextButtonDestructiveDefault: fontSizeSmall,
      fontWeightTextButtonDestructive: fontWeightBold,
      letterSpacingTextButtonDestructiveDefault: letterSpacingMedium,
      lineHeightTextButtonDestructiveDefault: lineHeightSmall,
      textTransformTextButtonDestructive: textTransformUppercase,
      underlineWidthTextButtonDestructiveDefault: outlineWidthCommonDefault,

      // Card
      colorBackgroundCard: colorUi01,
      paddingCardDefault: paddingCommonDefault,
      borderRadiusCardDefault: borderRadiusCommonDefault,
      boxShadowCardDefault: boxShadowCommonDefault,

      // Checkbox
      colorBackgroundCheckboxDefault: colorUi01,
      colorBackgroundCheckboxError: colorUi01,
      colorBackgroundCheckboxDisabled: colorUi01,
      colorBackgroundCheckboxHover: colorUi03,
      colorBackgroundCheckboxCheckedDefault: colorBrand01,
      colorBackgroundCheckboxCheckedError: primaryColorAction01A,
      colorBackgroundCheckboxCheckedDisabled: colorBrand06,
      colorBackgroundCheckboxCheckedHover: colorBrand02,
      colorCheckboxCheckedDefault: colorUi01,
      colorCheckboxCheckedError: colorUi01,
      colorCheckboxCheckedDisabled: colorUi01,
      colorCheckboxCheckedHover: colorUi01,
      colorBorderCheckboxDefault: colorUi04,
      colorBorderCheckboxError: primaryColorAction01A,
      colorBorderCheckboxDisabled: colorUi03,
      colorBorderCheckboxHover: colorUi04,
      colorBorderCheckboxCheckedDefault: colorBrand01,
      colorBorderCheckboxCheckedError: primaryColorAction01A,
      colorBorderCheckboxCheckedDisabled: colorBrand06,
      colorBorderCheckboxCheckedHover: colorBrand02,
      borderRadiusCheckboxDefault: borderRadiusSmallDefault,
      borderWidthCheckboxDefault: borderWidthCommonDefault,
      outlineWidthCheckboxDefault: outlineWidthCommonDefault,
      paddingCheckboxDefault: rem(0),

      // ColumnChart
      borderRadiusColumnChartItemDefault: `${borderRadiusCommonDefault} ${borderRadiusCommonDefault} 0 0`,
      borderRadiusColumnChartColorLegendDefault: '50%',
      colorColumnChartItem1: colorBrand02,
      colorColumnChartItem2: colorBrand01,
      sizeColumnChartColorLegendDefault: rem(12),

      // Constrictor
      maxWidthConstrictorDefault: rem(960),
      maxWidthConstrictorNarrowDefault: rem(466),

      // DetailList
      colorDetailListBorder: colorUi03,
      fontFamilyDetailListDefault: fontFamilyPrimary,
      fontSizeDetailListHeaderDefault: fontSizeLarge,
      fontSizeDetailListRegularDefault: fontSizeRegular,
      fontWeightDetailListHeaderDefault: fontWeightMedium,
      fontWeightDetailListRegularDefault: fontWeightRegular,
      fontWeightDetailListStrongDefault: fontWeightBold,
      lineHeightDetailListHeaderDefault: lineHeightLarge,
      lineHeightDetailListRegularDefault: lineHeightRegular,
      thicknessDetailListBorderDefault: borderWidthCommonDefault,

      // Dialog
      colorBackgroundDialog: colorUi01,
      paddingDialogDefault: paddingCommonDefault,
      borderRadiusDialogDefault: borderRadiusCommonDefault,
      boxShadowDialogDefault: boxShadowCommonDefault,

      // IconButton
      colorIconButtonDefault: colorUi05,
      colorIconButtonHover: colorUi06,
      colorIconButtonActive: colorUi07,
      colorIconButtonDisabled: colorUi04,
      borderRadiusIconButtonDefault: borderRadiusCommonDefault,
      borderWidthIconButtonDefault: outlineWidthCommonDefault,
      paddingIconButtonDefault: paddingIconButtonDefault,

      // Input
      colorBackgroundInputDefault: colorUi01,
      colorBackgroundInputActive: colorUi01,
      colorBackgroundInputError: colorUi01,
      colorBackgroundInputDisabled: colorUi01,
      colorTextInputDefault: colorUi06,
      colorTextInputActive: colorUi06,
      colorTextInputError: colorUi06,
      colorTextInputDisabled: colorUi05,
      colorBorderInputDefault: colorUi04,
      colorBorderInputActive: colorUi04,
      colorBorderInputError: primaryColorAction01A,
      colorBorderInputDisabled: colorUi03,
      borderRadiusInputDefault: borderRadiusCommonDefault,
      borderWidthInputDefault: borderWidthCommonDefault,
      outlineWidthInputDefault: outlineWidthCommonDefault,
      fontFamilyInput: fontFamilyPrimary,
      fontSizeInputDefault: fontSizeRegular,
      fontWeightInput: fontWeightRegular,
      letterSpacingInputDefault: letterSpacingSmall,
      lineHeightInputDefault: lineHeightRegular,
      paddingInputDefault: `${paddingInputVerticalDefault} ${paddingInputHorizontalDefault}`,
      paddingInputHorizontalDefault: paddingInputHorizontalDefault,
      paddingInputVerticalDefault: paddingInputVerticalDefault,

      // InteractiveListItem
      colorBackgroundInteractiveListItemDefault: colorTransparent,
      colorBackgroundInteractiveListItemActive: colorUi04,
      colorBackgroundInteractiveListItemDisabled: colorTransparent,
      colorBackgroundInteractiveListItemHover: colorUi03,
      borderRadiusInteractiveListItemDefault: borderRadiusCommonDefault,
      opacityInteractiveListItemDisabled: 0.5,
      outlineWidthInteractiveListItemDefault: outlineWidthCommonDefault,
      paddingInteractiveListItemDefault: paddingInteractiveListItemDefault,

      // Divider
      colorDivider: colorUi03,
      thicknessDividerDefault: rem(1),
      thicknessDividerStrongDefault: rem(2),

      // Grid
      spacingGridColDefault: rem(20),
      spacingGridRowDefault: rem(20),

      // IconRoundel
      colorBackgroundIconRoundel: colorBrand07,
      sizeIconRoundelIconDefault: fontSizeXXXXLarge,
      sizeIconRoundelDefault: rem(120),

      // Notification
      outlineWidthNotificationDefault: outlineWidthCommonDefault,
      paddingNotificationDefault: paddingNotificationDefault,

      // Padder
      paddingPadderDefault: paddingCommonDefault,
      paddingPadderWide: paddingCommonWide,

      // PoweredByBugfixes component styles
      letterSpacingPoweredByBugfixesDefault: letterSpacingLarge,
      textTransformPoweredByBugfixes: textTransformUppercase,

      // ProgressBar component styles
      colorProgressBar: primaryColorSuccess,
      colorBackgroundProgressBar: colorUi03,
      borderRadiusProgressBarDefault: rem(4),
      thicknessProgressBarDefault: rem(8),

      // Section
      colorBackgroundSection: colorUi01,
      colorBackgroundSectionOff: colorUi02,
      colorBackgroundSectionBrand: colorBrand06,

      // Spinner
      colorSpinner: colorBrand01,
      sizeSpinnerDefault: rem(100),

      // Table
      colorBackgroundTableRowEven: colorUi01,
      colorBackgroundTableRowOdd: colorUi02,
      colorTableBorder: colorUi03,
      fontSizeTableHeadDefault: fontSizeRegular,
      fontSizeTableBodyDefault: fontSizeRegular,
      fontSizeTableBodyLevel2Default: fontSizeSmall,
      fontSizeTableFooterDefault: fontSizeLarge,
      fontFamilyTableHead: fontFamilyPrimary,
      fontFamilyTableBody: fontFamilyPrimary,
      fontFamilyTableFooter: fontFamilyPrimary,
      fontWeightTableHead: fontWeightBold,
      fontWeightTableHeadStrong: fontWeightBold,
      fontWeightTableBody: fontWeightRegular,
      fontWeightTableBodyStrong: fontWeightMedium,
      fontWeightTableFooter: fontWeightRegular,
      fontWeightTableFooterStrong: fontWeightMedium,
      indentTableBodyLevel2Default: spacingXXXXLargeDefault,
      lineHeightTableHeadDefault: lineHeightRegular,
      lineHeightTableBodyDefault: lineHeightRegular,
      lineHeightTableFooterDefault: lineHeightLarge,
      paddingTableHeadDefault: paddingTableHeadDefault,
      paddingTableBodyDefault: paddingTableBodyDefault,
      paddingTableBodyLevel2Default: paddingTableBodyLevel2Default,
      paddingTableFooterDefault: paddingTableFooterDefault,
      thicknessTableBorderDefault: borderWidthCommonDefault,
    },
    secondary: {
      scheme: 'secondary',

      // Avatar
      colorBackgroundAvatar: colorUi03,
      colorBorderAvatar: colorUi03,

      // Colors
      colorTextPrimaryAccent: colorBrand06,
      colorTextPrimaryFaded: colorUi05,
      colorTextPrimaryMain: colorUi01,
      colorTextPrimaryOff: colorUi03,

      // TextButtonPrimary
      colorTextTextButtonPrimaryActive: colorBrand06,
      colorTextTextButtonPrimaryDefault: colorUi01,
      colorTextTextButtonPrimaryDisabled: colorBrand01,
      colorTextTextButtonPrimaryHover: colorBrand05,

      // Section
      colorBackgroundSection: colorUi01,
      colorBackgroundSectionOff: colorUi06,
      colorBackgroundSectionBrand: colorBrand03,
    },
  }
  /* eslint-enable sort-keys */
}
