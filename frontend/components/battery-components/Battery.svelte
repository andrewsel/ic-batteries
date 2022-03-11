<script>
  import Eyes from "./Eyes.svelte"
  import Hands from "./Hands.svelte"
  import Mouths from "./Mouths.svelte"
  import Bodies from "./Bodies.svelte"
  import { bgUrl, colors } from "../../scripts/helpers.js"

  export let designOptions = "1111111"

  let headColor
  let bodyColor
  let body
  let eyes
  let mouth
  let hands
  let background

  $: if (designOptions) {
    headColor = designOptions[0]
    bodyColor = designOptions[1]
    body = designOptions[2]
    eyes = designOptions[3]
    mouth = designOptions[4]
    hands = designOptions[5]
    background = designOptions[6]
  }
</script>

<div style="background-image: url({bgUrl[background]})">
  <svg
    style="width: 100%"
    viewBox="0 0 1000 1000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M534.7 173.9V199.5C532.3 201.6 520.6 205.4 501.3 205.4C498 205.4 494.9 205.3 492 205.1C478.2 204.2 469.8 201.3 467.9 199.5V173.9C475.7 176.9 486.3 178 493.7 178.4C497.1 178.6 499.8 178.6 501.3 178.6C506.1 178.5 523.5 178.2 534.7 173.9Z"
      fill="#E0E0E0"
    />
    <path
      d="M618.6 206.3C618.3 207.9 611.3 213.7 585 218.6C575.2 220.4 564.1 221.9 552.2 223C536.3 224.4 518.8 225.2 500.8 225.2C469.1 225.2 439.2 222.9 416.5 218.6C390.1 213.7 383.2 207.9 382.9 206.4C383.2 205.2 387.7 200.9 404.6 196.7C418.5 193.2 436.8 190.6 458 189V200.2C458 211.8 481.3 214.6 494.2 215.2C497.4 215.4 500 215.4 501.4 215.4C508.7 215.4 544.8 214.7 544.8 200.2V189.1C565.7 190.7 583.7 193.3 597.3 196.8C613.9 201 618.3 205.2 618.6 206.3Z"
      fill="#E0E0E0"
    />
    <path
      d="M501.3 168.6C518.7 168.6 529.9 165.6 533.7 163.4C529.9 161.2 518.7 158.2 501.3 158.2C483.9 158.2 472.7 161.2 468.9 163.4C472.7 165.5 483.9 168.6 501.3 168.6Z"
      fill="#E0E0E0"
    />
    <path
      d="M676.9 205.6C676.9 213.6 663.9 225.6 627.3 235.5C598.7 243.2 562.1 248 522.5 249.3C522.4 249.3 522.3 249.3 522.3 249.3C514.9 249.6 507.5 249.7 500 249.7C479.1 249.7 458.7 248.7 439.6 246.9C439.3 246.9 438.9 246.8 438.6 246.8C438.5 246.8 438.3 246.8 438.1 246.8C437.7 246.8 437.3 246.7 437 246.7C436.8 246.7 436.7 246.7 436.5 246.7C412.8 244.3 391 240.5 372.6 235.6C336.3 225.8 323.2 213.9 323 205.9V205.7C323 188.8 374.2 168.3 457.8 163H457.9C457.9 163.2 457.9 163.3 457.9 163.5V179C435 180.6 415.3 183.5 400.5 187.4C381.5 192.4 372.7 198.4 372.7 206.4C372.7 212.4 376.8 221.2 412.8 228.2C436.3 232.8 467.5 235.3 500.7 235.3C533.9 235.3 565.1 232.8 588.6 228.2C624.5 221.2 628.6 212.4 628.6 206.4C628.6 198.5 619.9 192.5 601.2 187.5C586.7 183.7 567.3 180.8 544.7 179.1V163.4C544.7 163.3 544.7 163.2 544.7 163.1C544.7 163.1 544.7 163.1 544.8 163.1C580.8 165.6 613.4 171.1 637.5 178.8C662.2 186.6 676.9 196.7 676.9 205.6Z"
      fill="#FBB03B"
    />
    <path
      d="M676.9 224.1V380.5C676.9 385.8 671.2 392.8 656.9 399.8C649.5 403.4 639.8 407 627.3 410.4C593.4 419.5 548.1 424.6 500 424.6C451.9 424.6 406.6 419.6 372.7 410.4C367.2 408.9 362.3 407.4 357.8 405.8C332.5 397 323.1 387.3 323.1 380.5V224.1C350 247.3 426.9 259.7 500 259.7C502.3 259.7 504.6 259.7 506.9 259.7C547 259.3 587.6 255.2 620.2 247.7C645.3 241.8 665.6 233.9 676.9 224.1Z"
      fill="#FBB03B"
    />
    <path
      d="M676.9 398.9V797.8C676.9 805.8 663.9 817.8 627.3 827.7C624.5 828.5 621.5 829.2 618.5 829.9C585.7 837.7 544.1 841.9 499.9 841.9C498.4 841.9 496.9 841.9 495.4 841.9C448.9 841.6 405.5 836.6 372.6 827.7C336 817.8 323 805.8 323 797.8V398.9C330.8 405.6 342.8 411.4 357.7 416.3C394.2 428.2 448 434.5 500 434.5C559.5 434.5 621.4 426.3 657 410.8C665.1 407.2 671.9 403.3 676.9 398.9Z"
      fill="#F15A24"
    />
    <path
      d="M533.4 152.4C522.1 148.5 505.9 148.2 501.2 148.2C496.6 148.2 480.6 148.5 469.4 152.3C427.2 154.2 388.5 160.1 360.3 169C329.3 178.7 313 191.4 313 205.7C313 205.8 313 205.8 313 205.9V797.9C313 833 409.3 852 499.9 852C590.5 852 686.8 833.1 686.8 797.9V205.6C686.9 174.1 610 156.2 533.4 152.4ZM467.9 173.9C479.2 178.3 496.6 178.6 501.3 178.6C506.1 178.6 523.5 178.3 534.7 173.9V199.5C532.3 201.7 520.6 205.4 501.3 205.4C481.9 205.4 470.2 201.6 467.9 199.5V173.9ZM501.3 215.4C508.6 215.4 544.7 214.7 544.7 200.2V189.1C565.6 190.7 583.6 193.3 597.2 196.8C613.8 201 618.3 205.3 618.5 206.4C618.2 208 611.2 213.8 584.9 218.7C562.2 222.9 532.2 225.3 500.6 225.3C468.9 225.3 439 223 416.3 218.7C389.9 213.8 383 208 382.7 206.5C383 205.3 387.5 201 404.4 196.8C418.3 193.3 436.6 190.7 457.8 189.1V200.3C457.9 214.6 494 215.4 501.3 215.4ZM533.7 163.4C529.9 165.6 518.7 168.6 501.3 168.6C483.9 168.6 472.7 165.6 468.9 163.4C472.7 161.2 483.9 158.2 501.3 158.2C518.6 158.2 529.8 161.2 533.7 163.4ZM457.9 162.9C457.9 163 457.9 163.2 457.9 163.3V179C435 180.6 415.3 183.5 400.5 187.4C381.5 192.4 372.7 198.4 372.7 206.4C372.7 212.4 376.9 221.2 412.8 228.2C436.3 232.8 467.5 235.3 500.7 235.3C533.8 235.3 565.1 232.8 588.6 228.2C624.5 221.2 628.7 212.4 628.7 206.4C628.7 198.5 620 192.5 601.3 187.5C586.8 183.7 567.4 180.8 544.8 179.1V163.4C544.8 163.3 544.8 163.2 544.8 163.1C580.8 165.6 613.4 171.1 637.6 178.8C662.3 186.7 677 196.7 677 205.7C677 213.7 664 225.7 627.4 235.6C593.4 244.8 548.2 249.8 500.1 249.8C451.9 249.8 406.7 244.8 372.8 235.6C336.5 225.8 323.4 213.9 323.2 205.9V205.7C323.1 188.7 374.3 168.3 457.9 162.9ZM627.4 827.6C593.4 836.8 548.2 841.8 500.1 841.8C451.9 841.8 406.7 836.8 372.8 827.6C336.2 817.7 323.2 805.7 323.2 797.7V398.9C350.1 422.1 427 434.5 500.1 434.5C573.2 434.5 650.1 422.1 677 398.9V797.8C676.9 805.7 663.9 817.8 627.4 827.6ZM627.4 410.3C593.4 419.5 548.2 424.5 500.1 424.5C451.9 424.5 406.7 419.5 372.8 410.3C336.2 400.4 323.2 388.4 323.2 380.4V224.1C350.1 247.3 427 259.7 500.1 259.7C573.3 259.7 650.1 247.3 677 224.1V380.5C676.9 388.4 663.9 400.5 627.4 410.3Z"
      fill="black"
    />
    <path
      opacity="0.3"
      d="M495.5 841.8C449 841.5 405.6 836.5 372.7 827.6C336.1 817.7 323.1 805.7 323.1 797.7V398.9C330.9 405.6 342.9 411.4 357.8 416.3L356.8 737.4C356.7 782.4 387.5 821.6 431.3 832.1C448.6 836.2 469.7 839.7 495.5 841.8Z"
      fill="#111111"
    />
    <path
      opacity="0.3"
      d="M323.1 380.5V224.1C350 247.3 426.9 259.7 500 259.7C502.3 259.7 504.6 259.7 506.9 259.7C480.3 263.9 447.7 262.4 419.7 259.3C386.8 255.7 358.1 281.3 358 314.4L357.7 405.8C332.5 396.9 323.1 387.2 323.1 380.5Z"
      fill="#111111"
    />
    <path
      opacity="0.3"
      d="M676.9 224.1V380.5C676.9 385.8 671.2 392.8 656.9 399.8V284.4C656.9 255.6 620.1 247.6 620.1 247.6C645.3 241.8 665.6 233.9 676.9 224.1Z"
      fill="white"
    />
    <path
      opacity="0.3"
      d="M657 410.8C665.2 407.2 672 403.3 677 398.9V797.8C677 805.8 664 817.8 627.4 827.7C624.6 828.5 621.6 829.2 618.6 829.9C619.2 829.6 619.9 829.2 620.5 828.9C643.2 816.5 657 792.3 657 766.4V410.8Z"
      fill="white"
    />
    <path
      opacity="0.3"
      d="M676.9 205.6C676.9 213.6 663.9 225.6 627.3 235.5C598.7 243.2 562.1 248 522.5 249.3C528.1 249 654.4 237.3 654.4 207.1C654.4 176.6 547.8 163.6 544.7 163.1C580.7 165.6 613.3 171.1 637.4 178.8C662.2 186.6 676.9 196.7 676.9 205.6Z"
      fill="white"
    />
    <path
      opacity="0.3"
      d="M436.5 246.6C412.8 244.2 391 240.4 372.6 235.5C336.3 225.7 323.2 213.8 323 205.8V205.6C323 188.7 374.2 168.2 457.8 162.9C454.4 163.4 344.9 179.9 344.9 205.3C344.9 225.1 413.3 244 436.5 246.6Z"
      fill="#111111"
    />
    <path
      opacity="0.3"
      d="M501.3 168.6C518.7 168.6 529.9 165.6 533.7 163.4C529.9 161.2 518.7 158.2 501.3 158.2C483.9 158.2 472.7 161.2 468.9 163.4C472.7 165.5 483.9 168.6 501.3 168.6Z"
      fill="white"
    />
    <path
      opacity="0.3"
      d="M552.1 223C536.2 224.4 518.7 225.2 500.7 225.2C469 225.2 439.1 222.9 416.4 218.6C390 213.7 383.1 207.9 382.8 206.4C383.1 205.2 387.6 200.9 404.5 196.7C418.4 193.2 436.7 190.6 457.9 189V200.2C457.9 211.8 481.2 214.6 494.1 215.2C506.3 220.4 524.6 223.9 552.1 223Z"
      fill="#111111"
    />
    <path
      opacity="0.3"
      d="M483.1 194.8C483.1 199 485.7 202.7 489.6 204.2L492 205.1C478.2 204.2 469.8 201.3 467.9 199.5V173.9C475.7 176.9 486.3 178 493.7 178.4L489.4 178.9C485.8 179.3 483.1 182.3 483.1 186V194.8V194.8Z"
      fill="#111111"
    />
    <path
      d="M655.4 317.6C639.7 325.1 618.6 328.4 618.6 328.4V254.9C618.6 254.9 638.5 252.4 655.4 244.5V317.6Z"
      fill="#FFD7B0"
      stroke="black"
      stroke-width="4"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M640.9 265.3L632.9 266.5V264.7C632.9 263.5 633.8 262.9 635.1 262.5L638.1 261.9C638.8 261.7 639.8 261.8 640.4 262.2C640.6 262.4 640.8 262.7 640.8 263L640.9 265.3Z"
      fill="white"
    />
    <path
      d="M647.8 262.5V307.9C638.6 312.6 626.1 314.6 626.1 314.6V269C626.1 269 637.9 267.4 647.8 262.5ZM647.8 260.9C647.6 260.9 647.3 261 647.1 261.1C637.5 265.8 626 267.4 625.9 267.4C625.1 267.5 624.5 268.2 624.5 269V314.6C624.5 315.1 624.7 315.5 625.1 315.8C625.4 316 625.8 316.2 626.1 316.2C626.2 316.2 626.3 316.2 626.4 316.2C626.9 316.1 639.2 314.1 648.6 309.3C649.1 309 649.5 308.5 649.5 307.9V262.5C649.5 261.9 649.2 261.4 648.7 261.1C648.4 261 648.1 260.9 647.8 260.9Z"
      fill="white"
    />
    <path
      d="M643.8 266.4L628 283.7V272.3C628 271.3 628.7 270.5 629.7 270.3C632.4 269.9 637.9 268.8 643.2 266.6C643.4 266.5 643.6 266.4 643.8 266.4Z"
      fill="#02D307"
    />
    <path
      d="M646 268.4V274.1L628 293.7V286.6L645.6 267.4C645.8 267.6 646 268 646 268.4Z"
      fill="#02D307"
    />
    <path d="M646 277V284.1L628 303.7V296.5L646 277Z" fill="#FF8517" />
    <path
      d="M646 287V294.1L629.6 312C628.7 311.8 628 311 628 310V306.5L646 287Z"
      fill="#FF1F1F"
    />
    <path
      d="M632.7 311.5L646 297V305.6C646 306.4 645.6 307.1 644.9 307.4C640.7 309.3 636 310.7 632.7 311.5Z"
      fill="#FF1F1F"
    />
    <g opacity="0.8">
      <path
        opacity="0.8"
        d="M573.3 224.6L531.8 153L504.6 91.8L538.9 149.3L573.3 224.6Z"
        fill="url(#paint0_radial_2_2058)"
      />
      <path
        opacity="0.8"
        d="M472.6 192.6L537.1 154.6L605.4 123.8L540.8 161.7L472.6 192.6Z"
        fill="url(#paint1_radial_2_2058)"
      />
      <path
        opacity="0.8"
        d="M512.7 149.8L539.4 156.8L565.2 166.5L538.5 159.6L512.7 149.8Z"
        fill="url(#paint2_radial_2_2058)"
      />
      <path
        opacity="0.8"
        d="M547.3 131.9L540.4 158.6L530.6 184.4L537.6 157.7L547.3 131.9Z"
        fill="url(#paint3_radial_2_2058)"
      />
    </g>
    <g opacity="0.8">
      <path
        opacity="0.8"
        d="M490.4 169.2L478.7 149.1L471.1 131.9L480.8 148L490.4 169.2Z"
        fill="url(#paint4_radial_2_2058)"
      />
      <path
        opacity="0.8"
        d="M462.1 160.2L480.2 149.5L499.4 140.9L481.3 151.5L462.1 160.2Z"
        fill="url(#paint5_radial_2_2058)"
      />
      <path
        opacity="0.8"
        d="M473.4 148.2L480.9 150.1L488.1 152.9L480.6 150.9L473.4 148.2Z"
        fill="url(#paint6_radial_2_2058)"
      />
      <path
        opacity="0.8"
        d="M483.1 143.1L481.2 150.6L478.4 157.9L480.4 150.4L483.1 143.1Z"
        fill="url(#paint7_radial_2_2058)"
      />
    </g>
    <g opacity="0.8">
      <path
        opacity="0.8"
        d="M514.3 147.2L498.6 120L488.3 96.8L501.3 118.6L514.3 147.2Z"
        fill="url(#paint8_radial_2_2058)"
      />
      <path
        opacity="0.8"
        d="M476.1 135L500.6 120.6L526.5 108.9L502 123.3L476.1 135Z"
        fill="url(#paint9_radial_2_2058)"
      />
      <path
        opacity="0.8"
        d="M491.3 118.8L501.5 121.4L511.3 125.1L501.1 122.5L491.3 118.8Z"
        fill="url(#paint10_radial_2_2058)"
      />
      <path
        opacity="0.8"
        d="M504.5 112L501.8 122.1L498.1 131.9L500.8 121.8L504.5 112Z"
        fill="url(#paint11_radial_2_2058)"
      />
    </g>
    <defs>
      <radialGradient
        id="paint0_radial_2_2058"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(538.978 158.16) rotate(-27.3799) scale(52.9467)"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="paint1_radial_2_2058"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(538.978 158.16) rotate(-27.3799) scale(52.9467)"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="paint2_radial_2_2058"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(538.978 158.16) rotate(-27.3799) scale(19.4874)"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="paint3_radial_2_2058"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(538.978 158.16) rotate(-27.3799) scale(19.4874)"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="paint4_radial_2_2058"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(480.776 150.505) rotate(-27.3799) scale(14.879)"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="paint5_radial_2_2058"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(480.776 150.505) rotate(-27.3799) scale(14.879)"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="paint6_radial_2_2058"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(480.776 150.505) rotate(-27.3798) scale(5.47635)"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="paint7_radial_2_2058"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(480.776 150.505) rotate(-27.3798) scale(5.47635)"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="paint8_radial_2_2058"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(501.317 121.964) rotate(-27.3799) scale(20.0801)"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="paint9_radial_2_2058"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(501.317 121.964) rotate(-27.3799) scale(20.0801)"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="paint10_radial_2_2058"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(501.317 121.964) rotate(-27.3799) scale(7.39069)"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </radialGradient>
      <radialGradient
        id="paint11_radial_2_2058"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(501.317 121.964) rotate(-27.3799) scale(7.39069)"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </radialGradient>
    </defs>
    <Bodies optionNumber={body} {bodyColor} {headColor} {colors} />
    <Mouths optionNumber={mouth} />
    <Eyes optionNumber={eyes} />
    <Hands optionNumber={hands} />
  </svg>
</div>

<style>
  div {
    background-position: center;
    background-size: cover;
  }
</style>
