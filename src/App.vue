<template>
  <div id="app">
    <header-area></header-area>
    <content-area></content-area>
    <div class="grid">

    </div>
  </div>
</template>

<script>
import HeaderArea from './components/HeaderArea';
import ContentArea from './components/ContentArea';

export default {
  components: {
    HeaderArea, ContentArea,
  },
};
</script>

<style>
  @import 'https://fonts.googleapis.com/css?family=Roboto:100,400,900';
  @import 'https://fonts.googleapis.com/css?family=Open+Sans';

  html, body {
    font-family: 'Roboto', sans-serif;
    margin: auto;
    background-color: white;
  }
  .main-title {
    margin-top: 0px;
  }
  p {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #444;
  }
  hr {
    border: none;
    border-bottom: 2px solid #dbedf8;
  }
  .article {
    margin-right: 20px;
  }

  a {
    color: #0d5cc7;
    font-size: 14px;
    text-decoration: none;
  }

  table {
    display: table;
    border-collapse: separate;
    border-top: 1px solid #dbedf8;
    border-left: 1px solid #dbedf8;
    border-spacing: 0;
    margin: 1.875em 0;
    width: 100%;
  }
  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }
  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
  th {
    padding: 15px;
    border-right: 1px solid #dbedf8;
    border-bottom: 1px solid #dbedf8;
    vertical-align: top;
    background: #EFF5FA;
    text-align: left;
  }
  td {
    padding: 15px;
    border-right: 1px solid #dbedf8;
    border-bottom: 1px solid #dbedf8;
    vertical-align: top;
  }
  code {
    background: #F8F8F8;
    padding: 5px 10px;
  }
</style>
