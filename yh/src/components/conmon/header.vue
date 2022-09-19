<template>
    <div class="head-box">
      <header>
				<img class="top-bg" :class="!showInfo?'show':''" :src="topBg" alt="中国银河证券">
				<template v-if="showInfo">
					<div class="content" >
						<div v-html="pubSetting.htmlscontent" :class="!showMore?'ellipsis-3':''"></div>
					</div>
					<div class="btn-more" @click="showMoreFn">
						{{showMore?'收起':'展开'}}
					</div>
					<div class="broadcast" >
						<img :src="broadcast" alt="">
						<img @click="toLiveBroadcast" class="broadcast-btn" :src="broadcastBtn" alt="">
					</div>
					<!-- <div class="city-name">{{city['name']}}</div> -->
					<van-dropdown-menu class="city-name" v-if="areaList.length > 0" :overlay="false">
						<van-dropdown-item v-model="city['id']" :options="areaList"  @change="cityChange"/>
					</van-dropdown-menu>
					<van-row class="nav-bar" type="flex" justify="space-between">
						<van-col span="6" v-if="$route.query.city_id">
							<router-link :to="{path:'/videos',query:{'city_id':city['id']}}">重磅嘉宾</router-link>
						</van-col>
						<van-col span="6" v-else>
							<router-link :to="{path:'/videos'}">重磅嘉宾</router-link>
						</van-col>
						<van-col span="6">
							<router-link :to="{path:'/agenda',query:{'city_id':city['id']}}">活动日程</router-link>
						</van-col>
						<van-col span="6">
							<router-link :to="`/news?city_id=${city['id']}`">头条新闻</router-link>
						</van-col>
						<van-col span="6">
							<router-link :to="`/guests?city_id=${city['id']}`">精彩视频</router-link>
						</van-col>
					</van-row>
				</template>
      </header>

    </div>
</template>

<script>
import {mapState} from 'vuex'
import {find} from 'lodash'
export default {
	props:{
		title:{
			default(){
				return null;
			}
		},
		goBackPath:String,
		isCustomize:{
			default(){
				return false;
			}
		},
		showInfo:{
			default(){
				return true;
			}
		}
	},
	data(){
		return{
			topBg:require('@/assets/images/top_bg.png'),
			broadcast: require('@/assets/images/broadcast.png'),
			broadcastBtn: require('@/assets/images/broadcast_btn.png'),
			showMore: false,
			nowCity:5,
		}
	},
	computed:{
		...mapState({
			pubSetting: state => state.pubSetting,
			areaList: state => state.areaList,
		}),
		city(){
			let nowCity = this.$route.query.city_id || this.areaList[0]['id']
			const cities =  JSON.parse(JSON.stringify(this.areaList))
			const cityObj = cities.find(item => item.id == Number(nowCity)) || {}
			this.nowCity = cityObj['click_url']
			return cityObj
		},
	},
	created(){
		
	},
	mounted(){
		//console.log(this.$route)
		// this.$nextTick(()=>{
		// 	let nowCity = this.$route.query.city_id ||  1
		// 	this.cityChange(nowCity)
		// })
	},
	methods: {
		showMoreFn() {
			this.showMore = !this.showMore
		},
		toLiveBroadcast(){
			if(this.nowCity && this.nowCity.indexOf('/liveBroadcast')>-1){
				this.$router.push({
					path:'/liveBroadcast',
					query:{'city_id':this.city['id']}
				})
			}else{
				window.location.href = this.nowCity
			}
			
		},
		cityChange(e){
			let newQuery = JSON.parse(JSON.stringify(this.$route.query))
			const cities =  JSON.parse(JSON.stringify(this.areaList))
			newQuery.city_id = e
			this.nowCity = cities.find(item => item.id === e)['click_url']
			console.log('this.nowCity--',this.nowCity,this.areaList,cities)
			this.$router.replace({
				query:newQuery
			})
			this.$emit('changeCity')
		}
	}
}
</script>

<style lang="less" >
.head-box{
	width:100%;
	header{
		position: relative;
		img.top-bg{
			width: 100%;
			height:auto;
		}
		.show{
			display:none;
		}
		.content{
			background-image: linear-gradient(#0B1A89, rgba(255,255,255,0));
			width: 20.6875rem /* 331/16 */;
			margin: -14rem auto 0;
			border-radius: .625rem /* 10/16 */;
			padding: .875rem /* 14/16 */ .4375rem /* 7/16 */  .625rem /* 10/16 */;
			font-size:.6875rem /* 11/16 */;
			color:#D2D2D2;
			font-weight: 400;
			line-height: 1.0625rem /* 17/16 */;
			position: relative;
			height:auto;
			.ellipsis-3{
				height: 3.1875rem /* 51/16 */;
			}
			
		}
		.btn-more{
			color: #E5E5E5;
			font-size: 1rem /* 16/16 */;
			font-weight: 400;
			text-align: right;
			padding-right: 1.375rem /* 22/16 */;
			cursor: pointer;
			line-height: 1.875rem /* 30/16 */;
			position: relative;
			z-index: 2;
		}
		.broadcast{
			width: 20.6875rem /* 331/16 */;
			margin: 0 auto;
			position: relative;
			img{
				width: 100%;
			}
			.broadcast-btn{
				width:5.75rem /* 92/16 */;
				position:absolute;
				left:3rem /* 48/16 */;
				bottom: .875rem /* 14/16 */;
				-webkit-animation: changes 1s linear 0s infinite alternate;
				animation: changes 1s linear 0s infinite alternate;
			}
		}
		.city-name{
			position: absolute;
			top:3.4375rem /* 55/16 */;
			right: 1.4375rem /* 23/16 */;
			padding: .3125rem /* 5/16 */ .8125rem /* 13/16 */;
			border: 1px solid #fff;
			background: transparent;
			border-radius: 1.5625rem /* 25/16 */;
			font-size: .75rem /* 12/16 */;
			color: #fff;
			font-weight: 400;
			.van-dropdown-menu__bar{
				background:transparent;
				color:#fff;
				height: auto;
			}
			.van-dropdown-menu__title{
				font-size: .75rem /* 12/16 */;
				color: #fff;
				font-weight: 400;
			}
			.van-popup{
				background: linear-gradient(90deg, #0F1C60, #1248C6);
				border-radius: 15px;
				.van-cell{
					background:none;
					color:#fff;
					padding-left: 42vw;
					// text-align: center;
				}
			}
		}
		.nav-bar{
			padding: 0 1.375rem /* 22/16 */;
			margin-top: 2.1875rem /* 35/16 */;
			.van-col{
				text-align: center;
				a{
					font-size: 1rem /* 16/16 */;
					color:#fff;
					font-weight: 400;
					display:inline-block;
					height: 2.5rem /* 40/16 */;
					line-height: 2.5rem /* 40/16 */;
					&.router-link-active,&.router-link-exact-active{
						font-size: 1.125rem /* 18/16 */;
						font-weight: 500;
						text-shadow: .03125rem /* 0.5/16 */ .0625rem /* 1/16 */ 0 rgba(6, 12, 68, 0.2);
						background: linear-gradient(180deg, #FFB410 25.78125%, #F011D8 100%);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					}
				}
			}
		}
	}
}
</style>