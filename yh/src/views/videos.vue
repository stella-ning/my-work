<template>
	<div class="guests-box">
		<header-part @changeCity="cityChange"></header-part>
		<section class="videos width-331" @scroll='handleScroll'>
			<van-list
				v-model="loading"
				:finished="finished"
				:offset="0"
				:immediate-check="true"
				finished-text="更多精彩视频敬请期待"
				@load="getVideos">
				
				<van-row class="video-list" :gutter="15" type="flex" >
					<van-col span="12" v-for="(item,idx) in videos" :key="idx" @click="toDetail(item.id)">
						<img class="list-img" v-lazy="item.image" alt="" >
						<p class="list-title ellipsis">{{item.title}}</p>
					</van-col>
				</van-row>
			</van-list>
		</section>
		<footer class="btn-sign-up" @click="singUp">
			立即报名
		</footer>
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
import {get,find } from 'lodash'
import {mapActions,mapState} from 'vuex'
import {wxShare} from '../utils/share'
export default{
	name:'videos',
	data(){
		return{
			cityId:this.$route.query.city_id || 1,
			applyTitle: require('@/assets/images/apply_title.png'),
			videos:[],
			page:1,
			size:10,
			isshowApply:false,
			applyForm:{
				name:'',
				type:2,
				phone:'',
				area_name:'',
				city_id:'',
				time_text:''
			},
			showPicker:false,
			loading: false,
			finished: false,
		}
	},
	components:{
		headerPart
	},
	created(){
		//this.getVideos()
		const url = window.location.href
		wxShare('',url,this.$route.query.city_id)
	},
	computed:{
		...mapState({
			areaList: state => state.areaList,
			pubSetting: state => state.pubSetting,
		}),
		city(){
			let nowCity = this.$route.query.city_id || 1
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

		getVideos(){
			console.log(1)
			apiStore.get('/v1/index/get_video_list',{page:this.page,size:this.size}).then(res =>{
				console.log(res.data.length)
				if(res.data.length > 0){
					this.videos = [...this.videos, ...res.data]
					this.loading = false
					this.finished = false
					this.page ++
				}else{
					this.finished = true
				}
				console.log(this.videos.length)
			}).catch(err =>{
				console.log(err)
			})
			
			
		},
		cityChange(){
			this.getVideos()
			const url = window.location.href
			wxShare('',url,this.$route.query.city_id)
		},
		onLoad() {
			console.log(122)
			let current = parseInt(this.page) + 1
			this.loading = true
			if(!this.finished){
				console.log(2222)
				this.getVideos(current).then(()=>{
					this.loading = false
				})
			}
			
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
		handleScroll({scrollTop}) {
            console.log('高度' + scrollTop)
        },
		toDetail(id){
			const query = this.$route.query
			this.$router.push({
				path:'/viewpointDetail',
				query:{
					id:id
				}
			})
		}
	}
}
</script>
<style lang="less">
.videos{
	padding-top: 1.875rem /* 30/16 */;
	padding-bottom:5rem /* 80/16 */;
	// min-height: 100vh;
	.video-list{
		
		.van-col{
			margin-bottom: 25px;
		}
		.list-img{
			width: 100%;
			border-radius: 8px;
		}
		.list-title{
			font-size: 13px;
			font-weight: 400;
			color: #fff;
			margin-top:10px;
		}
	}
}

</style>
