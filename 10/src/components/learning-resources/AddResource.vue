<template>
  <BaseCard>
    <form @submit.prevent='submitData'>
      <div class='form-control'>
        <label for='title'>Title</label>
        <input type='text' id='title' name='title' ref='titleInput'>
      </div>
      <div class='form-control'>
        <label for='description'>Description</label>
        <textarea rows='3' id='description' name='description' ref='descInput'></textarea>
      </div>
      <div class='form-control'>
        <label for='link'>Link</label>
        <input type='url' id='link' name='link' ref='linkInput'>
      </div>
      <div>
        <BaseButton type='submit'>Add Resource</BaseButton>
      </div>
    </form>
    <BaseDialog v-if='inputInvalid' title='Invalid Input' @close='confirmError'>
      <template #default>
        <p>Unfortunately, at least one input value is invalid.</p>
        <p>Please check all inputs.</p>
      </template>
      <template #actions>
        <BaseButton @click='confirmError'>Okay</BaseButton>
      </template>
    </BaseDialog>
  </BaseCard>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton';
import BaseDialog from '@/components/UI/BaseDialog';
export default {
  name: 'AddResource',
  components: { BaseDialog, BaseButton },
  inject: ['addResource'],
  data() {
    return {
      inputInvalid: false
    }
  },
  methods: {
    confirmError() {
      this.inputInvalid = false;
    },
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descInput.value;
      const enteredLink = this.$refs.linkInput.value;

      if (enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredLink.trim() === "") {
        this.inputInvalid = true;
        return;
      }

      this.addResource({
        id: new Date().toISOString(),
        title: enteredTitle,
        description: enteredDescription,
        link: enteredLink
      });
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>