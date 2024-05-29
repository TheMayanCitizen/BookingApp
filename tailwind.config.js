/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "firs-color":"#fb4041",
        'slider-btn-bg': 'red',
        'slider-btn-text': 'white',
      },
      spacing: {
        '3em': '3em',
        '1.5em': '1.5em',
      }, 
      maxWidth: {
        '30em': '30em',
      },
      dropShadow : {
        '3xl': '2px 6px 1px #dedede',
      },
      width: {
        'max-content': 'max-content',
      },
      aspectRatio: {
        '1.6': '1.6',
      },
      grayscale: {
        30: '30%',
      },
      transitionDuration: {
        '500ms': '500ms',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.slider': {
          position: 'relative',
          width: 'max-content',
          display: 'flex',
          flexWrap: 'wrap',
        },
        '.slider_btn': {
          position: 'absolute',
          zIndex: '1',
          top: '50%',
          width: '3em',
          transform: 'translateY(-50%)',
          backgroundColor: 'var(--tw-color-slider-btn-bg)',
          color: 'var(--tw-color-slider-btn-text)',
          aspectRatio: '1',
          borderRadius: '50%',
          filter: 'grayscale(var(--tw-grayscale-30))',
          '&:hover': {
            filter: 'none',
          },
        },
        '.slider_btn_next': {
          right: '0',
        },
        '.slider_interior': {
          width: '100%',
          maxWidth: '30em',
          aspectRatio: '1.6',
          overflow: 'hidden',
        },
        '.slider_movable': {
          display: 'flex',
          transition: 'transform 500ms ease',
        },
        '.slider_img_container': {
          width: '100%',
          padding: '1.5em',
          aspectRatio: '1.6',
        },
        '.slider_img': {
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        },
      });
    },
  ],
}

