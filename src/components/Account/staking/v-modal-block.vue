<template>
  <div class="modal_block" v-if="show === true">
    <div class="modal_window">
        <h3 class="heading_darkBlue text-center">Deposit Coin</h3>
      <span class="close"
            @click="this.viewModal">
        x
      </span>
      <div class="content">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAALNklEQVR4Xu3d0XbbMA4E0Ob/P7p7nN1NYlqKrgAodk6nzyAIDAZDkHbctz9//vz98wL//v6dDePt7e0hq+oeW762INvyr2tXf5O+br6n/U1R5lal2coXI6uSY2+7EPAemRDwgJgh4LWECQFDwFNnwzRhpv2dSuYb4xzBgKTOcZNFnvT162bA6eNwq8ZrUXVPne06pFnjVV/A5XcTyVXzFGyVgBKX5qiz+aYCPiMQ3VMLo6SRfdWXFqe6p6y7xVDFSP1rntIcISA8/4SAHcrdr12xDAFDwA+GRAGh0arHy55rAT0KCIVBk7ICdoogNzqx0WEasdi8EGieQtwz89jkxacam9ZA8RV/fARrYbaCk0DEJgS00oeAC05CLrEJAUNAQyAE/EBAZ9YcwV8QUDVSNoo/sYkCGuI5gi9UQCuBfdqgvqoqtuf/6k+BqnmpCKh/8ffrLiGd5HWtHIeqMlt7hoCfqISAwMooIIC0YRIFrOH2sCoErAEZAtZwCwG/IHD1+2+O4IVuHcC3+C6zYmdP8d+5DE3H9us/ilNRqxamA3gIeI9AjmBl69CREwKGgB8IRAGPu0+egzonQhTwuAZ04Si4OdUI00XWeH8VATUptasmL111i6GqgBq/PDA/Kw7NQWqgvtSufAnRDdROktf3N7XT2Kp2rxKHxi81UF9qFwIqUgW7EPAYtBDwGKOyRQh4DF0IeIxR2SIEPIaOCHjsZt6ic7nQwoud2Nyyn7Sb9NWNbb6y33t86Z/meEZh/pU994gaAn5B4F8hwzPyDAGXVssRfA/Is/D4cQX8+4wXW8xSPyHQYm1tu66dViNM9cFMc1f/r1rmtxDw/gdiQ0Cl9IxdCLj8NkwIOEMs9RIChoDKlUvsQsAQ8BJiqdMf+Uq+BPOsIfkVPpCfvEQJ1v+3mb7orHtLTUPA5f8TEdDOFHnLVkiv5OjEq3tU85XYQsAQsMqvw3Uh4CFEj5/pCmjg9luTKOAnPFHAKGC3n3bXSzMzAS+LcsCxzjLVYV/XqV01ZfXfsZPYJvEOATf+U0O5zXUerKXIWzYdYmm8ElsIuKA0CchPFF6K/BNxyBEpt/i9fKRhooBRwNP9MNnwIWAI+FwCbn0bZnJe2Mvu6qcIzUG7WebC05X834JqDLflcszt2Um8ndhkjNj8LFiLJwmEgMcodYocAh7ju2kRBfzyGAtjQGfQjwJuoBcChoA3BHIEF9Wn+oTRedaQmeq9qBs5VePtjAcSb+vPMnX+oEAQNAW3ajeZU3E6eV+mhdd4xa5K0jPxrpiEgPBZcIcMVRJ29pxsPo1f4w0BFwSunkW1gA+FwdFAlE2fa6KASxUmwe0UQbu7U8AQsNCqSpDMgOfB7ZD+1x/BnU5W4NaSdPbU8kphNP7JeCWuvRw13qoIKLYqRqvd+GfBVUAmC3qmWA+ANGYvLZYct4pHFe+tkWTSlz4HhYDwZ5miHlXyaaHONJXGUm0+xUOUPQQMAT/4FAXU1i3aUUfmCC6h+5QZUAraOWLUfwmxE4s0DlUQOfq0oHocnki3ZFrFqHUEVzfde5ObHM5LKO4s6uQpBLna/yQWZ2ZRaaIQEKpzNUGu9g8ptk2qOYSAAH0V3D3XOYI/kWkRcAvgyWJ13sJE/qffwoDL7yaTBJzESGdYzZPGjxseq6EmFQLWShECRgE/EBAy1Gi2v0r2rCp455IQBVzQUyXuHPtChhBwDoGnfBas3VwdBULAY4IIRk9RQP2VfA1OVesYMv9auvjaGv51XWfWlT062OpauhA0PgXSOB4UMAQUijzaiKKo52rxbv51bQio1fhi1wFXAC+E9LEkBLxHT2sVBeyw7qA5quNHtXhRwI1iVougc1aHP1fHVvUfAi5V7QCiBJE9qrfnvRjEn9hojnrxESw6OZ1Zu9pqbOXm01/Hmp6pJLGfIMMax0/sWS2y1kCwnW6OEBBkScglNrDVh4kURgkTAi4ICLh7xRLQf4IMUcDv20nqpGq6OefnCL59Iejz30+QPkfwJwL8dSx996p2jPo/c/xJoeWzYFV6zX2NS0mvceiLQsdfBdvbmhWjEBD+Kk4LFQLe01IaKwQMATuHysdaPcGigAcXKQVSjzmprihFZ9DfOvq6/nIES2UXGyGX2HRu9p2nFB0FtDk6/sYI2Pk2TKdz5flDgewUtcDj9yWd3GXP6UYQsnX21FqNfhmhU4QQ8HsadshQXVtdd+ZECAFFfsCm03zgvvVD41UiVdeFgBsIKEGEDJ0jXo6+6vHVKfz0nlV/m/9NQ9XZmdtWjuAcwe98+YmP4qalvXoDk8bqKKeuFVWsPmqfUfTqp0AaG+UZAs59FhwC3tM/BAQ5kFGg0/FV9dc9IcVdkyhgB70va6tF3ppZVcWuvpj8MwTc+m0Y5YVI7N7FRPbo+Ne1EoeSQfdUfxJbx0bi1VjF1xYXxv+rLhn0FbRqUjf/ulZiuboIEsMVNoLR1bmHgFDZq4sAIVxiEgIewCoAnXl7rFYxBDxGrlqrKOAxtvzzF9UiQAiXmEi8VzcffyFVZzu9RcoTgKIuQD7rMiS35clb/PT8q3WXPDd9dX4hVYETO+20aqIhoLbzsZ3WSoQhCniMN9+oq4WRBt0Ls7MWUt80qeYZBcTfv1uBkk4+o7AyfnT21LUh4BcEtKtyBN8j8M8ooBJELyFXq4x2t6iFFlntNLbV7mr/euGo1njrgsQzYAh4Xx4tghBcCRkCAlJamCgggLmYhICAWQh4rJQAI98+JxU2RzBURkcBcPVuIgVU5VE7jS0z4AFSSgYpshZF91R/EluHWNW11XV7z0GTeU7WgC8hKs+dZxIhzWTy0wqoGE2S4Rl7TtYgBFx+nGiyoD+hRpPxquqGgCKVaPPb1SgEhEJLkcHNu8lk9+UIvkf9pRVQC/8qzzCvHEf1dvsMguhMX42NZ8AQ8FgttFgh4CcCIeDCBh0XOg0ZAoaAuyNnCHg8jet4I3ZRwCjgMeMAo/IMqL+QejrKgQWa1MBWHy70aK3Oe51nk1eJrYP3w5dxQ8Da5SIErNEwBDzA7VVURuanMxTQ2VYuSGf2XW1DwBDwFH86DSmnBP9C6qmoh4wzA77meNAp74MCdn4dqxPIkTRP+j7ja7rjSQXwr/X0GNXGXe302Fc7yj0EnFMZJfqDCoSACt11dtrd10XwX89RwOOGjAJeyMIQ8AUI+BNqVJ0/ZK7YUzLJSwkovqbjmFQe7WHFo1oX/ihOA1a7EPB7pKoXiT2v2jDr+hAQGK3KIEVQwMVXFPDvQ/VWfKOAC0Qh4PEMCJrwbiLCEAKGgN/ySRvy8hnw6kCkW7TztPuqoL1SHNO4SW6T4wcrYAgopXm0qRJE16ldLfrtVSEgoFktTHXdmdunNLPGoXYAGZuEgABVtTDVdSHgIwLylJQjeMEtBDzu7n9aATsEEeDkeDyjdlu2nT2O6eEWgod6q+b06xQwBFRKHNuFgF8wUmKpnT6xrHbVTt57+okCft8IUcAFnxDwWDknmyoEDAFrjBvC7dcRUNGqzjc/oYCSQyeO6vghcU3bhIBDnXxmBpQihoAXF2by+4CTHd8pfFV1J2eq7hORNMekTRTw4karFqvTCJMNWY1f14WAIaBy5RI7JuD07nIE69HUOfpEafTtsRPHmqvENX3cyme3tz01NsEjBIS/yQ0B76keAi6tL522pxYCZggYAn4goMeEjgwh4CdSiq1gps9SOYJzBJ9u7ssJqOoxaafHXOeJQYGTvDTezngweTHp4CZ4KLYrHpsKKBtO22hBO0AqSJKbxhsC3qMZAgq7wCYEnLmYRAGBbKq6OsQXt+T3N/X/DHVe9/wPf2IC+3VKHqUAAAAASUVORK5CYII=" alt="">
        <div class="info">
          <p class="text_big text_greey">Coin Deposit Address</p>
          <input type="text" class="form-control" disabled="disabled" value="Ae2tdPwUPEZHv3NNuiX1hoKnuaT4aA6Xga4BCzbAAqccYu1HppUXBUNBwX7">
          <p class="text_small text-center mt-3">
            Only send ADA to this address. Sending any other digital asset, will result in permanent loss.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-modal-block",
  methods:{
    viewModal(){
      this.$emit('viewModal')
    }
  },
  props: ['show']
}
</script>

<style scoped>
.modal_block{
  position: fixed;
  background-color: rgba(222,222,222,.3);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
}
.modal_window{
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  display: block;
  margin: 0 auto;
  width: 400px;
  position: relative;
}
.modal_window > h3{
  border-bottom: 1px solid #e3e3e3;
  padding-bottom: 20px;
}
.close{
  position: absolute;
  right: 20px;
  top: 10px;
  cursor: pointer;
}
.content{
  padding: 20px;
}
.content > img{
  width: 50%;
  height: auto;
  display: block;
  margin: 0 auto;
}
.info{
  margin-top: 30px;
}
</style>