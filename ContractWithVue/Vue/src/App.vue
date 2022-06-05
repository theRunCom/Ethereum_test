<template>  
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png"/>
      <div v-show="!userAddress">
        <button @click="checkLogin">登录</button>
      </div>
      <div>
        <span>{{ userAddress }}</span>
      </div>
      <div v-show="!userAddress">
        <h1>👏{{ count }}</h1>
      </div>
      <div v-show="!userAddress">
        <button @click="addCount">say Hi</button>
      </div>
    </div>
</template>

<script>
import { ethers } from 'ethers'
import { contractABI, contractAddress } from './contract'

export default {
  name: 'App',
  data() {
    return {
      userAddress: "",
      count: ""
    }
  },
  created() {
    this.getCount()
  },
  methods: {
    async checkLogin() {
      const { ethereum } = window
      if (!ethereum) {
        alert("请安装metamask钱包!")
        return
      } 
      // console.log("您已安装metamask!")
      const [account] = await this.Provider().send("eth_requestAccounts", {})
      this.userAddress = account
    },
    Provider() {
      return new ethers.providers.Web3Provider(window.ethereum)
    },
    Conctract() {
      const Provider = this.Provider()
      const signer = Provider.getSigner()
      const Contract = new ethers.Contract(contractAddress, contractABI, signer)
      return Contract;
    },
    async getCount() {
      const Contract = this.Conctract();
      const result = await Contract.countGet
      this.count = result.toNumber()
    },
    async addCount() {
      const Contract = this.Conctract();
      const tx = await Contract.countAdd()
      await tx.wait()
      await this.getCount()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
