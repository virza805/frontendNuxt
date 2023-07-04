<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
  -->
  <div id="component-to-pdf" class="min-h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

    <div class="max-w-md w-full space-y-8">
      <div>
        <Tanvir />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-yellow-600">View Invoice</h2>
        <p class="mt-2 flex justify-between">
          <nuxt-link to="/Backend/showOrder" class=" bg-green-500 text-white py-1 px-8">Go Back</nuxt-link>
          <button @click="downloadPDF" class=" bg-green-500 text-white py-1 px-8">Download PDF</button>
          <!-- {{ invoice }} -->
        </p>
        <br>
        <br>
      </div>
      

    </div>
    
    <div>
        <table class="order-details">
            <thead>
                <tr>
                    <th width="50%" colspan="2">
                        <span>Invoice Id: #{{ invoice.id }}</span> <br>
                        <span>Date: {{ new Date(invoice.created_at).toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short', hour12: true }) }}</span> <br>
                        <span>User : {{ role }}</span> <br>
                        <span>Address: {{ invoice.address }}</span> <br>
                    </th>
                    <th width="50%" colspan="2" class="text-end company-data">
                      <img class="mx-auto h-12 w-auto" src="~/assets/img/virzaOk.gif" alt="Workflow" />
                        <h2 class="text-start">Bengold Ecommerce</h2>
                    </th>
                </tr>
                <tr class="bg-blue">
                    <th width="50%" colspan="2">Order Details</th>
                    <th width="50%" colspan="2">User Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Order Id:</td>
                    <td>{{ invoice.id }}</td>

                    <td>Full Name:</td>
                    <td>{{ invoice.user_id }} {{ invoice.name }}</td>
                </tr>
                <tr>
                    <td>Tracking Id/No.:</td>
                    <td>{{ invoice.transaction_id}}</td>

                    <td>Email Id:</td>
                    <td>{{ invoice.email }}</td>
                </tr>
                <tr>
                    <td>Ordered Date:</td>
                    <td>
                      {{ new Date(invoice.created_at).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short', hour12: true }) }}

                    </td>

                    <td>Phone:</td>
                    <td>8889997775</td>
                </tr>
                <tr>
                    <td>Payment Mode:</td>
                    <td>{{ invoice.payment_method }}</td>

                    <td>Address:</td>
                    <td>{{ invoice.address }}</td>
                </tr>
                <tr>
                    <td>Order Status:</td>
                    <td>{{ invoice.status }}</td>

                    <td>User:</td>
                    <td>{{ role }}</td>
                </tr>
            </tbody>
        </table>

        <table>
            <thead>
                <tr>
                    <th class="no-border text-start heading" colspan="5">
                        Order Items
                    </th>
                </tr>
                <tr class="bg-blue">
                    <th>ID</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody v-if="invoice.cart_product">
              <tr v-for="item in JSON.parse(invoice.cart_product)" :key="item.id">
                <td width="10%">{{ item.id }}</td>
                        
                <td width="15%" class="border px-4 py-2">
                  <img v-if="item.image" :src="'http://127.0.0.1:8000/storage/uploads/' + item.image" :alt="item.image" width="100">
                  <!-- <img v-if="item.image" :src="`${$config.apiBaseUrl}/storage/uploads/${item.image}`" :alt="item.image" width="100"> -->

                  <img v-else src="~/assets/img/fresh-fruit.png" width="50" alt="">
                </td>

                <td width="30%">{{ item.name }}</td>
                <td width="10%">${{ item.price }}</td>
                <td width="10%">{{ item.quantity }}</td>
                <td width="15%" class="fw-bold">${{ item.price*item.quantity }}</td>
              </tr>
              <tr>
                <td colspan="5" class="total-heading">Total Amount - <small>Inc. all vat/tax</small> :</td>
                <td colspan="1" class="total-heading">${{ invoice.totall_price }}</td>
              </tr>
            </tbody>
        </table>

        <br>
        <p class="text-center">
            Thank your for shopping with Bangole Shop.
        </p>
    </div>

  </div>
</template>

<script>

import form from '../mixins/form';
import Input from '../../components/Form/Input.vue';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


export default {
    // middleware: ['auth'],

    middleware: 'auth',
    layout: 'backend',
    head: {
        name: "Invoice",
    },
    components: { Input },
    mixins: [form],

    data() {
      return{
        invoice:{},
        errors: {},
        loading: false,
        role: ""
      };
    },

    methods: {
      // From submit async await
      downloadPDF() {
        // Get the HTML element for the component
        const element = document.getElementById('component-to-pdf');

        // Create a canvas from the element's HTML content
        html2canvas(element).then((canvas) => {
          // Create a new PDF document
          const pdf = new jsPDF();

          // Add the canvas image as a page to the PDF
          pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), 0);

          // Save the PDF
          pdf.save('Invoice_'+this.invoice.id+'_OrderStatus_'+this.invoice.status+'.pdf');
        });
      },

      async getEditTask(){
        let editTaskId = this.$route.query.id;
        let editData = await this.$axios.$get('/api/user/order/show/'+editTaskId)
        this.invoice = editData;
        if(editData.role===1){
          this.role ='Super Admin';
        }else if(editData.role===2){
          this.role ='Admin';
        }else if(editData.role===3){
          this.role ='Manager';
        } else {
          this.role ='Customer';
        }

      },


    },

    mounted() {
      this.getEditTask();
    },
};
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 0px !important;
}
table thead th {
    height: 28px;
    text-align: left;
    font-size: 16px;
    font-family: sans-serif;
}
table, th, td {
    border: 1px solid #ddd;
    padding: 8px;
    font-size: 14px;
}

.heading {
    font-size: 24px;
    margin-top: 12px;
    margin-bottom: 12px;
    font-family: sans-serif;
}
.small-heading {
    font-size: 18px;
    font-family: sans-serif;
}
.total-heading {
    font-size: 18px;
    font-weight: 700;
    font-family: sans-serif;
}
.order-details tbody tr td:nth-child(1) {
    width: 20%;
}
.order-details tbody tr td:nth-child(3) {
    width: 20%;
}

.text-start {
    text-align: left;
}
.text-end {
    text-align: right;
}
.text-center {
    text-align: center;
}
.company-data span {
    margin-bottom: 4px;
    display: inline-block;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 400;
}
.no-border {
    border: 1px solid #fff !important;
}
.bg-blue {
    background-color: #414ab1;
    color: #fff;
}
</style>

