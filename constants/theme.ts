import { Platform } from "react-native";

const primaryColor = "#355196";
const secondaryColor = "#FFFFFF";
const accentColor = "#59CECF";
const labelColor = "#364A5F";
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
    height: 43,
    backgroundColor: secondaryColor,
    borderRadius: 100,
    flexDirection: "row" as const,
    justifyContent: "center" as const,
    alignItems: "center" as const,
    paddingHorizontal: 12,
    gap: 8,
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
  pressableCard: {
    backgroundColor: backgroundCardColor,
    borderRadius: 20,
    justifyContent: "center" as const,
    alignItems: "center" as const,
    padding: 16,
    width: "100%" as const,
    borderWidth: 1,
    borderColor: "#C6C9CC",
    gap: 32,
  },
  card: {
    backgroundColor: backgroundCardColor,
    borderRadius: 20,
    justifyContent: "center" as const,
    alignItems: "center" as const,
    padding: 16,
    width: "100%" as const,
    borderWidth: 1,
    borderColor: "#C6C9CC",
  },
  inputHome: {
    width: 191,
    height: 78,
    backgroundColor: secondaryColor,
    borderWidth: 1,
    borderColor: "#C6C9CC",
    borderRadius: 12,
    fontSize: textM,
    paddingHorizontal: 16,
    color: labelColor,
    textAlign: "center" as const,
  },
  labelTextHome: {
    fontSize: textS,
    color: labelColor,
    marginBottom: 16,
    fontWeight: "600" as const,
  },
  button: {
    width: 262,
    height: 56,
    justifyContent: "center" as const,
    alignItems: "center" as const,
    backgroundColor: "#355196" as const,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#8CBFFF" as const,
  },
  textForButton: {
    fontSize: textM,
    color: secondaryColor,
    fontWeight: "600" as const,
    textTransform: "uppercase" as const,
  },
};
export const Colors = {
  light: {
    text: primaryColor,
    background: secondaryColor,
    tint: accentColor,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: accentColor,
  },
  dark: {
    text: secondaryColor,
    background: "#0D1B2A",
    tint: accentColor,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: accentColor,
  },
} as const;

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
