export default {
state: {
    ads:[
			{
				title:"First",
				desc:"First Desc",
				promo: true,
				src: "https://w.forfun.com/fetch/ef/efec5b0d09345e0a9d981b5b60d1880c.jpeg",
				id:"1"
			},
			{
				title:"Second",
				desc:"Second Desc",
				promo: true,
				src: "https://i.ytimg.com/vi/zaCVh8Ue9rc/maxresdefault.jpg",
				id:"2"
			},
			{
				title:"Third",
				desc:"Thitd Desc",
				promo: true,
				src: "https://gamerwall.pro/uploads/posts/2021-11/1637288547_46-gamerwall-pro-p-teksturi-mobov-v-mainkrafte-oboi-na-zastav-47.png",
				id:"3"
			},
			{
				title:"Fouth",
				desc:"Fouth Desc",
				promo: true,
				src: "https://phonoteka.org/uploads/posts/2022-09/1663296783_3-phonoteka-org-p-ender-drakon-art-krasivo-3.jpg",
				id:"4"
			}
	]
},
mutations: {},
actions: {},
getters: {
    ads(state) {
			return state.ads
		},
		promoAds(state) {
			return state.ads.filter(ad => {
				return ad.promo
			})
		},
		myAds(state) {
			return state.ads
	}
}
}