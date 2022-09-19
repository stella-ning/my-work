<template>
	<div class="detail">
		<div class="video-show">
			<video ref="videoPlay" controls="controls" class="viewpoint-video" :src="detail.video_url" :poster="detail.image"></video>
			<div class="play-btn" v-show="isPlay" @click="handlePlay">
				<img :src="play_btn" alt="">
			</div>
		</div>
		<div class="viewpoint-info-container width-331">
			<p class="viewpoint-title">{{detail.title}}</p>
			<p class="big-shot-name">{{detail.author}}</p>
		</div>
		<div class="atlas-container width-331">
			<p class="atlas-label">图集</p>
			<div class="atlas-list">
				<div class="atlas-picture atlas-picture-right">
					<img v-lazy="detail.image" alt="">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import {wxShare} from '../utils/share'
export default {
	data(){
		return {
			detail:{},
			play_btn: require("@/assets/images/play_btn.png"),
			isPlay:true
		}
	},
	created(){
		// this.getDetail()
		// const url = window.location.href
		// wxShare('',url,this.$route.query.city_id)
		this.cityChange()
	},
	methods:{
		getDetail(){
			const id = this.$route.query.id
			apiStore.get('/v1/index/get_video_detail',{id:id}).then(res =>{
                this.detail = res.data
			}).catch(err =>{
				console.log(err)
			})
		},
		handlePlay(){
			this.isPlay = false
			this.$refs.videoPlay.play()
		},
		cityChange(){
			this.getDetail()
			const url = window.location.href
			wxShare('',url,this.$route.query.city_id)
		}
	}
}
</script>
<style lang="less">
.detail{
	.video-show{
		width: 100%;
		height: 14.375rem /* 230/16 */;
		background: url("../assets/images/detail_bg.png") no-repeat;
		background-size: cover;
		padding-top: .625rem /* 10/16 */;
		position: relative;
		.viewpoint-video{
			width: 18.125rem /* 290/16 */;
			height: 84%;
			display: block;
			margin: .625rem /* 10/16 */ auto;
		}
		.play-btn{
			position: absolute;
			top: 1.125rem /* 18/16 */;
			left: 0;
			right: 0;
			width: 18.125rem /* 290/16 */;
			height: 79%;
			display: block;
			background: rgba(0, 0, 0, 0.5);
			margin: .625rem /* 10/16 */ auto;
			img{
				width:43px;
				height:43px;
				border-radius: 50%;
				display:block;
				margin: 4.6875rem /* 75/16 */ auto;
			}
		};
	}
	.viewpoint-info-container{
    	color: #fff;
		padding-bottom: 30px;
		border-bottom: 1px solid #2361BD;
		p{
			display: inline-block;
			font-size: 13px;
			font-weight: 400;
		}
		.big-shot-name{
			color: #D2D2D2;
			float:right;
		}
	}
	.atlas-container{
		margin-top: 30px;
		.atlas-label{
			font-size: 15px;
			font-weight: 400;
			line-height: 15px;
		}
		.atlas-list{
			margin-top: .625rem /* 10/16 */;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-ms-flex-wrap: wrap;
			flex-wrap: wrap;
			-ms-flex-pack: distribute;
			justify-content: space-around;
			.atlas-picture {
				width: calc((100vw - 40px)/2);
				height: calc((100vw - 40px)/2/4*3);
				-webkit-box-flex: 1;
				-ms-flex-positive: 1;
				flex-grow: 1;
				-ms-flex-negative: 2;
				flex-shrink: 2;
				img{
					background-color: #ebeef5;
					border-radius: 4px;
					-o-object-fit: cover;
					object-fit: cover;
					width: calc((100vw - 40px)/2);
					min-width: calc((100vw - 40px)/2);
					height: calc((100vw - 40px)/2/4*3);
					min-height: calc((100vw - 40px)/2/4*3);
				}
			}
		}
	}
}
</style>
