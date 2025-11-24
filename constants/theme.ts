import { Platform } from "react-native";

const primaryColor = "#355196";
const secondaryColor = "#FFFFFF";
const accentColor = "#59CECF";
const backgroundCardColor = "#F0F4F9";
const textXXL = 70;
const textXL = 56;
const texXL = 26;
const textM = 22;
const textS = 16;
const textXS = 14;
const textXXS = 12;

export const theme = {
  headerLogo: {
    fontSize: textM,
    color: accentColor,
    fontWeight: "600" as const,
  },
  headerProBtn: {
    width: 114,
    height: 43,
    backgroundColor: secondaryColor,
    borderRadius: 100,
    justifyContent: "center" as const,
    alignItems: "center" as const,
  },
  heroTitle: {
    fontSize: textM,
    color: secondaryColor,
    fontWeight: "700" as const,
  },
  heroPressure: {
    fontSize: textXXL,
    color: accentColor,
    fontWeight: "700" as const,
  },
  heroDate: {
    fontSize: textM,
    fontWeight: "700" as const,
    marginTop: 8,
  },
  textStackTitle: {
    fontSize: textXXS,
    color: secondaryColor,
    fontWeight: "600" as const,
    textTransform: "uppercase" as const,
  },
  saveTextTitle: {
    fontSize: texXL,
    fontWeight: "700" as const,
    color: primaryColor,
    marginTop: 21,
    marginBottom: 8,
    textTransform: "uppercase" as const,
    textAlign: "center" as const,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
