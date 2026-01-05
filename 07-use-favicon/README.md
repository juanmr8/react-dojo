## Instructions
useFavicon allows you to dynamically update the document's favicon.

``` js
useFavicon("https://ui.dev/favicon/favicon-32x32.png")
```

For the full documentation, see usehooks.com/usefavicon.

## Tasks
1. Update the document's favicon with the href passed to useFavicon
2. Update the document's favicon when the href passed to useFavicon changes


## Hints

### Hint #1
You'll want to synchronize the document's favicon with the first argument passed to useFavicon. To do that, you can utilize React's useEffect hook.

``` js
export default function useFavicon(url) {
  React.useEffect(() => {

  }, [url]);
}
```

### Hint #2
In order to update the document's favicon, we need to do some DOM scripting. Here's how it'll work.

First, you'll want to use document.querySelector to see if there's already a link element with the rel attribute set to icon. If there isn't, create it, update its type to image/x-icon, set it's rel property to icon, set its href property to url, and append it to the document's head.

If there is already a link element, you'll just want to update its href property to url.

``` js
import * as React from "react";

export default function useFavicon(url) {
  React.useEffect(() => {
    let link = document.querySelector(`link[rel~="icon"]`)

    if (!link) {
      link = document.createElement("link");
      link.type = "image/x-icon";
      link.rel = "icon";
      link.href = url;
      document.head.appendChild(link);
    } else {
      link.href = url;
    }
  }, [url]);
}
```
