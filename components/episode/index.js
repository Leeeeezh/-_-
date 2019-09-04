// components/episode/index.js
Component({
  properties: {
    _index: {
      type: Number,
      observer: function(newVal, oldVal){
        let val = newVal < 10 ? '0' + newVal : newVal
        this.setData({
          index: val
        })
      }
    }
  },
  data: {
    year: 2019,
    month: 1,
    index: 1
  },
  attached: function(){
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    month = month > 9 ? month : ('0' + (month+1))
    this.setData({
      year,
      month: month
    })
  },
  methods: {

  }
})