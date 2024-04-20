import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        slideInFromBottom: {
          '0%': {
            transform: 'translateY(100%)',
            opacity: "0",
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: "1",
          },
        },
        slideOutToBottom: {
          '0%': {
            transform: 'translateY(0)',
            opacity: "1",
          },
          '100%': {
            transform: 'translateY(100%)',
            opacity: "0",
          }
      },
      slideInFromLeft: {
        from: {
        width : "80px"
        },
        to: {
          width : "200px"
         
        },
      },
      slideOutToLeft: {
        from: {
          width : "200px"
        },
        to : {
         
          width : "65px"
         
        }},

        moveUp: {
          '0%': {
            transform: 'translateY(0)', // Initial position
          },
          '100%': {
            transform: 'translateY(-20px)', // Move up by 20px
          },
        },

        expandWidth: {
          '0%': {
            width: '100%',
          },
          '100%': {
            width: '110%', // Increase width by 10%
          },
        },
    
    },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slideInFromBottom: 'slideInFromBottom 0.5s ease',
        slideOutToBottom: 'slideOutToBottom 0.9s ease',
        slideInFromLeft: 'slideInFromLeft 2.5s ease',
        slideOutToLeft: 'slideOutToLeft 1.5s ease',
        moveUp: 'moveUp 0.3s ease',
        expandWidth: 'expandWidth 0.3s ease',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config