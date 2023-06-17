<template>
 <v-container>
  <h1 class="text--secondary mb-3 mt-3 ">My ads</h1>
  <v-card v-for="ad in ads" :key="ad.id" class="mx-auto mb-5" max-width="1000">
   <v-row class="ma-2">
    <v-img :src="ad.src" height="175px"></v-img>
    <v-spacer></v-spacer>
   </v-row>
   <v-row>
    <v-card-text>
     <h2 class="text--primary">{{ ad.title }}</h2>
     <p>{{ ad.desc }}</p>
    </v-card-text>
    <v-card-actions>
     <v-spacer></v-spacer>
     <v-btn color="primary" variant="text" :to="'/ad/' + ad.id">
      Open
     </v-btn>
     <v-spacer></v-spacer>
    </v-card-actions>
   </v-row>
  </v-card>
 </v-container>
</template>
<script>
 export default {
  data() {
   return {
    ads: [
     {
      title: "First",
      desc: "First Desc",
      promo: true,
      src: "https://w.forfun.com/fetch/ef/efec5b0d09345e0a9d981b5b60d1880c.jpeg",
      id: "1",
     },
     {
      title: "Second",
      desc: "Second Desc",
      promo: true,
      src: "https://i.ytimg.com/vi/zaCVh8Ue9rc/maxresdefault.jpg",
      id: "2",
     },
     {
      title: "Third",
      desc: "Thitd Desc",
      promo: true,
      src: "https://gamerwall.pro/uploads/posts/2021-11/1637288547_46-gamerwall-pro-p-teksturi-mobov-v-mainkrafte-oboi-na-zastav-47.png",
      id: "3",
     },
     {
      title: "Fouth",
      desc: "Fouth Desc",
      promo: true,
      src: "https://phonoteka.org/uploads/posts/2022-09/1663296783_3-phonoteka-org-p-ender-drakon-art-krasivo-3.jpg",
      id: "4",
     },
    ],
   };
  },
 };
</script>