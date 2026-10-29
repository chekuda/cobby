import { createCn } from "cn/config"

// cn() with Cobby's type scale (app/globals.css). Without this, `text-body`
// and friends look like text colors and cn() drops a real color such as a
// button's `text-primary-foreground`. Always import cn from here, not "cn".
export const cn = createCn({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "caption",
            "body-sm",
            "body",
            "subheading",
            "heading-sm",
            "heading",
            "heading-lg",
            "display",
          ],
        },
      ],
    },
  },
})
