// theme.js
export const theme = {
    // standard black https://www.color-hex.com/color/0d0c1d
    primaryDark: '#0D0C1D',
    // slightly blue off-white color https://www.color-hex.com/color/effffa
    primaryLight: 'white',

    primaryHover: '#343078',
    themeRed: "#b00",
    themeBlack: "#161e26",
    themeGray: "#DFE1E1",

    // Screen sizes:
    screenSml: '360px',
    screenMed: '750px',
    screenLrg: '950px',
    screenXLrg: '1025px'
}

// Active styles for react router link
export const RRLActiveStyle = {
    color: `${theme.themeRed}`,
    fontWeight: "bold",
    borderBottom: `2px solid ${theme.themeRed}`
}

// Styles for Header links (using react router)
export const HeaderLinkStyle = {
    backgroundColor: `${theme.themeRed}`,
    color: `${theme.primaryLight}`,
    fontSize: window.innerWidth < 950 ? "1.5rem" : "2.5rem",
    height: window.innerWidth < 950 ? "35px" : "50px",
    padding: "5px",
    width: "33.3%"
}

export const HeaderLinkActiveStyle = {
    backgroundColor: `${theme.primaryLight}`,
    color: `${theme.themeRed}`,
    fontSize: window.innerWidth < 950 ? "1.75rem" : "2.5rem",
    fontWeight: 500,
    height: window.innerWidth < 950 ? "35px" : "50px",
    width: "33.3%"
}

// Sizing for FontAwesome icons
export const faIconSizes = {
    faSml: { fontSize: "1rem" },
    faMed: { fontSize: "2rem" },
    faLrg: { fontSize: "3rem" },
    faXlrg: { fontSize: "5rem" },
}