const theme = {
  colors: {
    primary: "#0D1B2A",
    secondary: "#E07A5F",

    background: "#F8F5F0",
    surface: "#FFFFFF",

    text: "#0D1B2A",
    textSecondary: "#5F6B7A",

    border: "#E5E7EB",

    success: "#3FA66B",
    warning: "#F4B942",
    error: "#D64545",
  },

  typography: {
    hero: "clamp(3.4rem, 6vw, 5.2rem)",
    h1: "3.2rem",
    h2: "2.5rem",
    h3: "1.8rem",
    body: "1.05rem",
    small: ".9rem",

    weightLight: 300,
    weightRegular: 400,
    weightMedium: 500,
    weightSemibold: 600,
    weightBold: 700,
    weightExtraBold: 800,
  },

  spacing: {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "48px",
    xxl: "72px",
    section: "120px",
  },

  radius: {
    sm: "8px",
    md: "16px",
    lg: "24px",
    pill: "999px",
  },

  shadows: {
    card: "0 20px 50px rgba(13,27,42,.08)",
    button: "0 10px 30px rgba(13,27,42,.15)",
    hover: "0 25px 60px rgba(13,27,42,.12)",
  },

  layout: {
    maxWidth: "1320px",
    navbarHeight: "88px",
    contentWidth: "720px",
  },

  transition: ".25s ease",
};

export default theme;