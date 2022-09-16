import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  state: () => ({
    sampleHomeCard: [
      { cardTitle: "Title Card #1", cardCoverPhoto: "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/1/10/097b32a1-fe4f-457b-959a-49faef261319.jpg", cardDate: "September 14, 2021" },
      { cardTitle: "Title Card #2", cardCoverPhoto: "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/1/10/097b32a1-fe4f-457b-959a-49faef261319.jpg", cardDate: "September 14, 2021" },
      { cardTitle: "Title Card #3", cardCoverPhoto: "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/1/10/097b32a1-fe4f-457b-959a-49faef261319.jpg", cardDate: "September 14, 2021" },
      { cardTitle: "Title Card #4", cardCoverPhoto: "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/1/10/097b32a1-fe4f-457b-959a-49faef261319.jpg", cardDate: "September 14, 2021" },
    ]
  })

}
)
