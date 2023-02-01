module.exports = {
  content: [
    "./*.html",
    "./assets/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: "540px",
      // => @media (min-width: 576px) { ... }
      md: "720px",
      // => @media (min-width: 768px) { ... }
      lg: "960px",
      // => @media (min-width: 992px) { ... }
      xl: "1140px",
      // => @media (min-width: 1200px) { ... }
      "2xl": "1320px",
      // => @media (min-width: 1400px) { ... }
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        dark: '#1e293b',
        // Regent Gray Palette
        gray: {
          '50': '#f4f6f7',
          '100': '#e2e6eb',
          '200': '#c8cfd9',
          '300': '#a2adbe',
          '400': '#8492a6',
          '500': '#5a6a80',
          '600': '#4d586d',
          '700': '#434b5b',
          '800': '#3c424e',
          '900': '#353944',
        },
        // Royal Blue Palette
        blue: {
          '50': '#eaf6ff',
          '100': '#d9edff',
          '200': '#baddff',
          '300': '#91c5ff',
          '400': '#66a0ff',
          '500': '#427aff',
          '600': '#214fff',
          '700': '#1c45ec',
          '800': '#163abd',
          '900': '#1b3894',
        },
        // Danube Indigo Palette
        indigo: {
          '50': '#f2f4fc',
          '100': '#e2e7f7',
          '200': '#ccd5f1',
          '300': '#a8bae8',
          '400': '#7f97db',
          '500': '#6378d1',
          '600': '#4d5cc3',
          '700': '#434bb2',
          '800': '#3b4092',
          '900': '#343874',
        },
        // Japanese Laurel Green Palette
        green: {
          '50': '#e9ffe4',
          '100': '#ccffc4',
          '200': '#9eff90',
          '300': '#5fff50',
          '400': '#29fe1d',
          '500': '#07e500',
          '600': '#00b800',
          '700': '#008000',
          '800': '#076d08',
          '900': '#0b5c0d',
        },
        // Fresh Eggplant Purple Palette
        purple: {
          '50': '#fff1fe',
          '100': '#ffe1fe',
          '200': '#ffc3fe',
          '300': '#ff94f9',
          '400': '#ff54f6',
          '500': '#ff16f4',
          '600': '#f500ff',
          '700': '#d100d9',
          '800': '#ad00b1',
          '900': '#800080',
        },
        // Milano Red Palette
        red: {
          '50': '#fff1f0',
          '100': '#ffe0dd',
          '200': '#ffc6c1',
          '300': '#ffa097',
          '400': '#ff695b',
          '500': '#ff3b28',
          '600': '#fa1d08',
          '700': '#c31302',
          '800': '#ae1506',
          '900': '#8f180d',
        },
        // Supernova Yellow Palette
        yellow: {
          '50': '#fffee7',
          '100': '#fffec1',
          '200': '#fff886',
          '300': '#ffec41',
          '400': '#ffdb0d',
          '500': '#ffcc00',
          '600': '#d19500',
          '700': '#a66a02',
          '800': '#89530a',
          '900': '#74430f',
        },
        // Vermilion Orange Palette
        orange: {
          '50': '#fff6ec',
          '100': '#ffead3',
          '200': '#ffd1a5',
          '300': '#ffb06d',
          '400': '#ff8232',
          '500': '#ff5f0a',
          '600': '#ff4500',
          '700': '#cc2f02',
          '800': '#a1250b',
          '900': '#82220c',
        },
        // Pastel Pink Palette
        pink: {
          '50': '#fef1f5',
          '100': '#fee5ee',
          '200': '#ffccde',
          '300': '#ffa1c1',
          '400': '#ff6696',
          '500': '#fb396f',
          '600': '#eb1747',
          '700': '#cd0930',
          '800': '#a90b29',
          '900': '#8d0e26',
        }
      },
      boxShadow: {
        input: "0 7px 20px rgba(0, 0, 0, 0.03)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography")
  ],
};
