import "./src/style/main.scss"
import "@fontsource/spinnaker";
import "@fontsource/open-sans";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export const onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (!(`IntersectionObserver` in window)) {
      import(`intersection-observer`)
      console.log(`# IntersectionObserver is polyfilled!`)
    }
  }