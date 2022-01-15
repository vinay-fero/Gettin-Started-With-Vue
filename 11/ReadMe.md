# Module Highlights
1. v-model automatically converts the data into the appropriate data type.
2. The data we retrieve other than v-model is always the type of string.
3. Different v-model modifiers:
    > v-model.number - forcefully converts data into number. \
   > v-model.lazy - bind the data not on every key store but on a particular event. \
   > v-model.trim - it automatically removes the access white spaces from the beginning and the end of the user input.
4. Using v-model with different inputs:
    > Multiple Checkbox - Requires **empty array** as initial data and returns array of selected items.\
   > Radio Buttons - Initial data should be null. \
   > Single Checkbox - Data passed should be of type **Boolean**.
5. **We can bind v-model to a custom component as well.**
6. **When we bind v-model to a custom component, it automatically passes 2 things:**
   * **props - 'modelValue'**
   * **emits - 'update:modelValue'**
7. **So, to get the value from the component, just emit the 'update:modelValue' with the value as it's second argument.**
8. **Also for 2 way binding and reflection use computed property in custom component instead of data property or just use the modelValue instead of local component attribute.**