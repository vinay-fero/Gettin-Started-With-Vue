# Module 09 Highlights

## Basics
1. Components registered inside **'components'** has **local scope**.
2. Self-closing tags works only with **pascal case** name component, it won't work with component name having '-' in it.
3. Adding **'scoped'** keyword inside **'style'** tag inside a component, tells vue that the styling defined here is only scoped for this component only.

## Slots
1. **Slots** are used to pass html code to component for dynamic html data rendering, just **children in react**.
2. If a component have multiple slots, then to differentiate between slots, **named** slots are used:
    * we can define a named slot by providing a named attribute inside slot tag.
    * And to different data to different slot, we use **template** tag with **v-slot** attribute and provide the name of slot in it.
    * e.g. <template v-slot:header.
3. A component can have multiple **named slots** but it can have only one **unnamed slot** for the default Data.
4. We can also set default data in slots, i.e. if no data is provided for that slot, default data (fall-back content) will be rendered.
5. we can access slots by using **this.$slots**, for e.g.:
    * Accessing named slots - **this.$slots.name**.
    * Accessing default slot - **this.$slots.default**.
6. Shorthand for v-slot is **#**, e.g. #name.
7. **Slot Scoped** - we can access the slot data from calling\parent by using **v-bind or :**


## Dynamic Components
1. We can **'component'** tag with **'is'** attribute in it, which defines which component to render.
2. **Component** destroys and remove all others component from the DOM which is inactive, which all data which is not being saved before switching will be loss.
3. To Keep data as it is, wrap the **component** tag with **keep-alive**.
4. We can use, vue in-built overlay by using **dialog**  tag with **open** attribute.
5. We can render the components like overlay, in the HTML DOM tree by using **teleport** tag and providing **to** attribute and pass the CSS selector to let teleport know where to render the component.
