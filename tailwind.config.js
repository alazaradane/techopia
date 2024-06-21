/** @type {import('tailwindcss').Config} */
module.exports = {
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
      backgroundImage:{
        'blog-bg':`url('./src/assets/images/bgBlog.jpg')`,
        'blog-1':`url('./src/assets/images/meeting.jpg')`,
        'blog-2':`url('./src/assets/images/devsetup.png')`,
        'text-gradient': 'linear-gradient(90deg, rgba(8,0,36,1) 0%, rgba(33,95,208,1) 0%, rgba(59,101,179,1) 59%, rgba(53,45,158,1) 100%, rgba(101,80,182,1) 100%, rgba(67,9,121,1) 100%, rgba(0,212,255,1) 100%);',
      },
      keyframes: {
        morphing: {
          '0%': { borderRadius: '25% 50% 75% 50% / 50% 75% 50% 25%' },
          '50%': { borderRadius: '75% 50% 25% 50% / 50% 25% 50% 75%' },
          '100%': { borderRadius: '25% 75% 50% 25% / 75% 50% 25% 50%' },
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
          '70%': { opacity: 1 },
          '100%': { transform: 'rotate(215deg) translateX(-500px)', opacity: 0 },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rotateBorder: {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '200% 50%' },
        },
        borderMove: {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(10px, -10px)' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        morphing: 'morphing 10s infinite alternate',
        'meteor-effect': 'meteor 5s linear infinite',
        rotate: 'rotate 10s linear infinite',
        float: 'float 5s ease-in-out infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderMove: 'borderMove 3s linear infinite',
      rotateBorder: 'rotateBorder 3s linear infinite',
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        Rub: ["Rubik Glitch Pop", "sans-serif"]
      },
      backdropBlur: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      borderRadius: {
        'xl': '1rem',
      },
      colors: {
        purple:"#6f79fc",
        glass: 'rgba(255, 255, 255, 0.2)',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#000814",
          gradient: "bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
        },
        secondary: {
          DEFAULT: "#dbdbdb",
          blue: "#1c6ced",
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
    },
  },
  plugins: [require("tailwindcss-animate")],
};
