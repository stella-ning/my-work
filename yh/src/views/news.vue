<template>
	<div class="guests-box">
		<header-part @changeCity="cityChange"></header-part>
		<section class="news width-331" @scroll='handleScroll'>
			<van-list
				v-model="loading"
				:finished="finished"
				:immediate-check="true"
				finished-text="没有更多了"
				@load="getNews">
				<div class="news-list">
					<div class="list" v-for="(item,index) in newsList" :key="index" @click="toDetail(item.url)">
						<div class="list-info">
							<p class="info-title">{{item.title}}</p>
							<p class="info-time">{{dataFormat(item.createtime,'yyyy-MM-dd hh:mm')}}</p>
						</div>
						<img v-lazy="item.image"  alt="" class="info-img">
					</div>
				</div>
				
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
	name:'news',
	data(){
		return{
			cityId:this.$route.query.city_id || 1,
			applyTitle: require('@/assets/images/apply_title.png'),
			newsList:[],
			page:1,
			size:20,
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
		getNews(){
			apiStore.get('/v1/index/get_news_list',{page:this.page,size:this.size}).then(res =>{
				console.log(res.data.length)
				if(res.data.length > 0){
					this.newsList = [...this.newsList, ...res.data]
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
		cityChange(){
			this.getNews()
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
		toDetail(url){
			window.location.href= url
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
		dataFormat(value, fmt){
			let getDate = new Date(value*1000);
			let o = {
				'M+': getDate.getMonth() + 1,
				'd+': getDate.getDate(),
				'h+': getDate.getHours(),
				'm+': getDate.getMinutes(),
				's+': getDate.getSeconds(),
				'q+': Math.floor((getDate.getMonth() + 3) / 3),
				'S': getDate.getMilliseconds()
			};
			if (/(y+)/.test(fmt)) {
				fmt = fmt.replace(RegExp.$1, (getDate.getFullYear() + '').substr(4 - RegExp.$1.length))
			}
			for (let k in o) {
				if (new RegExp('(' + k + ')').test(fmt)) {
					fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
				}
			}
			return fmt;
		}
	}
}
</script>
<style lang="less">
.news{
	padding-top: 1.875rem /* 30/16 */;
	padding-bottom:5rem /* 80/16 */;
	.news-list{
		// min-height: 100vh;
		.list{
			position: relative;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-pack: justify;
			-ms-flex-pack: justify;
			justify-content: space-between;
			width: 100%;
			background: url('../assets/images/news_bg.png') no-repeat;
			background-size: contain;
			border-radius: .9375rem /* 15/16 */;
			box-shadow: 0 0 .625rem /* 10/16 */ 0 rgba(6, 12, 68, 0.5);
			padding: .9375rem /* 15/16 */;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			margin-bottom: .9375rem /* 15/16 */;
		}
		.info-img{
			display: block;
			width: 6.25rem /* 100/16 */;
			height: 3.75rem /* 60/16 */;
			-o-object-fit: cover;
			object-fit: cover;
			border-radius: .625rem /* 10/16 */;
		}
		.list-info{
			.info-title{
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				width: 11.875rem /* 190/16 */;
				font-size: .6875rem /* 11/16 */;
				font-family: Source Han Sans CN;
				font-weight: 300;
				color: #fff;
				line-height: .9375rem /* 15/16 */;
			}
			.info-time{
				font-size: .625rem /* 10/16 */;
				font-family: Source Han Sans CN;
				font-weight: 300;
				color: #D2D2D2;
				margin-top: .5rem /* 8/16 */;
			}
		}
	}
}

</style>
