<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item v-for="ad in ads" :key="ad.id" :src="ad.src">
              <div class="ad-link">
                <v-btn class="error" :to="'/ad/' + ad.id">
                  {{ ad.title }}
                </v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="ad in ads" :key="ad.id">
          <v-card>
            <v-img :src="ad.src" height="200px"></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ad.title}}</h3>
                <div>{{ad.desc}}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text :to="'/ad/' + ad.id">
                Open
              </v-btn>
              <v-btn raised color="primary">
                Buy
              </v-btn>
            </v-card-actions>

          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
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
            id: "1"
          },
          {
            title: "Second",
            desc: "Second Desc",
            promo: true,
            src: "https://i.ytimg.com/vi/zaCVh8Ue9rc/maxresdefault.jpg",
            id: "2"
          },
          {
            title: "Third",
            desc: "Thitd Desc",
            promo: true,
            src: "https://gamerwall.pro/uploads/posts/2021-11/1637288547_46-gamerwall-pro-p-teksturi-mobov-v-mainkrafte-oboi-na-zastav-47.png",
            id: "3"
          },
          {
            title: "Fouth",
            desc: "Fouth Desc",
            promo: true,
            src: "https://phonoteka.org/uploads/posts/2022-09/1663296783_3-phonoteka-org-p-ender-drakon-art-krasivo-3.jpg",
            id: "4"
          }

        ]
      }
    }
  } 
</script>
<style scoped>
  .ad-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgb(0, 0, 0, 0.5);
    transform: translate(-50%, 0);
    padding: 5px 15px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
</style>