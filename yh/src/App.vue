<template>
	<div id="app">
		<keep-alive>
		<router-view v-if="$route.meta.keepAlive" />
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive" />
	</div>
</template>
<script>
export default {
	data(){
		return{

		}
	},
	async created(){
		await this.$store.dispatch('getSetting')
		await this.$store.dispatch('getAreaList')
	}
}
</script>
<style lang="less">
</style>
