<template>
  <div class="home">
    <HomePost :post="welcomeScreen" />
    <br>
    <HomePost :post="post" v-for="(post, index) in sampleHomePost" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View more recent </h3>
        <div class="blog-cards">
          <HomeCard :post="post" v-for="(post, index) in sampleHomeCard" :key="index" />

        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>REGISTER YOUR ACCOUNT TODAY</h2>
        <router-link class="router-button" to="#">
          Register for ....
          <font-awesome-icon icon="fa-solid fa-arrow-right" class="arrow arrow-light" />
        </router-link>
      </div>
    </div>


  </div>
</template>


<script>
import HomePost from "../components/HomePost.vue"
import HomeCard from "../components/HomeCard.vue"
import { useCounterStore } from '../stores/counter'
export default {
  name: 'Home',
  components: { HomePost, HomeCard },
  data() {
    return {
      welcomeScreen: {
        title: "Enjoy!",
        homePost:
          "Read AND Write!",
        welcomeScreen: true,
        photo: "test1.jpg",
      },
      sampleHomePost: [
        {
          title: 'This is test 1 title',
          synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt eleifend risus eget cursus. Cras rhoncus sapien erat, viverra .",
          coverPhoto: "test2.jpg"
        },
        {
          title: 'This is test 2 title',
          synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt eleifend risus eget cursus. Cras rhoncus sapien erat, v',
          coverPhoto: "test2.jpg"
        },
      ],
      sampleHomeCard: [
        { cardTitle: "Title Card #1", cardCoverPhoto: "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/1/10/097b32a1-fe4f-457b-959a-49faef261319.jpg", cardDate: "September 14, 2021" },
        { cardTitle: "Title Card #2", cardCoverPhoto: "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/1/10/097b32a1-fe4f-457b-959a-49faef261319.jpg", cardDate: "September 14, 2021" },
        { cardTitle: "Title Card #3", cardCoverPhoto: "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/1/10/097b32a1-fe4f-457b-959a-49faef261319.jpg", cardDate: "September 14, 2021" },
        { cardTitle: "Title Card #4", cardCoverPhoto: "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/1/10/097b32a1-fe4f-457b-959a-49faef261319.jpg", cardDate: "September 14, 2021" },
      ]
    }
    // const counterForce = useCounterStore()
  },

}
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;

      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;

      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }

  }
}
</style>

