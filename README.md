# Description

Mix opacity to a solid color and get a solid equivalent color.

```
import getSolidColor from "color-with-opacity";

getSolidColor("#FF0000", 0.3) => return #ffb2b2

getSolidColor("#FF0000") => return #ff6666 // by default 0.6 opacity is mixed

getSolidColor("#XXZZCC") => throws error

```
