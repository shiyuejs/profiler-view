export const pagination = {
  data () {
    return {
      pagination: {
        pageIndex: 1,
        pageSizes: [10, 20, 30, 40, 50],
        pageSize: 10,
        layout: 'total, sizes, prev, pager, next, jumper',
        total: 0
      }
    }
  },
  methods: {
    handleSizeChange (val) {
      this.pagination.pageSize = val;
      this.getTableData();
    },
    handleCurrentChange (val) {
      this.pagination.pageIndex = val;
      this.getTableData();
    }
  }
}
