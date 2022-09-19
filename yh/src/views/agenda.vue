<template>
	<div class="guests-box">
		<header-part @changeCity="cityChange"></header-part>
		<section class="agendas">
			<div class="width-331" v-if="agendata.image">
				<img class="agenda-img" v-lazy="agendata.image" alt="">
			</div>
			<img class="bond-introduce" :src="companyTitle" alt="">
			<div class="bond-text-back width-331" v-html="pubSetting.content"></div>
			<div class="bottom-introduce width-331">
				<p>地址：{{pubSetting.address}}</p>
				<p>电 话：{{pubSetting.phone}}</p>
				<p>邮 编：{{pubSetting.postcode}} {{pubSetting.fax?`传 真：${pubSetting.fax}`:''}}</p>
				<p>电子邮箱：{{pubSetting.email}}</p>
				<p class="danger-info">风险揭示：相关观点仅供参考，不构成投资建议，不构成对任何机构、产品、服务的推介。股市有风险，投资需谨慎，请审慎选择与自身风险承受能力及投资目标等相匹配的产品及服务。</p>
			</div>
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
import { find } from 'lodash'
import {mapState} from 'vuex'
import {wxShare} from '../utils/share'
export default{
	name:'agendas',
	data(){
		return{
			cityId:this.$route.query.city_id || 1,
			applyTitle: require('@/assets/images/apply_title.png'),
			companyTitle: require('@/assets/images/company_title.png'),
			agendata:{},
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
		headerPart
	},
	created(){
		// this.getAgendas()
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
		getAgendas(){
			let nowCity = this.$route.query.city_id || 1
			apiStore.get('/v1/index/activity_list',{city_id:Number(nowCity)}).then(res =>{
				this.agendata = res.data
                console.log(res)
			}).catch(err =>{
				console.log(err)
			})
		},
		cityChange(){
			this.getAgendas()
			const url = window.location.href
			wxShare('',url,this.$route.query.city_id)
		},
		// singUp(){
		// 	this.isshowApply = true
		// 	this.applyForm.city_id = this.city.id
		// 	this.applyForm.area_name = this.city.name
		// },
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
			}).catch((err =>{
				console.log(err)
			}))
		},
		onFailed(errorInfo) {
			console.log('failed', errorInfo);
		},
	}
}
</script>
<style lang="less">
.width-331{
	width: 20.6875rem /* 331/16 */;
	margin: 0 auto;
}
.agendas{
	padding-top: 1.875rem /* 30/16 */;
	padding-bottom:5rem /* 80/16 */;
	.agenda-img{
		width: 100%;
	}
	.bond-introduce{
		width: 100%;
		margin: 32px auto 15px;
	}
	.bond-text-back{
		background: #1939CA;
		box-shadow: 0px 0px .625rem  0px rgba(6, 12, 68, 0.5);
		border-radius: .625rem /* 10/16 */;
		padding: 1.4375rem /* 23/16 */ 1.1875rem /* 19/16 */;
		font-size: 10px;
		font-weight: 300;
		color: #D2D2D2;
		line-height: .9375rem /* 15/16 */;
		p{
			margin-bottom: .5rem /* 8/16 */;
		}
	}
	.bottom-introduce{
		padding-top:1.9375rem /* 31/16 */;
		font-size: 10px;
		font-weight: 300;
		color: #fff;
		line-height: 15px;
		text-align: center;
		.danger-info{
			text-align: left;
			margin-top: 18px;
		}
	}
}
</style>
