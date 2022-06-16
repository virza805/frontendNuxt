<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
  -->
  <div class=" flex flex-col py-12 px-4">
    <!-- Show Task List Start now -->
    <h2 class="text-4xl text-red-500 font-bold text-center">{{ $auth.user.name }} Task List Show </h2>
    <p class="text-center text-base">Your role is
      <UserRole />
    </p>

    <div class="flex justify-between">
      <!-- <input
                type="text"
                class="form-control w-50"
                @keyup="search($event.target.value)"
                placeholder="search.."
              /> -->

      <form-button
      class="bg-red-600"
      :loading="loading"
      v-if="selected_data.length > 0"
      @click.prevent="delete_multiple()"
      >Delete Selected ( {{ selected_data.length }} )</form-button>


              <!-- <input
                type="text"
                class="form-control border border-green-300 w-50"
                @keyup="search($event.target.value)"
                placeholder="search.."
              /> -->

      <label class="relative block">
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <img src="~/assets/img/search.png" alt="">
        </span>
        <input
          class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          @keyup="search($event.target.value)"
          name="search" />
      </label>


      <nuxt-link to="/Backend/addTask" class=" bg-green-800 text-white py-1 px-8">+ Add Task</nuxt-link>
      <!-- <button
              v-if="selected_data.length > 0"
              @click.prevent="delete_multiple()"
              class="btn btn-success">Delete Selected ( {{ selected_data.length }} )</button> -->

    </div>





    <div class="flex items-center justify-center py-12 lg:px-4 sm:px-6 mb-20 ">
      <div class="w-5/6 lg:w-11/12 flex flex-wrap flex-col-reverse lg:flex-row ">

        <div class="w-full p-3 mb-10 border-2 border-dashed rounded-sm border-green-400 -ml-2 mr-2">
          <div>

            <h2 class="my-4 flex items-center font-bold text-center"><img class=" mx-auto" src="~/assets/img/carousel-img-2.png" alt="fish"></h2>


            <table class="table-auto taskList">
              <thead class="bg-green-200 ">
                <tr>
                  <th>
                    <!-- <input type="checkbox" name="" id=""> -->
                    <input type="checkbox" @change.prevent="check_all()" id="check_all" class="form-check" >
                  </th>
                  <th>#</th>
                  <!-- <th>Image</th> -->
                  <th>Title</th>
                  <th>Description</th>
                  <th>endDate</th>
                  <th class="text-center col-span-3">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody class="bg-green-50 p-2 ">
                <tr  v-for="(book, index) in task_list" :key="book.id" class="border border-b border-green-200 ">
                  <td class="table-td">
                    <input v-if="selected_data.includes(book.id)" checked type="checkbox" @change="add_to_selected(book.id)" class="form-check" >
                    <input v-else type="checkbox" @change="add_to_selected(book.id)" class="form-check" >
                  </td>
                  <td class="table-td">{{ book.id }}</td>
                  <td class="table-td pl-2">{{ book.title }}</td>
                  <td class="table-td py-1 border-l border-green-200 px-2 ">{{ book.dec }}</td>
                  <td class="table-td">{{ book.c_date }}</td>
                  <td>
                    <div class="flex my-1 lg:justify-between px-2">
                      <!-- <a href="#" v-if="book.success_task" class="btn-success mx-1 ">Done</a> -->

                      <nuxt-link to="/backend/taskEdit" class="bg-blue-600 py-1 px-2 rounded text-center text-yellow-50 ">Done</nuxt-link>
                      <!-- <a href="#" v-else @click.prevent="success_task(book)" class="btn-primary mx-1">Not done yet</a> -->
                      <!-- <nuxt-link to="/backend/taskEdit">Not done yet</nuxt-link> -->

                      <!-- <router-link :to="{name: 'taskEdit', params:{id: book.id}}" class="btn-warning mx-1"> Edit</router-link> -->
                      <nuxt-link to="/backend/taskEdit" class="bg-yellow-600 py-1 px-2 mx-2 rounded text-center text-white ">Edit</nuxt-link>
                      <form-button @click.prevent="delete_book(book,index)" class="bg-red-600 text-white " :loading="loading">Delete</form-button>
                    </div>
                  </td>
                </tr>

              </tbody>


              <!-- <div v-for="task in task_list" :key="task.id">
                <p>tavni {{ task.title }}</p>
              </div> -->

              <!-- <tbody>
                <tr v-for="(book, index) in task_list.data" :key="book.id">

                   click | focus | change -->
              <!-- <td>
                    <input v-if="selected_data.includes(book.id)" checked type="checkbox" @change="add_to_selected(book.id)" class="form-check" >
                    <input v-else type="checkbox" @change="add_to_selected(book.id)" class="form-check" >
                  </td>

                  <td>{{ book.id }}</td> -->
              <!-- <td>
                    <img
                      v-if="book.image.split('/')[0] === 'upload'"
                      :src="`${get_server_url}/${book.image}`"
                      style="height: 70px"
                      alt="image"
                    />
                    <img
                      v-else
                      :src="`http://${book.image}`"
                      style="height: 70px"
                      alt="image"
                    />
                  </td> -->
              <!-- <td>{{ book.title }}</td>
                  <td>{{ book.dec }}</td>
                  <td>{{ book.c_date }}</td>
                  <td>
                    <div class="d-flex justify-content-end">
                      <a href="#" v-if="book.success_task" class="btn btn-sm btn-success mx-1 "><i class="fa fa-check" aria-hidden="true"></i> Done</a>
					  <a href="#" v-else @click.prevent="success_task(book)" class="btn btn-sm btn-primary mx-1"><i class="fa fa-question" aria-hidden="true"></i> Not done yet</a>

                      <router-link :to="{name: 'taskEdit', params:{id: book.id}}" class="btn btn-sm btn-warning mx-1"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</router-link>
                      <p @click.prevent="delete_book(book,index)" class="btn btn-sm btn-danger mx-1"><i class="fa fa-trash" aria-hidden="true"></i> Delete</p>
                    </div>
                  </td>
                </tr>
              </tbody> -->


            </table>

          </div>

        </div>


      </div>
    </div>

    <!-- <Pagination v-model="page" :records="total" :per-page="per_page" @paginate="getData" /> -->
    <!-- <pagination v-model="page" :options="pagination_option" :records="total" :per-page="per_page" @paginate="getData" /> -->
    <img class=" text-center mx-auto" src="~/assets/img/vegetable-collection.png" alt="Phone">
    <!-- Show Task List Start now -->

    <ContactInfo />
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
  import form from '../mixins/form';
  import Input from '../../components/Form/Input.vue';
  export default {
    // middleware: ['auth'],
    middleware: 'auth',
    layout: 'backend',
    head: {
      title: "Show Task List",
    },
    components: { Input },
    mixins: [form],

    data() {
      return {
        task_list: {},
        data: '',
        search_key: '',
        selected_data: [],
        form: {
          email: "",
          password: "",
        },
        errors: {},
        loading: false,
      };
    },
    // computed: {
    // ...mapGetters(),
    // },

    // async fetch() {
    //   const res = await this.$axios.$get('/api/user/task-list')
    //   this.data = res.data
    //   // console.log( this.data );
    // },

    created: function(){
      this.getData();
    },

    methods: {
      async getData() {
        let r = await this.$axios.$get('/api/user/task-list')
        this.task_list = r.data;
        // console.log(this.task_list);
      },



    async delete_book(book,index) {
      let con = confirm('Sure want to delete??');
      if(con) {
         await this.$axios.$post('/api/user/delete', {id: book.id})
          // this.task_list.data.splice(index,1);
          this.getData(); // for show only 5 data
          // toast massage show
          this.$store.commit("toaster/fire", {
            text: "Successfully Delete.",
            type: "error",
          });
      }
      // console.log(index);

      // try {
      //     this.loading = true;
      //     const res = await this.$axios.$post('/api/user/delete', {id: book.id})
      //     // this.task_list.data.splice(index,1);
      //     this.getData(); // for show only 5 data
      //     this.loading = false;

      //     // toast massage show
      //     this.$store.commit("toaster/fire", {
      //       text: "Successfully Delete.",
      //     });

      // } catch (e) {
      //     this.$store.commit("toaster/fire", {
      //       text: e.response.data.message,
      //       type: "error",
      //     });

      //     this.errors = e.response.data?.errors || {};
      //     this.loading = false;

      // }

    },

    // delete_book: function(book,index) {
    //   let con = confirm('Sure want to delete??');
    //   console.log(index);
    //   if(con){
    //     window.axios.post('/task/delete', {id: book.id})
    //     .then(res=>{
    //       console.log(res.data);
    //       // this.task_list.data.splice(index,1);
    //       this.getData(); // for show only 10 data
    //     })
    //   }
    // },





    add_to_selected: function(id) {
      this.selected_data.includes(id)
      ?
       this.selected_data = this.selected_data.filter(item=>item!=id)
      :
      this.selected_data.push(id);
      console.log(this.selected_data);
    },
    check_all(){
      this.task_list.map(item=>{

        this.selected_data.includes(item.id)
        ?
        this.selected_data = this.selected_data.filter(item2=>item2!=item.id)
        :
        this.selected_data.push(item.id);

        return 0;
        // return this.selected_data.push(item.id);
      })
    },

    async delete_multiple(){

      let con = confirm('Are you Sure want to delete all selected item ??');
      if(con) {
        this.loading = true;
         await this.$axios.$post('/api/user/delete-multi', { ids: this.selected_data })
          this.selected_data = [];
          // this.task_list.data.splice(index,1);
          this.getData(); // for show only 5 data

          this.loading = false;
          // toast massage show
          // ('#check_all').prop('checked',false);

          this.$store.commit("toaster/fire", {
            text: "All Selected item Deleted.",
            type: "error",
          });
      }




      // let con = confirm('Sure want to delete??');
      // // console.log(index);
      // if(con){
      //   window.axios.post('/task/delete-multi', { ids: this.selected_data })
      //   .then((res)=>{
      //     console.log(res.data);
      //     this.selected_data = [];
      //     // this.task_list.data.splice(index,1);
      //     this.getData(); // for show only 10 data
      //     window.$('#check_all').prop('checked',false);
      //   })
      // }

    },

    search(key){
      // console.log(key);
      this.search_key = key;
      this.getData();
    },

    success_task: function (book) {
  			let con = confirm('sure');
  			con &&
  			window.axios.post(`/task/success-task`, {id: book.id})
  			.then((res) => {
  				console.log(res.data);
  				book.success_task = 1;
  		  });
  	  }

    },
      // onMounted(async()=> {});

    // methods: {
    //   // From submit async await
    //   async handleShow(){
    //   try {
    //   this.task_list = await this.$axios.get('/api/user/task-list', this.task_list)

    //       // this.task_list  = res.data;

    //   //  .then((res) =>{
    //   //     // this.task_list = response.data;
    //   //     this.task_list  = res.data;
    //   //   })
    //    console.log(this.task_list);

    //   } catch  (e) {
    //       // console.log(e.response.data);

    //       // toast massage show

    //       this.$store.commit("toaster/fire", {
    //         text: e.response.data.message,
    //         type: "error",
    //       });

    //       this.errors = e.response.data?.errors || {};
    //       this.loading = false;

    //     }
    //   }
    // }
  };





  //   data: function(){
  //   return{
  //     task_list: {},
  //     page: 1,
  //     per_page: 0,
  //     total: 0,
  //     pagination_option: {
  //       edgeNavigation: true,
  //     },
  //     search_key: '',

  //     selected_data: [],
  //   }
  // },

</script>

<style scoped>
button.flex.capitalize.bg-red-600 {
    background: #ad0101;
}
.table-td{
  @apply py-1 border-l border-green-200 px-1
}
</style>
