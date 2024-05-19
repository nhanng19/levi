const Blur = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 640 800"
        opacity="0.1"
      >
        <defs>
          <filter
            id="bbblurry-filter"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="40"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"
            ></feGaussianBlur>
          </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
          <ellipse
            rx="150"
            ry="150"
            cx="283.70211691737484"
            cy="324.7420447310275"
            fill="hsl(37, 99%, 67%)"
          ></ellipse>
          <ellipse
            rx="150"
            ry="150"
            cx="412.7968513871892"
            cy="566.6009171135511"
            fill="hsl(316, 73%, 52%)"
          ></ellipse>
          <ellipse
            rx="150"
            ry="150"
            cx="391.68318056327905"
            cy="155.36325200361557"
            fill="hsl(185, 100%, 57%)"
          ></ellipse>
        </g>
      </svg>
    );
 }


export default Blur;