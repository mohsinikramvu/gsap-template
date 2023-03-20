/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syncopateNormal: 'Syncopate Regular',
        syncopateBold: 'Syncopate Bold',
        baiJamjureeExtraLight200: 'Bai Jamjuree ExtraLight',
        baiJamjureeExtraLightItalic200: 'Bai Jamjuree ExtraLightItalic',
        baiJamjureeLight300: 'Bai Jamjuree Light',
        baiJamjureeLightItalic300: 'Bai Jamjuree LightItalic',
        baiJamjureeRegular400: 'Bai Jamjuree Regular',
        baiJamjureeRegularItalic400: 'Bai Jamjuree RegularItalic',
        baiJamjureeMedium500: 'Bai Jamjuree Medium',
        baiJamjureeMediumItalic500: 'Bai Jamjuree MediumItalic',
        baiJamjureeSemiBold600: 'Bai Jamjuree SemiBold',
        baiJamjureeSemiBoldItalic600: 'Bai Jamjuree SemiBoldItalic',
        baiJamjureeBold700: 'Bai Jamjuree Bold',
        baiJamjureeBoldItalic700: 'Bai Jamjuree BoldItalic',
      },
    },
  },
  plugins: [],
}
