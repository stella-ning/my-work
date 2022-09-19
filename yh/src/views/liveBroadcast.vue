<template>
	<div class="">
		<header-part :showInfo="false"></header-part>
		<div class="lives">
			<van-list
				v-model="loading"
				:finished="finished"
				finished-text="更多直播场次敬请期待"
				:immediate-check="false"
				@load="getLiveBroadcast">
				<div class="live-list" v-for="(item,index) in liveData" :key="index">
					<img v-lazy="item.image" alt="" class="broadcast-staff">
					<div class="play-btn-box" @click="toDetail(item.url)">
						<img v-if="item.type == 1" class="play-btn" v-lazy="playBth" alt="">
						<img v-else class="play-btn" v-lazy="playBth1" alt="">
					</div>
				</div>
			</van-list>
		</div>
	</div>
</template>
<script>
import headerPart from '../components/conmon/header'
import {wxShare} from '../utils/share'
export default{
	data(){
		return{
			page:1,
			size:2,
			liveData:[],
			loading: false,
			finished: false,
			playBth: require('@/assets/images/play_bth_big.png'),//直播
			playBth1: require('@/assets/images/play_bth_big1.png'),//回放
		}
	},
	components:{
		headerPart
	},
	created(){
		this.getLiveBroadcast()
		const url = window.location.href
		wxShare('',url,this.$route.query.city_id)
	},
	methods:{
		getLiveBroadcast(){
			apiStore.get('/v1/index/get_live_list',{page:this.page,size:this.size}).then(res =>{
        if(res.data.length > 0){
					this.liveData = [...this.liveData, ...res.data]
					this.loading = false
					this.finished = false
					this.page ++
				}else{
					this.finished = true
				}
			}).catch(err =>{
				console.log(err)
			})
		},
		toDetail(url){
			window.location.href= url
		}

	}
}
</script>
<style lang="less">
.lives{
	width: 100%;
	margin: 0rem auto 0;
	background:#101d9c;
	position: relative;
	.broadcast-staff{
		width: 100%;
	}
	.play-btn{
		width: 6.0625rem /* 97/16 */;
		height: 2.3125rem /* 37/16 */;
		margin: 0 auto;
		-webkit-animation: changes 1s linear 0s infinite alternate;
		animation: changes 1s linear 0s infinite alternate;
	}
}
</style> 