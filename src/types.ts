export type ThemeFontDisplay = 'auto' | 'block' | 'swap' | 'fallback' | 'optional'

export type ThemeFontFormat = 'woff' | 'woff2'

export type ThemeFontSrc = {
  format: ThemeFontFormat,
  url: string,
}

export type ThemeFontStretch = 'ultra-condensed' | 'extra-condensed' | 'condensed' | 'semi-condensed' | 'normal' | 'semi-expanded' | 'expanded' | 'extra-expanded' | 'ultra-expanded'

export type ThemeFontStyleType = 'normal' | 'italic' | 'oblique'

export type ThemeFontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

export type ThemeTextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' | 'full-size-kana'

export type ThemeFontStyle = {
  src: ThemeFontSrc[],
  stretch?: ThemeFontStretch,
  type?: ThemeFontStyleType,
  weight?: ThemeFontWeight,
}

export type ThemeFont = {
  display?: ThemeFontDisplay,
  name: string,
  styles: ThemeFontStyle[],
}

export type ThemeGlobalStyles = {
  fonts?: ThemeFont[],
}

export type ThemeMeta = {
  displayName: string,
}

export type Theme = {
  scheme: 'primary' | 'secondary',

  // Breakpoints
  breakpointDefault: string,
  breakpointMedium: string,
  breakpointWide: string,
  breakpointExtraWide: string,
  breakpointUltraWide: string,

  // Colors
  colorTextPrimaryAccent: string,
  colorTextPrimaryError: string,
  colorTextPrimaryMain: string,
  colorTextPrimaryOff: string,
  colorTextPrimaryFaded: string,
  colorTextPrimarySuccess: string,
  colorTextPrimaryWarning: string,

  colorCategoryLivingCosts: string,
  colorCategoryGeneral: string,
  colorCategoryChildcare: string,
  colorCategoryBrandCredit: string,
  colorCategoryCredit: string,
  colorCategoryExpenses: string,
  colorCategoryHousehold: string,
  colorCategoryInsurance: string,
  colorCategoryOneOff: string,
  colorCategoryOtherIncome: string,
  colorCategorySavings: string,
  colorCategoryGambling: string,
  colorCategoryCash: string,
  colorCategoryRegularIncome: string,
  colorCategoryShopping: string,
  colorCategoryTransfers: string,
  colorCategoryTransport: string,

  colorNotificationError: string,
  colorNotificationWarning: string,

  // Font families
  fontFamilyBodyXSmall?: string,
  fontFamilyBodySmall?: string,
  fontFamilyBodyRegular?: string,
  fontFamilyHeading1?: string,
  fontFamilyHeading2?: string,
  fontFamilyHeading3?: string,
  fontFamilyHeading4?: string,
  fontFamilyHeading5?: string,
  fontFamilyHeading6?: string,

  // Font sizes
  fontSizeBodyXSmallDefault?: string,
  fontSizeBodySmallDefault?: string,
  fontSizeBodyRegularDefault?: string,
  fontSizeHeading1Default?: string,
  fontSizeHeading2Default?: string,
  fontSizeHeading3Default?: string,
  fontSizeHeading4Default?: string,
  fontSizeHeading5Default?: string,
  fontSizeHeading6Default?: string,

  // Font weights
  fontWeightBodyXSmall?: ThemeFontWeight,
  fontWeightBodyXSmallStrong?: ThemeFontWeight,
  fontWeightBodySmall?: ThemeFontWeight,
  fontWeightBodySmallStrong?: ThemeFontWeight,
  fontWeightBodyRegular?: ThemeFontWeight,
  fontWeightBodyRegularStrong?: ThemeFontWeight,
  fontWeightHeading1?: ThemeFontWeight,
  fontWeightHeading2?: ThemeFontWeight,
  fontWeightHeading3?: ThemeFontWeight,
  fontWeightHeading4?: ThemeFontWeight,
  fontWeightHeading5?: ThemeFontWeight,
  fontWeightHeading6?: ThemeFontWeight,

  // Letter spacings
  letterSpacingHeading1Default?: string,
  letterSpacingHeading2Default?: string,
  letterSpacingHeading3Default?: string,
  letterSpacingHeading4Default?: string,
  letterSpacingHeading5Default?: string,
  letterSpacingHeading6Default?: string,

  // Line heights
  lineHeightBodyXSmallDefault?: string,
  lineHeightBodySmallDefault?: string,
  lineHeightBodyRegularDefault?: string,
  lineHeightHeading1Default?: string,
  lineHeightHeading2Default?: string,
  lineHeightHeading3Default?: string,
  lineHeightHeading4Default?: string,
  lineHeightHeading5Default?: string,
  lineHeightHeading6Default?: string,

  // Text transforms
  textTransformHeading1?: ThemeTextTransform,
  textTransformHeading2?: ThemeTextTransform,
  textTransformHeading3?: ThemeTextTransform,
  textTransformHeading4?: ThemeTextTransform,
  textTransformHeading5?: ThemeTextTransform,
  textTransformHeading6?: ThemeTextTransform,

  // Spacings
  spacingXXXXSmallDefault: string,
  spacingXXXSmallDefault: string,
  spacingXXSmallDefault: string,
  spacingXSmallDefault: string,
  spacingSmallDefault: string,
  spacingMediumDefault: string,
  spacingLargeDefault: string,
  spacingXLargeDefault: string,
  spacingXXLargeDefault: string,
  spacingXXXLargeDefault: string,
  spacingXXXXLargeDefault: string,

  // Component specific styles

  // AffordabilityDashboardHeader
  colorBackgroundAffordabilityDashboardHeader?: string,
  colorAffordabilityDashboardHeaderBorder?: string,
  fontSizeAffordabilityDashboardHeaderLogoDefault?: string,
  thicknessAffordabilityDashboardHeaderBorderDefault?: string,

  // Avatar
  colorBackgroundAvatar?: string,
  colorBorderAvatar?: string,
  borderRadiusRoundAvatarDefault: string,
  borderRadiusSquareAvatarDefault: string,
  borderWidthAvatarDefault?: string,
  sizeAvatarExtraSmallDefault: string,
  sizeAvatarSmallDefault: string,
  sizeAvatarRegularDefault: string,
  sizeAvatarLargeDefault: string,

  // ButtonPrimary
  colorBackgroundButtonPrimaryDefault: string,
  colorBackgroundButtonPrimaryHover: string,
  colorBackgroundButtonPrimaryActive: string,
  colorBackgroundButtonPrimaryDisabled: string,
  colorTextButtonPrimaryDefault: string,
  colorTextButtonPrimaryHover: string,
  colorTextButtonPrimaryActive: string,
  colorTextButtonPrimaryDisabled: string,
  colorBorderButtonPrimaryDefault: string,
  colorBorderButtonPrimaryHover: string,
  colorBorderButtonPrimaryActive: string,
  colorBorderButtonPrimaryDisabled: string,
  borderRadiusButtonPrimaryDefault?: string,
  borderWidthButtonPrimaryDefault?: string,
  outlineWidthButtonPrimaryDefault: string,
  fontFamilyButtonPrimary?: string,
  fontSizeButtonPrimaryDefault?: string,
  fontWeightButtonPrimary?: ThemeFontWeight,
  letterSpacingButtonPrimaryDefault?: string,
  lineHeightButtonPrimaryDefault?: string,
  paddingButtonPrimaryCompactDefault: string,
  paddingButtonPrimaryDefault: string,
  textTransformButtonPrimary?: ThemeTextTransform,

  // TextButtonPrimary
  colorTextTextButtonPrimaryDefault: string,
  colorTextTextButtonPrimaryHover: string,
  colorTextTextButtonPrimaryActive: string,
  colorTextTextButtonPrimaryDisabled: string,
  fontFamilyTextButtonPrimary?: string,
  fontSizeTextButtonPrimaryDefault?: string,
  fontWeightTextButtonPrimary?: ThemeFontWeight,
  letterSpacingTextButtonPrimaryDefault?: string,
  lineHeightTextButtonPrimaryDefault?: string,
  textTransformTextButtonPrimary?: ThemeTextTransform,
  underlineWidthTextButtonPrimaryDefault: string,

  // ButtonSecondary
  colorBackgroundButtonSecondaryDefault: string,
  colorBackgroundButtonSecondaryHover: string,
  colorBackgroundButtonSecondaryActive: string,
  colorBackgroundButtonSecondaryDisabled: string,
  colorTextButtonSecondaryDefault: string,
  colorTextButtonSecondaryHover: string,
  colorTextButtonSecondaryActive: string,
  colorTextButtonSecondaryDisabled: string,
  colorBorderButtonSecondaryDefault: string,
  colorBorderButtonSecondaryHover: string,
  colorBorderButtonSecondaryActive: string,
  colorBorderButtonSecondaryDisabled: string,
  borderRadiusButtonSecondaryDefault?: string,
  borderWidthButtonSecondaryDefault?: string,
  outlineWidthButtonSecondaryDefault?: string,
  fontFamilyButtonSecondary?: string,
  fontSizeButtonSecondaryDefault?: string,
  fontWeightButtonSecondary?: ThemeFontWeight,
  letterSpacingButtonSecondaryDefault?: string,
  lineHeightButtonSecondaryDefault?: string,
  paddingButtonSecondaryCompactDefault: string,
  paddingButtonSecondaryDefault: string,
  textTransformButtonSecondary?: ThemeTextTransform,

  // ButtonDestructive
  colorBackgroundButtonDestructiveDefault: string,
  colorBackgroundButtonDestructiveHover: string,
  colorBackgroundButtonDestructiveActive: string,
  colorBackgroundButtonDestructiveDisabled: string,
  colorTextButtonDestructiveDefault: string,
  colorTextButtonDestructiveHover: string,
  colorTextButtonDestructiveActive: string,
  colorTextButtonDestructiveDisabled: string,
  colorBorderButtonDestructiveDefault: string,
  colorBorderButtonDestructiveHover: string,
  colorBorderButtonDestructiveActive: string,
  colorBorderButtonDestructiveDisabled: string,
  borderRadiusButtonDestructiveDefault?: string,
  borderWidthButtonDestructiveDefault?: string,
  outlineWidthButtonDestructiveDefault: string,
  fontFamilyButtonDestructive?: string,
  fontSizeButtonDestructiveDefault?: string,
  fontWeightButtonDestructive?: ThemeFontWeight,
  letterSpacingButtonDestructiveDefault?: string,
  lineHeightButtonDestructiveDefault?: string,
  paddingButtonDestructiveCompactDefault: string,
  paddingButtonDestructiveDefault: string,
  textTransformButtonDestructive?: ThemeTextTransform,

  // TextButtonDestructive
  colorTextTextButtonDestructiveDefault: string,
  colorTextTextButtonDestructiveHover: string,
  colorTextTextButtonDestructiveActive: string,
  colorTextTextButtonDestructiveDisabled: string,
  fontFamilyTextButtonDestructive?: string,
  fontSizeTextButtonDestructiveDefault?: string,
  fontWeightTextButtonDestructive?: ThemeFontWeight,
  letterSpacingTextButtonDestructiveDefault?: string,
  lineHeightTextButtonDestructiveDefault?: string,
  textTransformTextButtonDestructive?: ThemeTextTransform,
  underlineWidthTextButtonDestructiveDefault: string,

  // Card
  colorBackgroundCard?: string,
  paddingCardDefault?: string,
  borderRadiusCardDefault?: string,
  boxShadowCardDefault?: string,

  // Checkbox
  colorBackgroundCheckboxDefault: string,
  colorBackgroundCheckboxError: string,
  colorBackgroundCheckboxDisabled: string,
  colorBackgroundCheckboxHover: string,
  colorBackgroundCheckboxCheckedDefault: string,
  colorBackgroundCheckboxCheckedError: string,
  colorBackgroundCheckboxCheckedDisabled: string,
  colorBackgroundCheckboxCheckedHover: string,
  colorCheckboxCheckedDefault: string,
  colorCheckboxCheckedError: string,
  colorCheckboxCheckedDisabled: string,
  colorCheckboxCheckedHover: string,
  colorBorderCheckboxDefault: string,
  colorBorderCheckboxError: string,
  colorBorderCheckboxDisabled: string,
  colorBorderCheckboxHover: string,
  colorBorderCheckboxCheckedDefault: string,
  colorBorderCheckboxCheckedError: string,
  colorBorderCheckboxCheckedDisabled: string,
  colorBorderCheckboxCheckedHover: string,
  borderRadiusCheckboxDefault?: string,
  borderWidthCheckboxDefault?: string,
  outlineWidthCheckboxDefault: string,
  paddingCheckboxDefault?: string,

  // ColumnChart
  borderRadiusColumnChartItemDefault?: string,
  borderRadiusColumnChartColorLegendDefault?: string,
  colorColumnChartItem1: string,
  colorColumnChartItem2: string,
  sizeColumnChartColorLegendDefault: string,

  // Constrictor
  maxWidthConstrictorDefault: string,
  maxWidthConstrictorNarrowDefault: string,

  // DetailList
  colorDetailListBorder: string,
  fontFamilyDetailListDefault: string,
  fontSizeDetailListHeaderDefault: string,
  fontSizeDetailListRegularDefault: string,
  fontWeightDetailListHeaderDefault: number,
  fontWeightDetailListRegularDefault: number,
  fontWeightDetailListStrongDefault: number,
  lineHeightDetailListHeaderDefault: string,
  lineHeightDetailListRegularDefault: string,
  thicknessDetailListBorderDefault: string,

  // Dialog
  colorBackgroundDialog: string,
  paddingDialogDefault?: string,
  borderRadiusDialogDefault?: string,
  boxShadowDialogDefault?: string,

  // IconButton
  colorIconButtonDefault: string,
  colorIconButtonHover: string,
  colorIconButtonActive: string,
  colorIconButtonDisabled: string,
  borderRadiusIconButtonDefault?: string,
  borderWidthIconButtonDefault?: string,
  paddingIconButtonDefault?: string,

  // Input
  colorBackgroundInputDefault: string,
  colorBackgroundInputActive: string,
  colorBackgroundInputError: string,
  colorBackgroundInputDisabled: string,
  colorTextInputDefault: string,
  colorTextInputActive: string,
  colorTextInputError: string,
  colorTextInputDisabled: string,
  colorBorderInputDefault: string,
  colorBorderInputActive: string,
  colorBorderInputError: string,
  colorBorderInputDisabled: string,
  borderRadiusInputDefault?: string,
  borderWidthInputDefault?: string,
  outlineWidthInputDefault: string,
  fontFamilyInput?: string,
  fontSizeInputDefault?: string,
  fontWeightInput?: ThemeFontWeight,
  letterSpacingInputDefault?: string,
  lineHeightInputDefault?: string,
  paddingInputDefault?: string,
  paddingInputHorizontalDefault?: string,
  paddingInputVerticalDefault?: string,

  // InteractiveListItem
  colorBackgroundInteractiveListItemDefault: string,
  colorBackgroundInteractiveListItemActive: string,
  colorBackgroundInteractiveListItemDisabled: string,
  colorBackgroundInteractiveListItemHover: string,
  borderRadiusInteractiveListItemDefault?: string,
  opacityInteractiveListItemDisabled: number,
  outlineWidthInteractiveListItemDefault: string,
  paddingInteractiveListItemDefault?: string,

  // Divider
  colorDivider: string,
  thicknessDividerDefault: string,
  thicknessDividerStrongDefault: string,

  // Grid
  spacingGridColDefault?: string,
  spacingGridRowDefault?: string,

  // IconRoundel
  colorBackgroundIconRoundel: string,
  sizeIconRoundelIconDefault: string,
  sizeIconRoundelDefault: string,

  // Notification
  outlineWidthNotificationDefault: string,
  paddingNotificationDefault: string,

  // Padder
  paddingPadderDefault: string,
  paddingPadderWide: string,

  // PoweredByBugfixes
  letterSpacingPoweredByBugfixesDefault?: string,
  textTransformPoweredByBugfixes?: ThemeTextTransform,

  // ProgressBar
  colorBackgroundProgressBar: string,
  colorProgressBar: string,
  borderRadiusProgressBarDefault?: string,
  thicknessProgressBarDefault: string,

  // Section
  colorBackgroundSection?: string,
  colorBackgroundSectionOff: string,
  colorBackgroundSectionBrand: string,

  // Spinner
  colorSpinner: string,
  sizeSpinnerDefault: string,

  // Table
  colorBackgroundTableRowEven: string,
  colorBackgroundTableRowOdd: string,
  colorTableBorder: string,
  fontSizeTableHeadDefault?: string,
  fontSizeTableBodyDefault?: string,
  fontSizeTableBodyLevel2Default?: string,
  fontSizeTableFooterDefault?: string,
  fontFamilyTableHead?: string,
  fontFamilyTableBody?: string,
  fontFamilyTableFooter?: string,
  fontWeightTableHead?: ThemeFontWeight,
  fontWeightTableHeadStrong?: ThemeFontWeight,
  fontWeightTableBody?: ThemeFontWeight,
  fontWeightTableBodyStrong?: ThemeFontWeight,
  fontWeightTableFooter?: ThemeFontWeight,
  fontWeightTableFooterStrong?: ThemeFontWeight,
  indentTableBodyLevel2Default?: string,
  lineHeightTableHeadDefault?: string,
  lineHeightTableBodyDefault?: string,
  lineHeightTableFooterDefault?: string,
  paddingTableHeadDefault?: string,
  paddingTableBodyDefault?: string,
  paddingTableBodyLevel2Default?: string,
  paddingTableFooterDefault?: string,
  thicknessTableBorderDefault: string,
}

export type ThemePack = {
  global: ThemeGlobalStyles,
  meta: ThemeMeta,
  primary: Theme & {
    scheme: 'primary',
  },
  secondary: Partial<Theme> & {
    scheme: 'secondary',
  },
}
