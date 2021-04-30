<template>
  <el-dialog
    title="Вход"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose"
  >
    <div class="form">
      <div class="form-group">
        <el-input placeholder="E-mail" type="email" v-model="email"></el-input>
      </div>
      <div class="form-group mt-4">
        <el-input
          placeholder="Password"
          type="password"
          show-password
          v-model="password"
        ></el-input>
      </div>
      <a class="mt-3 block text-sm text-blue-400" @click="showRegister"
        >Зарегистрироваться</a
      >
    </div>
    <span slot="footer" class="dialog-footer">
      <button class="btn btn-danger" @click="dialogVisible = false">
        Cancel
      </button>
      <button class="btn btn-blue" type="primary" @click="submit">
        Confirm
      </button>
    </span>
  </el-dialog>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    show: {
      type: Boolean,
    },
  },
  data() {
    return {
      dialogVisible: false,
      email: null,
      password: null,
    }
  },
  watch: {
    show(val) {
      this.dialogVisible = val
    },
  },
  methods: {
    ...mapActions('auth', ['signIn']),
    handleClose() {
      this.$emit('close-login')
    },
    showRegister() {
      this.$emit('show-register')
    },
    submit() {
      this.signIn({ email: this.email, password: this.password })
      this.dialogVisible = false
    },
  },
}
</script>
