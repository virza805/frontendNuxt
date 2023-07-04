import axios from "axios";

const products = {
  namespaced: true,
  state:{
    products:[],
    cart:process.client ? JSON.parse(localStorage.getItem("products:cart")) : [], 
    checkoutStatus:"",
    modalData: {
      product: [],
      modal: false
    },
  },
  getters:{

    cartTotal (state) {
      // return state.cart.reduce((total, cart) => total + cart.iTotalPrice , 0)
      return state.cart.reduce((total, cart) => total + cart.quantity * cart.price, 0)
    },
    cartQty (state) {
      return state.cart.reduce((total, cart) => total + cart.quantity, 0)
    }

  },
  mutations:{
    setCartItems(state, items) {
      state.cart = items
    },
    setProudcts(state, payload) {
        state.products = payload.data.data
    },
    TRIGGER_MODAL(state, product) {
      state.modalData.product = product;
      state.modalData.modal = true;
    },
    RESET_MODAL(state, product) {
      state.modalData.product = [];
      state.modalData.modal = false;
    },

    // cart function start now

    // cart mutations
    pushProductToCart(state, productId){
      state.cart.push({
          id: productId.id,
          name: productId.name,
          price: parseInt(productId.sell_price),
          quantity: 1,
          image: productId.image
      });
    },

    removeProductToCart(state, id) {
      state.cart = state.cart.filter((product) => product.id !== id);
    },


    checkProductInCart(state, cartItem){
        // cartItem.quantity++

        const product = state.cart.find(item => item.id === cartItem.id)
        // console.log(product.stock)
        // if(product.stock>cartItem.quantity){
        //   cartItem.quantity++
        // }
    },


    incrementItemQuantity(state, cartItem){
        // cartItem.quantity++

        const product = state.products.find(item => item.id === cartItem.id)
        // console.log(product.stock)
        if(product.stock>cartItem.quantity){
          cartItem.quantity++
          this.$toast.info('increment 1 qty Cart!');
        } else{

          this.$toast.error('Stock fenish!');
        }
    },
    decrementItemQuantity(state, cartItem){

        cartItem.quantity--
        this.$toast.warning('Remove 1 qty Cart!');
        if(cartItem.quantity === 0){
          state.cart = state.cart.filter((product) => product.id !== cartItem.id);
          this.$toast.error('Remove this Cart!');
        }
    },


    decrementProductStock(state, product){
        product.stock--
    },
    incrementProductStock(state, product){
        product.stock++
    },

    setCheckoutStatus(state, status){
        state.checkoutStatus = status
    },

    emptyCart(state){
        state.cart = []
    },

  },
  actions:{

    async fetchProduct({commit}, page) {
      const resData = await this.$axios.$get(`/api/all/client-product?page=${page}`);
      commit('setProudcts', resData);
    },
    triggerModal({commit}, product) {
      commit('TRIGGER_MODAL', product)
    },
    resetModal({commit}) {
      commit('RESET_MODAL')
    },


    // cart function start now
    addProductToCart({state, commit}, product) {

      const cartItem = state.cart.find(item => item.id === product.id)

      let stock = parseInt(product.stock);

      if(stock > 0){ // check for have product in sore | shope
          if(!cartItem){
          commit('pushProductToCart', product)
          }else{
          commit('incrementItemQuantity', cartItem)
          }

          commit('decrementProductStock', product)
      }else{
        let message = "show out of stock";
        this.$toast.error('Ho! out of stock :)');
      }

      this.$toast.success('Added to Cart!');

    },

    // checkout form the cart
    checkout({state, commit}){
        shop.buyProducts(
            state.cart,
            () => {
                commit('emptyCart')
                commit('setCheckoutStatus', 'success')
            },
            () => {
                commit('setCheckoutStatus', 'fail')
            }
        )

        this.$toast.info('Checkout Processing...');
    },


  }
}
export default products;
