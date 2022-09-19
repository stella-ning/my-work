<template>
	<div class="guests-box">
		<header-part @changeCity="cityChange"></header-part>
		<section>
			<section class="guests" v-for="(val,key) in guestData" :key="key">
				<template v-if="val.length > 0">
					<div class="guest-title" v-if="$route.query.city_id == 1">
						<img :src="titleObj[key]" alt="">
					</div>
					<div class="tips">
						<p>按姓氏拼音字母排序，排名不分先后</p>
						<p>点击头像查看嘉宾详情</p>
					</div>
				</template>
				
				<van-row class="guest-list" :gutter="10" type="flex" >
					<van-col span="8" v-for="item in val" :key="item.id">
						<div class="guest-head-box">
							<img class="guest-head" v-lazy="item.image" alt="" @click="showLay(item)">
						</div>
						<div class="guest-info">
							<p class="info-name">{{item.name}}</p>
							<p class="info-text">{{item.description}}</p>
						</div>
					</van-col>
				</van-row>
				<p v-if="$route.query.city_id == 1 && key == 'guest_list'" style="text-align:center;color:#969799;line-height:50px;">更多嘉宾敬请期待</p>
			</section>
			<!-- <p class="updating">
				嘉宾持续更新中 
			</p> -->
		</section>
		
		<footer class="btn-sign-up" @click="singUp">
			立即报名
		</footer>
		<!-- 嘉宾信息 -->
		<layout-mode :guestItemInfo="guestItemInfo" :show="isShow" @cancel="closeLay"></layout-mode>
		<!-- 立即报名 -->
		<van-action-sheet class="apply-box" v-model="isshowApply">
			<div class="apply-contain">
				<img class="apply-title" :src="applyTitle" alt="">
				<van-form @submit="onSubmit" @failed="onFailed">
					<van-field
						v-model="applyForm.name"
						required
						label="您的姓名"
						name="name"
						:rules="[{ required: true, message: '请填写您的姓名' }]"
					/>
					<van-field
						v-model="applyForm.phone"
						required
						name="phone"
						label="您的手机"
						:rules="[{ required: true, message: '请填写您的手机' }]"
					/>
					<template v-if="city.id == 1">
						<van-field
						readonly
						clickable
						v-model="applyForm.area_name"
						name="area_name"
						label="活动城市"
						@click="showPicker = true"
						required
						:rules="[{ required: true, message: '请填写活动城市' }]"
						/>
						<van-popup v-model="showPicker" position="bottom">
							<van-picker
								show-toolbar
								:columns="areaLists"
								value-key="name"
								@confirm="onConfirm"
								@cancel="showPicker = false"
							/>
						</van-popup>
					</template>
					<van-field
						v-else
						v-model="applyForm.area_name"
						readonly
						required
						name="area_name"
						label="活动城市"
						:rules="[{ required: true, message: '请填写活动城市' }]"
					/>
					<van-field
						v-model="applyForm.time_text"
						disabled
						label="活动时间"
					/>
					<van-field class="radio" name="type" label="是否是银河员工" required :rules="[{ required: true, message: '必选' }]">
						<template #input>
							<van-radio-group v-model="applyForm.type" direction="horizontal">
								<van-radio :name="1" checked-color="#115ED1">是</van-radio>
								<van-radio :name="2" checked-color="#115ED1">否</van-radio>
							</van-radio-group>
						</template>
					</van-field>
					<div class="submit-btn"> 
						<van-button block type="info" native-type="submit">点击提交</van-button>
					</div>
				</van-form>
			</div>
		</van-action-sheet>
	</div>
