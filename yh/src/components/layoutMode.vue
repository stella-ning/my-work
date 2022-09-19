<template>
    <van-dialog class="my-layout" v-model="show" :showConfirmButton="false" :showCancelButton="false">
      <img class="detailsInfo-head"  v-lazy="guestItemInfo.image">
		<p class="detailsInfo-name">{{guestItemInfo.name}}</p>
		<p class="detailsInfo-position">{{guestItemInfo.description}}</p>
		<div class="detailsInfo-introduce" v-html="guestItemInfo.htmls"></div>
		<div class="close-btn" @click="cancel">
			<img :src="closeIcon" alt="">
		</div>
    </van-dialog>
</template>
<script>
export default {
    props:{
			show:false,
			guestItemInfo:{}
    },
    data(){
        return {
            closeIcon: require('@/assets/images/close_icon.png'),

        }
    },
	created(){
		console.log(this.guestItemInfo)
	},
    methods: {
        cancel(){
            this.$emit('cancel')
        },
    },
}
</script>
<style lang="less">

.van-overlay{
		background-color: rgba(0,0,0,.5)
	}
.my-layout{
	border-radius: 10px !important;
	width: 80% !important;
	padding: 2.1875rem /* 35/16 */ .9375rem /* 15/16 */ ;
	.detailsInfo-head{
		height: 87px;
		width: 87px;
		-o-object-fit: cover;
		object-fit: cover;
		display: block;
		margin: 0 auto 10px;
		border-radius: 50%;
	}
	.detailsInfo-name{
		font-size: 18px;
		font-family: Source Han Sans CN;
		font-weight: 500;
		color: #333;
		line-height: 18px;
		text-align: center;
	}
	.detailsInfo-position{
		font-size: 12px;
		font-family: Source Han Sans CN;
		font-weight: 400;
		line-height: 18px;
		text-align: center;
		margin: 8px auto 11px;
		color: hsla(0,0%,40%,.6);
	}
	.detailsInfo-introduce{
		color: #666;
		font-size: 12px;
		font-family: Source Han Sans CN;
		font-weight: 400;
		line-height: 18px;
	}
	.close-btn{
		position:absolute;
		top:1.4375rem /* 23/16 */;
		right: 1.4375rem /* 23/16 */;
		width: 24px;
		height: 24px;
		img{
			width: 100%;
		}
	}

}
    
</style>