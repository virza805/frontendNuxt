<template>
 
  <div class=" flex flex-col py-12 px-4">
    <!-- Show Order List Start now -->
    <h2 class="text-4xl text-red-500 font-bold text-center">Show Order Data</h2>
    <p class="text-center text-base">Your role is <UserRole /></p>

    <div class="flex justify-between">

    </div>

    <div class="flex items-center justify-center py-12 lg:px-4 sm:px-6 mb-20 ">
      <div class="w-5/6 lg:w-11/12 flex flex-wrap flex-col-reverse lg:flex-row ">

        <div class="w-full p-3 mb-10 border-2 border-dashed rounded-sm border-green-400 -ml-2 mr-2">
          <div>
            <table class="table-auto catList">
              <thead class="bg-green-200 ">
                <tr>
                  <th>Order_id</th>
                  <th>User_id</th>
                  <th>Transaction_id</th>
                  <th>Payment</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th class="text-center col-span-3">
                    Action
                  </th>
                </tr>
              </thead>
              <div v-if="load" class="">
                <Tanvir >
                  <span>L</span>
                  <span>O</span>
                  <span>A</span>
                  <span>D</span>
                  <span>i</span>
                  <span>N</span>
                  <span>G</span>
                </Tanvir>

              </div>
              <tbody class="bg-green-50 p-2 ">
                <tr v-for="(slid, index) in cat_list" :key="slid.id" class="border border-b border-green-200 ">
                  <td class="table-td">{{ slid.id }}</td>
                  <td class="table-td">{{ slid.user_id }}</td>
                  <td class="table-td">{{ slid.transaction_id }}</td>
                  <td class="table-td pl-2">{{ slid.payment_method }}</td>
                  <td class="table-td py-1 border-l border-green-200 px-2 ">{{ slid.totall_price }}</td>
                  <td class="table-td pl-2">{{ slid.status }}</td>

                  <td>
                    <div class="flex my-1 lg:justify-between px-2">
                      <nuxt-link :to="`/backend/showInvoice/?id=${slid.id}`" class="bg-yellow-600 py-1 px-2 mx-2 rounded text-center text-white ">View</nuxt-link>

                    </div>
                  </td>
                </tr>

              </tbody>
            </table>

            <pagination v-model="page" :records="total" :per-page="per_page" @paginate="getData"></pagination>


          </div>

        </div>

      </div>
    </div>

    <img class=" text-center mx-auto" src="~/assets/img/vegetable-collection.png" alt="Phone">
    
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
  import form from '../mixins/form';
  import Input from '../../components/Form/Input.vue';
  // import LaravelVuePagination from 'laravel-vue-pagination';
  import Pagination from 'vue-pagination-2';
  export default {
    // middleware: ['auth'],
    middleware: 'auth',
    layout: 'backend',
    head: {
      title: "Show category List",
    },
    components: {
      Input,
      Pagination
    },
    mixins: [form],

    data() {
      return {
        cat_list: {},
        page: 1,
        data: [],
        per_page: 0,
        total: 0,
        selected_data: [],
        errors: {},
        loading: false,
        load: false,

        // current_page: 1,
        // from: 1,
        // last_page: 1,
        // next_page_url: null,
        // prev_page_url: null,
        // to: 1,
      };
    },

    created: function(){
      this.getData();
    },

    methods: {
      async getData(page = 1) {
        this.load = true;
        let r = await this.$axios.$get('/api/user/order/order?page='+ page)
        this.cat_list = r.data;
        this.total = r.total;
        this.per_page = r.per_page;
        this.load = false;
      },
    },

  };

</script>

<style scoped>
  button.bg-blue-600  {
    background: #0392cf;
  }
  button.flex.capitalize.bg-red-600 {
    background: #ad0101;
  }
  .table-td{
    @apply py-1 border-l border-green-200 px-1
  }
</style>