</template>
<script>
import headerPart from '../components/conmon/header'
import layoutMode from '../components/layoutMode'
import {get,find} from 'lodash'
import {mapActions,mapState} from 'vuex'
import {wxShare} from '../utils/share'
export default{
	data(){
		return{
			loadingImg:require('@/assets/images/loading.gif'),
			cityId:this.$route.query.city_id || 1,
			guestData:{},
			titleObj:{
				sponsor_list:require('@/assets/images/guestTitle.png'),
				guest_list:require('@/assets/images/sponsorTitle.png'),
			},
			applyTitle: require('@/assets/images/apply_title.png'),
			guestItemInfo:{},
			isShow:false,
			isshowApply:false,
			applyForm:{
				name:'',
				type:2,
				phone:'',
				area_name:'',
				city_id:'',
				time_text:''
			},
			showPicker:false
		}
	},
	components:{
		headerPart,
		layoutMode
	},
	created(){
		// this.getGuest()
		// const url = window.location.href
		// wxShare('',url,this.$route.query.city_id)
		this.cityChange()
	},
	computed:{
		...mapState({
			areaList: state => state.areaList,
			pubSetting: state => state.pubSetting,
		}),
		city(){
			let nowCity = this.$route.query.city_id || this.areaList[0]['id']
			const cityObj = find(this.areaList,['id',Number(nowCity)]) || {}
			return cityObj
		},
		areaLists(){
			const { city_id } = this.$route.query
        if (city_id == 1 || !city_id) {
          return this.areaList.filter(item => item.id != 1)
        }else{
					return this.areaList
				}
		}
	},
	methods:{
		getGuest(){
			let city = this.$route.query.city_id || this.areaList[0]['id'] || 1
			apiStore.get('/v1/index/guest_list',{city_id:Number(city)}).then(res =>{
				this.guestData = get(res,'data')
        console.log(this.guestData)
			}).catch(err =>{
				console.log(err)
			})
		},
		cityChange(){
			this.getGuest()
			const url = window.location.href
			wxShare('',url,this.$route.query.city_id)
		},
		showLay(item){
			this.guestItemInfo = item
			this.isShow = true
		},
		closeLay(){
			this.isShow = false
		},
		singUp(){
			let endTime = this.city.end_time * 1000
			const currentTime = new Date().getTime()
			if(currentTime > endTime){
				this.$toast('活动已结束');
			}else{
				this.isshowApply = true
				this.applyForm.city_id = this.city.id
				this.applyForm.area_name = this.city.name
				this.applyForm.time_text = this.city.time_text
			}
			
		},
		onConfirm(value) {
			this.applyForm.city_id = value.id
			this.applyForm.area_name = value.name
			this.applyForm.time_text = value.time_text
			this.showPicker = false
		},
		onSubmit() {
			apiStore.post('/v1/index/get_apply_list',this.applyForm).then(res =>{
				this.$toast(res.msg);
				this.isshowApply = false
			})
		},
		onFailed(errorInfo) {
			console.log('failed', errorInfo);
		},
	}
}
</script>
<style lang="less" >
.guests-box{
	margin-bottom: 49px;
	.guests{
		width: 100%;
		margin-bottom: 15px;
		.guest-title{
			width: 100%;
			margin-top: 2.1875rem /* 35/16 */;
			margin-bottom: .625rem /* 10/16 */;
			img{
				width: 100%;
			}
		}
		.tips{
			margin-bottom: .9375rem /* 15/16 */;
			font-weight: 300;
			font-size: .5625rem /* 9/16 */;
			color: #D2D2D2;
			line-height: 1rem /* 16/16 */;
			text-align: center;
		}
		.guest-list{
			width: 20.6875rem /* 331/16 */;
			margin: 0 auto;
			.van-col{
				margin-bottom: 8px;
				.guest-head-box{
					width: 100%;
					height: 7.75rem /* 124/16 */;
				}
				.guest-head{
					width:100%;
					display: block;
					max-width: 100%;
					max-height: 100%;
					margin: 0 auto;
					
				}
				.guest-info{
					background-color: #163bcc;
					padding: 8px 13px 0 6px;
					height: 60px;
					.info-name{
						margin-bottom: 4px;
						font-size: 14px;
						font-weight: 500;
						color: #fff;
						line-height: 18px;
					}
					.info-text{
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						font-size: 10px;
						font-weight: 400;
						color: hsla(0,0%,100%,.8);
						line-height: 12px;
					}
				}
			}
			
		}
	}
	.updating{
		width: 100%;
		text-align: center;
		font-size: .5625rem /* 9/16 */;
		font-weight: 300;
		color: #D2D2D2;
		line-height: .8125rem /* 13/16 */;
		margin-bottom: 65px;
	}
	.btn-sign-up{
		height: 49px;
		width: 100vw;
		font-size: 14px;
		line-height: 49px;
		color: #fff;
		background-color: #115ED1;
		text-align: center;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	.apply-box{
		
		.apply-contain{
			padding: 2.125rem /* 34/16 */ 1.875rem /* 30/16 */ 5rem /* 80/16 */;
			.apply-title{
				width: 100%;
			}
			.van-form{
				padding-top: 1.875rem /* 30/16 */;
			}
			.van-cell{
				display:block;
			}
			.van-cell::after{
				border:0;
			}
			.van-field__label{
				color: #0A0740;
    			margin-bottom: 10px;
				width:100%;
			}
			.van-cell__value{
				.van-field__body{
					height: 2.1875rem /* 35/16 */;
					line-height:2.1875rem /* 35/16 */;
					border: .0625rem /* 1/16 */ solid #0A0740;
					border-radius: .3125rem /* 5/16 */;
					padding-left: .3125rem /* 5/16 */;
					.van-field__control{
						color: #0A0740;
					}
				}
				
				
			}
			.radio{
				.van-cell__value .van-field__body{
					border:0;
				}
			}
			.submit-btn{
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 2.8125rem /* 45/16 */;
				button{
					height:2.8125rem /* 45/16 */;
					line-height: 2.8125rem /* 45/16 */;
					background: #115ED1;
					border: 0;
					font-size: 18px;
					font-weight: 400;
				}
				
			}
		}
	}
}
</style> 